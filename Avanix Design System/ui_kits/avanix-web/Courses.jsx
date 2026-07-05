// Avanix courses catalog screen.
function Courses({ setRoute }) {
  const { GlassCard, Badge, Button, Tabs, ProgressBar, Input } = window.AvanixDesignSystem_a5b4a8;
  const [filter, setFilter] = React.useState("all");

  const courses = [
    { t: "AI Automation Fundamentals", d: "Học tự động hoá và xây workflow thông minh với n8n + Claude.", lv: "Beginner", n: 12, cat: "auto", icon: <IconGear size={24}/>, prog: 64, tag: "Phổ biến" },
    { t: "Xây Agent tự vận hành", d: "Thiết kế Agent đọc–nghĩ–hành động, kết nối công cụ thật.", lv: "Intermediate", n: 18, cat: "agent", icon: <IconBot size={24}/>, prog: 0 },
    { t: "Bộ não thứ hai với Claude", d: "Biến ghi chú & dữ liệu hỗn loạn thành hệ thống tri thức.", lv: "Beginner", n: 10, cat: "data", icon: <IconLink size={24}/>, prog: 30 },
    { t: "Hệ thu nhập số", d: "Đóng gói kỹ năng AI thành sản phẩm và dòng tiền.", lv: "Advanced", n: 15, cat: "income", icon: <IconChart size={24}/>, prog: 0, tag: "Mới" },
    { t: "Prompt như một kỹ sư", d: "Khung tư duy ra prompt, đánh giá và lặp có hệ thống.", lv: "Beginner", n: 8, cat: "agent", icon: <IconSpark size={24}/>, prog: 0 },
    { t: "Debug khi hệ thống gãy", d: "Bài học thực tế khi triển khai cho doanh nghiệp.", lv: "Advanced", n: 14, cat: "auto", icon: <IconShield size={24}/>, prog: 0 },
  ];
  const tabs = [
    { id: "all", label: "Tất cả" },
    { id: "auto", label: "Tự động hoá" },
    { id: "agent", label: "Agent" },
    { id: "data", label: "Dữ liệu" },
    { id: "income", label: "Thu nhập" },
  ];
  const shown = filter === "all" ? courses : courses.filter((c) => c.cat === filter);

  return (
    <section style={{ background: "var(--bg-page-grad)", minHeight: "100%", padding: "clamp(32px,5vw,56px) clamp(16px,4vw,40px) 80px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div style={{ marginBottom: 28 }}>
          <span className="av-eyebrow">Khoá học</span>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--av-navy)", margin: "8px 0 0" }}>
            Học để <span style={{ color: "var(--av-blue-600)" }}>làm được</span>.
          </h1>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 26 }}>
          <Tabs value={filter} onChange={setFilter} items={tabs} />
          <Input placeholder="Tìm khoá học…" iconLeft={<IconSearch size={16}/>} style={{ minWidth: 240 }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 20 }}>
          {shown.map((c) => (
            <GlassCard key={c.t} padding={0} style={{ display: "flex", flexDirection: "column" }}>
              {/* media header */}
              <div style={{ position: "relative", height: 120, display: "flex", alignItems: "center", justifyContent: "center",
                background: "radial-gradient(80% 120% at 30% 0%, #1b2570, #0B1240)", overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", width: 120, height: 120, borderRadius: 999,
                  background: "radial-gradient(closest-side, rgba(46,114,255,0.5), transparent)", left: -20, bottom: -40 }} />
                <div style={{ color: "#fff", opacity: 0.95, transform: "scale(2)" }}>{c.icon}</div>
                {c.tag && <span style={{ position: "absolute", top: 12, right: 12 }}><Badge variant="solid" color="blue">{c.tag}</Badge></span>}
              </div>
              <div style={{ padding: 20, display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                  <Badge color="neutral">{c.lv}</Badge>
                  <Badge color="blue" variant="soft">{c.n} bài</Badge>
                </div>
                <h4 style={{ fontSize: 18, margin: "0 0 6px", color: "var(--av-navy)" }}>{c.t}</h4>
                <p style={{ fontSize: 14, margin: "0 0 16px", color: "var(--text-body)", lineHeight: 1.5, flex: 1 }}>{c.d}</p>
                {c.prog > 0 ? (
                  <div style={{ marginBottom: 14 }}><ProgressBar value={c.prog} showValue size="sm" /></div>
                ) : null}
                <Button variant={c.prog > 0 ? "primary" : "secondary"} block iconRight={<IconArrow size={16}/>}>
                  {c.prog > 0 ? "Tiếp tục học" : "Bắt đầu"}
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Courses = Courses;
