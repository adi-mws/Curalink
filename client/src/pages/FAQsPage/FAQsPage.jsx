import {React, useState, useEffect} from 'react'
import './FAQsPage.css'
import FAQs from '../../components/FAQs/FAQs.jsx'

const defaultFaqData = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create reusable UI components that efficiently update and render when data changes."
    },
    {
        question: "What are the key features of React?",
        answer: "React's key features include the Virtual DOM for efficient rendering, component-based architecture, unidirectional data flow, JSX syntax, and a rich ecosystem of tools and libraries."
    },
    {
        question: "What is the Virtual DOM?",
        answer: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance. It allows React to make calculations and updates before applying changes to the real DOM."
    },
    {
        question: "What are React Hooks?",
        answer: "React Hooks are functions that allow you to use state and other React features in functional components. Common hooks include useState, useEffect, useContext, and useRef."
    },
    {
        question: "What is state management in React?",
        answer: "State management refers to how data is handled and updated in a React application. While React provides built-in useState, larger applications often use solutions like Redux or Context API for more complex state management."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It makes React components more readable and helps visualize how the UI will look."
    },
    {
        question: "What are props in React?",
        answer: "Props (properties) are inputs that components receive from their parent component. They are read-only and help make components reusable by allowing them to receive different data."
    },
    {
        question: "What is the difference between state and props?",
        answer: "Props are read-only and passed down from parent components, while state is managed within a component and can be updated using setState or useState. Changes in either props or state trigger re-rendering."
    },
    {
        question: "What is the useEffect hook used for?",
        answer: "useEffect is a hook that handles side effects in functional components. It's commonly used for data fetching, subscriptions, or manually changing the DOM after render."
    },
    {
        question: "What are controlled components in React?",
        answer: "Controlled components are form elements whose values are controlled by React state. The component controls the state of the form inputs through onChange handlers and value props."
    }
];


export default function FAQsPage({ faqData = defaultFaqData }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredFaqs, setFilteredFaqs] = useState(faqData);

    useEffect(() => {
        const filtered = faqData.filter(faq => 
            faq.question.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredFaqs(filtered);
    }, [searchQuery, faqData]);


  return (
    <div className="FAQsPage">
        <div className="Hero-Section">
            <div className="Heading">
                Get Instant Answers to Common Questions
            </div>
            <div className="Description">
                Find quick solutions to your queries about appointments, prescriptions, payments, and more.
            </div>
            <input type="text" className="Search-Box" placeholder='Ask Your Question' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
        <div className="Large-Faqs-Section">
        {filteredFaqs.length > 0 ? (
                <FAQs faqData={filteredFaqs} Heading="" moreButtonDisable="true" />
            ) : (
                <div className="no-results">No matching questions found</div>
            )}
        </div>
    </div>
  )
}
