import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetail.css';

// Import images explicitly
import GetOut1 from '../public/assets/GetOut.jpg';
import GetOut2 from '../public/assets/GetOut2.png';
import GetOut3 from '../public/assets/GetOut3.png';
import Portfolio1 from '../public/assets/PortfolioWebsite1.png';
import Portfolio2 from '../public/assets/PortfolioWebsite2.png';
import Portfolio3 from '../public/assets/PortfolioWebsite3.png';
import AutoWrld1 from '../public/assets/Auto-wrld.jpg';
import AutoWrld2 from '../public/assets/Auto-wrld2.png';
import AUS1 from '../public/assets/AUS1.png';
import AUS2 from '../public/assets/AUS2.png';
import AUS3 from '../public/assets/AUS3.jpg';
import AUS4 from '../public/assets/AUS4.jpg';
import AUS5 from '../public/assets/AUS5.jpg';
import AUSVideo from '../public/assets/AUS-V1.mov';

function ProjectDetail() {
  const { id } = useParams();
  const projectList = [
    {
      name: 'Get Out',
      images: [
        { src: GetOut1, orientation: 'vertical' },
        { src: GetOut2, orientation: 'vertical' },
        { src: GetOut3, orientation: 'vertical' },
      ],
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Responsive Design', 'Real-time Database', 'Authentication'],
    },
    {
      name: 'Portfolio Website',
      images: [
        { src: Portfolio1, orientation: 'horizontal' },
        { src: Portfolio2, orientation: 'horizontal' },
        { src: Portfolio3, orientation: 'horizontal' },
      ],
      technologies: ['React', 'CSS', 'styled-components', 'Responsive Design'],
    },
    {
      name: 'AUTO WRLD',
      images: [
        { src: AutoWrld1, orientation: 'vertical' },
        { src: AutoWrld2, orientation: 'vertical' },
      ],
      technologies: ['React.js', 'CSS', 'AWS Services'],
    },
    {
      name: 'Arduino Ultrasonic Sensor Project',
      images: [
        { src: AUS1, orientation: 'vertical' },
        { src: AUS2, orientation: 'vertical' },
        { src: AUS3, orientation: 'vertical' },
        { src: AUS4, orientation: 'horizontal' },
        { src: AUS5, orientation: 'horizontal' },
        { src: AUSVideo, orientation: 'vertical' },
      ],
      technologies: ['Arduino', 'C++', 'Ultrasonic Sensor', 'Electronics'],
    },
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

      <div className="project-images">
        {project.images.map((img, idx) => (
          img.src.endsWith('.MOV') ? (
            <video key={idx} src={img.src} className="video" autoPlay loop muted playsInline>
              Your browser does not support the video tag.
            </video>
          ) : (
            <img key={idx} src={img.src} alt={`${project.name} screenshot ${idx + 1}`} className={img.orientation} />
          )
        ))}
      </div>
    </div>
  );
}

export default ProjectDetail;
