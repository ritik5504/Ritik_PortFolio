import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const WhatIDo = () => {
    const containerRef = useRef([]);
    const setRef = (el, index) => {
        containerRef.current[index] = el;
    };
    useEffect(() => {
        if (ScrollTrigger.isTouch) {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.classList.remove("what-noTouch");
                    container.addEventListener("click", () => handleClick(container));
                }
            });
        }
        return () => {
            containerRef.current.forEach((container) => {
                if (container) {
                    container.removeEventListener("click", () => handleClick(container));
                }
            });
        };
    }, []);
    return (_jsxs("div", { className: "whatIDO", children: [_jsx("div", { className: "what-box", children: _jsxs("h2", { className: "title", children: ["W", _jsx("span", { className: "hat-h2", children: "HAT" }), _jsxs("div", { children: ["I", _jsx("span", { className: "do-h2", children: " DO" })] })] }) }), _jsx("div", { className: "what-box", children: _jsxs("div", { className: "what-box-in", children: [_jsx("div", { className: "what-border2", children: _jsxs("svg", { width: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "0", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" }), _jsx("line", { x1: "100%", y1: "0", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "7,7" })] }) }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 0), children: [_jsx("div", { className: "what-border1", children: _jsxs("svg", { height: "100%", children: [_jsx("line", { x1: "0", y1: "0", x2: "100%", y2: "0", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }), _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" })] }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "FRONTEND" }), _jsx("h4", { children: "Building Interactive UIs" }), _jsx("p", { children: "Crafting performant, responsive interfaces with modern frameworks. From SPAs to micro-frontends, I deliver pixel-perfect experiences." }), _jsx("h5", { children: "Skillset & tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "React.js" }), _jsx("div", { className: "what-tags", children: "Angular" }), _jsx("div", { className: "what-tags", children: "Next.js" }), _jsx("div", { className: "what-tags", children: "TypeScript" }), _jsx("div", { className: "what-tags", children: "JavaScript" }), _jsx("div", { className: "what-tags", children: "Material UI" }), _jsx("div", { className: "what-tags", children: "HTML5" }), _jsx("div", { className: "what-tags", children: "CSS3" })] }), _jsx("div", { className: "what-arrow" })] })] }), _jsxs("div", { className: "what-content what-noTouch", ref: (el) => setRef(el, 1), children: [_jsx("div", { className: "what-border1", children: _jsx("svg", { height: "100%", children: _jsx("line", { x1: "0", y1: "100%", x2: "100%", y2: "100%", stroke: "white", strokeWidth: "2", strokeDasharray: "6,6" }) }) }), _jsx("div", { className: "what-corner" }), _jsxs("div", { className: "what-content-in", children: [_jsx("h3", { children: "BACKEND" }), _jsx("h4", { children: "Scalable Server Architecture" }), _jsx("p", { children: "Designing robust APIs and microservices. From CMS platforms to complex business logic, I build backends that scale." }), _jsx("h5", { children: "Skillset & tools" }), _jsxs("div", { className: "what-content-flex", children: [_jsx("div", { className: "what-tags", children: "Node.js" }), _jsx("div", { className: "what-tags", children: "NestJS" }), _jsx("div", { className: "what-tags", children: "Express.js" }), _jsx("div", { className: "what-tags", children: "MongoDB" }), _jsx("div", { className: "what-tags", children: "PostgreSQL" }), _jsx("div", { className: "what-tags", children: "REST APIs" }), _jsx("div", { className: "what-tags", children: "Microservices" }), _jsx("div", { className: "what-tags", children: "Python" })] }), _jsx("div", { className: "what-arrow" })] })] })] }) })] }));
};
export default WhatIDo;
function handleClick(container) {
    container.classList.toggle("what-content-active");
    container.classList.remove("what-sibling");
    if (container.parentElement) {
        const siblings = Array.from(container.parentElement.children);
        siblings.forEach((sibling) => {
            if (sibling !== container) {
                sibling.classList.remove("what-content-active");
                sibling.classList.toggle("what-sibling");
            }
        });
    }
}
