Primary action button — use for the main CTA on any surface; one primary per view, glass/ghost for secondary actions.

```jsx
<Button variant="primary" size="lg">Bắt đầu ngay</Button>
<Button variant="secondary" iconLeft={<PlayIcon/>}>Xem demo</Button>
<Button variant="ghost">Tìm hiểu thêm</Button>
```

Variants: `primary` (electric blue, the default CTA), `secondary` (frosted glass, sits on any background), `ghost` (text-only, low emphasis), `outline` (blue ring), `dark` (navy, for use on light hero sections). Sizes `sm | md | lg`. Add `pill` for fully rounded, `block` to fill width, `iconLeft`/`iconRight` for icons.
