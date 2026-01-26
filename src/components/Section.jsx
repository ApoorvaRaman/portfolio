export default function Section({ title, children }) {
  return (
    <section>
      <div className="container">
        <h2>{title}</h2>
        <div style={{ marginTop: "1.5rem" }}>{children}</div>
      </div>
    </section>
  );
}
