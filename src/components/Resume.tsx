import "./styles/Resume.css";
import { MdArrowOutward } from "react-icons/md";
import { useCallback } from "react";

const Resume = () => {
    const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Create ripple
        const ripple = document.createElement("span");
        ripple.className = "resume-btn-ripple";
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        btn.appendChild(ripple);

        // Create particles
        const particleCount = 12;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("span");
            particle.className = "resume-btn-particle";
            const angle = (360 / particleCount) * i;
            const distance = 40 + Math.random() * 40;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.setProperty("--tx", `${Math.cos((angle * Math.PI) / 180) * distance}px`);
            particle.style.setProperty("--ty", `${Math.sin((angle * Math.PI) / 180) * distance}px`);
            particle.style.animationDelay = `${Math.random() * 0.1}s`;
            btn.appendChild(particle);
            particle.addEventListener("animationend", () => particle.remove());
        }

        ripple.addEventListener("animationend", () => ripple.remove());
    }, []);

    return (
        <div className="resume-section section-container" id="resume">
            <div className="resume-container">
                <h3 className="section-heading">Resume</h3>
                <p className="resume-subtitle">
                    My professional journey and work experience
                </p>

                <div className="resume-download">
                    <a
                        href="https://drive.google.com/file/d/1AsaXB91m6dvwKFcyBVRQLTx_5ZWaDKg3/view?usp=sharing"
                        className="resume-btn"
                        data-cursor="disable"
                        target="_blank"
                        onClick={handleClick}
                    >
                        Download Resume <MdArrowOutward />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Resume;
