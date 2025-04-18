import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import boggle from "../assets/img/boggle.png"
import tetris from "../assets/img/tetris.png"
import chatserver from "../assets/img/chat-server.png"
import artblog from "../assets/img/art-blog.png"
import cosmicCarnage from "../assets/img/cosmic-carnage.png"
import tiktok from "../assets/img/tiktok.jpg"
import mindcraft from "../assets/img/mindcraft.jpg"

export const Projects = () => {
  const projectData = [
    {
      title: 'MindCraft',
      img: mindcraft,
      link: '/projects/mindcraft',
    },
    {
      title: 'Cosmic Carnage',
      img: cosmicCarnage,
      link: '/projects/cosmic-carnage',
    },
    {
      title: 'TikTok Data App',
      img: tiktok,
      link: '/projects/tiktok-data',
    },
    {
      title: 'Boggle',
      img: boggle,
      link: '/projects/boggle',
    },
    {
      title: 'Tetris',
      img: tetris,
      link: '/projects/tetris',
    },
    {
      title: 'Chat Server',
      img: chatserver,
      link: '/projects/chat-server',
    },
    {
      title: 'Art Blog',
      img: artblog,
      link: '/projects/art-blog',
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
