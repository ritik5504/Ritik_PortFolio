import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
const projects = [
    {
        title: "Apilogs — Real-Time Monitoring Platform",
        category: "Web Application",
        description: "Architected a real-time observability platform enabling applications to ingest logs via secure REST APIs and visualize activity through WebSocket dashboards",
        tools: ["React.js", "Node.js", "MongoDB"],
        image: "/images/apilogs.png",
        github: "https://github.com/ritik5504/apil_logs",
        live: "https://last-project-alpha.vercel.app/",
    },
    {
        title: "LangLeo Chatbot -AI-Powered Chat Application",
        category: " Web App",
        description: "LangLeo is an AI-powered chatbot designed to provide instant, intelligent responses to user queries. Built with Next.js and TypeScript, it leverages advanced NLP models to deliver seamless conversational experiences with real-time updates and personalized interactions.",
        tools: ["React.js", "Node.js", "MongoDB"],
        image: "/images/langleo.png",
        github: "https://github.com/ritik5504/langleo-chatbot",
        live: "https://langleo.netlify.app/",
    },
    {
        title: "K72 — Interactive React Animation Website",
        category: "Web Application",
        description: "K72 is a dynamic web application featuring advanced animations and interactive elements. Built with React.js, it delivers a seamless user experience through smooth transitions and engaging visuals.",
        tools: ["React.js", "Express.js", "Firebase"],
        image: "/images/k72.png",
        github: "https://github.com/ritik5504/k72",
        live: "https://k72-delta.vercel.app/",
    },
];
const Work = () => {
    return (_jsx("div", { className: "work-section", id: "work", children: _jsxs("div", { className: "work-container section-container", children: [_jsxs("h2", { children: ["My ", _jsx("span", { children: "Projects" })] }), _jsx("p", { className: "projects-subtitle", children: "Some things I've built \u2014 update these with your own projects" }), _jsx("div", { className: "projects-grid", children: projects.map((project, index) => (_jsxs("div", { className: "project-card", children: [_jsxs("div", { className: "project-image", children: [_jsx("img", { src: project.image, alt: project.title }), _jsx("div", { className: "project-overlay", children: _jsxs("div", { className: "project-links", children: [project.github && project.github !== "#" && (_jsxs("a", { href: project.github, target: "_blank", "data-cursor": "disable", className: "project-link-btn", children: ["GitHub ", _jsx(MdArrowOutward, {})] })), project.live && project.live !== "#" && (_jsxs("a", { href: project.live, target: "_blank", "data-cursor": "disable", className: "project-link-btn project-link-live", children: ["Live Demo ", _jsx(MdArrowOutward, {})] }))] }) })] }), _jsxs("div", { className: "project-info", children: [_jsxs("span", { className: "project-number", children: ["0", index + 1] }), _jsxs("div", { className: "project-details", children: [_jsx("h4", { children: project.title }), _jsx("p", { className: "project-category", children: project.category }), _jsx("p", { className: "project-desc", children: project.description }), _jsx("div", { className: "project-tools", children: project.tools.map((tool, i) => (_jsx("span", { className: "project-tool-tag", children: tool }, i))) })] })] })] }, index))) })] }) }));
};
export default Work;
