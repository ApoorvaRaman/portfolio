import Section from "./Section";
export default function Projects() {
  return (
    <Section title="Selected Work">
      <article>
        <h3>CareerPath</h3>
        <p>
          Agentic AI web application guiding students through structured
          reflection to discover best-fit career paths.
        </p>
        <p className="muted">
          Focus on system thinking, agent workflows, and transparent use of AI
          tools. Built using the Adya AI platform.
        </p>
      </article>
      <article style={{ marginTop: "2rem" }}>
        <h3>Nexa</h3>
        <p>
          AI study companion built for clarity and approachability during a
          TinkerHub event. Designed with usability as the primary constraint.
        </p>
      </article>
      <article style={{ marginTop: "2rem" }}>
        <h3>Quiz Website</h3>
        <p>
          Object-oriented programming project emphasizing clean structure,
          modular logic, and maintainability.
        </p>
      </article>
    </Section>
  );
}
