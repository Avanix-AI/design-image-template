On/off toggle for settings and feature flags.

```jsx
<Switch defaultChecked label="Bật tự động hoá" />
<Switch checked={dark} onChange={setDark} size="sm" />
```

Controlled via `checked` + `onChange`, or uncontrolled via `defaultChecked`. Optional `label` sits to the right.
