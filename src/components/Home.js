import React from 'react';
import image from '../images/image.jpg';
import '../styles/Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <img src={image} alt="Profile" className="profile-pic" />
      <h1 className="name">Sania Awais</h1>
      <p className="title">BSIT Student</p>
      <div className="introduction">
        <h2>Welcome to My Portfolio</h2>
        <p style={{ textAlign: 'justify' }}>
          I am a BSIT student passionate about technology and development.This portfolio showcases my skills, projects, and experiences.I created this portfolio to provide a comprehensive overview of my capabilities and to document my journey in the field of Information Technology.
        </p>
      </div>
    </div>
  );
}

export default Home;
