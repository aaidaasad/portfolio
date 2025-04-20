import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import mindcraft from "../../assets/img/mindcraft.jpg";

const project = {
    title: 'MindCraft – Hack the North',
    description:
        'MindCraft lets players control in-game actions in Minecraft using natural body movements and eye tracking.',
    image: mindcraft,
    bullets: [
        'Used OpenCV, Python, and MediaPipe to translate camera input from an Xbox Kinect Sensor into in-game actions.',
        'Integrated AdHawk MindLink Glasses and SDK to rotate in-game view with eye movement.',
        'Built for Hack the North 2023 hackathon.',
    ],
    repo: 'https://github.com/Hack-the-North-2023/MindCraft',
    video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID', // optional
};

export default function MindCraftProject() {
    return (
        <section className="project-detail">
            <Container>
                <Link to="/#project" className="back-link">← Back to Projects</Link>

                <h2 className="mt-4">{project.title}</h2>

                <img src={project.image} alt={project.title} className="img-fluid my-4 project-img" />

                <p>{project.description}</p>

                <ul className="project-list">
                    {project.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>

                {/* Optional YouTube video (now shown after the bullets) */}
                {project.video && (
                    <div className="video-container my-4">
                        <iframe
                            width="80%"
                            height="500"
                            src={project.video}
                            title={`${project.title} Demo Video`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link source-code"
                >
                    View Source Code
                </a>
            </Container>
        </section>
    );
}
