import React from 'react'
import './NewsPage.css'
import NewsSection from '../../components/sections/NewsSection/NewsSection'
import FAQs from '../../components/FAQs/FAQs.jsx'
import searchIcon from '../../assets/icons/search-normal.png'
import Pagination from '../../components/shared/Pagination/Pagination.jsx'
import DummyImage from '../../assets/imgs/NewsCardLady.png'

const newsData = [
    {
      image: DummyImage,
      head: '5 Easy Steps to Boost Your Immunity Naturally',
      body: 'Discover simple yet effective ways to strengthen your immune system...',
      date: '12 September 2025',
    },
    {
      image: DummyImage,
      head: 'Another News Title',
      body: 'Another news body content...',
      date: '13 September 2025',
    },
    {
      image: DummyImage,
      head: 'Tech Trends to Watch in 2025',
      body: 'Stay ahead with the latest trends in the tech world...',
      date: '14 September 2025',
    },
    {
      image: DummyImage,
      head: 'How to Stay Healthy During Winter',
      body: 'Helpful tips for maintaining your health throughout the cold season...',
      date: '15 September 2025',
    },
    {
      image: DummyImage,
      head: 'Top 10 Travel Destinations for 2025',
      body: 'Discover the best places to visit next year...',
      date: '16 September 2025',
    },
    {
      image: DummyImage,
      head: 'Exploring the Future of Renewable Energy',
      body: 'What the future holds for sustainable energy solutions...',
      date: '17 September 2025',
    },
    {
      image: DummyImage,
      head: 'Mindfulness Practices to Improve Your Mental Health',
      body: 'Learn how mindfulness can have a profound impact on your well-being...',
      date: '18 September 2025',
    },
    {
      image: DummyImage,
      head: 'How AI is Changing the Job Market',
      body: 'Artificial Intelligence is transforming careers across industries...',
      date: '19 September 2025',
    },
    {
      image: DummyImage,
      head: 'The Best Fitness Routines for Busy People',
      body: 'Quick and effective exercises for people with tight schedules...',
      date: '20 September 2025',
    },
    {
      image: DummyImage,
      head: '10 Simple Tips for a Greener Lifestyle',
      body: 'Small changes that make a big difference for the planet...',
      date: '21 September 2025',
    },
    {
      image: DummyImage,
      head: 'Understanding Cryptocurrency: A Beginner’s Guide',
      body: 'A comprehensive guide to get you started with crypto...',
      date: '22 September 2025',
    },
    {
      image: DummyImage,
      head: 'Innovative Startups You Should Know About',
      body: 'The most exciting new businesses shaking up the market...',
      date: '23 September 2025',
    },
    {
      image: DummyImage,
      head: 'How to Build a Sustainable Wardrobe',
      body: 'Eco-friendly fashion tips to help you create a stylish, sustainable closet...',
      date: '24 September 2025',
    },
    {
      image: DummyImage,
      head: 'The Rise of E-Sports and Online Gaming',
      body: 'A closer look at the booming industry of e-sports and its future...',
      date: '25 September 2025',
    },
    {
      image: DummyImage,
      head: 'Healthy Recipes for Busy Weekdays',
      body: 'Quick and nutritious meals for your hectic schedule...',
      date: '26 September 2025',
    },
  ];


export default function NewsPage({News=newsData}) {
  return (
    <div className="NewsPage">
        <div className="SearchSection">
            <div className="NewsPage-Heading">
                    <h1>We’ve Got It All Covered for You</h1>
                    <p>Stay informed and up-to-date with the latest news and developments in healthcare! At CuraLink, we provide both patients and doctors with curated news articles, tips, and updates to ensure you’re always in the loop.</p>
                    <div className="Search-bar">
                        <input type="text" placeholder='Search for News'/>
                        <button classname="SearchIcon"><img  src={searchIcon} alt="" /></button>
                    </div>
            </div>
        </div>
        <div className="NewsSectionWrapper">
            <NewsSection NewsContent={News}/>
        </div>
        <div className="FAQsSection">
            <FAQs/>
        </div>
    </div>
  )
}
