import React from 'react'
import personLeftLeg from '../../../../assets/graphics/newsletterPerson/person-left-leg.png';
import person from '../../../../assets/graphics/newsletterPerson/person.png';
import collection1 from '../../../../assets/graphics/newsletterPerson/collection-1.png';
import collection2  from '../../../../assets/graphics/newsletterPerson/collection-2.png';
import './NewsletterPerson.css';
export default function NewsletterPerson() {
  return (
    <div className='NewsletterPerson'>
        <img src={personLeftLeg} alt="" className='person-left-leg' />
        <img src={person} alt="" className='person'/>
        <img src={collection1} alt="" className='collection-1' />
        <img src={collection2} alt="" className='collection-2' />
    </div>
  )
}
