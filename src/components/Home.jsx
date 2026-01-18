import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import OrbitRings from "./OrbitRings";
import About from "./About";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <main className="bg-[#05050a] text-white">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
        <ParticlesBackground />
        <OrbitRings />

        <motion.div
          className="relative z-10 px-4 max-w-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Small Intro */}
          <motion.p
            className="text-gray-400 mb-3 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
              Sri Ram Teja Pinnamireddy 
          </motion.h1>

          <motion.h2
  className="text-purple-400 text-xl md:text-3xl mb-4 font-semibold"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.7 }}
>
  <Typewriter
    words={[
      "Web Developer",
      "React & JavaScript",
      "Python Backend Developer",
      "Problem Solver",
    ]}
    loop
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1200}
  />
</motion.h2>


          {/* Personality Line */}
          <motion.p
            className="text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            I build modern, fast, and user-friendly web experiences.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            className="inline-block px-8 py-3 rounded-xl border border-purple-500 text-purple-400
                       hover:bg-purple-500 hover:text-black transition-all duration-300
                       hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </section>

      {/* ABOUT SECTION AFTER SCROLL */}
      <About />

    </main>
  );
}
