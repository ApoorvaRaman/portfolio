export default function ThemeToggle({ theme, setTheme }) {
  const toggle = () =>
    setTheme(theme === "dark" ? "light" : "dark");
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark and light mode"
      style={{
        position: "fixed",
        top: "1.25rem",
        right: "1.25rem",
        background: "transparent",
        border: "1px solid var(--muted)",
        borderRadius: "999px",
        padding: "0.4rem 0.75rem",
        fontSize: "0.85rem",
        cursor: "pointer",
        color: "inherit"
      }}
    >
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
}
