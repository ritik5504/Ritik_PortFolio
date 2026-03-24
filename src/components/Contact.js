import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { MdArrowOutward, MdCopyright, MdSend } from "react-icons/md";
import "./styles/Contact.css";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Open mailto with form data
        const mailtoLink = `mailto:rajritik34@gmail.com?subject=${encodeURIComponent(formData.subject || "Portfolio Contact")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.open(mailtoLink, "_blank");
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };
    return (_jsx("div", { className: "contact-section section-container", id: "contact", children: _jsxs("div", { className: "contact-container", children: [_jsxs("div", { className: "contact-content", children: [_jsxs("div", { className: "contact-form-side", children: [_jsx("h3", { className: "section-heading", children: "Get in Touch" }), _jsx("p", { className: "contact-subtitle", children: "Have a project idea or want to collaborate? Drop me a message!" }), _jsxs("form", { className: "contact-form", onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-row", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Your Name" }), _jsx("input", { type: "text", id: "name", name: "name", placeholder: "John Doe", value: formData.name, onChange: handleChange, required: true, "data-cursor": "disable" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Your Email" }), _jsx("input", { type: "email", id: "email", name: "email", placeholder: "john@example.com", value: formData.email, onChange: handleChange, required: true, "data-cursor": "disable" })] })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "subject", children: "Subject" }), _jsx("input", { type: "text", id: "subject", name: "subject", placeholder: "Project Collaboration", value: formData.subject, onChange: handleChange, "data-cursor": "disable" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "message", children: "Message" }), _jsx("textarea", { id: "message", name: "message", placeholder: "Tell me about your project or idea...", rows: 5, value: formData.message, onChange: handleChange, required: true, "data-cursor": "disable" })] }), _jsx("button", { type: "submit", className: `contact-submit-btn ${submitted ? "submitted" : ""}`, "data-cursor": "disable", children: submitted ? ("Message Sent! ✓") : (_jsxs(_Fragment, { children: ["Send Message ", _jsx(MdSend, {})] })) })] })] }), _jsxs("div", { className: "contact-info-side", children: [_jsxs("div", { className: "contact-info-card", children: [_jsx("h4", { children: "Contact Info" }), _jsxs("div", { className: "info-item", children: [_jsx("span", { className: "info-label", children: "Email" }), _jsx("a", { href: "mailto:rajritik34@gmail.com", "data-cursor": "disable", className: "info-value", children: "rajritik34@gmail.com" })] }), _jsxs("div", { className: "info-item", children: [_jsx("span", { className: "info-label", children: "Phone" }), _jsx("a", { href: "tel:+919905870990", "data-cursor": "disable", className: "info-value", children: "+91 9905870990" })] }), _jsxs("div", { className: "info-item", children: [_jsx("span", { className: "info-label", children: "Location" }), _jsx("span", { className: "info-value", children: "India" })] })] }), _jsxs("div", { className: "contact-social-card", children: [_jsx("h4", { children: "Follow Me" }), _jsxs("div", { className: "social-btn-grid", children: [_jsxs("a", { href: "https://github.com/ritik5504", target: "_blank", "data-cursor": "disable", className: "social-link-btn", children: ["Github ", _jsx(MdArrowOutward, {})] }), _jsxs("a", { href: "https://www.linkedin.com/in/ritik5504", target: "_blank", "data-cursor": "disable", className: "social-link-btn", children: ["LinkedIn ", _jsx(MdArrowOutward, {})] }), _jsxs("a", { href: "https://www.instagram.com/_lost__insane_", target: "_blank", "data-cursor": "disable", className: "social-link-btn", children: ["Instagram ", _jsx(MdArrowOutward, {})] })] })] })] })] }), _jsxs("div", { className: "contact-footer", children: [_jsxs("h2", { children: ["Designed and Developed ", _jsx("br", {}), " by ", _jsx("span", { children: "Ritik Singh" })] }), _jsxs("h5", { children: [_jsx(MdCopyright, {}), " 2026"] })] })] }) }));
};
export default Contact;
