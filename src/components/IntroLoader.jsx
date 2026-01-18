import { useEffect } from "react";

export default function IntroLoader({ onFinish }) {
  useEffect(() => {
    const t = setTimeout(onFinish, 2500);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      {/* Welcome Text */}
      <h1 className="text-white text-5xl md:text-4xl mb-4 tracking-wide" style={{ fontFamily: "Dancing Script, cursive" }}>
        Welcome to my portfolio
      </h1>

      {/* SRT */}
      <h2
        className="text-purple-400 text-4xl md:text-7xl font-bold"
        style={{ fontFamily: "Dancing Script, cursive" }}
      >
        SRT
      </h2>
    </div>
  );
}
