// pages/services.js
import Head from "next/head";

function Layout({ title, description, children }) {
  const email = "admin@baruchermi.org";
  const phoneDisplay = "(904) 478-9306";
  const phoneLink = "+19044789306";
  const siteUrl = "https://barokgroup.org";
  const businessName = "Baruch-Ermi LLC";

  // JSON-LD Schema (Organization + LocalBusiness style info)
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessName,
    url: siteUrl,
    email,
    telephone: phoneLink,
    sameAs: ["https://github.com/duchesam/barokgroupp"],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={`${siteUrl}/services`} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/services`} />

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main style={{ minHeight: "100vh", background: "#0b1220", color: "#fff" }}>
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div
            style={{
              maxWidth: 1100,
              margin: "0 auto",
              padding: "22px 20px",
              display: "flex",
              justifyContent: "space-between",
              gap: 16,
              alignItems: "center",
            }}
          >
            <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 800 }}>
              Baruch-Ermi LLC
            </a>
            <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
              <a href="/services" style={{ color: "#fff" }}>Services</a>
              <a href="/options" style={{ color: "#fff" }}>Options</a>
              <a href="/contact" style={{ color: "#fff" }}>Contact</a>
            </nav>
          </div>
        </header>

        <section style={{ padding: "56px 20px 22px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0 }}>Services</h1>
            <p style={{ marginTop: 14, fontSize: 16, maxWidth: 760, color: "rgba(255,255,255,0.8)" }}>
              We provide clear, professional support for owners and investors. No pressure—just options, structure,
              and clean execution.
            </p>

            <div
              style={{
                marginTop: 22,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 16,
              }}
            >
              {[
                {
                  t: "Property Acquisition",
                  d: "Direct purchases and structured offers aligned with market realities and your timeline.",
                },
                {
                  t: "Creative Financing Support",
                  d: "Seller finance and alternative structures that protect both sides and reduce surprises.",
                },
                {
                  t: "Transaction Coordination",
                  d: "Clear documentation flow, deadlines, and communication from start to close.",
                },
                {
                  t: "Investor-Focused Analysis",
                  d: "Basic underwriting mindset: exit clarity, risk flags, and clean assumptions.",
                },
                {
                  t: "Owner Consultations",
                  d: "Guidance on options so you can decide confidently without sales pressure.",
                },
                {
                  t: "Professional Communication",
                  d: "Clean language and clear timelines for agents, title, lenders, and stakeholders.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    padding: 18,
                    borderRadius: 14,
                  }}
                >
                  <div style={{ fontWeight: 800 }}>{c.t}</div>
                  <div style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.6 }}>{c.d}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="/contact"
                style={{
                  background: "#fff",
                  color: "#0b1220",
                  padding: "12px 16px",
                  borderRadius: 10,
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                Schedule a consultation
              </a>
              <a
                href={`mailto:${email}`}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "12px 16px",
                  borderRadius: 10,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {email}
              </a>
              <a
                href={`tel:${phoneLink}`}
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "12px 16px",
                  borderRadius: 10,
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginTop: 40 }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px", fontSize: 14, opacity: 0.7 }}>
            © {new Date().getFullYear()} Baruch-Ermi LLC · barokgroup.org · {email}
          </div>
        </footer>
      </main>
    </>
  );
}

export default function Services() {
  return (
    <Layout
      title="Services | Baruch-Ermi LLC"
      description="Professional real estate acquisition, creative financing support, and transaction coordination."
    >
      {/* content is in Layout */}
    </Layout>
  );
}
