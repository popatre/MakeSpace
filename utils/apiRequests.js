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
      return res.data.listings;
    });
};

export const getSingleListingById = (id) => {
  return makespaceApi.get(`/listings/${id}`).then((res) => {
    return res.data;
  });
};

export const postListing = (newListing) => {
  return makespaceApi.post("/listings", newListing).then((res) => {
    return res.data;
  });
};

export const getLocation = (postcode) => {
  return postcodesApi.get(`/${postcode}`).then((res) => {
    return res.data.result;
  });
};
