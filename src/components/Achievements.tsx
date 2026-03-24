import "./styles/Achievements.css";

const achievementsData = [
    {
        title: "Completed 700+ Coding Problems",
        description:
            "Solved over 700 competitive programming problems across LeetCode, GeeksforGeeks, and HackerRank, strengthening problem-solving and algorithmic skills.",
        year: "2024–25",
        icon: "🏆",
    },
    {
        title: "Secured 5th Place — Build-a-Thon Hackathon",
        description:
            "Achieved 5th position at the Build-a-Thon Hackathon organized by Apna College at Lovely Professional University (LPU).",
        year: "Dec 2025",
        icon: "🥇",
    },
    {
        title: "3-Star Coder — HackerRank",
        description:
            "Earned 3-Star rating on HackerRank through consistent problem solving and competitive coding excellence.",
        year: "Feb 2024",
        icon: "⭐",
    },
];

const Achievements = () => {
    return (
        <div className="achievements-section section-container" id="achievements">
            <div className="achievements-container">
                <h3 className="section-heading">Achievements</h3>
                <p className="achievements-subtitle">Recognition and accomplishments</p>

                <div className="achievements-list">
                    {achievementsData.map((item, index) => (
                        <div className="achievement-item" key={index}>
                            <div className="achievement-icon">{item.icon}</div>
                            <div className="achievement-content">
                                <div className="achievement-header">
                                    <h4>{item.title}</h4>
                                    <span className="achievement-year">{item.year}</span>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;
