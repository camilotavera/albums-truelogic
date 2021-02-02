import axios from "axios";

async function getAlbums() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6"
    );
    return response;
  } catch (e) {
    throw e;
  }
}

export { getAlbums };
