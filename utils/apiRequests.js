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
            console.log();
            // console.log(res.data.listings, "<<<res.data");
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

export const postUser = (newUser) => {
    return makespaceApi.post("/users", newUser).then((res) => {
        console.log(res.data);
        return res.data;
    });
};

export const getAllUsers = () => {
    return makespaceApi.get("/users").then((res) => {
        console.log(res.data);
        return res.data.users;
    });
};
