import { useState } from 'react';
import './Home.css';
import Navbar from './components/Navbar.jsx'; // No curly braces for default exports
import Footer from './components/Footer.jsx';

function Home() {
  return (
    <>
      <main div className="home">
        <div className="aboutMe">
          <p>
            JMU student studying computer science. I have skills in front-end development which includes HTML, CSS, JavaScript, React, and styled-components. I also have experience with back-end development using python, SQL, APIs and databases. I am currently seeking an internship for the summer of 2025 to gain more experience in my relevant fields of study.
          </p>
          <p>Current File Directory:</p>
          <p>{window.location.pathname}</p>

        </div>
        <div className="picture">
          <img src="/Headshot.jpg" alt="Michael Gerber" />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
