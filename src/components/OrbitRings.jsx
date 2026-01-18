import { motion } from "framer-motion";

export default function OrbitRings() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="w-[300px] h-[300px] border border-purple-500/30 rounded-full absolute" />
      <div className="w-[500px] h-[500px] border border-pink-500/20 rounded-full absolute" />
      <div className="w-[700px] h-[700px] border border-cyan-500/10 rounded-full absolute" />
    </div>
  );
}
