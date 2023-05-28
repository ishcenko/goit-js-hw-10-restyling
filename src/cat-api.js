import Notiflix from 'notiflix';

const error = document.querySelector('.error');
const loader = document.querySelector('.loader');

export function fetchBreeds() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const api_key = 'live_GXD2CmiFNFcaFJijyGHVyvPlsG57aPxHPkwajMxZO5Um5wSlVWpngkQ9CCMSkJcV';

    return fetch(`${url}?api_key=${api_key}`).then(resp => {
        if (!resp.ok) {
            loader.style.display = "none";
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw new Error(resp.statusText);
        }

        return resp.json();
    })
};

export function fetchCatByBreed(breedId) {
    const url = 'https://api.thecatapi.com/v1/images/search';
    const api_key = 'live_GXD2CmiFNFcaFJijyGHVyvPlsG57aPxHPkwajMxZO5Um5wSlVWpngkQ9CCMSkJcV';

    return fetch(`${url}?breed_ids=${breedId}&api_key=${api_key}`).then(resp => {
        if (!resp.ok) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw new Error(resp.statusText);
        }
        
        return resp.json();
    })
}