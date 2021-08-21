const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export default function getTrendingGifs() {
  const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_UNSPLASH_KEY}&limit=10`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs);
}
