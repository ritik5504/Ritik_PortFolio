import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx("div", { className: "skills-section section-container", id: "skills", children: _jsxs("div", { className: "skills-container", children: [_jsx("h3", { className: "section-heading", children: "Skills" }), _jsx("p", { className: "skills-subtitle", children: "Technologies and tools I work with" }), _jsx("div", { className: "skills-grid", children: skillCategories.map((cat, index) => (_jsxs("div", { className: "skills-category", children: [_jsx("h4", { className: "skills-category-title", children: cat.category }), _jsx("div", { className: "skills-tags", children: cat.skills.map((skill, i) => (_jsx("span", { className: "skill-tag", children: skill }, i))) })] }, index))) })] }) }));
};
export default Skills;
