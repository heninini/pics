import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID AOyxm6KVUAxOU5gfcumPK0Ycl-x7Vb4SS-hjW34aI34",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
