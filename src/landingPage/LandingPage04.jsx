import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style04.css";

const LandingPage04 = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // cover entrance
        const tlIn = gsap.timeline({ defaults: { ease: "power3.out" } });
        tlIn.to(".badge", { y: 0, opacity: 1, duration: 0.5 })
            .to("h1", { y: 0, scale: 1, opacity: 1, duration: 0.8 }, "-=0.1")
            .to(".subtitle", { y: 0, opacity: 1, duration: 0.6 }, "-=0.25")
            .to(".accent-line", { y: 0, opacity: 1, duration: 0.5 }, "-=0.35")
            .to(".tags", { y: 0, opacity: 1, duration: 0.6 }, "-=0.2")
            .to(".footer-row", { y: 0, opacity: 1, duration: 0.6 }, "-=0.25");

        // headline shimmer
        const shimmer = document.createElement("span");
        shimmer.style.position = "absolute";
        shimmer.style.inset = "-40%";
        shimmer.style.pointerEvents = "none";
        shimmer.style.background =
            "linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.35) 45%, rgba(255,255,255,.75) 50%, rgba(255,255,255,.35) 55%, rgba(255,255,255,0) 100%)";
        shimmer.style.transform = "translateX(-130%) rotate(12deg)";
        shimmer.style.opacity = "0";

        const cardCover = document.querySelector(".card-cover");
        if (cardCover) {
            cardCover.appendChild(shimmer);
            gsap.set(shimmer, { opacity: 0 });
            gsap.to(shimmer, { opacity: 1, x: "160%", duration: 0.9, ease: "power2.out", delay: 0.9 });
            gsap.to(shimmer, { opacity: 0, duration: 0.2, delay: 1.85 });
        }

        // parallax orbs
        const orbs = gsap.utils.toArray(".orb");
        const handleMouse = (e) => {
            const x = e.clientX / window.innerWidth - 0.5;
            const y = e.clientY / window.innerHeight - 0.5;
            gsap.to(orbs[0], { x: x * 30, y: y * 30, duration: 0.6, ease: "power2.out" });
            gsap.to(orbs[1], { x: -x * 40, y: -y * 20, duration: 0.6, ease: "power2.out" });
        };
        window.addEventListener("mousemove", handleMouse);

        // scroll reveal
        gsap.to(".card", {
            scrollTrigger: { trigger: ".wrap", start: "top 75%", toggleActions: "play none none reverse" },
            y: 0, scale: 1, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.18
        });
        gsap.to(".result", {
            scrollTrigger: { trigger: ".result", start: "top 80%", toggleActions: "play none none reverse" },
            y: 0, opacity: 1, duration: 0.8, ease: "power3.out"
        });

        return () => {
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);

    return (
        <div>
            <section className="canvas" id="top">
                <div className="overlay"></div>
                <div className="grain"></div>
                <div className="orb a"></div>
                <div className="orb b"></div>

                <div className="card-cover">
                    <span className="badge">Case Study • Motion + Front‑End</span>
                    <h1>Hero Animation & Interactive Theme Switcher</h1>
                    <p className="subtitle">Cinematic hierarchy, accessible motion, and production‑grade engineering.
                        Designed first, built with performance and maintainability in mind.</p>
                    <div className="accent-line"></div>
                    <div className="tags">
                        <span className="tag">GSAP Timeline</span>
                        <span className="tag">Letter‑by‑Letter CTA</span>
                        <span className="tag">IntersectionObserver</span>
                        <span className="tag">Theme Crossfade</span>
                        <span className="tag">Design Tokens</span>
                        <span className="tag">Reduced Motion</span>
                    </div>
                    <div className="footer-row">
                        <div className="left">UX/UI • Motion • Front‑End</div>
                        <div className="right">
                            <span className="pill">Responsive</span>
                            <span className="pill">Accessible</span>
                            <span className="pill">Performance‑Optimized</span>
                        </div>
                    </div>

                    <div className="cta-rounds">
                        <div className="round-wrap">
                            <button className="round-btn" id="toTop" aria-label="Back to Top" title="Back to Top">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#0e1a3a" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="M12 19V5"></path>
                                    <path d="M5 12l7-7 7 7"></path>
                                </svg>
                            </button>
                            <div className="round-label">Back to Top</div>
                        </div>
                        <div className="round-wrap">
                            <button className="round-btn" id="toNext" aria-label="Next Section" title="Next Section">
                                <svg viewBox="0 0 24 24" fill="none" stroke="#0e1a3a" stroke-width="2"
                                     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <path d="M12 5v14"></path>
                                    <path d="M19 12l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="round-label">Next Section</div>
                        </div>
                    </div>
                </div>
            </section>

            {/*!--DIVIDER--*/}
            <div className="section-divider">
                <div className="beam"></div>
            </div>

            {/*!--TWO - COLUMN BREAKDOWN --*/}
            <section className="wrap" id="breakdown">
                <div className="columns">
                    <section className="card" id="design">
                        <div className="icon">🎨</div>
                        <h2>Design Goals</h2>
                        <ul>
                            <li>Establish brand presence instantly through cinematic animation.</li>
                            <li>Guide the eye from caption → headline → subtext → CTA.</li>
                            <li>Add engagement with an animated background switcher (manual + auto‑rotate).</li>
                            <li>Keep motion purposeful, supporting the UX narrative and clarity.</li>
                            <li>Ensure accessible, responsive performance across devices.</li>
                        </ul>
                    </section>

                    <section className="card" id="tech">
                        <div className="icon">💻</div>
                        <h2>Technical Approach</h2>
                        <ul>
                            <li>Semantic HTML5, logical DOM order, accessible roles/labels.</li>
                            <li>CSS custom properties for theme tokens (type, color, spacing, backgrounds).</li>
                            <li>Fluid responsiveness with <code>clamp()</code> & relative units, minimal media queries.
                            </li>
                            <li>GSAP timeline with labels, advanced easing, and staggered sequences.</li>
                            <li>Custom JS text‑splitting for letter‑by‑letter CTA animation (no external plugins).</li>
                            <li>GPU transforms + <code>will-change</code>, released post‑animation for efficiency.</li>
                            <li>IntersectionObserver to play/pause by viewport visibility.</li>
                            <li>Crossfade overlay + preload/prefetch + error fallbacks for backgrounds.</li>
                            <li><code>prefers-reduced-motion</code> support; lifecycle management for timers.</li>
                            <li>Centralized CONFIG object for timings, amplitudes, and easing.</li>
                        </ul>
                    </section>
                </div>

                <div className="result">
                    Result: a visually engaging, accessible, and performance‑optimized hero that bridges design vision
                    and production‑ready engineering.
                </div>
            </section>
        </div>
    );
};

export default LandingPage04;
