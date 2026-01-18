export default function Navbar({ onOpenCert }) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="flex items-center gap-1 text-xl">
          <span className="text-purple-400 text-2xl font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>S</span>
          <span>ri</span>
          <span className="text-purple-400 text-2xl font-bold ml-1" style={{ fontFamily: "Dancing Script, cursive" }}>R</span>
          <span>am</span>
          <span className="text-purple-400 text-2xl font-bold ml-1" style={{ fontFamily: "Dancing Script, cursive" }}>T</span>
          <span>eja</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          <a href="#about" className="hover:text-purple-400">ABOUT</a>
          <a href="#experience" className="hover:text-purple-400">EXPERIENCE</a>
          <a href="#skills" className="hover:text-purple-400">SKILLS</a>
          <a href="#projects" className="hover:text-purple-400">PROJECTS</a>

          {/* Certifications */}
          <button
            onClick={onOpenCert}
            className="hover:text-purple-400 bg-transparent border-none text-white cursor-pointer"
          >
            CERTIFICATIONS
          </button>
        </div>

        <a
          href="#contact"
          className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-black font-semibold"
        >
          CONTACT ME
        </a>
      </div>
    </nav>
  );
}
