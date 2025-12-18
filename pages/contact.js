// pages/contact.js
import Head from "next/head";

export default function Contact() {
  const email = "admin@baruchermi.org";
  const phoneDisplay = "(904) 478-9306";
  const phoneLink = "+19044789306";
  const siteUrl = "https://barokgroup.org";
  const businessName = "Baruch-Ermi LLC";

  const title = "Contact | Baruch-Ermi LLC";
  const description =
    "Contact Baruch-Ermi LLC for professional real-estate solutions. Email or call to schedule a consultation.";

  // LocalBusiness schema helps trust + contact info in structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    url: siteUrl,
    telephone: phoneLink,
    email: email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: phoneLink,
        email: email,
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/contact`} />
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
            <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: 0 }}>Contact</h1>
            <p style={{ marginTop: 14, fontSize: 16, maxWidth: 760, color: "rgba(255,255,255,0.8)" }}>
              Reach us directly to schedule a quick conversation. We’ll keep it clear and professional.
            </p>

            <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", padding: 18, borderRadius: 14 }}>
                <div style={{ fontWeight: 800 }}>Email</div>
                <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.6 }}>
                  <a href={`mailto:${email}`} style={{ color: "#fff" }}>{email}</a>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", padding: 18, borderRadius: 14 }}>
                <div style={{ fontWeight: 800 }}>Phone</div>
                <div style={{ marginTop: 8, opacity: 0.85, lineHeight: 1.6 }}>
                  <a href={`tel:${phoneLink}`} style={{ color: "#fff" }}>{phoneDisplay}</a>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)", padding: 18, borderRadius: 14 }}>
                <div style={{ fontWeight: 800 }}>What to include</div>
                <div style={{ marginTop: 8, opacity: 0.8, lineHeight: 1.6 }}>
                  Property address (if any), your goal (sell/buy/structure), and your preferred timeline.
                </div>
              </div>
            </div>

            <div style={{ marginTop: 26, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href={`mailto:${email}`} style={{ background: "#fff", color: "#0b1220", padding: "12px 16px", borderRadius: 10, fontWeight: 800, textDecoration: "none" }}>
                Email now
              </a>
              <a href={`tel:${phoneLink}`} style={{ border: "1px solid rgba(255,255,255,0.2)", padding: "12px 16px", borderRadius: 10, color: "#fff", textDecoration: "none", fontWeight: 700 }}>
                Call now
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
