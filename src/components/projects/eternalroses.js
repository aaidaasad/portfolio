import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import eternalRoseImage from '../../assets/img/eternalrose.png'; // Make sure the image path is correct

export default function EternalRoses() {
    return (
        <section className="project-detail">
            <Container>
                {/* Back Link */}
                <Link to="/#project" className="back-link">← Back to Projects</Link>

                {/* Title */}
                <h2 className="mt-4">Eternal Roses</h2>

                {/* Image */}
                <div className="text-center my-4">
                    <img
                        src={eternalRoseImage}
                        alt="Eternal Roses"
                        className="img-fluid"
                        style={{ maxWidth: '600px', width: '100%', borderRadius: '12px' }}
                    />
                </div>

                {/* Description */}
                <p className="project-description">
                    <strong>Date Created:</strong> January 19, 2025
                </p>
                <p className="project-description">
                    <strong>Eternal Roses</strong> is a vibrant vector-based self-portrait that explores themes of love, affection, and cherished memories. Inspired by the symbolic red rose, the piece reflects the artist’s deep emotional connection and admiration for love. The artwork uses rich textures and colors to evoke warmth and beauty, capturing the timeless nature of romantic gestures. A personal tribute to the frequent expressions of love from the artist’s boyfriend, it celebrates the delicate and enduring nature of love.
                </p>

                {/* Medium and Other Information */}
                <ul className="project-description">
                    <li><strong>Medium:</strong> Vector Illustration</li>
                    <li><strong>Software Used:</strong> Adobe Illustrator</li>
                    <li><strong>Style:</strong> Expressive, Romantic</li>
                    <li><strong>Theme:</strong> Love, Affection, Memory</li>
                </ul>
            </Container>
        </section>
    );
}
