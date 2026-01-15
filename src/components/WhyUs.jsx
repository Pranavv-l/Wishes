import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
        <section id="why-us" className="why-us-section">
            <div className="why-us-header">
                <div className="why-us-title-row">
                    <div className="why-us-label-container">
                        <div className="circle-indicator"></div>
                        <span className="why-us-label">Benefits</span>
                    </div>
                    <h2 className="why-us-headline">Why us?</h2>
                </div>
                <p className="why-us-subheadline">
                    Because great media isn't just made, it's engineered with intent, clarity, and craft.
                </p>
            </div>

            <div className="why-us-grid">
                {/* 1. Collaborative Process (Span 2 col, 2 row) */}
                <div className="grid-card card-collaborative">
                    <span className="card-title">Collaborative Process</span>
                    <img src="/bentoCollab.webp" alt="Collaborative Process" className="card-bg-img" loading="lazy" />
                </div>

                {/* 2. 24/7 Support (Span 2 col, 1 row) */}
                <div className="grid-card card-support">
                    <span className="card-title">24/7 Support</span>
                    <img src="/bento6.png" alt="Collaborative Process" className="card-bg-img" loading="lazy" />
                </div>

                {/* 3. Cinematic Production (Span 2 col, 2 row) */}
                <div className="grid-card card-cinematic">
                    <span className="card-title dark-text">Cinematic<br />Production</span>
                    <img src="/image.png" alt="Cinematic Production" className="card-bg-img" loading="lazy" />
                </div>

                {/* 4. Speed without decay (Span 2 col, 1 row) */}
                <div className="grid-card card-speed">
                    <span className="card-title">Speed without decay</span>
                    <img src="/bentofast.webp" alt="Speed" className="card-bg-img" loading="lazy" />
                </div>

                {/* 5. Brand Identity Focused (Span 3 col) */}
                <div className="grid-card card-identity">
                    <span className="card-title">Brand Identity<br />Focused</span>
                    <img src="/bento5.webp" alt="camera" className="card-bg-img" loading="lazy" />
                </div>

                {/* 6. High Engagement Rates (Span 3 col) */}
                <div className="grid-card card-engagement">
                    <span className="card-title dark-text">High Engagement<br />Rates</span>
                    <img src="/bento8.png" alt="speaker" className="card-bg-img" loading="lazy" />
                </div>

                {/* 7. Content With Perfection (Span 2 col) */}
                <div className="grid-card card-perfection">
                    <span className="card-title">Content<br />With<br />Perfection<br />In Mind</span>
                    <img src="/bento2.png" alt="speaker" className="card-bg-img" loading="lazy" />
                </div>

                {/* 8. Flexible Pricing (Span 2 col) */}
                <div className="grid-card card-pricing">
                    <span className="card-title">Flexible Pricing</span>
                    <img src="/bento9.png" alt="speaker" className="card-bg-img" loading="lazy" />
                </div>

                {/* 9. Clear Creative Clarity (Span 2 col) */}
                <div className="grid-card card-clarity">
                    <span className="card-title">Clear<br />Creative<br />Clarity</span>
                    <img src="/bento10.png" alt="speaker" className="card-bg-img" loading="lazy" />
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
