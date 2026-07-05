// Avanix community dashboard screen.
function Dashboard({ setRoute }) {
  const { GlassCard, Badge, Button, Avatar, Stat, StatusPill, ProgressBar } = window.AvanixDesignSystem_a5b4a8;

  const feed = [
    { u: "Nguyên Pie", v: true, t: "5 phút trước", b: "Vừa drop template n8n + Claude tự phân loại email → Notion. Ae copy về chạy thử nha 👇", likes: 142, cmt: 28, tag: "Template" },
    { u: "Minh Trần", v: false, t: "1 giờ trước", b: "Hệ thống Agent bị gãy ở bước gọi tool, ai từng gặp lỗi rate-limit chưa?", likes: 31, cmt: 12, tag: "Hỏi đáp" },
    { u: "Linh Hoàng", v: false, t: "3 giờ trước", b: "Hoàn thành AI Automation Fundamentals 🎉 Tuần này tiết kiệm ~6 giờ nhập liệu thủ công.", likes: 88, cmt: 9, tag: "Khoe kết quả" },
  ];

  return (
    <section style={{ background: "var(--bg-page-grad)", minHeight: "100%", padding: "clamp(28px,4vw,48px) clamp(16px,4vw,40px) 80px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 320px", gap: 28, alignItems: "start" }} className="av-dash-grid">
        {/* main feed */}
        <div>
          <div style={{ marginBottom: 22 }}>
            <h1 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "var(--av-navy)", margin: 0 }}>
              Chào, Linh 👋
            </h1>
            <p style={{ margin: "6px 0 0", color: "var(--text-body)", fontSize: 16 }}>Hôm nay cộng đồng có gì mới.</p>
          </div>

          {/* composer */}
          <GlassCard padding={16} style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 22 }}>
            <Avatar name="Linh Hoàng" size={42} />
            <div style={{ flex: 1, padding: "11px 16px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)", fontSize: 15 }}>
              Chia sẻ workflow hoặc đặt câu hỏi…
            </div>
            <Button size="sm" iconLeft={<IconSpark size={15}/>}>Đăng</Button>
          </GlassCard>

          {/* posts */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {feed.map((p, i) => (
              <GlassCard key={i} padding={20}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <Avatar name={p.u} verified={p.v} size={42} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontWeight: 700, color: "var(--av-navy)" }}>{p.u}</span>
                      <Badge color="blue" variant="soft">{p.tag}</Badge>
                    </div>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{p.t}</span>
                  </div>
                </div>
                <p style={{ margin: "0 0 14px", fontSize: 15, lineHeight: 1.55, color: "var(--text-strong)" }}>{p.b}</p>
                <div style={{ display: "flex", gap: 18, color: "var(--text-muted)", fontSize: 14, fontWeight: 600 }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><IconHeart size={17}/> {p.likes}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><IconBook size={17}/> {p.cmt}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 18, position: "sticky", top: 90 }} className="av-dash-side">
          <GlassCard padding={20}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img src={`${ASSET}/logo/app-icon-navy.png`} alt="" style={{ width: 40, borderRadius: 11 }} />
              <div>
                <div style={{ fontWeight: 800, color: "var(--av-navy)", fontFamily: "var(--font-display)" }}>Avanix AI</div>
                <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Cộng đồng · $5/tháng</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <Stat value="2,271" label="Thành viên" />
              <Stat value="412" label="Online" />
            </div>
          </GlassCard>

          <GlassCard padding={20}>
            <h4 style={{ margin: "0 0 4px", fontSize: 16, color: "var(--av-navy)" }}>Lộ trình của bạn</h4>
            <p style={{ margin: "0 0 14px", fontSize: 13, color: "var(--text-muted)" }}>AI Automation Fundamentals</p>
            <ProgressBar value={64} showValue label="Tiến độ" />
            <Button variant="secondary" block size="sm" style={{ marginTop: 16 }} iconRight={<IconArrow size={15}/>} onClick={() => setRoute("courses")}>Tiếp tục học</Button>
          </GlassCard>

          <GlassCard padding={20}>
            <h4 style={{ margin: "0 0 12px", fontSize: 16, color: "var(--av-navy)" }}>Cộng sự online</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Nguyên Pie","Minh Trần","Đức AI"].map((n,i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <Avatar name={n} size={32} verified={i===0} />
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--av-navy)", flex: 1 }}>{n}</span>
                  <StatusPill status="active" style={{ padding: "4px 10px", fontSize: 11 }}>online</StatusPill>
                </div>
              ))}
            </div>
          </GlassCard>
        </aside>
      </div>
    </section>
  );
}
window.Dashboard = Dashboard;
