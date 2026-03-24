import "./styles/Skills.css";

const skillCategories = [
    {
        category: "Frontend",
        skills: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Material UI",
        ],
    },
    {
        category: "Backend",
        skills: [
            "Node.js",
            "Express.js",
            "Python",
            "REST APIs",
            "GraphQL",
            "MongoDB",
            "PostgreSQL",
            "MySQL",
        ],
    },
    {
        category: "Tools & DevOps",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "VS Code",
            "Postman",
            "Figma",
            "Vercel",
            "Netlify",
        ],
    },
    {
        category: "Other",
        skills: [
            "Data Structures",
            "Algorithms",
            "Problem Solving",
            "Agile",
            "CI/CD",
            "Linux",
        ],
    },
];

const Skills = () => {
    return (
        <div className="skills-section section-container" id="skills">
            <div className="skills-container">
                <h3 className="section-heading">Skills</h3>
                <p className="skills-subtitle">Technologies and tools I work with</p>

                <div className="skills-grid">
                    {skillCategories.map((cat, index) => (
                        <div className="skills-category" key={index}>
                            <h4 className="skills-category-title">{cat.category}</h4>
                            <div className="skills-tags">
                                {cat.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
