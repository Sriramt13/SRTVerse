import bankbot from "../assets/bankbot.png";
import flightfinder from "../assets/flightfinder.png";
import srtcinelite from "../assets/srtcinelite.png";
import edupath from "../assets/edupath.png";
import mindmap from "../assets/mindmap.png";
import edusum from "../assets/edusum.png";
import "../styles/projects.css";


const projects = [
  {
    title: "BankBot",
    subtitle: "Chatbot for Banking – FAQs & Transactions",
    image: bankbot,
    desc: "AI-powered banking chatbot that handles FAQs, balance check, and transactions using NLP and Flask.",
    tech: ["Python", "Flask", "NLP", "SQLite"],
    link: "https://srt-bankbot.onrender.com/",
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
    title: "SRT Cinelite",
    subtitle: "Movie Discovery Platform",
    image: srtcinelite,
    desc: "Movie browsing platform with trending, search and category filters.",
    tech: ["React", "API", "CSS"],
    link: "https://sriramt13.github.io/SRT-CineLite-/",
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
