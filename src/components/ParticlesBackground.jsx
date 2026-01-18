import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticlesBackground() {
  const init = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={init}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 80 },
          color: { value: ["#a855f7", "#ec4899", "#22d3ee"] },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}
