import Section from "./Section";
export default function Achievements() {
  return (
    <Section title="Achievements">
      <p>
        <strong>Best Player Award</strong> — Clash of Minds 2025
      </p>
      <p className="muted">
        Week-long multi-event team competition including chess, business
        strategy, design, and logic challenges. Served as team leader; team
        secured Second Prize overall.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem"
        }}
      >
        <img
          src="/images/best-player.jpg"
          alt="Best Player Award poster - Clash of Minds 2025"
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <img
          src="/images/clash-of-minds-poster.jpg"
          alt="Clash of Minds 2025 event poster"
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </div>
      <p style={{ marginTop: "2rem" }}>
        Certifications: IBM Soft Skills · NPTEL Problem Solving Through
        Programming in C · Digital 101 (NASSCOM)
      </p>
    </Section>
  );
}
