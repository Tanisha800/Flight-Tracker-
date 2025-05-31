import React, { useRef } from 'react';
import './Teamsection.css';

const teamMembers = [
  {
    name: 'David Cooper',
    title: 'CEO & Founder',
    description:
      'Aviation enthusiast with 15+ years of experience in the aviation industry. Founded SkyTracker to revolutionize flight tracking technology.',
    image:
      'https://thumbs.dreamstime.com/b/man-formal-outfit-black-background-man-formal-outfit-black-background-manager-beard-confident-face-modern-life-151554579.jpg',
  },
  {
    name: 'Rashmi Grover',
    title: 'CTO',
    description:
      'Software engineer specializing in real-time data processing and visualization. Leading our technical development and innovation.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKw92Es5Rx01kO6-GnDcExhrGYJGR69T8YXQoPZvuK4ktxeZ60HFYvsZr6ZrDgCo9Nag&usqp=CAU',
  },
  {
    name: 'Ravi Dubey',
    title: 'Lead Data Scientist',
    description:
      'Expert in machine learning and predictive analytics. Develops algorithms to improve flight tracking accuracy and predictions.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3',
  },
  {
    name: 'Alina',
    title: 'UI/UX Designer',
    description:
      'Creates intuitive and beautiful user interfaces. Passionate about making complex data accessible and easy to understand.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
  },
  {
    name: 'Shopia Patel',
    title: 'Aviation Specialist',
    description:
      'Former air traffic controller with deep knowledge of aviation operations. Ensures our data is accurate and professionally presented.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
  },
];

const Teamsection = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 1.5;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="team-section">
      <h2 className="section-title">Our Team</h2>
      <div className="carousel-wrapper">
        <button className="carousel-button left" onClick={() => scroll('left')}>
          ‹
        </button>
        <div className="team-grid" ref={carouselRef}>
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
                <p className="team-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={() => scroll('right')}>
          ›
        </button>
      </div>
    </div>
  );
};

export default Teamsection;
