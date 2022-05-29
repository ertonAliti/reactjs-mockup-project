import React  from 'react'

import './DisplayBreedsStyle.css';

const DisplayBreeds = ({breed, addFavBreed, loadMore}) => {

    // const addFavBreedUrl = "https://api.thecatapi.com/v1/favourites";
    // const apiKey = "2c806c06-7132-4706-9f4a-f957c5c0d1a0";
    
    // const [favBreed, setFavBreed] = useState([]);
    
    // const checkIfExist  = () => {
    //     axios
    //     .get( addFavBreedUrl ,{
    //         headers: {
    //         "x-api-key": apiKey,
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    //         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    //         },
    //     })
    //     .then((response) => {
    //         const favBreedId = response.data.map(res => res.image.id);
    //         setFavBreed(favBreedId);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // };

    // useEffect(() => {
    //     checkIfExist();
    //   }, []);
    
    // const  addFavBreed = (id) => { 
    //     if(favBreed.includes(id)){
    //         console.log('it already exists');
    //     }else{
    //         setFavBreed([...favBreed, id]);
    //         axios.post(addFavBreedUrl,{image_id:id},{
    //             headers: {
    //                 'x-api-key': apiKey,
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    //                 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    //             },
    //             }).then((response)=>{
    //                 // console.log(response.id);
    //             })
    //             console.log(favBreed);
    //     }

    // }

  return (
      <>
    <div className='oneBreeds'>
        {Array.from(breed).map((breed)=>{
            return (
                <div data-testid='breedid' className='displayBreeds' key={breed.id}>
                    <p>{breed.name}</p>
                    <img className='cardImage' alt={breed.name} src={breed?.image?.url}></img>
                    <button title='btnTitle' className='cardButton' onClick={()=>{addFavBreed(breed?.image?.id)}}>Add to Favorites</button>
                </div>
            )
        })}
    </div>
    <div className='loadmore-section'>
        <button className='loadmore-btn' onClick={()=>{loadMore()}}>Load More</button>
    </div>
    </>
  )
}

export default DisplayBreeds