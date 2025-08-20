import React, { useEffect } from "react";
import "./style03.css";

const products = [
    {
        id: 1,
        delay: 0,
        title: "Red Bull Wild Berry",
        desc: "Delicious wild berry energy drink.",
        img: "https://snackje.com/wp-content/uploads/2023/12/Red-Bull-Wild-Berry-250ml-300x300.webp",
    },
    {
        id: 2,
        delay: 200,
        title: "Red Bull Wild Berry",
        desc: "Refreshing wild berry flavor.",
        img: "https://snackje.com/wp-content/uploads/2023/12/Red-Bull-Wild-Berry-250ml-300x300.webp",
    },
    {
        id: 3,
        delay: 400,
        title: "Red Bull Wild Berry",
        desc: "Energy that tastes great!",
        img: "https://snackje.com/wp-content/uploads/2023/12/Red-Bull-Wild-Berry-250ml-300x300.webp",
    },
    {
        id: 4,
        delay: 600,
        title: "Red Bull Wild Berry",
        desc: "Your daily energy boost.",
        img: "https://snackje.com/wp-content/uploads/2023/12/Red-Bull-Wild-Berry-250ml-300x300.webp",
    },
    {
        id: 5,
        delay: 800,
        title: "Red Bull Wild Berry",
        desc: "Experience the berry energy.",
        img: "https://snackje.com/wp-content/uploads/2023/12/Red-Bull-Wild-Berry-250ml-300x300.webp",
    },
];

const LandingPage03 = () => {
    useEffect(() => {
        const productCards = document.querySelectorAll(".product-card");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const delay = entry.target.getAttribute("data-delay");
                        setTimeout(() => {
                            entry.target.classList.add("animate-bounce-in-place");
                            entry.target.classList.remove("opacity-0");
                        }, delay);
                        observer.unobserve(entry.target); // ✅ stop observing after animation
                    }
                });
            },
            { threshold: 0.2 }
        );

        productCards.forEach((card) => observer.observe(card));

        return () => observer.disconnect(); // cleanup when component unmounts
    }, []);

    return (
        <section className="w-full bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-12">Our Snacks</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white p-6 rounded-lg shadow hover-3d transition-transform duration-300 ease-in-out opacity-0 product-card"
                            data-delay={p.delay}
                        >
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <h3 className="mt-4 text-xl font-bold text-gray-800">{p.title}</h3>
                            <p className="text-gray-600 mt-2">{p.desc}</p>
                            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-all duration-300">
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LandingPage03;
