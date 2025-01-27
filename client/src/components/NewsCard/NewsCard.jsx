import React from 'react'
import SecondaryButton from '../../components/shared/buttons/PrimaryButton/PrimaryButton.jsx'
import TopicImage from '../../assets/imgs/NewsCardLady.png'

export default function ({image={Topicimage}}) {
  return (
    <div className='NewsCard'>
        <img src={image} alt="" className="newsimg" />
        <p className="heading"></p>
        <p className="body"></p>
        <p className="date"></p>
        <div className="ReadMore">
            <SecondaryButton />
        </div>
    </div>
  )
}
