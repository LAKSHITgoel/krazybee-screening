import axios from "axios";

export const fetchAllAlbums = async () => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
  console.log("album json", res.data);
  return res.data;
};

export const fetchAlbumDetails = async id => {
  let res = await axios.get(
    `https://jsonplaceholder.typicode.com/photos?albumid=${id}`
  );
  console.log("photos json", { id, data: res.data });
  return { id, data: res.data };
};
