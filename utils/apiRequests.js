import axios from "axios";

const makespaceApi = axios.create({
    baseURL: "https://make-space.herokuapp.com/api",
});

export const getAllListings = () => {
    return makespaceApi.get("/listings").then((res) => {
        return res.data.listings;
    });
};
