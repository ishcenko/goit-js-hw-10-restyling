export async function fetchBreeds() {
    // const API_KEY = 'live_GXD2CmiFNFcaFJijyGHVyvPlsG57aPxHPkwajMxZO5Um5wSlVWpngkQ9CCMSkJcV'
    const url = 'https://api.thecatapi.com/v1/breeds';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.map(breed => ({ id: breed.id, name: breed.name }));
    } catch (error) {
        console.error('Error fetching mreeds:', error);
        throw error;
    };
    export async function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  try {
    const response = await fetch(url);
    const data = await response.json();
    const breeds = data.map(breed => ({ id: breed.id, name: breed.name }));
    return breeds;
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
}
};