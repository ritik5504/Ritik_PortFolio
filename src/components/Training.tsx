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
    return (
        <div className="training-section section-container" id="training">
            <div className="training-container">
                <h3 className="section-heading">Training</h3>

                <div className="training-list">
                    {trainingData.map((t, index) => (
                        <div className="training-card" key={index}>
                            <div className="training-icon">
                                <MdSchool />
                            </div>
                            <div className="training-details">
                                <h4 className="training-program">{t.program}</h4>
                                <span className="training-provider">
                                    {t.provider}
                                </span>
                                <p className="training-description">
                                    Completed training from{" "}
                                    <strong>{t.provider}</strong> during{" "}
                                    <strong>{t.period}</strong>, while studying
                                    at <strong>{t.institution}</strong>.
                                </p>
                                <span className="training-period">{t.period}</span>
                                <a
                                    href={t.certificateLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="training-cert-link"
                                    data-cursor="disable"
                                >
                                    View Certificate <MdArrowOutward />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Training;
