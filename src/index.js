import { fetchBreeds, fetchCatByBreed } from './cat-api';

const breedSelector = document.querySelector('.breed-select');
const img = document.querySelector('.image');
const catsBreed = document.querySelector('.cats-breed');
const description = document.querySelector('.cats-description');
const temperament = document.querySelector('.cats-temperament');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

fetchBreeds().then(data => {
    loader.style.display = "none";
    breedSelector.style.display = "block";
    const breeds = data.map(({ id, name }) => `<option value="${id}">${name}</option>`).join('');
    breedSelector.insertAdjacentHTML('beforeend', breeds);
}).catch(err => console.log(err));

breedSelector.addEventListener('change', (e) => {
    const breedId = e.target.value;
    loader.style.display = "block";
    catInfo.style.display = "none";
    
    fetchCatByBreed(breedId).then(data => {
        catInfo.style.display = "flex";
        loader.style.display = "none";
        const breed = data[0];
        
        img.src = data[0].url;
        catsBreed.textContent = breed.breeds[0].name;
        description.textContent = breed.breeds[0].description;
        temperament.innerHTML = `<span class="span">Temperament: </span>${breed.breeds[0].temperament}`;
    }).catch(err => console.log(err))
});




// import SlimSelect from 'slim-select';
// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// // Function to display cat information
// function displayCatInfo(cat) {
//   const catInfo = document.querySelector('.cat-info');
//   catInfo.innerHTML = `
//     <img src="${cat.url}" alt="Cat Image" />
//     <p><strong>Breed:</strong> ${cat.breed}</p>
//     <p><strong>Description:</strong> ${cat.description}</p>
//     <p><strong>Temperament:</strong> ${cat.temperament}</p>
//   `;
// }

// // Function to handle breed selection change
// function handleBreedSelectChange() {
//   const breedSelect = document.querySelector('.breed-select');
//   const breedId = breedSelect.value;
//   const loader = document.querySelector('.loader');
//   const catInfo = document.querySelector('.cat-info');
//   loader.style.display = 'inline-block';
//   catInfo.innerHTML = '';

//   fetchCatByBreed(breedId)
//     .then((cat) => {
//       loader.style.display = 'none';
//       displayCatInfo(cat);
//     })
//     .catch((error) => {
//       loader.style.display = 'none';
//       const errorElement = document.querySelector('.error');
//       errorElement.style.display = 'block';
//       console.error(error);
//     });
// }

// // Function to initialize the breed select
// function initializeBreedSelect(breeds) {
//   const breedSelect = document.querySelector('.breed-select');
//   const options = breeds.map((breed) => ({ text: breed.name, value: breed.id }));
//   new SlimSelect({
//     select: breedSelect,
//     data: options,
//     onChange: handleBreedSelectChange,
//   });
// }

// // Fetch breeds and populate the breed select
// fetchBreeds()
//   .then((breeds) => {
//     initializeBreedSelect(breeds);
//   })
//   .catch((error) => {
//     const errorElement = document.querySelector('.error');
//     errorElement.style.display = 'block';
//     console.error(error);
//   });


//   document.addEventListener('DOMContentLoaded', () => {
//   fetchBreeds()
//     .then((breeds) => {
//       initializeBreedSelect(breeds);
//     })
//     .catch((error) => {
//       const errorElement = document.querySelector('.error');
//       errorElement.style.display = 'block';
//       console.error(error);
//     });
// });














// // import { fetchBreeds, fetchCatByBreed } from "./cat-api";

// // const breedSelect = document.querySelector('.breed-select');
// // const loader = document.querySelector('.loader');
// // const error = document.querySelector('.error');
// // const catInfo = document.querySelector('.cat-info');

// // // Приховати завантажувач

// // function hideLoader() {
// //     loader.style.display = 'none';
// // }

// // // Показати завантажувач

// // function showLoader() {
// //     loader.style.display = 'block';
// // }

// // // Показати повідомлення про помилку

// // function showError() {
// //     error.style.display = 'block';
// // }

