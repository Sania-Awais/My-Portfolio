import React from 'react';
import '../styles/Courses.css'; // Make sure this import is correct

const Courses = () => {
  return (
    <div className="courses">
      <h2>Courses</h2>
      <ul className="course-list">
        <li style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}>1. Introduction to Web Development</li>
        <li style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}>2. Advanced JavaScript Techniques</li>
        <li style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}>3. React Framework Fundamentals</li>
        <li style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}>4. Node.js for Backend Development</li>
        <li style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}>5. Data Structures and Algorithms in Python</li>
        <li style={{ textAlign: 'justify', margin: '0 auto', maxWidth: '400px' }}>6. Search Engine Optimization</li>
      </ul>
    </div>
  );
}

export default Courses;
