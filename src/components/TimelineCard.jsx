import useReveal from "../hooks/useReveal";

export default function TimelineCard({ year, title, text, side = "left" }) {
  const [ref, show] = useReveal();

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${side === "left" ? "mr-auto" : "ml-auto"}
        w-[320px]
        bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg
      `}
    >
      <div className="flex items-center gap-3">
  <span className="text-purple-400 font-semibold">{year}</span>
  <h3 className="text-purple-300 font-semibold">{title}</h3>
</div>


      <p className="text-gray-300 mt-2">{text}</p>
    </div>
  );
}
