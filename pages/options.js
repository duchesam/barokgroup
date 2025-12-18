// pages/options.js
import Head from "next/head";

export default function Options() {
  const email = "admin@baruchermi.org";
  const phoneDisplay = "(904) 478-9306";
  const phoneLink = "+19044789306";
  const siteUrl = "https://barokgroup.org";
  const businessName = "Baruch-Ermi LLC";

  const title = "Options | Baruch-Ermi LLC";
  const description =
    "Clear real-estate paths: purchase, structured terms, and other solutions explained simply and professionally.";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: `${siteUrl}/options`,
    about: {
      "@type": "Organization",
      name: businessName,
      url: siteUrl,
      email,
      telephone: phoneLink,
    },
  };

  const cards = [
    {
      t: "Direct Purchase",
      d: "A straightforward offer with clear closing steps and timelines.",
    },
    {
      t: "Structured Terms",
      d: "When terms make sense, we help outline the structure clearly and professionally.",
    },
    {
      t: "Creative Financing (when appropriate)",
      d: "Options like seller-financed structures may be considered based on the property and goals.",
    },
    {
      t: "Investor Coordination",
      d: "Clean communication with stakeholders to reduce friction and protect timelines.",
    },
    {
      t: "Consultation First",
      d: "We start with clarity: your goals, constraints, and the cleanest path forward.",
    },
    {
      t: "Next Steps Plan",
      d: "A simple plan: documents, deadlines, and what to expect at each stage.",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/options`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/options`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <main style={{ minHeight: "100vh", background: "#0b1220", color: "#fff" }}>
        <header style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "22px 20px", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center" }}>
            <a href="/" style={{ color: "#fff", textDecoration: "none", fontWeight: 800 }}>Baruch-Ermi LLC</a>
            <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
              <a href="/services" style={{ color: "#fff" }}>Services</a>
              <a href="/options" style={{ color: "#fff" }}>Options</a>
              <a href="/contact" style={{ color: "#fff" }}>Contact</a>
            </nav>
          </div>
        </header>

        <section style={{ padding: "56px 20px 22px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0 }}>Options</h1>
            <p style={{ marginTop: 14, fontSize: 16, maxWidth: 760, color: "rgba(255,255,255,0.8)" }}>
              We keep things simple: present the paths, explain the tradeoffs, and move forward with the cleanest plan.
            </p>

            <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {cards.map((c) => (
                <div key={c.t} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", padding: 18, borderRadius: 14 }}>
                  <div style={{ fontWeight: 800 }}>{c.t}</div>
                  <div style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.6 }}>{c.d}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/contact" style={{ background: "#fff", color: "#0b1220", padding: "12px 16px", borderRadius: 10, fontWeight: 800, textDecoration: "none" }}>
                Discuss your situation
              </a>
              <a href={`mailto:${email}`} style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "12px 16px", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 700 }}>
                {email}
              </a>
              <a href={`tel:${phoneLink}`} style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "12px 16px", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 700 }}>
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
