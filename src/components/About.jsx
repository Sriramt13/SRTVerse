export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 blur-[200px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 blur-[200px]" />

      {/* Card */}
      <div className="relative z-10 max-w-4xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 md:p-16 text-center shadow-[0_0_80px_rgba(168,85,247,0.15)]">
        
        <p className="text-purple-400 tracking-widest text-sm mb-4">[ ABOUT ME ]</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Who I Am
        </h2>

        {/* Profile Center */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500 blur-2xl opacity-40" />
            <img
  src="/profile.jpg"
  alt="Sri Ram Teja"
  className="relative w-44 h-44 md:w-52 md:h-52 rounded-full object-cover object-top border-4 border-purple-500/40"
/>

          </div>
        </div>

        {/* Content Below Photo */}
        <div className="text-gray-300 leading-relaxed text-lg max-w-2xl mx-auto">
          <p>
  I’m <span className="text-white font-semibold">Sri Ram Teja</span>, a Computer
  Science student who enjoys building real-world web applications from
  idea to deployment using{" "}
  <span className="text-purple-400">Python</span>,{" "}
  <span className="text-purple-400">Flask</span>,{" "}
  <span className="text-purple-400">JavaScript</span>, and{" "}
  <span className="text-purple-400">React</span>.
</p>

<p className="mt-6">
  I’ve worked on projects like a banking chatbot system, a flight booking
  interface, and a movie discovery platform—focusing on clean code,
  reliable APIs, and simple, usable interfaces.
</p>

<p className="mt-6">
  I care about building things that actually work in the real world:
  stable backend logic, clear data flow, and interfaces that feel smooth and
  easy to use.
</p>

<p className="mt-8 text-sm text-gray-400">
  Learning by building. Improving by failing. Growing with every project.
</p>
        </div>
      </div>
    </section>
  );
}
