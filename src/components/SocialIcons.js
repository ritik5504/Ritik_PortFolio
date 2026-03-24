import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { useEffect } from "react";
const SocialIcons = () => {
    useEffect(() => {
        const social = document.getElementById("social");
        social.querySelectorAll("span").forEach((item) => {
            const elem = item;
            const link = elem.querySelector("a");
            const rect = elem.getBoundingClientRect();
            let mouseX = rect.width / 2;
            let mouseY = rect.height / 2;
            let currentX = 0;
            let currentY = 0;
            const updatePosition = () => {
                currentX += (mouseX - currentX) * 0.1;
                currentY += (mouseY - currentY) * 0.1;
                link.style.setProperty("--siLeft", `${currentX}px`);
                link.style.setProperty("--siTop", `${currentY}px`);
                requestAnimationFrame(updatePosition);
            };
            const onMouseMove = (e) => {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                if (x < 40 && x > 10 && y < 40 && y > 5) {
                    mouseX = x;
                    mouseY = y;
                }
                else {
                    mouseX = rect.width / 2;
                    mouseY = rect.height / 2;
                }
            };
            document.addEventListener("mousemove", onMouseMove);
            updatePosition();
            return () => {
                elem.removeEventListener("mousemove", onMouseMove);
            };
        });
    }, []);
    return (_jsx("div", { className: "icons-section", children: _jsxs("div", { className: "social-icons", "data-cursor": "icons", id: "social", children: [_jsx("span", { children: _jsx("a", { href: "https://github.com/ritik5504", target: "_blank", children: _jsx(FaGithub, {}) }) }), _jsx("span", { children: _jsx("a", { href: "https://www.linkedin.com/in/ritik5504", target: "_blank", children: _jsx(FaLinkedinIn, {}) }) }), _jsx("span", { children: _jsx("a", { href: "https://www.instagram.com/_lost__insane_", target: "_blank", rel: "noopener noreferrer", children: _jsx(FaInstagram, {}) }) })] }) }));
};
export default SocialIcons;
