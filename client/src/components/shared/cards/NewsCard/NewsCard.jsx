import React from 'react'
import PrimaryButton from '../../buttons/PrimaryButton/PrimaryButton.jsx'
import DummyImage from '../../../../assets/imgs/NewsCardLady.png'
import ArrowRightWhite from '../../../../assets/icons/arrow-right-white.png'
import './NewsCard.css'

const Dummytxt1="5 Easy Steps to Boost Your Immunity Naturally";
const dummytxt2="Discover simple yet effective ways to strengthen your immune system with a balanced diet, regular exercise, and adequate sleep. Learn how small lifestyle changes can make a big difference.";
const dummydate="12 September 2025";

export default function NewsCard({
  image = DummyImage,
  head = Dummytxt1,  
  body = dummytxt2,  
  date = dummydate
})
{
  return (
    <div className = "NewsCard">
      <img className="NewsImage" src={image} alt="NewsImage" />
      <p className = "Heading">{head}</p>
      <p className = "Body">{body}</p>
      <div className="DateAndButton">
        <p className = "Date">{date}</p>
        <div className="ReadMoreButton"><PrimaryButton text="Read More"/></div>
      </div>
    </div>
  )
}
