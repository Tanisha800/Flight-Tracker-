import React, { useState } from 'react';
import './FAQsection.css';

const faqdata = [
  {
    question: "How accurate is your flight tracking?",
    answer: "Our flight tracking is updated in real time using multiple data sources, offering industry-leading accuracy."
  },
  {
    question: "Can I track flights from any country?",
    answer: "Yes, our platform supports global flight tracking across all countries."
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, you can download our app from the iOS App Store and Google Play Store."
  },
  {
    question: "Do you offer API access for developers?",
    answer: "Yes, we offer robust API access for developers with real-time and historical data."
  },
  {
    question: "How far back can I view historical flight data?",
    answer: "You can view flight data dating back up to 12 months."
  },
];

const FAQsection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='faq-section'>
      <h2 className='faq-title'>Frequently Asked Questions</h2>
      {faqdata.map((value, index) => (
        <div className='faq-item' key={index} onClick={() => toggleFAQ(index)}>
          <div className='faq-question'>
            <span>{value.question}</span>
            <span className='faq-icon'>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className='faq-answer'>{value.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQsection;
