import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Certificates.css";
import { MdArrowOutward } from "react-icons/md";
const certificatesData = [
    {
        title: "Oracle Data Platform 2025",
        issuer: "Oracle",
        date: "2026",
        link: "https://drive.google.com/file/d/1tEGqMTBg9ZBKDSgB2CC3uDILV2H9UnlO/view?usp=drive_link",
    },
    {
        title: "Privacy and Security in Online Social Media",
        issuer: "NPTEL",
        date: "2025",
        link: "https://drive.google.com/file/d/1s8rqJw4j6dezkLcJAjGKb4UKLBWqwgu9/view?usp=sharing",
    },
    {
        title: "Introduction to Hardware and Operating Systems",
        issuer: "Coursera",
        date: "2024",
        link: "https://drive.google.com/file/d/1ZvF7-Q-v5SOTDkVLPh9b5BTKlvevdARF/view?usp=sharing",
    },
];
const Certificates = () => {
    return (_jsx("div", { className: "certificates-section section-container", id: "certificates", children: _jsxs("div", { className: "certificates-container", children: [_jsx("h3", { className: "section-heading", children: "Certificates" }), _jsx("div", { className: "certificates-list", children: certificatesData.map((cert, index) => (_jsxs("div", { className: "cert-row", children: [_jsxs("div", { className: "cert-row-info", children: [_jsx("h4", { className: "cert-row-title", children: cert.title }), _jsx("span", { className: "cert-row-issuer", children: cert.issuer }), _jsx("span", { className: "cert-row-date", children: cert.date })] }), _jsxs("a", { href: cert.link, target: "_blank", rel: "noopener noreferrer", className: "cert-row-link", "data-cursor": "disable", children: ["View Certificate ", _jsx(MdArrowOutward, {})] })] }, index))) })] }) }));
};
export default Certificates;
