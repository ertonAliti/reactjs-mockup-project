import React from 'react'
import './DisplayFavoritesStyle.css';

const DisplayFavorites = ({favorite ,deleteFav}) => {
  return (
    <div className='oneFavBreed'>
        {favorite.map((fav)=>{
            return (
                <div className='displayFavorites' key={fav.id}>
                    <img className='cardFavImage' alt={fav.image.id} src={fav.image.url}></img>
                    <button title='btnTitle' className='cardButton-delete' onClick={()=>{deleteFav(fav.id)}}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default DisplayFavorites