Progress indicator for courses, onboarding, and automation runs.

```jsx
<ProgressBar value={64} label="AI Automation Fundamentals" showValue />
<ProgressBar value={3} max={10} size="sm" tone="dark" />
```

`value`/`max` set the fill; `label` and `showValue` add the header row. Sizes sm | md | lg; `tone="dark"` for navy backgrounds.
