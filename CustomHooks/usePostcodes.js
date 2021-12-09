import { getLocation } from "../utils/apiRequests";
import React, { useState, useEffect } from "react";

const usePostcodes = (postcode) => {
  // const [location, setLocation] = useState([]);

    getLocation(postcode).then((res) => {
      const parsedRes = JSON.parse(res);
      const locationObj=
        {
            id: singleObj._id,
            name: singleObj.title,
            price: singleObj.price,
            spaceRating: singleObj.spaceRating,
            size: singleObj.size,
            latitude: parsedRes.latitude,
            longitude: parsedRes.longitude,
        },
    
    });
};

export default usePostcodes;




getLocation(singleObj.location.postcode).then((res) => {
    const parsedRes = JSON.parse(res);
    const locObj = {
      
    };
    setLocation((prev) => {
      let newLocation = [...prev, locObj];
      console.log(newLocation, "<<<<<<newLocation");
      return newLocation;
    });
    //   console.log(location, "<<<<<<<<<<<<<<outside of the map--- location");
  });