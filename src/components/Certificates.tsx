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
    return (
        <div className="certificates-section section-container" id="certificates">
            <div className="certificates-container">
                <h3 className="section-heading">Certificates</h3>

                <div className="certificates-list">
                    {certificatesData.map((cert, index) => (
                        <div className="cert-row" key={index}>
                            <div className="cert-row-info">
                                <h4 className="cert-row-title">{cert.title}</h4>
                                <span className="cert-row-issuer">{cert.issuer}</span>
                                <span className="cert-row-date">{cert.date}</span>
                            </div>
                            <a
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cert-row-link"
                                data-cursor="disable"
                            >
                                View Certificate <MdArrowOutward />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
