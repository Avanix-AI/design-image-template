// Avanix top navigation bar — glass, used across screens.
function Nav({ route, setRoute, tone = "dark" }) {
  const { Button } = window.AvanixDesignSystem_a5b4a8;
  const dark = tone === "dark";
  const items = [
    { id: "landing", label: "Trang chủ" },
    { id: "courses", label: "Khoá học" },
    { id: "dashboard", label: "Cộng đồng" },
  ];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "14px clamp(16px,4vw,40px)",
      background: dark ? "rgba(11,18,64,0.55)" : "rgba(255,255,255,0.6)",
      borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "var(--border)"}`,
      backdropFilter: "blur(16px) saturate(1.4)", WebkitBackdropFilter: "blur(16px) saturate(1.4)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <img
          src={`${ASSET}/logo/${dark ? "lockup-white" : "lockup-navy"}.png`}
          alt="Avanix" style={{ height: 30, cursor: "pointer" }}
          onClick={() => setRoute("landing")}
        />
        <nav style={{ display: "flex", gap: 6 }} className="av-navlinks">
          {items.map((it) => (
            <button key={it.id} onClick={() => setRoute(it.id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600,
              padding: "8px 12px", borderRadius: 10,
              color: route === it.id ? (dark ? "#fff" : "var(--av-navy)") : (dark ? "var(--av-slate-300)" : "var(--text-body)"),
              background: route === it.id ? (dark ? "rgba(255,255,255,0.1)" : "var(--av-blue-50)") : "transparent",
            }}>{it.label}</button>
          ))}
        </nav>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button variant={dark ? "ghost" : "ghost"} size="sm" style={dark ? { color: "var(--av-slate-300)" } : {}}>Đăng nhập</Button>
        <Button size="sm" pill iconRight={<IconArrow size={16}/>}>Tham gia</Button>
      </div>
    </header>
  );
}
window.Nav = Nav;
