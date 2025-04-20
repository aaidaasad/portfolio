import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import sultaniqueLogo from '../../assets/img/sultanique.png'; // Make sure the logo path is correct

const project = {
    title: 'Sultanique Logo Design',
    description:
        'This logo beautifully embodies the client’s personal connection to the design. The incorporation of the rose illustration is related to the client’s name, which means “rose,” symbolizing beauty, elegance, and individuality. The soft mauve background enhances the refined aesthetic, while the black floral illustration adds contrast and an artistic flair. The white typography provides a clean and sophisticated contrast, displaying the brand’s mission of creating an elegant and unique identity.',
    software: 'Adobe Illustrator, Adobe InDesign',
    downloadLink: '/brand-guidelines.pdf', // Direct path to the PDF in public folder
};

export default function Sultanique() {
    return (
        <section className="project-detail">
            <Container>
                {/* Back Link */}
                <Link to="/#project" className="back-link">← Back to Projects</Link>

                {/* Project Title */}
                <h2 className="mt-4">{project.title}</h2>

                {/* Logo Image */}
                <div className="text-center my-4">
                    <img
                        src={sultaniqueLogo}
                        alt="Sultanique Logo"
                        className="img-fluid"
                        style={{ maxWidth: '600px', width: '100%', borderRadius: '12px' }}
                    />
                </div>

                {/* Description */}
                <p className="project-description">{project.description}</p>

                {/* Brand Guidelines Section */}
                <p className="project-description mt-4">
                    The brand guidelines document was created to ensure consistency in the use of the logo and other brand elements.
                </p>

                {/* Software Used */}
                <ul className="project-description">
                    <li><strong>Logo Created In:</strong> Adobe Illustrator</li>
                    <li><strong>Brand Guidelines Document Created In:</strong> Adobe InDesign</li>
                </ul>

                {/* Download Brand Guidelines Button */}
                <div className="mt-4">
                    <a
                        href={project.downloadLink}
                        download // The download attribute triggers the download of the file
                        className="project-link" // Matching button class
                    >
                        Download Brand Guidelines
                    </a>
                </div>
            </Container>
        </section>
    );
}
