The signature frosted-glass panel — wrap content cards, feature modules, stat blocks, and hero callouts in it.

```jsx
<GlassCard padding={28}>
  <h3>What you're actually building</h3>
  <p>Four parts working together to create your second brain.</p>
</GlassCard>

<GlassCard tone="dark" glow>…</GlassCard>   {/* on a navy section */}
```

Set `tone="dark"` when placed on a navy/gradient background. `strong` increases opacity for dense content; `glow` adds the electric-blue halo for hero moments. Tune `padding` and `radius` as needed.
