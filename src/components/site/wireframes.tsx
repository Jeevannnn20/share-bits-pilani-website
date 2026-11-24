import { cn } from "@/lib/utils"

/* Line-art wireframes of the things ShARE actually ships: page flows, decks,
   dashboards, TAM models, journey maps and PRDs. They inherit currentColor,
   and use green for the one element that matters. */

const G = "var(--color-primary)"

function Frame({ children, className, label }: { children: React.ReactNode; className?: string; label?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={cn("h-auto w-full", className)} fill="none" stroke="currentColor" strokeWidth={1} aria-hidden>
      {children}
      {label && (
        <text x={312} y={192} textAnchor="end" fontFamily="IBM Plex Mono, monospace" fontSize={8} letterSpacing="0.08em" fill="currentColor" stroke="none" opacity={0.55}>
          {label}
        </text>
      )}
    </svg>
  )
}

const Line = ({ x, y, w, o = 0.35 }: { x: number; y: number; w: number; o?: number }) => <rect x={x} y={y} width={w} height={4} rx={2} fill="currentColor" stroke="none" opacity={o} />

/** Product: page flow of three connected screens. */
export function FlowWire({ className }: { className?: string }) {
  const screen = (x: number, active = false) => (
    <g>
      <rect x={x} y={34} width={76} height={124} rx={6} strokeDasharray={active ? undefined : "3 3"} stroke={active ? G : "currentColor"} />
      <Line x={x + 10} y={48} w={34} o={0.6} />
      <rect x={x + 10} y={60} width={56} height={34} rx={3} opacity={0.5} />
      <Line x={x + 10} y={104} w={50} />
      <Line x={x + 10} y={114} w={40} />
      <rect x={x + 10} y={132} width={56} height={14} rx={3} fill={active ? G : "none"} stroke={active ? G : "currentColor"} opacity={active ? 1 : 0.5} />
    </g>
  )
  return (
    <Frame className={className} label="PAGE FLOW · v3">
      {screen(16)}
      {screen(122, true)}
      {screen(228)}
      <path d="M92 96 H122 M198 96 H228" strokeDasharray="3 3" />
      <path d="M116 92 l6 4 -6 4 M222 92 l6 4 -6 4" />
      <circle cx={160} cy={22} r={4} fill={G} stroke="none" />
      <Line x={170} y={20} w={60} o={0.5} />
    </Frame>
  )
}

/** Strategy: a deck slide with a headline and a bar chart. */
export function DeckWire({ className }: { className?: string }) {
  const bars = [44, 64, 52, 88, 72, 110]
  return (
    <Frame className={className} label="GTM DECK · 07/24">
      <rect x={16} y={14} width={288} height={172} rx={4} />
      <Line x={32} y={30} w={150} o={0.7} />
      <Line x={32} y={42} w={96} />
      {bars.map((h, i) => (
        <rect key={i} x={36 + i * 28} y={166 - h} width={18} height={h} fill={i === 3 ? G : "none"} stroke={i === 3 ? G : "currentColor"} strokeDasharray={i === 3 ? undefined : "3 2"} />
      ))}
      <path d="M30 166 H210" />
      <rect x={226} y={62} width={64} height={104} rx={3} strokeDasharray="3 3" />
      <Line x={236} y={76} w={40} o={0.6} />
      <Line x={236} y={88} w={44} />
      <Line x={236} y={98} w={34} />
      <Line x={236} y={108} w={44} />
      <circle cx={258} cy={140} r={14} stroke={G} />
      <path d="M258 126 A14 14 0 0 1 272 140 L258 140 Z" fill={G} stroke="none" />
    </Frame>
  )
}

