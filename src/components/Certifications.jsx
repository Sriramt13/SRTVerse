import { useState } from "react";
import "../styles/certifications.css";

const certificates = [
  {
    title: "Full stack python",
    type: "ALL",
    file: "/certificates/Full stack python.png",
    preview: "/certificates/Full stack python.png",
  },
  {
    title: "Salesforce AIAssociate",
    type: "ALL",
    file: "/certificates/Salesforce AIAssociate.pdf",
    preview: "/certificates/Salesforce AIAssociate.png",
  },
  {
    title: "IBM-ML with Python",
    type: "ALL",
    file: "/certificates/IBM ML0101EN Certificate _ Cognitive Class.pdf",
    preview: "/certificates/IBM ML0101EN Certificate _ Cognitive Class.png",
  },
  {
    title: "Infosys Springboard Programming Fundamentals using Python - Part 1",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Infosys Springboard Programming Fundamentals using Python - Part 1.pdf",
    preview: "/certificates/Infosys Springboard Python/Infosys Springboard Programming Fundamentals using Python - Part 1.png",
  },
  {
    title: "Oracle Certified Foundations",
    type: "ALL",
    file: "/certificates/Oracle Certified Foundations.pdf",
    preview: "/certificates/Oracle Certified Foundations.png",
  },
  {
    title: "Micro-Certification-ServiceNow",
    type: "ALL",
    file: "/certificates/Micro-Certification-ServiceNow.pdf",
    preview: "/certificates/Micro-Certification-ServiceNow.png",
  },
  {
    title: "Database Management System Part - 1",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Database Management System Part - 1.pdf",
    preview: "/certificates/Infosys Springboard Python/Database Management System Part - 1.png",
  },
  {
    title: "Database Management System Part - 2",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Database Management System Part - 2.pdf",
    preview: "/certificates/Infosys Springboard Python/Database Management System Part - 2.png",
  },
  {
    title: "Oracle",
    type: "ALL",
    file: "/certificates/Oracle.pdf",
    preview: "/certificates/Oracle.png",
  },
  {
    title: "SERVICENOW",
    type: "ALL",
    file: "/certificates/SERVICENOW.pdf",
    preview: "/certificates/SERVICENOW.png",
  },
  {
    title: "CSS Crash course certificate udemy",
    type: "ALL",
    file: "/certificates/CSS Crash course certificate udemy.pdf",
    preview: "/certificates/CSS Crash course certificate udemy.png",
  },
  {
    title: "DBMS certificate udemy",
    type: "ALL",
    file: "/certificates/DBMS certificate udemy.pdf",
    preview: "/certificates/DBMS certificate udemy.png",
  },
  {
    title: "Automation Developer Associate Training (v2023.10) for ICT Academy",
    type: "ALL",
    file: "/certificates/Automation Developer Associate Training (v2023.10) for ICT Academy.pdf",
    preview: "/certificates/Automation Developer Associate Training (v2023.10) for ICT Academy.png",
  },
  {
    title: "AWS_Academy_Cloud_Foundations_Badge",
    type: "ALL",
    file: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge.pdf",
    preview: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge.png",
  },
  {
    title: "AWS_Academy_Cloud_Security_Foundations_Badge",
    type: "ALL",
    file: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Security_Foundations_Badge.pdf",
    preview: "/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Security_Foundations_Badge.png",
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    type: "ALL",
    file: "/certificates/Deloitte Data Analytics Job Simulation.pdf",
    preview: "/certificates/Deloitte Data Analytics Job Simulation.png",
  },
  {
    title: "Deloitte Technology Job Simulation",
    type: "ALL",
    file: "/certificates/Deloitte Technology Job Simulation.pdf",
    preview: "/certificates/Deloitte Technology Job Simulation.png",
  },
  {
    title: "IBM -VIBE CODING Completion Certificate _ SkillsBuild",
    type: "ALL",
    file: "/certificates/IBM -VIBE CODING Completion Certificate _ SkillsBuild.pdf",
    preview: "/certificates/IBM -VIBE CODING Completion Certificate _ SkillsBuild.png",
  },
  {
    title: "pyfs ws",
    type: "ALL",
    file: "/certificates/pyfs ws.pdf",
    preview: "/certificates/pyfs ws.png",
  },
  {
    title: "TATA Forage",
    type: "ALL",
    file: "/certificates/TATA Forage.pdf",
    preview: "/certificates/TATA Forage.png",
  },
  {
    title: "Infosys springboard Programming Fundamentals using Python - Part 2",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Infosys springboard Programming Fundamentals using Python - Part 2.pdf",
    preview: "/certificates/Infosys Springboard Python/Infosys springboard Programming Fundamentals using Python - Part 2.png",
  },
  {
    title: "Email Writing Skills",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Email Writing Skills.pdf",
    preview: "/certificates/Infosys Springboard Python/Email Writing Skills.png",
  },
  {
    title: "High Impact Presentations",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/High Impact Presentations.pdf",
    preview: "/certificates/Infosys Springboard Python/High Impact Presentations.png",
  },
  {
    title: "Infosys python 3",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Infosys python 3.pdf",
    preview: "/certificates/Infosys Springboard Python/Infosys python 3.png",
  },
  {
    title: "Introduction to NoSQL databases",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Introduction to NoSQL databases.pdf",
    preview: "/certificates/Infosys Springboard Python/Introduction to NoSQL databases.png",
  },
  {
    title: "Python Foundation Certification",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Python Foundation Certification.pdf",
    preview: "/certificates/Infosys Springboard Python/Python Foundation Certification.png",
  },
  {
    title: "Software Engineering and Agile software development",
    type: "ALL",
    file: "/certificates/Infosys Springboard Python/Software Engineering and Agile software development.pdf",
    preview: "/certificates/Infosys Springboard Python/Software Engineering and Agile software development.png",
  },
  {
    title: "Infosys Springboard-Internship 6.0",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/Internship 6.0-Infosys Springboard.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/Internship 6.0-Infosys Springboard.png",
  },
  {
    title: "APSCHE-SmartInternz Internship",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/Certificate - SmartInternz.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/Certificate - SmartInternz.png",
  },
  {
    title: "EMBRIZON ML WITH PYTHON Internship",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/EMBRIZON ML WITH PYTHON.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/EMBRIZON ML WITH PYTHON.png",
  },
  {
    title: "Skilldzill Internship",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/SKILLDZIRE-FULL STACK JAVA.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/SKILLDZIRE-FULL STACK JAVA.png",
  },
  {
    title: "ONGC-COMPUTER NETWORKS & COMMUNICATIONS Internship",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/ONGC INTERNSHIP CERTIFICATE.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/ONGC INTERNSHIP CERTIFICATE.png",
  },
  {
    title: "EXCELR Internship",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/EXCELR-93434.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/EXCELR-93434.png",
  },
  {
    title: "Advance Data Science and Artificial Intelligence Internship",
    type: "Internships",
    file: "/certificates/INTERNSHIP CERTIFICATES/Advance Data Science and Artificial Intelligence - 4 Weeks Certificate Program with Live Classes.pdf",
    preview: "/certificates/INTERNSHIP CERTIFICATES/Advance Data Science and Artificial Intelligence - 4 Weeks Certificate Program with Live Classes.png",
  },
  {
    title: "Magneq Software",
    type: "OfferLetters",
    file: "/certificates/offerletters/Magneq Software.pdf",
    preview: "/certificates/offerletters/Magneq Software.png",
  },
  {
    title: "code samurai",
    type: "OfferLetters",
    file: "/certificates/offerletters/code samurai.pdf",
    preview: "/certificates/offerletters/code samurai.png",
  },
  {
    title: "Byte Quest – AI Vibe Coding Hackathon.",
    type: "Others",
    file: "/certificates/Participation/Byte Quest – AI Vibe Coding.pdf",
    preview: "/certificates/Participation/Byte Quest – AI Vibe Coding.png",
  },
  {
    title: "Workshop-Full Stack Development.",
    type: "Others",
    file: "/certificates/Participation/innomatics lab research.pdf",
    preview: "/certificates/Participation/innomatics lab research.png",
  },
  {
    title: "LINTA-Portfolio.",
    type: "Others",
    file: "/certificates/Participation/LINTA-Certificate of Participation.pdf",
    preview: "/certificates/Participation/LINTA-Certificate of Participation.png",
  },
  {
    title: "NationBuilding online quiz.",
    type: "Others",
    file: "/certificates/Participation/NationBuilding online quiz.pdf",
    preview: "/certificates/Participation/NationBuilding online quiz.png",
  },
  {
    title: "Skil dunia-Participation Certificate.",
    type: "Others",
    file: "/certificates/Participation/Skil dunia-Participation Certificate.pdf",
    preview: "/certificates/Participation/Skil dunia-Participation Certificate.png",
  },
  {
    title: "TATA quiz participation certificate.",
    type: "Others",
    file: "/certificates/Participation/TATA quiz participation certificate.pdf",
    preview: "/certificates/Participation/TATA quiz participation certificate.png",
  },
  {
    title: "TECH MINDSPARC INNOVATIONS WEBINAR PARTICIPATION CERTIFICATE.",
    type: "Others",
    file: "/certificates/Participation/TECH MINDSPARC INNOVATIONS WEBINAR PARTICIPATION CERTIFICATE.pdf",
    preview: "/certificates/Participation/TECH MINDSPARC INNOVATIONS WEBINAR PARTICIPATION CERTIFICATE.png",
  },
];

export default function Certifications({ show, onClose }) {
  const [tab, setTab] = useState("All");

  if (!show) return null;

  // normalize: "Offer Letters" -> "offerletters"
  const clean = (v) => v.toLowerCase().replace(/\s/g, "");

  // ALWAYS filter by type, even for "All"
  const filtered = certificates.filter(
    (c) => clean(c.type) === clean(tab)
  );

  return (
    <div className="cert-section show-cert">
      <button className="close-btn" onClick={onClose}>Back</button>

      <h1 className="cert-title">My Certifications</h1>

      {/* Tabs */}
      <div className="tabs">
        {["All", "Internships", "Offer Letters", "Others"].map((t) => (
          <button
            key={t}
            className={tab === t ? "active" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="cert-grid">
        {filtered.length === 0 ? (
          <p style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No certificates found
          </p>
        ) : (
          filtered.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-media">
                <img src={c.preview} alt={c.title} />
              </div>
              <h3>{c.title}</h3>
              <button onClick={() => window.open(c.file, "_blank")}>
                Open →
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}