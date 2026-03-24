import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Apilogs — Real-Time Monitoring Platform",
    category: "Web Application",
    description:
      "Architected a real-time observability platform enabling applications to ingest logs via secure REST APIs and visualize activity through WebSocket dashboards",
    tools: ["React.js", "Node.js", "MongoDB"],
    image: "/images/apilogs.png",
    github: "https://github.com/ritik5504/apil_logs",
    live: "https://last-project-alpha.vercel.app/",
  },
  {
    title: "LangLeo Chatbot -AI-Powered Chat Application",
    category: " Web App",
    description:"LangLeo is an AI-powered chatbot designed to provide instant, intelligent responses to user queries. Built with Next.js and TypeScript, it leverages advanced NLP models to deliver seamless conversational experiences with real-time updates and personalized interactions.",
    tools: ["React.js", "Node.js", "MongoDB"],
    image: "/images/langleo.png",
    github: "https://github.com/ritik5504/langleo-chatbot",
    live: "https://langleo.netlify.app/",
  },
  {
    title: "K72 — Interactive React Animation Website",
    category: "Web Application",
    description:
      "K72 is a dynamic web application featuring advanced animations and interactive elements. Built with React.js, it delivers a seamless user experience through smooth transitions and engaging visuals.",
    tools: ["React.js", "Express.js", "Firebase"],
    image: "/images/k72.png",
    github: "https://github.com/ritik5504/k72",
    live: "https://k72-delta.vercel.app/",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          Some things I've built — update these with your own projects
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.github && project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        data-cursor="disable"
                        className="project-link-btn"
                      >
                        GitHub <MdArrowOutward />
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        data-cursor="disable"
                        className="project-link-btn project-link-live"
                      >
                        Live Demo <MdArrowOutward />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-number">0{index + 1}</span>
                <div className="project-details">
                  <h4>{project.title}</h4>
                  <p className="project-category">{project.category}</p>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tools">
                    {project.tools.map((tool, i) => (
                      <span className="project-tool-tag" key={i}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
