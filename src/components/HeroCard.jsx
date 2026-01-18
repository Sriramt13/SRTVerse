import profile from "../assets/profile.jpg";

export default function HeroCard() {
  return (
    <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_40px_rgba(168,85,247,0.4)]">
      
      {/* Inner Card */}
      <div className="relative w-[80vw] max-w-3xl h-[60vh] bg-[#05050a] rounded-3xl flex items-center justify-center overflow-hidden">
        
        {/* Center Image */}
        <div className="absolute w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full" />
       <img
  src={profile}
  alt="Profile"
  className="
    h-[70%]
    object-contain
    rounded-full
    z-10
    shadow-[0_0_40px_rgba(168,85,247,0.6)]
  "
/>


        {/* Left Bubble */}
        <div className="absolute left-6 top-1/3 bg-black/80 text-white px-4 py-2 rounded-xl border border-white/10 shadow-lg animate-bounceSlow">
          Hey, welcome! 👋
        </div>

        {/* Right Bubble */}
        <div className="absolute right-6 bottom-1/3 bg-black/80 text-white px-4 py-2 rounded-xl border border-white/10 shadow-lg animate-bounceSlow">
          Let’s build something cool 🚀
        </div>

      </div>
    </div>
  );
}
