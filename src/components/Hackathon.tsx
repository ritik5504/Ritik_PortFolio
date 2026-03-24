import "./styles/Hackathon.css";
import { MdArrowOutward } from "react-icons/md";

const hackathonData = [
    {
        name: "Build-a-Thon Hackathon",
        year: "Dec 2025",
        result: "5th Place",
        project: "Full Stack Web Application",
        description:
            "Competed in the Build-a-Thon Hackathon organized by Apna College at Lovely Professional University (LPU). Built a complete full-stack web application under time pressure, demonstrating rapid prototyping, teamwork, and problem-solving skills. Secured 5th place among numerous competing teams.",
        tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
        link: "",
    },
];

const Hackathon = () => {
    return (
        <div className="hackathon-section section-container" id="hackathon">
            <div className="hackathon-container">
                <h3 className="section-heading">Hackathons</h3>
                <p className="hackathon-subtitle">
                    Building cool things under pressure
                </p>

                <div className="hackathon-grid">
                    {hackathonData.map((hack, index) => (
                        <div className="hackathon-card" key={index}>
                            <div className="hackathon-card-top">
                                <div className="hackathon-result">{hack.result}</div>
                                <span className="hackathon-year">{hack.year}</span>
                            </div>
                            <h4 className="hackathon-name">{hack.name}</h4>
                            <h5 className="hackathon-project">{hack.project}</h5>
                            <p>{hack.description}</p>
                            <div className="hackathon-tags">
                                {hack.tags.map((tag, i) => (
                                    <span className="hackathon-tag" key={i}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {hack.link && hack.link !== "#" && (
                                <a
                                    href={hack.link}
                                    target="_blank"
                                    className="hackathon-link"
                                    data-cursor="disable"
                                >
                                    View Project <MdArrowOutward />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hackathon;
