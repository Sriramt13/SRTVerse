import { motion } from "framer-motion";

const experiences = [
  {
    role: "Python Developer Intern",
    company: "Infosys Springboard – Remote",
    time: "Aug 2025 – Oct 2025",
    desc:
      "• Developed an AI-powered banking chatbot using Python, Flask, and SQLite to automate banking FAQs support.\n" +
      "• Implemented ML-based text classification and Named Entity Recognition (NER) to identify intents and extract entities from user input.\n" +
      "• Designed REST APIs and integrated SQLite database for storing user and transaction-related data.\n" +
      "• Gained hands-on experience in AI-driven chatbot development and backend integration.",
    tags: ["Python", "Flask", "SQLite", "NLP", "REST"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-b from-[#050014] via-[#0a0330] to-[#020010] px-6 py-36"
    >
      <div className="text-center mb-24">
        <p className="text-purple-400 tracking-widest">[ EXPERIENCE ]</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
          Professional Journey
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="
  relative overflow-hidden
  rounded-3xl p-10 md:p-12
  border border-white/10
  backdrop-blur-xl
  transition-all duration-500

  bg-gradient-to-br 
  from-[#12002a] via-[#1a0b3d] to-[#050014]

  hover:from-[#3b0764] hover:via-[#5b21b6] hover:to-[#1e1b4b]
  hover:shadow-[0_0_70px_rgba(168,85,247,0.7)]
"

          >
            <div className="flex flex-wrap justify-between items-center mb-5">
              <div>
                <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
              </div>
              <span className="px-4 py-1 text-sm rounded-full bg-purple-600/20 text-purple-300">
                {exp.time}
              </span>
            </div>

            {/* MULTI-LINE SUPPORT */}
            <p className="text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
              {exp.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
