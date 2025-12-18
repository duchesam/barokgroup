// pages/index.js
import Head from "next/head";

export default function Home() {
  const phoneDisplay = "(904) 478-9306";
  const phoneLink = "+19044789306";
  const email = "admin@baruchermi.org";

  return (
    <>
      <Head>
        <title>Baruch-Ermi LLC | Real Estate Solutions</title>
        <meta
          name="description"
          content="Baruch-Ermi LLC provides professional real estate acquisition and structured transaction solutions across the U.S."
        />
      </Head>

      <main style={{ minHeight: "100vh", background: "#0b1220", color: "#fff" }}>
        {/* Header */}
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 20px", display: "flex", justifyContent: "space-between" }}>
            <strong>Baruch-Ermi LLC</strong>
            <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
              <a href="/services" style={{ color: "#fff" }}>Services</a>
              <a href="/options" style={{ color: "#fff" }}>Options</a>
              <a href="/contact" style={{ color: "#fff" }}>Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero */}
        <section style={{ padding: "64px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1 style={{ fontSize: 44, lineHeight: 1.1 }}>
              Clear, professional real-estate solutions.
            </h1>

            <p style={{ marginTop: 16, fontSize: 18, maxWidth: 720, color: "rgba(255,255,255,0.8)" }}>
              Baruch-Ermi LLC works with property owners and investors to structure
              clean acquisitions, creative financing options, and efficient closings —
              without pressure or gimmicks.
            </p>

            <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href="/contact"
                style={{
                  background: "#fff",
                  color: "#0b1220",
                  padding: "12px 18px",
                  borderRadius: 10,
                  fontWeight: 700,
                }}
              >
                Schedule a consultation
              </a>

              <a
                href={`mailto:${email}`}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "12px 18px",
                  borderRadius: 10,
                  color: "#fff",
                }}
              >
                Email us
              </a>
            </div>

            <p style={{ marginTop: 18, fontSize: 14, opacity: 0.75 }}>
              {phoneDisplay} · {email}
            </p>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "32px 20px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2>What We Do</h2>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18, marginTop: 18 }}>
              {[
                ["Property Acquisition", "Direct purchases and structured offers aligned with market realities."],
                ["Creative Financing", "Seller finance and alternative structures that protect all parties."],
                ["Transaction Support", "Clean documentation, timelines, and professional coordination."],
              ].map(([title, desc]) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.04)", padding: 18, borderRadius: 14 }}>
                  <strong>{title}</strong>
                  <p style={{ marginTop: 8, opacity: 0.8 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 60 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px", fontSize: 14, opacity: 0.7 }}>
            © {new Date().getFullYear()} Baruch-Ermi LLC · barokgroup.org · {email}
          </div>
        </footer>
      </main>
    </>
  );
}
