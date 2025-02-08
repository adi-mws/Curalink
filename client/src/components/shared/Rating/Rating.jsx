import React from 'react'
import './Rating.css'
import StarRatings from 'react-rating-stars-component'


export default function Rating({rating = 3.5}) {
    if(rating===-1){
        return(
            <div className='Rating'>
                <StarRatings
                count={5}
                value={rating}
                size={30}
                activeColor="#EEC521"
                edit={true}
                isHalf={false}/>
            </div>
        )
    }
    
        return(
            <div className='Rating'>
                <StarRatings
                count={5}
                value={rating}
                size={30}
                activeColor="#EEC521"
                color="#EDEDED"
                edit={false}
                isHalf={true}/>
            </div>
        )
    
  
}
