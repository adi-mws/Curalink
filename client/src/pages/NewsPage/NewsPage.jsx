import React from 'react'
import './NewsPage.css'
import NewsSection from '../../components/sections/NewsSection/NewsSection'
import FAQs from '../../components/FAQs/FAQs.jsx'

export default function NewsPage() {
  return (
    <div className="NewsPage">
        <div className="SearchSection">
            <div className="Heading">
                <h1></h1>
                <p></p>
                <input type="text" />
            </div>
        </div>
        <div className="NewsSectionWrapper">
            <NewsSection/>
        </div>
        <div className="pagination">

        </div>
        <div className="FAQsSection">
            <FAQs/>
        </div>
    </div>
  )
}
