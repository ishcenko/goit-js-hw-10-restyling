import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

// Приховати завантажувач

function hideLoader() {
    loader.style.display = 'none';
}

// Показати завантажувач

function showLoader() {
    loader.style.display = 'block';
}

// Показати повідомлення про помилку

function showError() {
    error.style.display = 'block';
}

// Сховати повідомлення про помилку

function hideError() {
    error.style.display = 'none';
}

// Оновлення інформації про кота в інтерфейсі користувача

function updateCatInfo(cat) {
    const catImage = document.createElement('img');
    catImage.src = cat.url;
    catInfo.innerHTML = '';
    catInfo.appendChild(catImage);

    const catName = document.createElement('h3');
    catName.textContent = cat.breeds[0].name;
    catInfo.appendChild(catName);

    const catDescription = document.createElement('p');
    catDescription.textContent = cat.breeds[0].description;
    catInfo.appendChild(catDescription);

    const catTemperament = document.createElement('p');
    catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
    catInfo.appendChild(catTemperament);
}

// Populate breed select options
function populateBreedsSelect(breeds) {
  breedSelect.innerHTML = '';
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

// Fetch breeds and populate select options
function loadBreeds() {
  showLoader();
  fetchBreeds()
    .then(breeds => {
      populateBreedsSelect(breeds);
      hideLoader();
    })
    .catch(() => {
      hideLoader();
      showError();
    });
}

// Fetch cat information by breed ID
function loadCatByBreed(breedId) {
  showLoader();
  fetchCatByBreed(breedId)
    .then(cat => {
      updateCatInfo(cat);
      hideLoader();
    })
    .catch(() => {
      hideLoader();
      showError();
    });
}

// Event listener for breed select
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  if (selectedBreedId) {
    loadCatByBreed(selectedBreedId);
  } else {
    catInfo.innerHTML = '';
  }
});