import { useState } from 'react';
import './App.css';
import Resume from './Resume';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="body">
      <header>
        <div className="title">
          <h1>Michael Gerber</h1>
          <p>Full Stack Developer</p>
        </div>
        <div className="connect">
          <button
            className="connectButton"
            type="button"
            onClick={toggleDropdown}
          >
            Connect with Me
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.linkedin.com/in/michael-k-gerber/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://github.com/mkGerber"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          )}
        </div>
      </header>
      <div className="main-section">
        <aside className="sidebar">
            <button onClick={() => scrollToSection('about')}>About Me</button>
            <button onClick={() => scrollToSection('resume')}>Resume</button>
            <button onClick={() => scrollToSection('projects')}>Projects</button>
            {/* You can add more buttons for other sections as needed */}
        </aside>
        <div className="sections">
          <section id="about">
            <h2>About Me</h2>
            <p>I'm currently a student at JMU with a major in Computer Science and a minor in Computer Information Systems graduating in 2026. Currently, I am working on a mobile application that is built using React Native along with Google Firebase to engage a community with events and groups around their area. Always looking for ways to expand my skills into something that benefits others.</p>
          </section>
          <section id="resume">
            <h2>Resume</h2>
            <p>
              <embed 
                src="/MichaelGerber_Resume.pdf" 
                type="application/pdf" 
                width="100%" 
                height="800px" 
                style={{ border: "1px solid #000" }} 
              />
            </p>
          </section>
          <section id="projects">
            <h2>Projects</h2>
            <div className="project">
              <div className="image">
                <img src="/GetOut.jpg" alt="GetOut" />
              </div>
              <div className="description">
                <h3>GetOut</h3>
                <p>GetOut is a mobile application that is built using React Native along with Google Firebase to engage a community with events and groups around their area. It is still in development with a friend, but it is very close to being wrapped up!</p>
              </div>
            </div>
            <div className="project">
              <div className="image">
                <img src="/Auto-wrld.jpg" alt="Auto Wrld" />
              </div>
              <div className="description">
                <h3>Auto Wrld</h3>
                <p>Auto Wrld is a app that I'm currently working on. Very early in development so there isn't much to show yet but it will be an app for people who are in the car community!</p>
              </div>
            </div>
            <div className="project">
              <div className="image">
                <img src="/Amazon.png" alt="Amazon" />
              </div>
              <div className="description">
                <h3>Amazon remake</h3>
                <p>This was a project that I worked on when I was learning the principles of html, css and javascript. It doesn't have any real functionality but it was very beneficial to learning the core </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
