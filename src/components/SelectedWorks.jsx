import React from 'react';
import './SelectedWorks.css';

const works = [
    {
        id: 1,
        title: 'Blessed by the sun',
        year: '2025',
        image: '/fastcar.webp',
        className: 'work-wide'
    },
    {
        id: 2,
        title: 'Princess at a beach',
        year: '2025',
        image: '/princess-beach.webp',
        className: 'work-compact'
    },
    {
        id: 3,
        title: 'Hallucinogens',
        year: '2023',
        image: '/hallulo.webp',
        className: 'work-portrait'
    },
    {
        id: 4,
        title: 'Lonely Lady',
        year: '2024',
        image: '/loney_lady.webp',
        className: 'work-wide'
    }
];

const SelectedWorks = () => {
    return (
        <section id="works" className="selected-works-section">
            <div className="selected-works-label-container">
                <div className="circle-indicator"></div>
                <span className="selected-works-label">Works</span>
            </div>
            <div className="sticky-text-container">
                <h2 className="sticky-text">Selected Works</h2>
            </div>

            <div className="works-list">
                {works.map((work, index) => (
                    <div key={work.id} className={`work-card-wrapper ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className={`work-card ${work.className}`}>
                            <div className="work-image-container">
                                <img src={work.image} alt={work.title} className="work-image" loading="lazy" />
                            </div>
                            <div className="work-info">
                                <span className="work-title">{work.title}</span>
                                <span className="work-year">{work.year}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SelectedWorks;
