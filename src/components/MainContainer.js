import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense, useEffect, useState } from "react";
import About from "./About";
import Resume from "./Resume";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import Work from "./Work";
import Certificates from "./Certificates";
import Training from "./Training";
import Achievements from "./Achievements";
import Hackathon from "./Hackathon";
import setSplitText from "./utils/splitText";
const TechStack = lazy(() => import("./TechStack"));
const MainContainer = ({ children }) => {
    const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 1024);
    useEffect(() => {
        const resizeHandler = () => {
            setSplitText();
            setIsDesktopView(window.innerWidth > 1024);
        };
        resizeHandler();
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, [isDesktopView]);
    return (_jsxs("div", { className: "container-main", children: [_jsx(Cursor, {}), _jsx(Navbar, {}), _jsx(SocialIcons, {}), isDesktopView && children, _jsx("div", { id: "smooth-wrapper", children: _jsx("div", { id: "smooth-content", children: _jsxs("div", { className: "container-main", children: [_jsx(Landing, { children: !isDesktopView && children }), _jsx(About, {}), _jsx(Resume, {}), _jsx(Education, {}), _jsx(Skills, {}), _jsx(Work, {}), isDesktopView && (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading...." }), children: _jsx(TechStack, {}) })), _jsx(Certificates, {}), _jsx(Training, {}), _jsx(Achievements, {}), _jsx(Hackathon, {}), _jsx(Contact, {})] }) }) })] }));
};
export default MainContainer;
