import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import eternalrose from "../assets/img/eternalrose.png";
import sultanique from "../assets/img/sultanique.png";
import echoesoftheforest from "../assets/img/echoesoftheforest.png";
import shadowsofjustice from "../assets/img/shadowsofjustice.png";
import thelionwithin from "../assets/img/thelionwithin.png";

export const Projects = () => {
  const projectData = [
    {
      title: 'Shadows of Justice',
      img: shadowsofjustice,
      link: '/projects/shadowsofjustice',
      description: 'Video game made in Unity with C# and Autodesk Maya models.'
    },
    {
      title: 'Echoes of the Forest',
      img: echoesoftheforest,
      link: '/projects/echoesoftheforest',
      description: 'Video game made in Unity with C# and FPS tunnel level.'
    },
    {
      title: 'The Lion Within',
      img: thelionwithin,
      link: '/projects/thelionwithin',
      description: 'Illustration made in Adobe Illustrator.'
    },
    {
      title: 'Eternal Roses',
      img: eternalrose,
      link: '/projects/eternalroses',
      description: 'Illustration made in Adobe Illustrator.'
    },
    {
      title: 'Sultanique Logo Design',
      img: sultanique,
      link: '/projects/sultanique',
      description: 'Logo made in Adobe Illustrator with brand guidelines in Adobe InDesign.'
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <h2 className="text-center mb-5">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col key={index} lg={4} md={6} sm={12} className="mb-4">
              <div className="project-card d-flex flex-column align-items-center text-center p-3 h-100">
                <img src={project.img} alt={project.title} className="project-card__img" />
                <h5>{project.title}</h5>
                <p>{project.description}</p>

                <Link to={project.link}>
                  <button className='project-link'><span>View</span></button>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
