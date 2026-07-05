Glass segmented control for switching views/sections.

```jsx
<Tabs
  defaultValue="courses"
  items={[
    { id: "courses", label: "Khoá học" },
    { id: "community", label: "Cộng đồng" },
    { id: "tools", label: "Công cụ" },
  ]}
  onChange={(id) => setTab(id)}
/>
```

Controlled (`value` + `onChange`) or uncontrolled (`defaultValue`). Each item takes `{ id, label, icon? }`. `tone="dark"` on navy.
