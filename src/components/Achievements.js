import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles/Achievements.css";
const achievementsData = [
    {
        title: "Completed 700+ Coding Problems",
        description: "Solved over 700 competitive programming problems across LeetCode, GeeksforGeeks, and HackerRank, strengthening problem-solving and algorithmic skills.",
        year: "2024–25",
        icon: "🏆",
    },
    {
        title: "Secured 5th Place — Build-a-Thon Hackathon",
        description: "Achieved 5th position at the Build-a-Thon Hackathon organized by Apna College at Lovely Professional University (LPU).",
        year: "Dec 2025",
        icon: "🥇",
    },
    {
        title: "3-Star Coder — HackerRank",
        description: "Earned 3-Star rating on HackerRank through consistent problem solving and competitive coding excellence.",
        year: "Feb 2024",
        icon: "⭐",
    },
];
const Achievements = () => {
    return (_jsx("div", { className: "achievements-section section-container", id: "achievements", children: _jsxs("div", { className: "achievements-container", children: [_jsx("h3", { className: "section-heading", children: "Achievements" }), _jsx("p", { className: "achievements-subtitle", children: "Recognition and accomplishments" }), _jsx("div", { className: "achievements-list", children: achievementsData.map((item, index) => (_jsxs("div", { className: "achievement-item", children: [_jsx("div", { className: "achievement-icon", children: item.icon }), _jsxs("div", { className: "achievement-content", children: [_jsxs("div", { className: "achievement-header", children: [_jsx("h4", { children: item.title }), _jsx("span", { className: "achievement-year", children: item.year })] }), _jsx("p", { children: item.description })] })] }, index))) })] }) }));
};
export default Achievements;
