// Blueprint-style line illustrations, drawn with currentColor strokes.
const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  vectorEffect: "non-scaling-stroke",
} as const;

/** Plan-view floor plan (BrainCo — permitting) */
export function FloorPlanIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      <rect x="30" y="15" width="140" height="110" {...strokeProps} />
      <line x1="100" y1="15" x2="100" y2="80" {...strokeProps} />
      <line x1="30" y1="80" x2="170" y2="80" {...strokeProps} />
      {/* door swing */}
      <path d="M 100 55 A 20 20 0 0 1 80 75" {...strokeProps} strokeDasharray="4 4" />
      <line x1="100" y1="55" x2="100" y2="75" {...strokeProps} />
      {/* rooms */}
      <rect x="45" y="30" width="18" height="14" {...strokeProps} />
      <rect x="130" y="95" width="16" height="16" {...strokeProps} />
    </svg>
  );
}

/** Dog profile + waveform (Scribenote — vet AI scribe) */
export function WaveformIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      {/* circle head */}
      <circle cx="100" cy="70" r="48" {...strokeProps} />
      {/* ear tick */}
      <path d="M 96 22 L 104 8 L 114 24" {...strokeProps} />
      {/* audio waveform across */}
      <path
        d="M 40 90 L 60 90 L 72 60 L 84 100 L 96 55 L 108 95 L 120 65 L 132 90 L 155 90"
        {...strokeProps}
        strokeDasharray="5 4"
      />
    </svg>
  );
}

/** Isometric file drawer (Stella — local file search) */
export function FileDrawerIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      {/* iso box */}
      <path d="M 100 20 L 155 45 L 155 95 L 100 122 L 45 95 L 45 45 Z" {...strokeProps} />
      <path d="M 45 45 L 100 70 L 155 45" {...strokeProps} />
      <line x1="100" y1="70" x2="100" y2="122" {...strokeProps} />
      {/* drawer handle */}
      <circle cx="127" cy="58" r="5" {...strokeProps} />
      {/* file lines */}
      <line x1="62" y1="72" x2="84" y2="82" {...strokeProps} />
      <line x1="62" y1="82" x2="78" y2="89" {...strokeProps} />
    </svg>
  );
}

/** Steel I-beam cross-section with dimensions (Mr Beam) */
export function IBeamIllustration() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full">
      <path
        d="M 60 30 L 140 30 L 140 42 L 110 42 L 110 98 L 140 98 L 140 110 L 60 110 L 60 98 L 90 98 L 90 42 L 60 42 Z"
        {...strokeProps}
      />
      {/* dimension: width */}
      <line x1="60" y1="18" x2="140" y2="18" {...strokeProps} strokeDasharray="4 4" />
      <text x="96" y="14" className="fill-current" fontSize="9" fontFamily="monospace">
        W
      </text>
      {/* dimension: height */}
      <line x1="48" y1="30" x2="48" y2="110" {...strokeProps} strokeDasharray="4 4" />
      <text x="38" y="74" className="fill-current" fontSize="9" fontFamily="monospace">
        H
      </text>
    </svg>
  );
}
