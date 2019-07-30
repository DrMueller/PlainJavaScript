import $ from 'jquery';

import { Individual } from '../../models/individual';

function fetchIndividuals() {
    $('p').css({ color: 'red' });

    const indClass = $('.individual');
    const individuals = [
        new Individual('Matthias', 'Müller', new Date(1986, 12, 29)),
        new Individual('Matthias2', 'Müller2', new Date(1987, 1, 15))
    ];

    individuals.forEach(ind => {
        const p = document.createElement('p');
        ind.addDaysToBirthday(5);
        p.innerText = ind.fullName + ' ' + ind.birthdate;

        indClass.append(p);
    });

    const productsElement = $('.products');
    var req = new XMLHttpRequest();
    req.addEventListener("load", function () {
        const responseObj = JSON.parse(req.response);
        responseObj.products.forEach(product => {
            const p = document.createElement('p');
            p.innerText = product.name + ': ' + product.product_url;
            productsElement.append(p);
        });
    });

    req.open("GET", "https://api.predic8.de/shop/products/");
    req.send();
}

$('individuals-overview').ready(() => {
    $('.fetch-individuals').click(fetchIndividuals);
});