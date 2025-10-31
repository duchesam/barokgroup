export default function Section({ title, intro, children }) {
  return (
    <section className="container content">
      {title && <h1>{title}</h1>}
      {intro && <p className="intro">{intro}</p>}
      <div className="grid">{children}</div>
    </section>
  );
}
