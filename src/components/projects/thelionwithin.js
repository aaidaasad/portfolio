import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import lionImage from '../../assets/img/thelionwithin.png'; 

export default function TheLionWithin() {
    return (
        <section className="project-detail">
            <Container>
                {/* Back Link */}
                <Link to="/#project" className="back-link">← Back to Projects</Link>

                {/* Title */}
                <h2 className="mt-4">The Lion Within</h2>

                {/* Image */}
                <div className="text-center my-4">
                    <img
                        src={lionImage}
                        alt="The Lion Within"
                        className="img-fluid"
                        style={{ maxWidth: '600px', width: '100%', borderRadius: '12px' }}
                    />
                </div>

                {/* Description */}
                <div className="project-description">
                    <p><strong>Date Created:</strong> January 14, 2025</p>
                    <p>
                        <em>The Lion Within</em> is a powerful vector-based self-portrait that explores themes of identity,
                        strength, and inner resilience. Inspired by the Arabic meaning of the last name "Asad", which translates
                        to "lion", this piece transforms personal symbolism into visual expression. The lion, stylized with sharp lines 
                        and bold contrast, represents the artist’s inner spirit: courageous, fierce, and grounded in cultural pride. 
                        Through the use of striking color palettes and layered composition, the work captures a moment of 
                        self-empowerment and reflection.
                    </p>
                    <ul>
                        <li><strong>Medium:</strong> Vector Illustration</li>
                        <li><strong>Software Used:</strong> Adobe Illustrator</li>
                        <li><strong>Style:</strong> Graphic, Symbolic</li>
                        <li><strong>Theme:</strong> Identity, Strength, Cultural Heritage</li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
