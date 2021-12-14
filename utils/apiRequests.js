import axios from "axios";

const makespaceApi = axios.create({
  baseURL: "https://make-space.herokuapp.com/api",
});

const postcodesApi = axios.create({
  baseURL: "https://api.postcodes.io/postcodes/",
});

export const getAllListings = (
  sort,
  WC,
  power,
  accessible,
  indoor,
  outdoor,
  parking,
  kitchen,
  _24HourAccess,
  small,
  medium,
  large,
  order
) => {

  const params = {
    sortby: sort,
    "amenities.WC": WC,
    "amenities.power": power,
    "amenities.accessible": accessible,
    "amenities.indoor": indoor,
    "amenities.outdoor": outdoor,
    "amenities.parking": parking,
    "amenities.kitchen": kitchen,
    "amenities._24HourAccess": _24HourAccess,
    size: [],
    order,
  };
  if (small) params.size.push(small);

  if (medium) params.size.push(medium);

  if (large) params.size.push(large);

  return makespaceApi
    .get("/listings", {
      params,
    })
    .then((res) => {
      return res.data.listings;
    });

};

export const getSingleListingById = (id) => {
    return makespaceApi.get(`/listings/${id}`).then((res) => {
        return res.data;
    });
};

export const patchListingById = (id, updatedListing) => {
    return makespaceApi.patch(`/listings/${id}`, updatedListing).then((res) => {
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
export const postUser = (newUser) => {
  return makespaceApi.post("/users", newUser).then((res) => {
    return res.data;
  });
};

export const getAllUsers = () => {
  return makespaceApi.get("/users").then((res) => {
    return res.data;
  });
};

export const getUserById = (userId) => {
  return makespaceApi.get(`/users/${userId}`).then((res) => {
    return res.data;
  });
};

export const patchUser = (update, userId) => {
  return makespaceApi.patch(`/users/${userId}`, update).then((res) => {
    return res.data;
  });
};

export const getUserByUsername = (username) => {
  return makespaceApi.get(`/users/${username}`).then((res) => {
    return res.data;
  });

};
