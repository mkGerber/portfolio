// ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const projectList = [
    {
      name: 'Get Out',
      description: 'A social mobile application...',
      details: 'Get Out is a social mobile application featuring an interactive map that showcases events that groups and individuals post to attract attention or customers. The app was built using React Native and Firebase. This is still an ongoing project with some more backend features to be added in the future. This project has been very valuable in learning how to build a full-stack application and how to cater to a diverse range of users.',
      images: [
        { src: '/GetOut.jpg', orientation: 'vertical' },
        { src: '/GetOut2.PNG', orientation: 'vertical' },
        { src: '/GetOut3.PNG', orientation: 'vertical' },
      ],
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Responsive Design', 'Real-time Database', 'Authentication'], 
    },
    {
      name: 'Portfolio Website',
      description: 'Personal website built to showcase my resume, skills, and projects.',
      details: 'This is my personal portfolio website built to showcase my resume, skills, and projects. It includes an interactive UI/UX using React and styled-components. This project has been very valuable in learning how to build a responsive website and how to create a visually appealing design.',
      images: [
        { src: '/PortfolioWebsite1.png', orientation: 'horizontal' },
        { src: '/PortfolioWebsite2.png', orientation: 'horizontal' },
        { src: '/PortfolioWebsite3.png', orientation: 'horizontal' },
      ],
      technologies: ['React', 'CSS', 'styled-components', 'Responsive Design' ],
      link: 'https://dev.d2t33yfquzq2gf.amplifyapp.com'
    },
    {
      name: 'Game Wishlist Website',
      description: 'A web application that allows users to create and manage a wishlist of video games.',
      details: 'This is a web application that allows users to create and manage a wishlist of video games. The project was built with vanilla javascript and css for my cs343, Application Development class. This project has been very valuable in learning the core concepts of web development and how to build a full-stack application from scratch.',
      images: [
        { src: '/GameWishlist1.png', orientation: 'horizontal' },
        { src: '/GameWishlist2.png', orientation: 'horizontal' },
        { src: '/GameWishlist3.png', orientation: 'horizontal' },
      ],
      technologies: ['JavaScript', 'CSS', 'APIs', 'Local Storage', 'Responsive Design', ],
      link: 'https://343f24.github.io/343f24-final-project-steamers/index.html'
    },
    {
      name: 'AUTO WRLD',
      description: 'A social media application for car enthusiasts to share photos and videos of their cars.',
      details: 'AUTO WRLD is a social media application for car enthusiasts to share photos and videos of their cars. The app was built using React, Node.js, and Firebase. This project is still ongoing as I am learning how to use AWS services to host the backend of the app. It has been a bit challenging but very rewarding to learn how to use the services from AWS.',
      images: [
        { src: '/Auto-wrld.jpg', orientation: 'vertical' },
        { src: '/Auto-wrld2.png', orientation: 'vertical' },
        { src: '/Auto-wrld3.png', orientation: 'vertical' },
        { src: '/Auto-wrld4.png', orientation: 'vertical' },
      ],
      technologies: ['React.js', 'CSS', 'AWS Services'],
    },
    {
      name: 'Arduino Ultrasonic Sensor Project',
      description: 'A project that uses an Arduino board and an ultrasonic sensor to measure and display the distance between the sensor and an object.',
      images: [
        { src: '/AUS1.png', orientation: 'vertical' },
        { src: '/AUS2.png', orientation: 'vertical' },
        { src: '/AUS3.jpg', orientation: 'vertical' },
        { src: '/AUS4.jpg', orientation: 'horizontal' },
        { src: '/AUS5.jpg', orientation: 'horizontal' },
        { src: '/AUS-V1.MOV', orientation: 'vertical' },
      ],
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensor', 'Electronics'],
      link: 'https://github.com/mkGerber/ArduinoUltrasonicSensor'
    }
    // Add other projects here
  ];

  const project = projectList[id];

  return (
    <div className="project-detail-container">
      <h1>{project.name}</h1>
      <p>{project.details}</p>
      <div className="technologies">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">{tech}</span>
        ))}
      </div>

      {/* Conditional rendering of the project link */}
      {project.link && (
        <div className="project-link">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      )}
      
      <div className="project-images">
        {/* Render horizontal images */}
        {project.images
          .filter(img => img.orientation === 'horizontal' && !img.src.endsWith('.MOV'))
          .map((img, idx) => (
            <img key={idx} src={img.src} alt={`${project.name} screenshot ${idx + 1}`} className="horizontal" />
          ))}

        {/* Render vertical images */}
        <div className="vertical-container">
          {project.images
            .filter(img => img.orientation === 'vertical' && !img.src.endsWith('.MOV'))
            .map((img, idx) => (
              <img key={idx} src={img.src} alt={`${project.name} screenshot ${idx + 1}`} className="vertical" />
            ))}
        </div>

        {/* Render videos */}
        {project.images
          .filter(img => img.src.endsWith('.MOV'))
          .map((img, idx) => (
            <video key={idx} src={img.src} className="video" autoPlay loop muted playsInline>
              Your browser does not support the video tag.
            </video>
          ))}
      </div>

    </div>
  );
}

export default ProjectDetail;
