import Notiflix from 'notiflix';

const error = document.querySelector('.error');
const loader = document.querySelector('.loader');

export function fetchBreeds() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const api_key = 'live_CfUEUbar2MwPD47SvqDfo9PVpN3hRTiWAMUF1t29vmGbtdiH7Gqy7GAJcGBgHtng';

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
    const api_key = 'live_CfUEUbar2MwPD47SvqDfo9PVpN3hRTiWAMUF1t29vmGbtdiH7Gqy7GAJcGBgHtng';

    return fetch(`${url}?breed_ids=${breedId}&api_key=${api_key}`).then(resp => {
        if (!resp.ok) {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            throw new Error(resp.statusText);
        }
        
        return resp.json();
    })
}







// // export async function fetchBreeds() {
// //     // const API_KEY = 'live_GXD2CmiFNFcaFJijyGHVyvPlsG57aPxHPkwajMxZO5Um5wSlVWpngkQ9CCMSkJcV'
// //     const url = 'https://api.thecatapi.com/v1/breeds';
// //     try {
// //         const response = await fetch(url);
// //         const data = await response.json();
// //         return data.map(breed => ({ id: breed.id, name: breed.name }));
// //     } catch (error) {
// //         console.error('Error fetching mreeds:', error);
// //         throw error;
// //     };
// //     export async function fetchBreeds() {
// //   const url = 'https://api.thecatapi.com/v1/breeds';
// //   try {
// //     const response = await fetch(url);
// //     const data = await response.json();
// //     const breeds = data.map(breed => ({ id: breed.id, name: breed.name }));
// //     return breeds;
// //   } catch (error) {
// //     console.error('Error fetching breeds:', error);
// //     throw error;
// //   }
// // }
// // };


// // cat-api.js
// export function fetchBreeds() {
//   return fetch('https://api.thecatapi.com/v1/breeds')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch breed list.');
//       }
//       return response.json();
//     })
//     .then(data => {
//       return data.map(breed => ({
//         id: breed.id,
//         name: breed.name
//       }));
//     });
// }

// export function fetchCatByBreed(breedId) {
//   const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Failed to fetch cat information.');
//       }
//       return response.json();
//     })
//     .then(data => {
//       return data[0];
//     })
//     .catch(error => {
//       throw error;
//     });
// }
