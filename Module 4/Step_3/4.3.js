'use strict';

const search = document.getElementById('search');

search.addEventListener('click', function () {
    let article= document.getElementById('movie_info');
    article.innerHTML = '';
    const input = document.getElementById('input').value;
    console.log(input);
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.tvmaze.com/search/shows?q=' + input);
    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const result = JSON.parse(request.responseText);
            appendHTML(result);
        } else {
            console.log('Error');
        }

    };
    request.onerror = function () {
        console.log('Error');

    };
    request.send();

    let paragraph1 = document.createElement('p');
    paragraph1.innerText = 'Search results:'
    article.append(paragraph1);
});

function appendHTML(data) {
    console.log(data);
    let div = document.getElementById('movie_info');
    for (let i = 0; i < data.length; i++) {
        let article = document.createElement("article");
        div.appendChild(article);

        let h2 = document.createElement('h2');
        h2.innerText = data[i].show.name;
        article.append(h2);

        let h3 = document.createElement('h3');
        let genre = '';
        for (let ii = 0; ii < data[i].show.genres.length; ii++) {
            if (ii === 0) {
                genre += data[i].show.genres[ii];
            } else {
                genre += ' | ' + data[i].show.genres[ii];
            }
        }
        h3.append(genre);
        article.append(h3);

        let image = document.createElement('img');
        image.alt = 'Picture';
        if (data[i].show.image === null) {
            image.src = 'https://via.placeholder.com/210x295?text=No+Image';
        }
        else {
            image.src = data[i].show.image.medium;
        }
        article.append(image);

        let paragraph2 = document.createElement('paragraph2');
        paragraph2.innerHTML = data[i].show.summary;
        article.append(paragraph2);

        let link = document.createElement('a');
        link.setAttribute('target', "_blank");
        link.href = data[i].show.url;
        link.innerText = 'Link to the original page';
        article.append(link);
    }
}