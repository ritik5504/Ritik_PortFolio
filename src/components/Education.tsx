import "./styles/Education.css";

const educationData = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Lovely Professional University",
        period: "2023 — 2027",
        grade: "CGPA: 6.9 / 10",
        description:
            "Focused on software engineering, data structures, algorithms, and web technologies. Active participant in coding clubs and hackathons.",
    },
    {
        degree: "Higher Secondary (12th)",
        institution: "MBBS",
        period: "2020 — 2022",
        grade: "Percentage: 64%",
        description:
            "Science stream with Computer Science. Developed early interest in programming and competitive coding.",
    },
    {
        degree: "Secondary (10th)",
        institution: "Cambridge School",
        period: "2020",
        grade: "Percentage: 73%",
        description:
            "Strong academic foundation with distinction in Mathematics and Science.",
    },
];

const Education = () => {
    return (
        <div className="education-section section-container" id="education">
            <div className="education-container">
                <h3 className="section-heading">Education</h3>
                <p className="education-subtitle">My academic background</p>

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={index}>
                            <div className="education-card-accent"></div>
                            <div className="education-card-content">
                                <div className="education-card-header">
                                    <h4>{edu.degree}</h4>
                                    <span className="education-period">{edu.period}</span>
                                </div>
                                <h5>{edu.institution}</h5>
                                <span className="education-grade">{edu.grade}</span>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;
