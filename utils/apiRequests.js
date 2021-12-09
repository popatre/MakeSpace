import axios from "axios";

const makespaceApi = axios.create({
  baseURL: "https://make-space.herokuapp.com/api",
});

const postcodesApi = axios.create({
  baseURL: "https://api.postcodes.io/postcodes/",
});

export const getAllListings = (sort) => {
  return makespaceApi
    .get("/listings", { params: { sortby: sort } })
    .then((res) => {
      console.log(res.data.listings, "<<<res.data");
      return res.data.listings;
    });
};

export const postListing = (newListing) => {
  return makespaceApi.post("/listings", newListing).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const getLocation = (postcode) => {
  return postcodesApi.get(`/${postcode}`).then((res) => {
    //console.log(JSON.stringify(res.data), "<<<<<<<<<<returning location data");
    return JSON.stringify(res.data.result);
  });
};
