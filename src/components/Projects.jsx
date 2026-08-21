import bankbot from "../assets/bankbot.png";
import flightfinder from "../assets/flightfinder.png";
import srtcinelite from "../assets/srtcinelite.png";
import edupath from "../assets/edupath.png";
import mindmap from "../assets/mindmap.png";
import edusum from "../assets/edusum.png";
import startupsuccess from "../assets/startupsuccess.png";
import careerImg from "../assets/career.png";
import fraud from "../assets/fraud.png";
import foodbridge from "../assets/foodbridge.png";
import "../styles/projects.css";


const projects = [
  {
    title: "FoodBridge-AI",
    subtitle: "AI-Powered Food Redistribution Platform",
    image: foodbridge,
    desc: "Full-stack AI platform that connects donors, NGOs, and volunteers with real-time food tracking and intelligent matching.",
    tech: ["React.js", "Node.js", "Express", "Python", "Flask", "Scikit-learn","Socket.IO", "Leaflet","EmailJS","MongoDB", "Vercel", "Render"],
    link: "https://food-bridge-ai-rosy.vercel.app/",
  },
  {
    title: "FraudShield-AI",
    subtitle: "AI-Powered Phishing Detection System",
    image: fraud,
    desc: "AI system that detects phishing links and generates real-time risk scores.",
    tech: ["React.js", "Node.js", "Express", "Python", "Flask", "Scikit-learn", "MongoDB", "Vercel", "Render"],
    link: "https://srt-fraudsheild-ai.vercel.app/",
  },
  {
    title: "Career Path Simulation System",
    subtitle: "Full-Stack Simulation Engine for Career Decision Analysis",
    image: careerImg,
    desc: "Career simulation platform using probabilistic modeling to visualize success, retry, and failure outcomes.",
    tech: ["React", "Vite", "FastAPI", "Python", "Recharts"],
    link: "https://career-simulator-gamma.vercel.app/",
  },
  {
    title: "SRT Cinelite",
    subtitle: "Movie Discovery Platform",
    image: srtcinelite,
    desc: "Movie browsing platform with trending, search and category filters.",
    tech: ["React", "API", "CSS"],
    link: "https://sriramt13.github.io/SRT-CineLite-/",
  },
  {
    title: "BankBot",
    subtitle: "Chatbot for Banking – FAQs & Transactions",
    image: bankbot,
    desc: "AI-powered banking chatbot that handles FAQs, balance check, and transactions using NLP and Flask.",
    tech: ["Python", "Flask", "NLP", "SQLite"],
    link: "https://srt-bankbot.onrender.com/",
  },
  {
    title: "Startup Success Prediction",
    subtitle: "AI Model for Predicting Startup Success",
    image: startupsuccess,
    desc: "Machine learning model to predict startup success using historical data and features.",
    tech: ["Python", "Scikit-learn", "Pandas", "Jupyter"],
    link: "https://startup-success-predictor-55z6.onrender.com/",
  },
  {
    title: "FlightFinder",
    subtitle: "Frontend Flight Booking App",
    image: flightfinder,
    desc: "Frontend-only flight booking UI using dummy data with search and filter features.",
    tech: ["React", "Bootstrap", "JavaScript"],
    link: "https://flightfinder-eight.vercel.app/",
  },
  {
    title: "EduPath",
    subtitle: "Career Guidance Platform",
    image: edupath,
    desc: "Quiz-based career guidance with roadmaps and college suggestions.",
    tech: ["React", "Logic", "UI"],
    link: "https://edupath-nine.vercel.app/",
  },
  {
    title: "MindMap Visualizer",
    subtitle: "Interactive Mind Mapping Tool",
    image: mindmap,
    desc: "Visual mindmap generator for structured learning.",
    tech: ["React", "D3.js"],
    link: "https://your-mindmap-link.com",
  },
  {
    title: "Edu Summarizer",
    subtitle: "AI Study Assistant",
    image: edusum,
    desc: "Summarizes educational content using AI.",
    tech: ["Python", "Flask", "AI"],
    link: "https://edusummarizer.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <p className="tag">[ PROJECTS ]</p>
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <img src={p.image} alt={p.title} />
            <div className="project-content">
              <h3>{p.title}</h3>
              <p className="subtitle">{p.subtitle}</p>
              <p>{p.desc}</p>

              <div className="tech">
                {p.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <a href={p.link} target="_blank" rel="noreferrer">
                View Live →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
