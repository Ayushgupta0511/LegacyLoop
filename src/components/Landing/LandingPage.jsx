import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const revealRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        revealRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const addRevealRef = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    const features = [
        {
            id: 'peer-to-peer',
            title: 'Peer-to-Peer',
            icon: '🤝',
            description: 'Exchange items directly with fellow students on campus',
            color: '#6366f1',
            bg: '#eef2ff',
            stat: '2.4k+ items'
        },
        {
            id: 'faculty-staff',
            title: 'Faculty & Staff',
            icon: '👨‍🏫',
            description: 'Discover items from professors and campus staff',
            color: '#059669',
            bg: '#ecfdf5',
            stat: '800+ items'
        },
        {
            id: 'lost-found',
            title: 'Lost & Found',
            icon: '🔍',
            description: 'Report lost items or help reunite found belongings',
            color: '#d97706',
            bg: '#fffbeb',
            stat: '340+ reunited'
        },
        {
            id: 'free-giveaway',
            title: 'Free Giveaways',
            icon: '🎁',
            description: 'Give away items you no longer need to those who do',
            color: '#e11d48',
            bg: '#fff1f2',
            stat: '1.2k+ gifted'
        }
    ];

    const categories = [
        { icon: '📚', name: 'Academic', count: '850+' },
        { icon: '💻', name: 'Electronics', count: '420+' },
        { icon: '🛏️', name: 'Dorm Essentials', count: '630+' },
        { icon: '👕', name: 'Clothing', count: '310+' },
        { icon: '🎸', name: 'Hobbies', count: '220+' },
        { icon: '🍳', name: 'Kitchen', count: '180+' }
    ];

    const steps = [
        {
            num: '01',
            title: 'List Your Item',
            description: 'Snap a photo, add a description, and set your price — or give it away for free.',
            icon: '📸'
        },
        {
            num: '02',
            title: 'Connect',
            description: 'Students browse, search, and find exactly what they need on campus.',
            icon: '🔗'
        },
        {
            num: '03',
            title: 'Meet & Exchange',
            description: 'Arrange a safe campus meetup and complete the exchange. Simple!',
            icon: '✨'
        }
    ];

    const testimonials = [
        {
            text: "Sold all my textbooks in one weekend! Saved so much compared to the bookstore buyback.",
            name: 'Priya Sharma',
            role: '3rd Year, Computer Science',
            avatar: '👩‍💻'
        },
        {
            text: "Found a barely-used desk lamp for free. LegacyLoop is a lifesaver for freshers!",
            name: 'Arjun Patel',
            role: '1st Year, Mechanical',
            avatar: '🧑‍🔧'
        },
        {
            text: "Lost my calculator before exams and someone returned it through Lost & Found. Amazing community!",
            name: 'Sneha Reddy',
            role: '2nd Year, Electronics',
            avatar: '👩‍🎓'
        }
    ];

    return (
        <div className="landing">
            {/* ===== HERO SECTION ===== */}
            <section className="hero">
                <div className="hero-bg-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>

                <div className="hero-content">
                    <div className="hero-badge" ref={addRevealRef}>
                        <span className="badge-dot"></span>
                        Campus Marketplace — Live Now
                    </div>

                    <h1 className="hero-title" ref={addRevealRef}>
                        Pass It On,<br />
                        <span className="hero-gradient">Keep the Loop Alive</span>
                    </h1>

                    <p className="hero-subtitle" ref={addRevealRef}>
                        LegacyLoop connects students to exchange textbooks, dorm essentials, 
                        electronics, and more — all within your campus community.
                    </p>

                    <div className="hero-actions" ref={addRevealRef}>
                        <button
                            className="btn btn-primary btn-hero"
                            onClick={() => navigate('/dashboard')}
                            id="hero-explore-btn"
                        >
                            Explore Marketplace
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                        <button
                            className="btn btn-secondary btn-hero"
                            onClick={() => navigate('/add-item')}
                            id="hero-list-btn"
                        >
                            + List an Item
                        </button>
                    </div>

                    <div className="hero-stats" ref={addRevealRef}>
                        <div className="stat-item">
                            <span className="stat-number">4,800+</span>
                            <span className="stat-label">Items Listed</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">3,200+</span>
                            <span className="stat-label">Happy Students</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">₹12L+</span>
                            <span className="stat-label">Saved by Students</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual" ref={addRevealRef}>
                    <div className="floating-cards">
                        <div className="float-card float-card-1">
                            <span className="float-icon">📚</span>
                            <div>
                                <strong>DSA Textbook</strong>
                                <span>₹250 · Like New</span>
                            </div>
                        </div>
                        <div className="float-card float-card-2">
                            <span className="float-icon">🎁</span>
                            <div>
                                <strong>Free Desk Lamp</strong>
                                <span>Giveaway · Good</span>
                            </div>
                        </div>
                        <div className="float-card float-card-3">
                            <span className="float-icon">💻</span>
                            <div>
                                <strong>USB-C Hub</strong>
                                <span>₹800 · New</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FEATURES / BROWSE SECTIONS ===== */}
            <section className="features-section" id="features">
                <div className="section-container">
                    <div className="section-header" ref={addRevealRef}>
                        <span className="section-tag">Browse</span>
                        <h2>Four Ways to Exchange</h2>
                        <p>Whether you're buying, selling, or giving away — there's a spot for everything.</p>
                    </div>

                    <div className="features-grid" ref={addRevealRef}>
                        {features.map((feature, index) => (
                            <div
                                key={feature.id}
                                className="feature-card"
                                onClick={() => navigate(`/categories/${feature.id}`)}
                                style={{
                                    '--card-color': feature.color,
                                    '--card-bg': feature.bg,
                                    animationDelay: `${index * 0.1}s`
                                }}
                                id={`feature-${feature.id}`}
                            >
                                <div className="feature-icon-wrap">
                                    <span className="feature-icon">{feature.icon}</span>
                                </div>
                                <div className="feature-body">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                                <div className="feature-footer">
                                    <span className="feature-stat">{feature.stat}</span>
                                    <span className="feature-arrow">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 17l9.2-9.2M17 17V7H7"/>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CATEGORIES RIBBON ===== */}
            <section className="categories-section">
                <div className="section-container">
                    <div className="section-header" ref={addRevealRef}>
                        <span className="section-tag">Categories</span>
                        <h2>Find What You Need</h2>
                        <p>Browse through popular categories across campus.</p>
                    </div>

                    <div className="categories-ribbon" ref={addRevealRef}>
                        {categories.map((cat, i) => (
                            <div
                                key={cat.name}
                                className="cat-chip"
                                style={{ animationDelay: `${i * 0.08}s` }}
                            >
                                <span className="cat-icon">{cat.icon}</span>
                                <span className="cat-name">{cat.name}</span>
                                <span className="cat-count">{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS ===== */}
            <section className="how-section">
                <div className="section-container">
                    <div className="section-header" ref={addRevealRef}>
                        <span className="section-tag">How It Works</span>
                        <h2>Three Simple Steps</h2>
                        <p>Get started in under a minute — no hassle, no middlemen.</p>
                    </div>

                    <div className="steps-grid" ref={addRevealRef}>
                        {steps.map((step, i) => (
                            <div key={step.num} className="step-card" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="step-num">{step.num}</div>
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                                {i < steps.length - 1 && <div className="step-connector"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="testimonials-section">
                <div className="section-container">
                    <div className="section-header" ref={addRevealRef}>
                        <span className="section-tag">Testimonials</span>
                        <h2>What Students Say</h2>
                        <p>Real stories from real students on campus.</p>
                    </div>

                    <div className="testimonials-grid" ref={addRevealRef}>
                        {testimonials.map((t, i) => (
                            <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.12}s` }}>
                                <div className="testimonial-quote">"</div>
                                <p className="testimonial-text">{t.text}</p>
                                <div className="testimonial-author">
                                    <span className="testimonial-avatar">{t.avatar}</span>
                                    <div>
                                        <strong>{t.name}</strong>
                                        <span>{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== GRADUATING SOON BANNER ===== */}
            <section className="grad-banner" ref={addRevealRef}>
                <div className="section-container">
                    <div className="grad-inner">
                        <div className="grad-content">
                            <span className="grad-emoji">🎓</span>
                            <h2>Graduating Soon?</h2>
                            <p>Don't throw it away — pass your stuff to juniors who need it. List everything in one go!</p>
                        </div>
                        <button
                            className="btn btn-primary btn-large"
                            onClick={() => navigate('/graduating-soon')}
                            id="grad-cta-btn"
                        >
                            View Graduating Deals
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* ===== FINAL CTA ===== */}
            <section className="cta-section" ref={addRevealRef}>
                <div className="section-container">
                    <div className="cta-inner">
                        <h2>Ready to Join the Loop?</h2>
                        <p>Start buying, selling, or gifting on campus today.</p>
                        <div className="cta-actions">
                            <button
                                className="btn btn-primary btn-hero"
                                onClick={() => navigate('/dashboard')}
                                id="final-cta-btn"
                            >
                                Get Started
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7"/>
                                </svg>
                            </button>
                            <button
                                className="btn btn-secondary btn-hero"
                                onClick={() => navigate('/wishlist')}
                                id="wishlist-cta-btn"
                            >
                                📋 View Wishlist Board
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <footer className="landing-footer">
                <div className="section-container">
                    <div className="footer-inner">
                        <div className="footer-brand">
                            <span className="footer-logo">🔁</span>
                            <span className="footer-name">LegacyLoop</span>
                        </div>
                        <p className="footer-tagline">Pass it on. Keep the loop alive.</p>
                        <div className="footer-links">
                            <a onClick={() => navigate('/dashboard')}>Marketplace</a>
                            <a onClick={() => navigate('/wishlist')}>Wishlist</a>
                            <a onClick={() => navigate('/graduating-soon')}>Graduating Soon</a>
                            <a onClick={() => navigate('/add-item')}>List Item</a>
                        </div>
                        <p className="footer-copy">© 2026 LegacyLoop. Built with 💜 for students, by students.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
