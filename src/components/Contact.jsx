import Section from "./Section";
export default function Contact() {
  const selectEmail = (e) => {
    const range = document.createRange();
    range.selectNodeContents(e.target);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  };
  return (
    <Section title="Contact">
      <p>
        Open to internships and learning-driven opportunities where clarity,
        composure, and systems thinking matter.
      </p>
      <p>
        <span
          className="accent"
          onClick={selectEmail}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") selectEmail(e);
          }}
          style={{
            cursor: "pointer",
            userSelect: "text"
          }}
        >
          24cd010.apoorvaraman@adishankara.ac.in
        </span>{" "}
        ·{" "}
        <a
          href="https://www.linkedin.com/in/ApoorvaRaman"
          className="accent"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a
          href="https://github.com/ApoorvaRaman"
          className="accent"
        >
          GitHub
        </a>
      </p>
    </Section>
  );
}
