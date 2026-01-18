export default function SignatureLogo({ size = 120 }) {
  return (
    <svg
      width={size}
      height={size * 0.45}
      viewBox="0 0 800 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="neon">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* S */}
      <path
        d="M120 200
           C40 120, 200 20, 320 90
           C380 130, 200 160, 260 220"
        stroke="#c084fc"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter="url(#neon)"
      />

      {/* R */}
      <path
        d="M360 230
           L360 60
           C440 40, 520 90, 440 140
           L560 230"
        stroke="#c084fc"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter="url(#neon)"
      />

      {/* T */}
      <path
        d="M600 60
           L740 60
           M670 60
           L670 230"
        stroke="#c084fc"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        filter="url(#neon)"
      />
    </svg>
  );
}
