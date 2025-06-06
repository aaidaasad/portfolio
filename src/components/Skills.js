import React from 'react';

export const Skills = () => {
  const skillSections = [
    {
      title: '3D Modeling & Animation',
      skills: [
        'Autodesk Maya',
        'Rigging & UV Mapping',
        'Environment Design',
        'Texturing & Shading'
      ],
    },
    {
      title: 'Game Development',
      skills: [
        'Unity (2D & 3D)',
        'C# Scripting',
        'Game UI/UX Design',
        'Asset Integration',
        'Level Design',
        'Prototyping',
        'Version Control (Git)',
        'FPS Mechanics'
      ],
    },
    {
      title: 'Graphic Design',
      skills: [
        'Adobe Illustrator',
        'Adobe Photoshop',
        'Adobe Premiere Pro',
        'Adobe InDesign',
        'Branding & Logo Design',
        'UI Mockups & Visual Assets',
        'Canva',
        'Figma'
      ],
    },
  ];

  return (
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="skill-bx text-center">
                <h2>Skills</h2>
                <div className="row mt-5">
                  {skillSections.map((section, idx) => (
                      <div className="col-md-4" key={idx}>
                        <div className="card1">
                          <h5>{section.title}</h5>
                          <p>
                            {section.skills.map((skill, i) => (
                                <React.Fragment key={i}>
                                  {skill}<br />
                                </React.Fragment>
                            ))}
                          </p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};
