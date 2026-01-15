import React, { useState } from 'react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Cinematography',
        image: '/card1.png' // Placeholder
    },
    {
        id: 2,
        title: 'Product Photography',
        image: '/card.png' // Placeholder
    },
    {
        id: 3,
        title: 'Digital Ads',
        image: '/hero-bg.webp' // Placeholder
    },
    {
        id: 4,
        title: 'Motion Design',
        image: '/card.png' // Placeholder
    },
    {
        id: 5,
        title: 'Branding',
        image: '/hero-bg.webp' // Placeholder
    }
];

const Services = () => {
    const [activeService, setActiveService] = useState(servicesData[0]);

    return (
        <section id="services" className="services-section">
            <div className="services-container">
                <div className="services-header">
                    <div className="header-title-row">
                        <div className="services-label-container">
                            <div className="circle-indicator-white"></div>
                            <span className="services-label">Services</span>
                        </div>
                        <h2 className="services-headline">What we offer</h2>
                    </div>
                    <p className="services-subheadline">Precision in Every Pixel.</p>
                </div>

                <div className="services-content">
                    <div className="services-list">
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                className={`service-item ${activeService.id === service.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveService(service)}
                            >
                                <div className="service-content-wrapper">
                                    <div className={`arrow-circle ${activeService.id === service.id ? 'visible' : ''}`}>
                                        <span className="arrow-icon">→</span>
                                    </div>
                                    <span className="service-title">{service.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="service-image-container">
                        <img
                            src={activeService.image}
                            alt={activeService.title}
                            className="service-image"
                            key={activeService.id} // Key change triggers animation
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="services-footer">
                <span className="footer-cta">Ready to Create?</span>
                <div className="footer-links">
                    <span className="divider">|</span>
                    <a href="#works" className="footer-link">View our works</a>
                    <a href="#contact" className="footer-link">Contact us</a>
                </div>
            </div>
        </section>
    );
};

export default Services;
