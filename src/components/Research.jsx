import Section from "./Section";
export default function Research() {
  return (
    <Section title="Research">
      <h3>
        Adversarial Validation for Hidden Data Leakage in Machine Learning
      </h3>
      <p>
        Co-authored research exploring adversarial validation techniques to
        uncover subtle data leakage in machine learning pipelines.
      </p>
      <p>
        Published at <strong>CISCom 2025</strong> — First International Conference
        on Computational Intelligence and Soft Computing, held in Melaka,
        Malaysia.
      </p>
      <p className="muted">
        This work reflects my interest in model reliability, evaluation rigor,
        and designing systems that surface hidden failure modes.
      </p>
      <img
        src="/images/research-certificate.pdf"
        alt="Author certificate for CISCom 2025 research paper"
        style={{
          marginTop: "2rem",
          maxWidth: "100%",
          borderRadius: "8px"
        }}
      />
    </Section>
  );
}
