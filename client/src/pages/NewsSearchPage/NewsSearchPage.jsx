import React, { useState } from 'react';
import './NewsSearchPage.css';
import NewsSection from '../../components/sections/NewsSection/NewsSection.jsx';
import FAQs from '../../components/FAQs/FAQs.jsx';
import searchIcon from '../../assets/icons/search-normal.png';
import Pagination from '../../components/shared/Pagination/Pagination.jsx';
import DummyImage from '../../assets/imgs/NewsCardLady.png';
import BackgroundImageNewsPage from '../../assets/imgs/NewsSearchPage-bg-1368.png'
import BackgroundImageNewsPage2 from '../../assets/imgs/NewsSearchPage-bg-992.png'
import { useSideBarState } from '../../components/contexts/SideBarStateContext.jsx';
import { useEffect } from 'react';
const searchData = [
  'Advancements in AI for Healthcare',
  'New Vaccines Introduced',
  'Telemedicine Growth in 2024',
  'Health and Wellness Trends',
  'Breakthrough in Cancer Treatment',
  'Mental Health Awareness',
  'Nutrition Tips for a Healthier Life',
];


export default function NewsSearchPage({ News, newsTitles = searchData }) { 
  const { setSideBarState } = useSideBarState();
  useEffect(() => {
    setSideBarState('news');
    return () => {
      setSideBarState('');
    }
  }, []);
  const [search, setSearch] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    if (value.length > 0) {
      const filtered = newsTitles.filter((title) =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredNews(filtered);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleSelect = (title) => {
    setSearch(title);
    setShowDropdown(false);
  };

  return (
    <div className="NewsSearchPage">
      <div className="SearchSection">
        <div className="NewsPage-Heading">
          <p className="MainHead">We've Got It All Covered for You</p>
          <p className="HeadingBody">
            Stay informed and up-to-date with the latest news and developments
            in healthcare! At CuraLink, we provide both patients and doctors
            with curated news articles, tips, and updates to ensure you’re
            always in the loop.
          </p>
          <div className="Search-bar">
            <input
              type="text"
              placeholder="Search for News"
              value={search}
              onChange={handleChange}
            />
            <button className="SearchIcon">
              <img src={searchIcon} alt="Search Icon" />
            </button>
            {showDropdown && (
              <ul className="Dropdown">
                {filteredNews.length > 0 ? (
                  filteredNews.map((title, index) => (
                    <li key={index} onClick={() => handleSelect(title)}>
                      {title}
                    </li>
                  ))
                ):(
                  <li className="NoResults">No results found</li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className="NewsSectionWrapper">
        <NewsSection NewsContent={News} />
      </div>
      <div className="FAQsSection">
        <FAQs />
      </div>
    </div>
  );
}