'use strict';

const search = document.getElementById('search');
search.addEventListener('click', function () {
    const input = document.getElementById('input').value;
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=' + input;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error))
});

