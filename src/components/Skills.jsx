import { FaJs, FaPython, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiReact, SiBootstrap, SiFlask, SiSqlite, SiRender} from "react-icons/si";
import { SiPandas, SiVercel } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { TbBrain } from "react-icons/tb";
import { TbChartDots } from "react-icons/tb";
import { VscCode,} from "react-icons/vsc";
import "../styles/skills.css";

const languages = [
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C", icon: <span className="c-icon">C</span> },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "REST APIs", icon: <TbApi color="#9D7CFF" /> },
  { name: "SQLite", icon: <SiSqlite color="#00ADEF" /> },
];

const frameworks = [
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
  { name: "Flask", icon: <SiFlask color="#FFFFFF" /> },
  { name: "Matplotlib", icon: <TbChartDots color="#11557C" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "spaCy", icon: <TbBrain color="#FF6F61" /> },

];

const tools = [
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#FFFFFF" /> },
  { name: "VS Code", icon: <VscCode color="#007ACC" /> },
  { name: "Render", icon: <SiRender color="#46E3B7" /> },
  { name: "Vercel", icon: <SiVercel color="#FFFFFF" /> },
];

function Orbit({ title, center, items }) {
  return (
    <div className="orbit-block">
      <h3>{title}</h3>
      <div className="orbit-wrap">
        <div className="ring inner"></div>
        <div className="ring outer"></div>
        <div className="orbit-center">{center}</div>

        <div className="icons-rotate">
          {items.map((item, i) => (
            <div
              key={i}
              className="orbit-item"
              style={{ "--i": i, "--total": items.length }}
            >
              <div className="icon-box">
                <span className="icon">{item.icon}</span>
                <span className="label">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <p className="tag">[ SKILLS ]</p>
      <h2>Things I used to build</h2>

      <div className="orbit-grid">
        <Orbit title="Languages" center="S" items={languages} />
        <Orbit title="Frameworks & Libraries" center="R" items={frameworks} />
        <Orbit title="Tools" center="T" items={tools} />
      </div>
    </section>
  );
}
