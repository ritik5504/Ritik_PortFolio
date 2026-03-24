import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./styles/Landing.css";
const Landing = ({ children }) => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "landing-section", id: "landingDiv", children: [_jsxs("div", { className: "landing-container", children: [_jsxs("div", { className: "landing-intro", children: [_jsx("h2", { children: "Hello! I'm" }), _jsxs("h1", { children: ["RITIK", _jsx("br", {}), _jsx("span", { children: "SINGH" })] })] }), _jsxs("div", { className: "landing-info", children: [_jsx("h3", { children: "A Full Stack" }), _jsxs("h2", { className: "landing-info-h2", children: [_jsx("div", { className: "landing-h2-1", children: "Developer" }), _jsx("div", { className: "landing-h2-2", children: "Engineer" })] }), _jsxs("h2", { children: [_jsx("div", { className: "landing-h2-info", children: "Engineer" }), _jsx("div", { className: "landing-h2-info-1", children: "Developer" })] })] })] }), children] }) }));
};
export default Landing;
