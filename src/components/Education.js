import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Education.css";
const educationData = [
    {
        degree: "B.Tech in Computer Science",
        institution: "Lovely Professional University",
        period: "2023 — 2027",
        grade: "CGPA: 6.9 / 10",
        description: "Focused on software engineering, data structures, algorithms, and web technologies. Active participant in coding clubs and hackathons.",
    },
    {
        degree: "Higher Secondary (12th)",
        institution: "MBBS",
        period: "2020 — 2022",
        grade: "Percentage: 64%",
        description: "Science stream with Computer Science. Developed early interest in programming and competitive coding.",
    },
    {
        degree: "Secondary (10th)",
        institution: "Cambridge School",
        period: "2020",
        grade: "Percentage: 73%",
        description: "Strong academic foundation with distinction in Mathematics and Science.",
    },
];
const Education = () => {
    return (_jsx("div", { className: "education-section section-container", id: "education", children: _jsxs("div", { className: "education-container", children: [_jsx("h3", { className: "section-heading", children: "Education" }), _jsx("p", { className: "education-subtitle", children: "My academic background" }), _jsx("div", { className: "education-grid", children: educationData.map((edu, index) => (_jsxs("div", { className: "education-card", children: [_jsx("div", { className: "education-card-accent" }), _jsxs("div", { className: "education-card-content", children: [_jsxs("div", { className: "education-card-header", children: [_jsx("h4", { children: edu.degree }), _jsx("span", { className: "education-period", children: edu.period })] }), _jsx("h5", { children: edu.institution }), _jsx("span", { className: "education-grade", children: edu.grade }), _jsx("p", { children: edu.description })] })] }, index))) })] }) }));
};
export default Education;
