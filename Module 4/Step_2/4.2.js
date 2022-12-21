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
            appendHTML(result[0]);
        } else {
            console.log('Error');
        }

    };
    request.onerror = function () {
        console.log('Error');

    };
    request.send();
});

function appendHTML(data) {

    let article = document.getElementById('movie_info');

    let paragraph1 = document.createElement('p');
    paragraph1.innerText = 'Search result:'
    article.append(paragraph1);

    let h2 = document.createElement('h2');
    h2.innerText = data.show.name;
    article.append(h2);

    let image = document.createElement('img');
    image.src = data.show.image.medium;
    image.alt = 'Show picture';
    article.append(image);

    let paragraph2 = document.createElement('p');
    paragraph2.innerHTML = data.show.summary
    article.append(paragraph2);

    let link = document.createElement('a');
    link.setAttribute('target', "_blank");
    link.href = data.show.url;
    link.innerText = 'Link to the original page';
    article.append(link);

}