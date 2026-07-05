Glass capsule showing a live status — agent state, system health, course progress.

```jsx
<StatusPill status="learning">Learning</StatusPill>
<StatusPill status="active">Hệ thống đang chạy</StatusPill>
<StatusPill icon={<WaveIcon/>}>Remember. Connect. Grow.</StatusPill>
```

`status`: active | learning | paused | error | idle (drives the dot color). Pass `icon` to replace the dot. `tone="dark"` on navy.
