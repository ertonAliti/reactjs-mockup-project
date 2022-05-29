import React, { useEffect, useState } from "react";
import DisplayBreeds from "./DisplayBreeds";
import axios from "axios";

const Breeds = () => {
  
  const [breed, setBreeds] = useState([]);
  const [favBreed, setFavBreed] = useState([]);
  const [limit, setLimit] = useState(4);
  
  const loadMore = () => {
    setLimit(limit + 4);
  };
  
    const apiKey = "2c806c06-7132-4706-9f4a-f957c5c0d1a0";
    const url = "https://api.thecatapi.com/v1/breeds?limit=" + limit;
    const addFavBreedUrl = "https://api.thecatapi.com/v1/favourites";
  
  const getBreeds = () => {
    axios
      .get(url, {
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
        setBreeds(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkIfExist  = () => {
    axios
    .get( addFavBreedUrl ,{
        headers: {
        "x-api-key": apiKey,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        },
    })
    .then((response) => {
        const favBreedId = response.data.map(res => res.image.id);
        setFavBreed(favBreedId);
    })
    .catch((err) => {
        console.log(err);
    });
};

const  addFavBreed = (id) => { 
  if(favBreed.includes(id)){
      console.log('it already exists');
  }else{
      setFavBreed([...favBreed, id]);
      axios.post(addFavBreedUrl,{image_id:id},{
          headers: {
              'x-api-key': apiKey,
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
              'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
          },
          }).then((response)=>{
              // console.log(response.id);
          })
          console.log(favBreed);
  }

}

  useEffect(() => {
    getBreeds();
    checkIfExist();
  }, [limit]);

  return (
    <div className="breeds">
      <DisplayBreeds loadMore={loadMore} addFavBreed={addFavBreed} breed={breed}/>
    </div>
  );
};

export default Breeds;