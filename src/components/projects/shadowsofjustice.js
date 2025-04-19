import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const project = {
    title: 'Shadows of Justice',
    description:
        '"Shadows of Justice" is an atmospheric, narrative-driven game where you play as a lost soul trapped in an abandoned, haunted police station. The environment is dark and eerie, with papers scattered across the decaying halls. Some papers glow as you approach, revealing crucial clues that guide you on your journey to escape. Follow the glowing trail, find hidden keys, and unlock doors to freedom. The shadows hold whispered secrets, but only the most observant players will survive.',
    bullets: [
        'Made in Unity: Developed using Unity, creating an immersive and interactive gameplay experience.',
        'Models Created in Autodesk Maya: All in-game 3D models were designed from scratch using Autodesk Maya.',
        'Scripting in C#: Gameplay and interactions powered by C# scripting.',
        'Clue Design: Clues were handwritten and designed in Adobe Photoshop.'
    ],
    videoEmbedUrl: 'https://www.youtube.com/embed/nitjxdWm9uQ',
};

export default function ShadowsOfJusticeProject() {
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
                        title="Shadows of Justice Walkthrough"
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
                        href="https://aaidaasad.itch.io/shadows-of-justice"
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