/** Data: a dashboard with KPIs and a trend line. */
export function DashWire({ className }: { className?: string }) {
  return (
    <Frame className={className} label="SIGNALS · LIVE">
      <rect x={16} y={14} width={288} height={172} rx={4} />
      <path d="M16 36 H304" opacity={0.5} />
      <circle cx={28} cy={25} r={3} /> <circle cx={38} cy={25} r={3} /> <circle cx={48} cy={25} r={3} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={30 + i * 92} y={48} width={80} height={40} rx={3} strokeDasharray={i === 1 ? undefined : "3 3"} stroke={i === 1 ? G : "currentColor"} />
          <Line x={40 + i * 92} y={58} w={30} />
          <rect x={40 + i * 92} y={68} width={40} height={10} rx={2} fill={i === 1 ? G : "currentColor"} stroke="none" opacity={i === 1 ? 1 : 0.45} />
        </g>
      ))}
      <path d="M30 170 H290 M30 104 V170" opacity={0.5} />
      <path d="M30 160 C70 150, 90 156, 120 140 S180 120, 210 126 S260 104, 290 108" strokeDasharray="3 3" />
      <path d="M30 166 C70 160, 100 150, 130 136 S190 118, 220 112 S265 96, 290 92" stroke={G} strokeWidth={1.6} />
      <circle cx={290} cy={92} r={4} fill={G} stroke="none" />
    </Frame>
  )
}

/** Research: TAM / SAM / SOM model. */
export function TamWire({ className }: { className?: string }) {
  return (
    <Frame className={className} label="MARKET SIZING">
      <circle cx={110} cy={100} r={82} strokeDasharray="3 3" />
      <circle cx={110} cy={118} r={56} />
      <circle cx={110} cy={138} r={30} stroke={G} fill={G} fillOpacity={0.18} />
      <text x={110} y={34} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize={9} fill="currentColor" stroke="none">TAM</text>
      <text x={110} y={78} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize={9} fill="currentColor" stroke="none">SAM</text>
      <text x={110} y={142} textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize={9} fill="currentColor" stroke="none">SOM</text>
      <path d="M200 52 H300 M200 100 H300 M200 148 H300" opacity={0.4} strokeDasharray="2 3" />
      <Line x={210} y={36} w={70} o={0.6} />
      <Line x={210} y={84} w={54} o={0.45} />
      <Line x={210} y={132} w={62} o={0.45} />
      <rect x={210} y={160} width={40} height={10} rx={2} fill={G} stroke="none" />
    </Frame>
  )
}

/** Customer journey with touchpoints and a friction point. */
export function JourneyWire({ className }: { className?: string }) {
  const pts = [[30, 140], [80, 96], [130, 120], [180, 64], [230, 92], [286, 48]]
  return (
    <Frame className={className} label="JOURNEY · 25 TOUCHPOINTS">
      <path d="M20 170 H300" opacity={0.4} />
      <polyline points={pts.map((p) => p.join(",")).join(" ")} strokeDasharray="4 3" />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={i === 2 ? 9 : 6} fill={i === 2 ? G : "var(--wire-bg, transparent)"} stroke={i === 2 ? G : "currentColor"} />
          <path d={`M${x} ${y + 10} V170`} opacity={0.25} strokeDasharray="2 3" />
          <Line x={x - 14} y={176} w={28} o={0.3} />
        </g>
      ))}
      <rect x={146} y={104} width={70} height={28} rx={3} stroke={G} />
      <Line x={154} y={112} w={44} o={0.6} />
      <Line x={154} y={121} w={34} />
    </Frame>
  )
}

/** Product requirements doc with checklist. */
export function PrdWire({ className }: { className?: string }) {
  return (
    <Frame className={className} label="PRD · DRAFT 2">
      <rect x={60} y={10} width={200} height={180} rx={4} />
      <Line x={78} y={28} w={110} o={0.7} />
      <Line x={78} y={40} w={70} />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x={78} y={60 + i * 22} width={10} height={10} rx={2} stroke={i < 3 ? G : "currentColor"} fill={i < 3 ? G : "none"} />
          <Line x={96} y={63 + i * 22} w={[120, 96, 132, 88, 110][i]} o={i < 3 ? 0.5 : 0.3} />
        </g>
      ))}
      <rect x={78} y={170} width={56} height={10} rx={2} strokeDasharray="3 2" />
    </Frame>
  )
}

export const wires = { flow: FlowWire, deck: DeckWire, dash: DashWire, tam: TamWire, journey: JourneyWire, prd: PrdWire }
export type WireKey = keyof typeof wires