// // // Сховати повідомлення про помилку

// // function hideError() {
// //     error.style.display = 'none';
// // }

// // // Оновлення інформації про кота в інтерфейсі користувача

// // function updateCatInfo(cat) {
// //     const catImage = document.createElement('img');
// //     catImage.src = cat.url;
// //     catInfo.innerHTML = '';
// //     catInfo.appendChild(catImage);

// //     const catName = document.createElement('h3');
// //     catName.textContent = cat.breeds[0].name;
// //     catInfo.appendChild(catName);

// //     const catDescription = document.createElement('p');
// //     catDescription.textContent = cat.breeds[0].description;
// //     catInfo.appendChild(catDescription);

// //     const catTemperament = document.createElement('p');
// //     catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
// //     catInfo.appendChild(catTemperament);
// // }

// // // Populate breed select options
// // function populateBreedsSelect(breeds) {
// //   breedSelect.innerHTML = '';
// //   breeds.forEach(breed => {
// //     const option = document.createElement('option');
// //     option.value = breed.id;
// //     option.textContent = breed.name;
// //     breedSelect.appendChild(option);
// //   });
// // }

// // // Fetch breeds and populate select options
// // function loadBreeds() {
// //   showLoader();
// //   fetchBreeds()
// //     .then(breeds => {
// //       populateBreedsSelect(breeds);
// //       hideLoader();
// //     })
// //     .catch(() => {
// //       hideLoader();
// //       showError();
// //     });
// // }

// // // Fetch cat information by breed ID
// // function loadCatByBreed(breedId) {
// //   showLoader();
// //   fetchCatByBreed(breedId)
// //     .then(cat => {
// //       updateCatInfo(cat);
// //       hideLoader();
// //     })
// //     .catch(() => {
// //       hideLoader();
// //       showError();
// //     });
// // }

// // // Event listener for breed select
// // breedSelect.addEventListener('change', () => {
// //   const selectedBreedId = breedSelect.value;
// //   if (selectedBreedId) {
// //     loadCatByBreed(selectedBreedId);
// //   } else {
// //     catInfo.innerHTML = '';
// //   }
// // });


// // index.js
// import SlimSelect from 'slim-select';
// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// const breedSelect = document.querySelector('.breed-select');
// const catInfo = document.querySelector('.cat-info');

// fetchBreeds()
//   .then(breeds => {
//     const selectElement = document.querySelector('.breed-select');
//     breeds.forEach(breed => {
//       const option = document.createElement('option');
//       option.value = breed.id;
//       option.textContent = breed.name;
//       selectElement.appendChild(option);
//     });

//     // Initialize SlimSelect after breed options are added
//     new SlimSelect({
//       select: '.breed-select'
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

// breedSelect.addEventListener('change', () => {
//   const selectedBreedId = breedSelect.value;

//   showLoader();

//   fetchCatByBreed(selectedBreedId)
//     .then(data => {
//       hideLoader();
//       showCatInfo(data);
//     })
//     .catch(error => {
//       hideLoader();
//       showError();
//       console.log(error);
//     });
// });

// function showLoader() {
//   const loader = document.querySelector('.loader');
//   loader.style.display = 'block';
// }

// function hideLoader() {
//   const loader = document.querySelector('.loader');
//   loader.style.display = 'none';
// }

// function showError() {
//   const error = document.querySelector('.error');
//   error.style.display = 'block';
// }

// function hideError() {
//   const error = document.querySelector('.error');
//   error.style.display = 'none';
// }

// function showCatInfo(cat) {
//   const { breeds, url } = cat;
//   const breed = breeds[0];

//   const catInfoHTML = `
//     <h2>Cat Information</h2>
//     <p><strong>Breed:</strong> ${breed.name}</p>
//     <p><strong>Description:</strong> ${breed.description}</p>
//     <p><strong>Temperament:</strong> ${breed.temperament}</p>
//     <img src="${url}" alt="Cat Image">
//   `;
//   catInfo.innerHTML = catInfoHTML;
// }
