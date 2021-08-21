export default function GetGifs({ keywordToUse, page = 0 }) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${
    process.env.REACT_APP_UNSPLASH_KEY
  }&q=${keywordToUse})}&limit=20&offset=${page * 20}&rating=g&lang=en`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif) => {
        const { images, title, id, username, type, trending_datetime } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url, username, type, trending_datetime };
      });
      return gifs;
    });
}
