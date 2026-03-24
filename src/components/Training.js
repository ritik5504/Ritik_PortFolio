import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Training.css";
import { MdSchool } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
const trainingData = [
    {
        name: "Ritik Raj",
        institution: "Lovely Professional University",
        program: "Data Structures and Algorithms",
        provider: "CipherSchools",
        period: "July 2025",
        certificateLink: "https://drive.google.com/file/d/1BHzUZggujoi46XUT4IZJqgaAyWwuYrsK/view?usp=sharing",
    },
];
const Training = () => {
    return (_jsx("div", { className: "training-section section-container", id: "training", children: _jsxs("div", { className: "training-container", children: [_jsx("h3", { className: "section-heading", children: "Training" }), _jsx("div", { className: "training-list", children: trainingData.map((t, index) => (_jsxs("div", { className: "training-card", children: [_jsx("div", { className: "training-icon", children: _jsx(MdSchool, {}) }), _jsxs("div", { className: "training-details", children: [_jsx("h4", { className: "training-program", children: t.program }), _jsx("span", { className: "training-provider", children: t.provider }), _jsxs("p", { className: "training-description", children: ["Completed training from", " ", _jsx("strong", { children: t.provider }), " during", " ", _jsx("strong", { children: t.period }), ", while studying at ", _jsx("strong", { children: t.institution }), "."] }), _jsx("span", { className: "training-period", children: t.period }), _jsxs("a", { href: t.certificateLink, target: "_blank", rel: "noopener noreferrer", className: "training-cert-link", "data-cursor": "disable", children: ["View Certificate ", _jsx(MdArrowOutward, {})] })] })] }, index))) })] }) }));
};
export default Training;
