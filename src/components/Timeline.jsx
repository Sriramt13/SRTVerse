import { useEffect, useRef, useState } from "react";

const data = [
  {
    year: "2020",
    title: "Schooling",
    text: "Completed 10th class with 87.6%.",
    side: "left",
  },
  {
    year: "2022",
    title: "Intermediate",
    text: "Finished my 12th / Intermediate with 64.5%",
    side: "right",
  },
  {
    year: "2022",
    title: "Engineering Start",
    text: "Started B.Tech in Computer Science and began learning programming with C and Python.",
    side: "left",
  },
  {
    year: "2023",
    title: "Skill Building Phase",
    text: "Focused on strengthening core programming skills and practicing problem solving.",
    side: "right",
  },
  {
    year: "2024",
    title: "Frontend Development",
    text: "Learned HTML, CSS, JavaScript and built my first frontend projects.",
    side: "left",
  },
  {
    year: "2025",
    title: "Projects & Internships",
    text: "Built BankBot, FlightFinder, SRT Cinelite and worked as an intern, gaining real-world experience.",
    side: "right",
  },
];


export default function Timeline() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const index = entry.target.dataset.index;
          setVisible(prev =>
            entry.isIntersecting
              ? [...new Set([...prev, index])]
              : prev.filter(i => i !== index)
          );
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-[#050014] via-[#0a0320] to-[#020010]">

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/20 blur-[200px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-700/20 blur-[200px]" />

      {/* Title */}
      <div className="relative z-10 text-center mb-28">
        <p className="text-purple-400 tracking-widest text-sm">[ TIMELINE ]</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">My Journey</h2>
      </div>

      {/* Center Line */}
      <div className="absolute left-1/2 top-[260px] bottom-20 w-[3px] bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.8)] -translate-x-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-32">
        {data.map((item, i) => {
          const show = visible.includes(String(i));
          const isLeft = item.side === "left";

          return (
            <div
              key={i}
              ref={el => (refs.current[i] = el)}
              data-index={i}
              className={`relative flex ${isLeft ? "justify-start pr-20" : "justify-end pl-20"}`}
            >
              {/* Line */}
              <div
                className={`absolute top-10 h-[2px] bg-gradient-to-r from-purple-500 to-purple-400
                ${isLeft ? "right-[50%] w-[calc(50%-190px)]" : "left-[50%] w-[calc(50%-190px)]"}`}
              />

              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-8">
                <div className="w-3 h-3 bg-white rounded-full relative z-10" />
                <div className="absolute inset-0 rounded-full bg-purple-500 blur-md opacity-90" />
              </div>

              {/* Card */}
              <div
                className={`w-[380px] bg-[#080012]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6
                shadow-[0_0_50px_rgba(168,85,247,0.25)]
                transition-all duration-700
                ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
              >
                <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 text-sm rounded-full border border-purple-400 text-purple-400">
              {item.year}
              </span>
                 <h3 className="text-lg font-semibold text-purple-300">
              {item.title}
                </h3>
              </div>


                <p className="text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
