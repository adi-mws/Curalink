import DownArrow from '../../assets/icons/arrow-down.png'
import RightArrow from '../../assets/icons/Line arrow-right.png'
import React, { useState } from 'react';
import './FAQs.css';

// Individual FAQ Component
function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);


    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <div className="faq-question">
                <p>{question}</p>
                <button onClick={toggleAnswer} className="faq-toggle-button">
                    <img
                        src={DownArrow}
                        alt="Toggle FAQ"
                        className={isOpen ? "down-arrow-rotated" : "down-arrow"}
                    />
                </button>
            </div>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

const defaultFaqData = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript, used to describe what the UI should look like."
    },
    {
        question: "What are React components?",
        answer: "Components are reusable building blocks in React that return JSX to define UI elements."
    },
];

// FAQs Wrapper Component
export default function FAQs({ faqData = defaultFaqData}) {
    return (
        <div className="faqs">
            <h2 className="faq-heading">FAQs</h2>
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
            <button className="More-Faqs">
                View more FAQs
                <img src={RightArrow} alt="See more FAQs" />
            </button>
        </div>
    );
}
