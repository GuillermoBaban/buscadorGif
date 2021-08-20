import { API_KEY } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingGifs() {
  const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=25`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
