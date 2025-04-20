import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import eternalrose from "../assets/img/eternalrose.png"
import sultanique from "../assets/img/sultanique.png"
import echoesoftheforest from "../assets/img/echoesoftheforest.png"
import shadowsofjustice from "../assets/img/shadowsofjustice.png"
import thelionwithin from "../assets/img/thelionwithin.png";

export const Projects = () => {
  const projectData = [
    {
      title: 'Shadows of Justice',
      img: shadowsofjustice,
      link: '/projects/shadowsofjustice',
    },
    {
      title: 'Echoes of the Forest',
      img: echoesoftheforest,
      link: '/projects/echoesoftheforest',
    },
    {
      title: 'The Lion Within',
      img: thelionwithin,
      link: '/projects/thelionwithin',
    },
    {
      title: 'Eternal Roses',
      img: eternalrose,
      link: '/projects/eternalroses',
    },
    {
      title: 'Sultanique Logo Design',
      img: sultanique,
      link: '/projects/sultanique',
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

                    <a href={project.link} target="_blank" rel="noreferrer">
                      <button className='project-link'><span>View</span></button>
                    </a>
                  </div>
                </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
}
