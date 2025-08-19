import React, {useEffect} from 'react';
import './style02.css';

const LandingPage02 = () => {

    useEffect(() => {
        // Theme Switcher
        const themeSwitch = document.querySelector('.theme-switch');
        if (!themeSwitch) return;

        const moonIcon = `<svg class="icon" viewBox="0 0 24 24">
      <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
    </svg>`;
        const sunIcon = `<svg class="icon" viewBox="0 0 24 24">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06z"/>
    </svg>`;

        const handleThemeSwitch = () => {
            const currentTheme = document.body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', newTheme);
            themeSwitch.innerHTML = newTheme === 'light' ? sunIcon : moonIcon;
        };

        themeSwitch.addEventListener('click', handleThemeSwitch);

        // Cleanup on unmount
        return () => themeSwitch.removeEventListener('click', handleThemeSwitch);
    }, []);

    useEffect(() => {
        // Portfolio Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '50px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const items = document.querySelectorAll('.portfolio-item');
        items.forEach(item => observer.observe(item));

        return () => items.forEach(item => observer.unobserve(item));
    }, []);

    useEffect(() => {
        // Form Validation
        const form = document.querySelector('form');
        if (!form) return;

        const inputs = form.querySelectorAll('.form-input');

        function validateInput(input) {
            const formGroup = input.closest('.form-group');
            if (!formGroup) return;

            if (input.type === 'email') {
                const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
                formGroup.classList.toggle('error', !isValid);
            } else if (input.tagName === 'TEXTAREA') {
                formGroup.classList.toggle('error', input.value.length < 10);
            } else {
                formGroup.classList.toggle('error', input.value.trim() === '');
            }
        }

        inputs.forEach(input => {
            input.addEventListener('blur', () => validateInput(input));
            input.addEventListener('input', () => validateInput(input));
        });

        const handleSubmit = (e) => {
            e.preventDefault();
            let isValid = true;

            inputs.forEach(input => {
                validateInput(input);
                if (input.closest('.form-group')?.classList.contains('error')) {
                    isValid = false;
                }
            });

            if (isValid) {
                const btn = form.querySelector('button');
                if (!btn) return;
                const originalContent = btn.innerHTML;

                btn.innerHTML = `<svg class="icon" viewBox="0 0 24 24">
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg> Sent!`;
                btn.style.background = 'var(--success)';

                setTimeout(() => {
                    form.reset();
                    btn.innerHTML = originalContent;
                    btn.style.background = '';
                }, 3000);
            }
        };

        form.addEventListener('submit', handleSubmit);
        return () => form.removeEventListener('submit', handleSubmit);
    }, []);

    useEffect(() => {
        // Smooth Scroll
        const anchors = document.querySelectorAll('a[href^="#"]');
        const handleClick = function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        anchors.forEach(anchor => anchor.addEventListener('click', handleClick));
        return () => anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
    }, []);

    return (
        <div>
            <header className="header">
                <nav className="nav container">
                    <a href="#" className="logo">
                        <svg className="icon" viewBox="0 0 24 24">
                            <path d="M12 2L1 21h22L12 2zm0 3.83L19.17 19H4.83L12 5.83z"/>
                        </svg>
                        Creative
                    </a>
                    <div className="nav-menu">
                        <a href="#work" className="nav-link">Work</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                </nav>
            </header>

            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">Crafting Digital Experiences</h1>
                        <p className="hero-text">
                            Transforming ideas into beautiful and functional digital solutions through creative design
                            and development.
                        </p>
                        <a href="#work" className="btn">
                            View Work
                            <svg className="icon" viewBox="0 0 24 24">
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="work" className="section">
                <div className="container">
                    <header className="section-header">
                        <h2 className="section-title">Selected Work</h2>
                        <p className="section-subtitle">A collection of projects that showcase my expertise and
                            creativity</p>
                    </header>

                    <div className="portfolio-grid">
                        <article className="portfolio-item">
                            <img src="https://dummyimage.com/600x400/000/fff" alt="Project 1"
                                 className="portfolio-image"/>
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">E-commerce Platform</h3>
                                <p className="portfolio-description">A modern e-commerce solution with advanced features
                                    and analytics.</p>
                                <div className="tags">
                                    <span className="tag">React</span>
                                    <span className="tag">Node.js</span>
                                    <span className="tag">MongoDB</span>
                                </div>
                            </div>
                        </article>

                        <article className="portfolio-item">
                            <img src="https://dummyimage.com/600x400/000/fff" alt="Project 2"
                                 className="portfolio-image"/>
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">Portfolio Website</h3>
                                <p className="portfolio-description">A responsive portfolio website with smooth
                                    animations and dark mode.</p>
                                <div className="tags">
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">JavaScript</span>
                                </div>
                            </div>
                        </article>

                        <article className="portfolio-item">
                            <img src="https://dummyimage.com/600x400/000/fff" alt="Project 3"
                                 className="portfolio-image"/>
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">Mobile App</h3>
                                <p className="portfolio-description">A cross-platform mobile application with real-time
                                    features.</p>
                                <div className="tags">
                                    <span className="tag">React Native</span>
                                    <span className="tag">Firebase</span>
                                    <span className="tag">Redux</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="contact" className="section">
                <div className="container">
                    <header className="section-header">
                        <h2 className="section-title">Get in Touch</h2>
                        <p className="section-subtitle">Have a project in mind? Let's create something amazing
                            together.</p>
                    </header>

                    <div className="contact">
                        <form className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-input" name="name" required/>
                                <span className="form-error">Please enter your name</span>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" name="email" required/>
                                <span className="form-error">Please enter a valid email</span>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-input" name="message" required minLength="10"
                                          placeholder="Tell me about your project..."></textarea>
                                <span className="form-error">Message must be at least 10 characters</span>
                            </div>

                            <button type="submit" className="btn">
                                Send Message
                                <svg className="icon" viewBox="0 0 24 24">
                                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <button className="theme-switch" aria-label="Toggle theme">
                <svg className="icon" viewBox="0 0 24 24">
                    <path
                        d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
                </svg>
            </button>
        </div>
    );
};

export default LandingPage02;
