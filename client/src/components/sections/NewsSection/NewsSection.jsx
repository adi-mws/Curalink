import React from 'react';
import{ useState } from 'react';
import './NewsSection.css';
import NewsCard from '../../NewsCard/NewsCard.jsx';
import DummyImage from '../../../assets/imgs/NewsCardLady.png'


export default function NewsSection({ NewsList =  NewsContent}){

  const [start, setStart] = useState(1);
  const [end, setEnd] = useState(4);
  const [currentPage, setPage] = useState(1);

  const handleNext = () => {
    if (end < NewsList.length) {
      const newStart = end + 1;
      const newEnd = Math.min(newStart + 3, NewsList.length);
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const handlePrevious = () => {
    if (start > 1) {
      const newEnd = start - 1;
      const newStart = Math.max(newEnd - 3, 1);
      setStart(newStart);
      setEnd(newEnd);
    }
  };

  const pageNumbers = [];
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    <div className="NewsSection">
      <div className="news-part">
      <NewsSectionSmall NewsData={NewsList} ShowingPage={currentPage}/>
      </div>
      <div className="Pagination">
        <div className="buttons">
        <button className="Previous-button" onClick={handlePrevious} disabled={start === 1}>
          Prev
        </button>

        {pageNumbers.map((page) => (
          <button key={page} style={{ margin: '5px' }} onClick={()=>setPage(page)} className={(currentPage===page) ? "currentPage" : "Page-button"}>
            {page}
          </button>
        ))}
        
        <button className="Next-button" onClick={handleNext} disabled={end === NewsList.length}>
          Next
        </button>
        </div>
      </div>
    </div>
    
    </>
  );
};

function NewsSectionSmall({NewsData, ShowingPage}){

    return(
      <div className="NewsSectionSmall">
      {NewsData[ShowingPage-1].map((news, index) => (
        <NewsCard
          key={index}
          image={news.image}
          head={news.head}
          body={news.body}
          date={news.date}
        />
      ))}
      </div>
    )

}

const NewsContent = [
  [
    {
      "image": DummyImage,
      "head": "5 Easy Steps to Boost Your Immunity Naturally",
      "body": "Discover simple yet effective ways to strengthen your immune system...",
      "date": "12 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Another News Title",
      "body": "Another news body content...",
      "date": "13 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Tech Trends to Watch in 2025",
      "body": "Stay ahead with the latest trends in the tech world...",
      "date": "14 September 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Healthy During Winter",
      "body": "Helpful tips for maintaining your health throughout the cold season...",
      "date": "15 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 10 Travel Destinations for 2025",
      "body": "Discover the best places to visit next year...",
      "date": "16 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring the Future of Renewable Energy",
      "body": "What the future holds for sustainable energy solutions...",
      "date": "17 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Mindfulness Practices to Improve Your Mental Health",
      "body": "Learn how mindfulness can have a profound impact on your well-being...",
      "date": "18 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Best Fitness Routines for Busy People",
      "body": "Quick and effective exercises for people with tight schedules...",
      "date": "20 September 2025"
    },
    {
      "image": DummyImage,
      "head": "10 Simple Tips for a Greener Lifestyle",
      "body": "Small changes that make a big difference for the planet...",
      "date": "21 September 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "Understanding Cryptocurrency: A Beginner’s Guide",
      "body": "A comprehensive guide to get you started with crypto...",
      "date": "22 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Innovative Startups You Should Know About",
      "body": "The most exciting new businesses shaking up the market...",
      "date": "23 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Rise of E-Sports and Online Gaming",
      "body": "A closer look at the booming industry of e-sports and its future...",
      "date": "25 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Healthy Recipes for Busy Weekdays",
      "body": "Quick and nutritious meals for your hectic schedule...",
      "date": "26 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Future of Remote Work: Trends to Watch",
      "body": "Explore the latest trends in remote work and how they’re shaping the future...",
      "date": "27 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 5 Books to Read in 2025",
      "body": "A list of must-read books for the upcoming year...",
      "date": "28 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Evolution of Electric Cars: What’s Next?",
      "body": "The future of electric vehicles and the innovations driving this industry...",
      "date": "29 September 2025"
    },
    {
      "image": DummyImage,
      "head": "5 Tips for a Balanced Work-Life Routine",
      "body": "Learn how to manage your work-life balance effectively with these simple tips...",
      "date": "30 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Understanding the Basics of Machine Learning",
      "body": "An introduction to the exciting world of machine learning and its applications...",
      "date": "1 October 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "How to Start Investing: A Beginner’s Guide",
      "body": "Everything you need to know to get started with investing...",
      "date": "2 October 2025"
    },
   {
      "image": DummyImage,
      "head": "The Future of Artificial Intelligence in Healthcare",
      "body": "How AI is revolutionizing the healthcare industry...",
      "date": "4 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring Space Travel: What’s Next for Humanity?",
      "body": "Discover the possibilities of space exploration and what the future holds...",
      "date": "5 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Impact of Social Media on Mental Health",
      "body": "How social media use is influencing mental well-being...",
      "date": "6 October 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Productive When Working From Home",
      "body": "Tips for maintaining focus and productivity while working remotely...",
      "date": "7 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Climate Change: What You Can Do to Help",
      "body": "Small steps that make a big difference in fighting climate change...",
      "date": "8 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Best Online Learning Platforms for 2025",
      "body": "A guide to the top platforms for online education...",
      "date": "9 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 10 Gadgets You Need in 2025",
      "body": "The latest tech gadgets to have on your radar...",
      "date": "10 October 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Build Better Habits in 2025",
      "body": "Effective strategies for creating and sticking to good habits...",
      "date": "11 October 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "How to Boost Your Creativity Every Day",
      "body": "Simple exercises to get your creative juices flowing...",
      "date": "12 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring the Benefits of Yoga and Meditation",
      "body": "How these practices can improve your physical and mental health...",
      "date": "13 October 2025"
    },
   {
      "image": DummyImage,
      "head": "AI and the Future of Education",
      "body": "How artificial intelligence is changing the classroom...",
      "date": "15 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Essential Skills for the Future Job Market",
      "body": "Skills you need to thrive in the changing job landscape...",
      "date": "16 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Power of Networking for Career Growth",
      "body": "How to build valuable professional connections...",
      "date": "17 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Future of Smart Homes: What’s Coming Next?",
      "body": "Explore the new trends in home automation and IoT...",
      "date": "18 October 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Motivated During Tough Times",
      "body": "Tips for maintaining your focus and drive during difficult periods...",
      "date": "19 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Why You Should Prioritize Mental Health",
      "body": "Understanding the importance of mental health and self-care...",
      "date": "20 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Impact of Virtual Reality on Entertainment",
      "body": "How VR is transforming the entertainment industry...",
      "date": "21 October 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "5 Easy Steps to Boost Your Immunity Naturally",
      "body": "Discover simple yet effective ways to strengthen your immune system...",
      "date": "12 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Another News Title",
      "body": "Another news body content...",
      "date": "13 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Tech Trends to Watch in 2025",
      "body": "Stay ahead with the latest trends in the tech world...",
      "date": "14 September 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Healthy During Winter",
      "body": "Helpful tips for maintaining your health throughout the cold season...",
      "date": "15 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 10 Travel Destinations for 2025",
      "body": "Discover the best places to visit next year...",
      "date": "16 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring the Future of Renewable Energy",
      "body": "What the future holds for sustainable energy solutions...",
      "date": "17 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Mindfulness Practices to Improve Your Mental Health",
      "body": "Learn how mindfulness can have a profound impact on your well-being...",
      "date": "18 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Best Fitness Routines for Busy People",
      "body": "Quick and effective exercises for people with tight schedules...",
      "date": "20 September 2025"
    },
    {
      "image": DummyImage,
      "head": "10 Simple Tips for a Greener Lifestyle",
      "body": "Small changes that make a big difference for the planet...",
      "date": "21 September 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "Understanding Cryptocurrency: A Beginner’s Guide",
      "body": "A comprehensive guide to get you started with crypto...",
      "date": "22 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Innovative Startups You Should Know About",
      "body": "The most exciting new businesses shaking up the market...",
      "date": "23 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Rise of E-Sports and Online Gaming",
      "body": "A closer look at the booming industry of e-sports and its future...",
      "date": "25 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Healthy Recipes for Busy Weekdays",
      "body": "Quick and nutritious meals for your hectic schedule...",
      "date": "26 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Future of Remote Work: Trends to Watch",
      "body": "Explore the latest trends in remote work and how they’re shaping the future...",
      "date": "27 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 5 Books to Read in 2025",
      "body": "A list of must-read books for the upcoming year...",
      "date": "28 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Evolution of Electric Cars: What’s Next?",
      "body": "The future of electric vehicles and the innovations driving this industry...",
      "date": "29 September 2025"
    },
    {
      "image": DummyImage,
      "head": "5 Tips for a Balanced Work-Life Routine",
      "body": "Learn how to manage your work-life balance effectively with these simple tips...",
      "date": "30 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Understanding the Basics of Machine Learning",
      "body": "An introduction to the exciting world of machine learning and its applications...",
      "date": "1 October 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "How to Start Investing: A Beginner’s Guide",
      "body": "Everything you need to know to get started with investing...",
      "date": "2 October 2025"
    },
   {
      "image": DummyImage,
      "head": "The Future of Artificial Intelligence in Healthcare",
      "body": "How AI is revolutionizing the healthcare industry...",
      "date": "4 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring Space Travel: What’s Next for Humanity?",
      "body": "Discover the possibilities of space exploration and what the future holds...",
      "date": "5 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Impact of Social Media on Mental Health",
      "body": "How social media use is influencing mental well-being...",
      "date": "6 October 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Productive When Working From Home",
      "body": "Tips for maintaining focus and productivity while working remotely...",
      "date": "7 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Climate Change: What You Can Do to Help",
      "body": "Small steps that make a big difference in fighting climate change...",
      "date": "8 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Best Online Learning Platforms for 2025",
      "body": "A guide to the top platforms for online education...",
      "date": "9 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 10 Gadgets You Need in 2025",
      "body": "The latest tech gadgets to have on your radar...",
      "date": "10 October 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Build Better Habits in 2025",
      "body": "Effective strategies for creating and sticking to good habits...",
      "date": "11 October 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "How to Boost Your Creativity Every Day",
      "body": "Simple exercises to get your creative juices flowing...",
      "date": "12 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring the Benefits of Yoga and Meditation",
      "body": "How these practices can improve your physical and mental health...",
      "date": "13 October 2025"
    },
   {
      "image": DummyImage,
      "head": "AI and the Future of Education",
      "body": "How artificial intelligence is changing the classroom...",
      "date": "15 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Essential Skills for the Future Job Market",
      "body": "Skills you need to thrive in the changing job landscape...",
      "date": "16 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Power of Networking for Career Growth",
      "body": "How to build valuable professional connections...",
      "date": "17 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Future of Smart Homes: What’s Coming Next?",
      "body": "Explore the new trends in home automation and IoT...",
      "date": "18 October 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Motivated During Tough Times",
      "body": "Tips for maintaining your focus and drive during difficult periods...",
      "date": "19 October 2025"
    },
    {
      "image": DummyImage,
      "head": "Why You Should Prioritize Mental Health",
      "body": "Understanding the importance of mental health and self-care...",
      "date": "20 October 2025"
    },
    {
      "image": DummyImage,
      "head": "The Impact of Virtual Reality on Entertainment",
      "body": "How VR is transforming the entertainment industry...",
      "date": "21 October 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "5 Easy Steps to Boost Your Immunity Naturally",
      "body": "Discover simple yet effective ways to strengthen your immune system...",
      "date": "12 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Another News Title",
      "body": "Another news body content...",
      "date": "13 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Tech Trends to Watch in 2025",
      "body": "Stay ahead with the latest trends in the tech world...",
      "date": "14 September 2025"
    },
    {
      "image": DummyImage,
      "head": "How to Stay Healthy During Winter",
      "body": "Helpful tips for maintaining your health throughout the cold season...",
      "date": "15 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 10 Travel Destinations for 2025",
      "body": "Discover the best places to visit next year...",
      "date": "16 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Exploring the Future of Renewable Energy",
      "body": "What the future holds for sustainable energy solutions...",
      "date": "17 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Mindfulness Practices to Improve Your Mental Health",
      "body": "Learn how mindfulness can have a profound impact on your well-being...",
      "date": "18 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Best Fitness Routines for Busy People",
      "body": "Quick and effective exercises for people with tight schedules...",
      "date": "20 September 2025"
    },
    {
      "image": DummyImage,
      "head": "10 Simple Tips for a Greener Lifestyle",
      "body": "Small changes that make a big difference for the planet...",
      "date": "21 September 2025"
    }
  ],
  [
    {
      "image": DummyImage,
      "head": "Understanding Cryptocurrency: A Beginner’s Guide",
      "body": "A comprehensive guide to get you started with crypto...",
      "date": "22 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Innovative Startups You Should Know About",
      "body": "The most exciting new businesses shaking up the market...",
      "date": "23 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Rise of E-Sports and Online Gaming",
      "body": "A closer look at the booming industry of e-sports and its future...",
      "date": "25 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Healthy Recipes for Busy Weekdays",
      "body": "Quick and nutritious meals for your hectic schedule...",
      "date": "26 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Future of Remote Work: Trends to Watch",
      "body": "Explore the latest trends in remote work and how they’re shaping the future...",
      "date": "27 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Top 5 Books to Read in 2025",
      "body": "A list of must-read books for the upcoming year...",
      "date": "28 September 2025"
    },
    {
      "image": DummyImage,
      "head": "The Evolution of Electric Cars: What’s Next?",
      "body": "The future of electric vehicles and the innovations driving this industry...",
      "date": "29 September 2025"
    },
    {
      "image": DummyImage,
      "head": "5 Tips for a Balanced Work-Life Routine",
      "body": "Learn how to manage your work-life balance effectively with these simple tips...",
      "date": "30 September 2025"
    },
    {
      "image": DummyImage,
      "head": "Understanding the Basics of Machine Learning",
      "body": "An introduction to the exciting world of machine learning and its applications...",
      "date": "1 October 2025"
    }
  ],
]



