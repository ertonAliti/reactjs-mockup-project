import React, { useEffect, useState } from "react";
import DisplayFavorites from './DisplayFavorites'
import axios from "axios";


const Favorites = () => {

    const apiKey = "2c806c06-7132-4706-9f4a-f957c5c0d1a0";
    const favBreedUrl = "https://api.thecatapi.com/v1/favourites/";

    const [favorite, setFavorite] = useState([]);
    
    const getFavorite = () => {
      axios
        .get(favBreedUrl, {
          headers: {
            "x-api-key": apiKey,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        })
        .then((response) => {
          // console.log(response);
          setFavorite(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const deleteFav = (id) =>{
      axios
        .delete(favBreedUrl+id, {
          headers: {
            "x-api-key": apiKey,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, OPTIONS, PUT, PATCH, DELETE",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept",
          },
        })
        .then((response) => {
          console.log(response);
          const updateFav = favorite.filter(item => item.id !== id);  
          setFavorite(updateFav);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      getFavorite();
    }, []);
  

  return (
    <DisplayFavorites deleteFav={deleteFav} favorite={favorite}/>
  )
}

export default Favorites