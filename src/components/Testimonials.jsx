import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
    {
        quote: `Everything just... worked. The process, the communication, the final result, all smooth.`,
        name: "William Linson",
        company: "Excel Copo",
        role: "Marketing Lead",
        avatarColor: "#D9D9D9"
    },
    {
        quote: "I didn’t even know how to explain what I wanted properly, but they somehow understood it anyway",
        name: "Timothy Rinkey",
        company: "Mega Nation",
        role: "Yap Lead",
        avatarColor: "#D9D9D9"
    },
    // Duplicate data to ensure smooth ticker if needed, or we can just map multiple times
    {
        quote: "The attention to detail was incredible. They really brought our vision to life.",
        name: "Sarah Jenkins",
        company: "Creative Flow",
        role: "Art Director",
        avatarColor: "#D9D9D9"
    },
    {
        quote: "Highly professional and easy to work with. Would definitely recommend.",
        name: "James Carter",
        company: "Tech Solutions",
        role: "CTO",
        avatarColor: "#D9D9D9"
    }
];

const Testimonials = () => {
    // We duplicate the list to ensure seamless infinite scroll
    const marqueeItems = [...testimonialsData, ...testimonialsData, ...testimonialsData];

    return (
        <section className="testimonials-section">
            <div className="testimonials-intro">
                <div className="testimonials-header-row">
                    <div className="circle-indicator"></div>
                    <span className="testimonials-label">Testimonials</span>
                </div>

                <div className="testimonials-headline-wrapper">
                    <h2 className="testimonials-headline">Client Stories</h2>
                    <p className="testimonials-subheadline">Real customers giving their real opinions, Join us and become our next story</p>
                </div>
            </div>

            <div className="testimonials-content">
                {/* Static Image Card - Overlays the ticker */}
                <div className="static-image-card">
                    <div className="static-card-bg">
                        {/* Placeholder for image - using color or pattern if no image available immediately */}
                        <img src="/testimo.webp" alt="Emily Ludwig" className="static-card-image" style={{ display: 'none' }} loading="lazy" />
                        <div className="static-card-image-placeholder"></div>
                    </div>
                    <div className="static-card-overlay">
                        <h3 className="static-card-name">Emily Ludwig</h3>
                        <p className="static-card-role">Creative Director</p>
                        <a href="#" className="static-card-link">Watch Video</a>
                    </div>
                </div>

                {/* Ticker Container - Underlays the static card */}
                <div className="ticker-mask">
                    <div className="ticker-track">
                        {marqueeItems.map((item, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="quote-icon">“</div>
                                <p className="testimonial-quote">{item.quote}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" style={{ backgroundColor: item.avatarColor }}></div>
                                    <div className="author-info">
                                        <p className="author-name">{item.name}</p>
                                        <div className="author-details">
                                            <span className="author-company">{item.company}</span>
                                            <span className="author-position">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
