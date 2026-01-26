import AmbientScene from "../three/AmbientScene";
export default function Hero() {
  return (
    <section>
      <div className="container" style={{ position: "relative" }}>
        <h1>
          Clear thinking at the intersection of
          <br />
          <span className="accent">
            computer science, research, and systems
          </span>
        </h1>
        <p>
          BTech CSE (Data Science). Strong fundamentals, research-driven mindset,
          and a calm approach to complex problems.
        </p>
        <div style={{ marginTop: "3rem", height: "220px" }}>
          <AmbientScene />
        </div>
      </div>
    </section>
  );
}
