import React from 'react';
import './Users.css';

const testimonials = [
  {
    name: 'Sarah Johnson',
    initial: 'S',
    text: `AeroTracker has completely transformed how I monitor flights. The real-time updates are incredibly accurate and the interface is intuitive!`
  },
  {
    name: 'Michael Chen',
    initial: 'M',
    text: `As a frequent traveler, this app has been invaluable. I can track my family's flights and receive timely notifications about any schedule changes.`
  },
  {
    name: 'Diana Roberts',
    initial: 'D',
    text: `The level of detail provided about each flight is impressive. Being able to see exact positioning on the map is a game-changer for picking people up at the airport.`
  }
];

const Users = () => {
  return (
    <section className="users-section">
      <h2 className="title">What Our Users Say</h2>
      <div className="user-cards">
        {testimonials.map((t, index) => (
          <div className="user-card" key={index}>
            <div className="quote-icon">❝❞</div>
            <p className="user-text"><em>{t.text}</em></p>
            <div className="user-info">
              <div className="user-initial">{t.initial}</div>
              <span className="user-name">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Users;
