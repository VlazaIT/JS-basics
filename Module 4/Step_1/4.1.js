'use strict';

const search = document.getElementById('search');

search.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.tvmaze.com/search/shows?q=' + input);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            let result = JSON.parse(request.responseText);
            console.log(result);
        } else {
            console.log('Error');
        }

    };
    request.onerror = function () {
        console.log('Error');

    };
    request.send();
});