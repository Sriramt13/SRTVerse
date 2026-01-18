import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050010] border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left Text */}
        <p className="text-gray-400 text-sm">
  © {new Date().getFullYear()} All Rights Reserved | Sri Ram Teja
</p>


        {/* Social Icons */}
        <div className="flex gap-6 text-lg text-gray-400">
          <a href="https://github.com/Sriramt13" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sri-ram-teja-pinnamireddy-5b1053319" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:pinnamireddysriramteja@gmail.com" className="hover:text-purple-400 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Back To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full 
                   bg-purple-600 hover:bg-purple-700 
                   flex items-center justify-center 
                   text-white text-lg shadow-lg transition"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}
