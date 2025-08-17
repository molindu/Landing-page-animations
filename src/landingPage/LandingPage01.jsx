import React, {useState} from "react";
import "./style01.css";

const teamMembers = [
    {
        name: "Emily Kim",
        role: "Founder",
        img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Michael Steward",
        role: "Creative Director",
        img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Emma Rodriguez",
        role: "Lead Developer",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        name: "Julia Gimmel",
        role: "UX Designer",
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
        name: "Lisa Anderson",
        role: "Marketing Manager",
        img: "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        name: "James Wilson",
        role: "Product Manager",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

const LandingPage01 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function getClassName(i) {
        const total = teamMembers.length;
        const offset = (i - currentIndex + total) % total;

        if (offset === 0) return "card center";
        if (offset === 1) return "card right-1";
        if (offset === 2) return "card right-2";
        if (offset === total - 1) return "card left-1";
        if (offset === total - 2) return "card left-2";
        return "card hidden";
    }

    function next() {
        setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }

    function prev() {
        setCurrentIndex((prev) =>
            prev === 0 ? teamMembers.length - 1 : prev - 1
        );
    }

    return (
        <>
            <h1 className="about-title">OUR TEAM</h1>

            <button className="nav-arrow left" onClick={prev}>
                ‹
            </button>
            <div className="carousel-container">

                <div className="carousel-track">
                    {teamMembers.map((member, i) => (
                        <div key={i} className={getClassName(i)}>
                            <img src={member.img} alt={member.name}/>
                        </div>
                    ))}
                </div>

            </div>
            <button className="nav-arrow right" onClick={next}>
                ›
            </button>

            <div className="member-info">
                <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
                <p className="member-role">{teamMembers[currentIndex].role}</p>
            </div>

            <div className="dots">
                {teamMembers.map((_, i) => (
                    <div
                        key={i}
                        className={`dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(i)}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default LandingPage01;
