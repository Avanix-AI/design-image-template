Text field with label, optional leading icon, helper and error states.

```jsx
<Input label="Email" placeholder="ban@email.com" iconLeft={<MailIcon/>} />
<Input label="Mật khẩu" type="password" error="Sai mật khẩu" />
```

`helper` shows muted text below; `error` turns the border red and replaces helper. `suffix` adds a trailing adornment. Focus shows the blue ring.
