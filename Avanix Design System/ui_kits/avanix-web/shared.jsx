// Avanix UI kit — shared icons (Lucide-style, 2px stroke) + helpers.
// Exported to window for use across the babel script files.

const Icon = ({ d, size = 20, fill = "none", stroke = "currentColor", sw = 2, children, vb = "0 0 24 24" }) => (
  <svg width={size} height={size} viewBox={vb} fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {children || <path d={d} />}
  </svg>
);

const IconPlay   = (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="M6 4l14 8-14 8z"/></Icon>;
const IconArrow  = (p) => <Icon {...p}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></Icon>;
const IconCap    = (p) => <Icon {...p}><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></Icon>;
const IconGear   = (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></Icon>;
const IconBot    = (p) => <Icon {...p}><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 8V4M8 2h8"/><circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.2" fill="currentColor" stroke="none"/></Icon>;
const IconChart  = (p) => <Icon {...p}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></Icon>;
const IconBolt   = (p) => <Icon {...p}><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 3l8 3v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></Icon>;
const IconLink   = (p) => <Icon {...p}><path d="M9 15l6-6"/><path d="M11 6l1-1a4 4 0 0 1 6 6l-1 1"/><path d="M13 18l-1 1a4 4 0 0 1-6-6l1-1"/></Icon>;
const IconBook   = (p) => <Icon {...p}><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 5v14"/></Icon>;
const IconCheck  = (p) => <Icon {...p}><path d="m4 12 5 5L20 6"/></Icon>;
const IconUsers  = (p) => <Icon {...p}><circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 5.5a3.5 3.5 0 0 1 0 6.9M21 20c0-2.6-1.6-4.8-4-5.6"/></Icon>;
const IconSearch = (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></Icon>;
const IconHeart  = (p) => <Icon {...p}><path d="M12 21C5 16 3 12 3 8.5 3 6 5 4 7.5 4 9.4 4 11 5 12 6.5 13 5 14.6 4 16.5 4 19 4 21 6 21 8.5 21 12 19 16 12 21z"/></Icon>;
const IconSpark  = (p) => <Icon {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></Icon>;
const IconClock  = (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>;
const IconMenu   = (p) => <Icon {...p}><path d="M3 6h18M3 12h18M3 18h18"/></Icon>;

// avatar/logo paths relative to ui_kits/avanix-web/index.html
const ASSET = "../../assets";

Object.assign(window, {
  Icon, IconPlay, IconArrow, IconCap, IconGear, IconBot, IconChart, IconBolt,
  IconShield, IconLink, IconBook, IconCheck, IconUsers, IconSearch, IconHeart,
  IconSpark, IconClock, IconMenu, ASSET,
});
