// Avanix landing / hero screen.
function Landing({ setRoute }) {
  const { Button, GlassCard, Stat, StatusPill, Badge } = window.AvanixDesignSystem_a5b4a8;

  const Dot = ({ x, y, s = 4, o = 0.5 }) => (
    <span style={{ position: "absolute", left: x, top: y, width: s, height: s, borderRadius: 999,
      background: "var(--av-blue-300)", opacity: o, boxShadow: "0 0 8px var(--av-blue-400)" }} />
  );

  const pillars = [
    { n: 1, icon: <IconCap size={26}/>, t: "Kỹ năng thực chiến", d: "Học AI qua quy trình thật, không chỉ lý thuyết." },
    { n: 2, icon: <IconBot size={26}/>, t: "Agent tự vận hành", d: "Xây hệ thống Agent đọc, nghĩ và hành động." },
    { n: 3, icon: <IconLink size={26}/>, t: "Dữ liệu thành tài sản", d: "Biến ghi chú & dữ liệu hỗn loạn thành hệ thống." },
    { n: 4, icon: <IconChart size={26}/>, t: "Hệ thu nhập số", d: "Tự động hoá để tiết kiệm thời gian, tạo kết quả." },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ position: "relative", overflow: "hidden",
        background: "radial-gradient(80% 90% at 70% -10%, #16236e 0%, #0B1240 45%, #06091F 100%)",
        padding: "clamp(48px,7vw,96px) clamp(16px,4vw,40px) clamp(60px,8vw,110px)" }}>
        {/* particle field */}
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <Dot x="12%" y="20%" s={5}/><Dot x="22%" y="60%" o={0.3}/><Dot x="8%" y="78%" s={6}/>
          <Dot x="80%" y="14%" o={0.4}/><Dot x="90%" y="50%" s={5}/><Dot x="68%" y="80%" o={0.3}/>
          <Dot x="48%" y="10%" s={3} o={0.4}/>
        </div>
        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 40, alignItems: "center" }} className="av-hero-grid">
          <div>
            <StatusPill status="learning" tone="dark" style={{ marginBottom: 22 }}>
              Cộng đồng AI · 2,271 thành viên
            </StatusPill>
            <h1 style={{ position: "relative", zIndex: 1, fontSize: "clamp(2.6rem,5.2vw,4.2rem)", fontWeight: 800, lineHeight: 1.12,
              letterSpacing: "-0.03em", color: "#fff", margin: "0 0 18px" }}>
              AI thực chiến,<br/>ra <span style={{ color: "var(--av-blue-400)" }}>kết quả thật.</span>
            </h1>
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--av-slate-300)", maxWidth: 480, margin: "0 0 30px" }}>
              Làm chủ tư duy thiết kế hệ thống, xây Agent tự vận hành, và biến dữ liệu hỗn loạn thành tài sản — cùng Avanix.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button size="lg" iconRight={<IconArrow size={18}/>} onClick={() => setRoute("courses")}>Bắt tay vào việc</Button>
              <Button size="lg" variant="secondary" iconLeft={<IconPlay size={16}/>}>Xem demo</Button>
            </div>
          </div>
          {/* Liquid-glass 3D illustration: AI core orb + floating glass modules */}
          <div aria-hidden style={{ position: "relative", width: "min(460px,94%)", aspectRatio: "1 / 1", margin: "0 auto" }}>
            <div style={{ position: "absolute", left: "50%", bottom: "8%", transform: "translateX(-50%)", width: "76%", height: 70, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(46,114,255,0.55), transparent)", filter: "blur(10px)" }} />
            <div style={{ position: "absolute", inset: "15% 11% 19% 13%", borderRadius: 32, background: "linear-gradient(150deg, rgba(255,255,255,0.18), rgba(255,255,255,0.04))", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "0 34px 80px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.45)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", transform: "rotate(-7deg)" }} />
            <div style={{ position: "absolute", left: "50%", top: "44%", transform: "translate(-50%,-50%)", width: 150, height: 150, borderRadius: "50%", background: "radial-gradient(circle at 34% 28%, #ffffff 0%, #93B4FF 36%, #0A5BFF 76%, #0742C2 100%)", boxShadow: "0 0 0 1px rgba(255,255,255,0.3), 0 24px 56px -10px rgba(10,91,255,0.85), inset 0 -12px 26px rgba(7,66,194,0.6), inset 7px 9px 20px rgba(255,255,255,0.7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={`${ASSET}/logo/mark-white.png`} alt="" style={{ width: "46%", filter: "drop-shadow(0 3px 8px rgba(7,66,194,0.5))" }} />
            </div>
            <div style={{ position: "absolute", left: "4%", top: "20%", width: 92, padding: 12, borderRadius: 18, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.28)", boxShadow: "0 18px 40px -14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "radial-gradient(circle at 34% 30%, #fff, #5C90FF 55%, #0A5BFF)", boxShadow: "0 4px 10px -2px rgba(10,91,255,0.7)" }} />
              <span style={{ flex: 1, height: 6, borderRadius: 999, background: "rgba(255,255,255,0.4)" }} />
            </div>
            <div style={{ position: "absolute", right: "3%", top: "42%", width: 104, padding: 12, borderRadius: 18, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.28)", boxShadow: "0 18px 40px -14px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", display: "flex", flexDirection: "column", gap: 7 }}>
              <span style={{ height: 6, width: "70%", borderRadius: 999, background: "rgba(255,255,255,0.55)" }} />
              <span style={{ height: 6, width: "100%", borderRadius: 999, background: "rgba(255,255,255,0.3)" }} />
              <span style={{ height: 6, width: "45%", borderRadius: 999, background: "rgba(46,114,255,0.8)" }} />
            </div>
            <div style={{ position: "absolute", left: "16%", bottom: "16%", width: 26, height: 26, borderRadius: "50%", background: "radial-gradient(circle at 34% 30%, #fff, #C5D6FF 45%, #2E3CB0)", boxShadow: "0 8px 18px -4px rgba(11,18,64,0.7)" }} />
            <div style={{ position: "absolute", right: "18%", bottom: "12%", width: 16, height: 16, borderRadius: "50%", background: "radial-gradient(circle at 34% 30%, #fff, #5C90FF 55%, #0A5BFF)" }} />
          </div>
        </div>
      </section>

      {/* WHAT YOU'RE BUILDING — glass module diagram */}
      <section style={{ background: "radial-gradient(70% 80% at 50% 0%, rgba(10,91,255,0.1), transparent 55%), var(--bg-page-grad)",
        padding: "clamp(48px,7vw,90px) clamp(16px,4vw,40px)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center", marginBottom: 44 }}>
          <span className="av-eyebrow">Bạn đang xây dựng gì</span>
          <h2 style={{ fontSize: "clamp(1.9rem,3.6vw,2.8rem)", fontWeight: 800, letterSpacing: "-0.025em",
            color: "var(--av-navy)", margin: "10px 0 0" }}>Bốn mảnh ghép, một hệ thống.</h2>
        </div>
        <div style={{ maxWidth: 880, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="av-pillars">
          {pillars.map((p) => (
            <GlassCard key={p.n} padding={24} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span className="av-step" style={{ flex: "none" }}>{p.n}</span>
              <div>
                <div style={{ color: "var(--av-blue-600)", marginBottom: 8 }}>{p.icon}</div>
                <h4 style={{ fontSize: 18, margin: "0 0 4px", color: "var(--av-navy)" }}>{p.t}</h4>
                <p style={{ fontSize: 14, margin: 0, color: "var(--text-body)", lineHeight: 1.5 }}>{p.d}</p>
              </div>
            </GlassCard>
          ))}
        </div>
        {/* stats */}
        <div style={{ maxWidth: 880, margin: "40px auto 0", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="av-stats">
          <Stat value="2,271" label="Thành viên" align="center" />
          <Stat value="33" label="Bài học" align="center" />
          <Stat value="6" label="Cộng sự" align="center" />
          <Stat value="$5" label="/ tháng" align="center" />
        </div>
      </section>
    </div>
  );
}
window.Landing = Landing;
