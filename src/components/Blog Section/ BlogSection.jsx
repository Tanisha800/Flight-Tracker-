import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    category: "News",
    readTime: "15 min read",
    title: "Boeing 737 MAX Returns to Skies After Latest Safety Enhancements",
    summary:
      "Boeing’s popular aircraft is back in service with updated safety systems and regulatory approval.",
    author: "Rohit",
    date: "6 May, 2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image:
      "https://images.pexels.com/photos/31892402/pexels-photo-31892402/free-photo-of-commercial-airplane-landing-on-runway-at-airport.jpeg",
  },
  {
    id: 2,
    category: "Tips",
    readTime: "10 min read",
    title: "Top 7 Travel Tips to Make Your Flight Smoother and Stress-Free",
    summary:
      "From packing smart to choosing seats, these tips help you fly better and save time.",
    author: "Aman",
    date: "29 April, 2025",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    image:
      "https://images.pexels.com/photos/12391911/pexels-photo-12391911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    category: "Measures",
    readTime: "8 min read",
    title: "Essential Health & Safety Measures for Air Travel in 2025",
    summary:
      "Stay informed on current airport protocols, in-flight hygiene, and traveler safety precautions.",
    author: "Sarah",
    date: "18 April, 2025",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    image:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">{post.category}</span>
                <span className="read-time">⏱ {post.readTime}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-author">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="author-avatar"
                />
                <div>
                  <p className="author-name">{post.author}</p>
                  <p className="post-date">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
