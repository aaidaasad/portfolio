import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const project = {
    title: 'Echoes of the Forest',
    description:
        '"Echoes of the Forest" is a suspenseful exploration-survival game set in a haunted forest and a monster-infested underground tunnel. Your journey begins in a foggy, eerie forest where scattered clues lie hidden in plain sight, waiting to be found. A timed challenge pushes you to locate a weapon before it’s too late. In the second level, you descend into a dark tunnel system, where terrifying creatures roam and survival depends on your health. Every choice matters. Can you make it out alive?',
    bullets: [
        'Made in Unity: Developed using Unity, creating an immersive and interactive gameplay experience.',
        'Assets from Unity Asset Store: All 3D models and environments were sourced from high-quality Unity Asset Store packs.',
        'Scripting in C#: Gameplay and interactions powered by C# scripting.',
        'Clue Design: Clues were handwritten and designed in Adobe Photoshop.'
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/rBDgvN464cA',
};

export default function EchoesOfTheForest() {
    return (
        <section className="project-detail">
            <Container>
                {/* Back Link */}
                <Link to="/#project" className="back-link">← Back to Projects</Link>

                {/* Game Title */}
                <h2 className="mt-4">{project.title}</h2>

                {/* Embedded YouTube Video */}
                <div className="video-container my-4" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                        src={project.videoEmbedUrl}
                        title="Echoes of the Forest Walkthrough"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    ></iframe>
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Bullets */}
                <ul className="project-list">
                    {project.bullets.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>

                {/* Itch.io Link */}
                <div className="mt-4">
                    <a
                        href="https://aaidaasad.itch.io/echoes-of-the-forest"
                        target="_blank"
                        rel="noreferrer"
                        className="project-link itch-link"
                    >
                        Download Game
                    </a>
                </div>
            </Container>
        </section>
    );
}
