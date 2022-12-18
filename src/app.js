const allArticles = document.querySelector('#allArticles');

// let html = ''

fetch('http://localhost:8000/')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const item = `<div class="wrapper"><h3>`
            + element.source +
            `</h3><p class="item">`
            + element.title +
            `<img src="${element.img}" alt="">
            <a href = "${element.url}" >Link to article</a></p></div>`
            allArticles.insertAdjacentHTML("beforeend", item)

            // html +=
            // `<div class="wrapper">
            // <p class="item">${element.source}
            // ${element.title}
            // <img src="${element.img}" alt="">
            // ${element.url}
            // </p>
            // </div>`
        });

        // allArticles.innerHTML = html
    })
    .catch(err => {
        console.log(err)
    })