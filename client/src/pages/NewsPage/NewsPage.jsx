import React from 'react'
import './NewsPage.css'
import MainImage from '../../assets/imgs/NewsPageMainImage.png'
import NewsSection from '../../components/sections/NewsSection/NewsSection.jsx'
import FAQs from '../../components/FAQs/FAQs.jsx'  
import twitter from '../../assets/icons/twitter.png'
import facebook from '../../assets/icons/facebook.png'
import instagram from '../../assets/icons/instagram.png'
import linkedin from '../../assets/icons/linkedin.png'
import CompleteYourProfile from '../../components/shared/adcards/CompleteYourProfile/CompleteYourProfile.jsx'

export default function NewsPage({NewsArticles= NewsData}) {
  return (
    <div className="NewsPage">
        <div className="MainSection">
        <div className="MainImage">
            <img src={MainImage} alt="" />
        </div>
        <div className="NewsArticleSection">
            <p className="ArticleSectionHeading"></p>
            {NewsArticles.map((news) => (
                <div key={news.id} style={{ marginBottom: "20px", padding: "10px", maxWidth: "830px" }}>
                    <p style={{fontWeight:"bold", fontSize:"1.2em", marginBottom:"1em"}}>{news.heading}</p>
                    <p>{news.body.split("\n").map((line, index) => <span key={index}>{line}<br/></span>)}</p>
                </div>
            ))}
        </div>
        </div>

            <div className="NewsPage-NewsCardSection">
                <NewsSection/>
            </div>

            <div className="FAQsSection">
                <div style={{width:"380px",justifySelf:"center"}}>
                    <div style={{gridArea:"A"}}>
                <CompleteYourProfile/>
                </div>
                </div>
                <div className="social-handles">
                          <div className="text">
                            <b>Also Follow Us On</b>
                            <p>Follow us on social media for the latest health tips, wellness trends, and updates about our services. </p>
                          </div>
                          <div className="handles">
                            <a href=""><img src={twitter} alt="" /></a>
                            <a href=""><img src={facebook} alt="" /></a>
                            <a href=""><img src={instagram} alt="" /></a>
                            <a href=""><img src={linkedin} alt="" /></a>
                          </div>
                        </div>
                        <div  style={{gridArea:"C"}}>
                            <FAQs></FAQs>
                        </div>
            </div>
    </div>
  )
}

const NewsData = [
    {
      id: 1,
      heading: "Tech Giant Unveils AI Breakthrough",
      body: "A leading tech company has announced a major AI breakthrough. The new model promises faster and more accurate predictions. Experts say this could redefine artificial intelligence. Industry leaders are closely monitoring its impact."
    },
    {
      id: 2,
      heading: "Global Markets See Major Upswing",
      body: "Stock markets worldwide surged after a positive economic report. Investors reacted strongly to the latest GDP growth data. Tech and finance sectors led the rally in major indices. Analysts expect continued gains in the coming weeks."
    },
    {
      id: 3,
      heading: "New Medical Breakthrough in Cancer Treatment",
      body: "Scientists have developed a promising new cancer therapy. Early trials show significant improvement in patient recovery. Researchers believe it could be a game-changer for oncology. The treatment is expected to enter clinical trials soon."
    },
    {
      id: 4,
      heading: "Major Sports Event Draws Record Audience",
      body: "The championship final broke all previous viewership records. Millions tuned in to watch the thrilling last-minute finish. Fans celebrated as their favorite team secured victory. Organizers hailed it as the most successful event ever."
    },
    {
      id: 5,
      heading: "Space Agency Plans Manned Mission to Mars",
      body: "NASA has announced an ambitious plan to send humans to Mars. The mission aims to explore possibilities of future colonization. Astronauts will conduct experiments on the planet's surface. Launch preparations are already underway for the next decade."
    },
    {
      id: 6,
      heading: "Breakthrough in Renewable Energy Achieved",
      body: "Scientists have discovered a more efficient way to store solar energy. This innovation could make renewable power more accessible. Governments are considering large-scale adoption of the tech. Experts say it could significantly reduce carbon emissions."
    },
    {
      id: 7,
      heading: "Hollywood Blockbuster Smashes Box Office Records",
      body: "A newly released film has become the highest-grossing movie ever. Audiences flocked to theaters for its stunning visuals and story. Critics have praised it for its groundbreaking cinematography. Industry insiders predict a wave of similar productions soon."
    },
    {
      id: 8,
      heading: "Breakthrough in Quantum Computing Announced",
      body: "Researchers have developed a more stable quantum processor. This could lead to unprecedented advancements in computing power. Companies are investing heavily in quantum research projects. The technology is expected to revolutionize multiple industries."
    },
    {
      id: 9,
      heading: "Major Cyberattack Targets Government Networks",
      body: "Hackers launched a large-scale cyberattack on government systems. Authorities are investigating the source and extent of the breach. Experts warn of increasing cyber threats in critical infrastructure. Security agencies have heightened their defenses against future attacks."
    },
    {
      id: 10,
      heading: "Environmentalists Rally for Climate Action",
      body: "Activists staged a massive protest demanding urgent climate reforms. They called for stricter laws to reduce global carbon emissions. Political leaders responded with promises of green initiatives. Environmental groups continue to push for faster action."
    }
];
