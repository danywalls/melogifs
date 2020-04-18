const key = "fdrhC4K8gCbiL9nGu0MlKblnRYbS3IEW";

export function getGifs({ tag = "teentitans" } = {}) {
  const urlAPI = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${tag}&limit=25&offset=0&rating=G&lang=en`;

  return fetch(urlAPI)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        return data.map((image) => {
          const { id, title, images } = image;
          console.log(image);
          const { url } = images.downsized_still;
          return { id, url, title };
        });
      }
      return [];
    });
}
export function getGifById({ id = "id" } = {}) {
  const urlAPI = `https://api.giphy.com/v1/gifs/${id}?api_key=fdrhC4K8gCbiL9nGu0MlKblnRYbS3IEW`;

  return fetch(urlAPI)
    .then((res) => res.json())
    .then((response) => {
      const { id, title, images } = response.data;
      const { url } = images.downsized_medium;
      return { url, id, title };
    });
}

export default { getGifs, getGifById };
