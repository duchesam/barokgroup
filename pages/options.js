// pages/options.js
import Head from "next/head";

const options = [
  {
    title: "Reinstatement",
    blurb:
      "Pay the past-due amount (plus fees) to bring the loan current and stop the foreclosure timeline.",
  },
  {
    title: "Repayment Plan",
    blurb:
      "Spread the arrears over several months and add them to your regular payment until you’re current.",
  },
  {
    title: "Forbearance",
    blurb:
      "Your lender temporarily reduces or pauses payments while you stabilize income and plan next steps.",
  },
  {
    title: "Loan Modification",
    blurb:
      "Restructure terms (rate, term length, capitalization of arrears) to make payments affordable long-term.",
  },
  {
    title: "Refinance",
    blurb:
      "Replace the current mortgage with a new loan to pay off arrears and reset the clock (credit/income required).",
  },
  {
    title: "Cash Sale",
    blurb:
      "Sell fast for cash, avoid showings/repairs, and use proceeds to pay off the loan and any liens.",
  },
  {
    title: "Short Sale",
    blurb:
      "With lender approval, sell for less than what’s owed and settle the debt to avoid auction.",
  },
  {
    title: "Deed in Lieu",
    blurb:
      "Voluntarily transfer the deed to the lender to satisfy the debt and avoid a foreclosure on record.",
  },
  {
    title: "Chapter 13 Bankruptcy",
    blurb:
      "Court-approved plan to repay arrears over time; the automatic stay can immediately pause foreclosure.",
  },
  {
    title: "Auction Rescue / Buyback",
    blurb:
      "Investor purchases the property before auction; you may have a buyback/leaseback path (case-by-case).",
  },
];

export default function OptionsPage() {
  return (
    <>
      <Head>
        <title>Options | Baruch Ermi</title>
        <meta
          name="description"
          content="Understand every option to stop foreclosure or resolve mortgage arrears—clearly explained by Baruch Ermi."
        />
      </Head>

      <header
        style={{
          background:
            "radial-gradient(80% 80% at 50% 0%, #0b1220 0%, #05070d 60%)",
          color: "white",
        }}
      >
        <nav
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "16px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="/" style={{ fontWeight: 800, fontSize: 20 }}>
            Barok Group
          </a>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/options">Options</a>
            <a href="/services">Services</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
          </div>
          <a
            href="/contact"
            style={{
              background: "#2563eb",
              padding: "10px 14px",
              borderRadius: 8,
              color: "white",
              fontWeight: 600,
            }}
          >
            Get Free Offer
          </a>
        </nav>

        <section
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 24px 24px",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 28,
          }}
        >
          <div>
            <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: "0 0 12px" }}>
              Your Options to Stop Foreclosure
            </h1>
            <p style={{ opacity: 0.9, fontSize: 18 }}>
              We walk you through every path—fast, honest, and pressure-free—so
              you can choose what’s right for your family, not ours.
            </p>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href="/contact"
                style={{
                  background: "white",
                  color: "#0b1220",
                  padding: "12px 16px",
                  borderRadius: 10,
                  fontWeight: 700,
                }}
              >
                Talk to a Specialist
              </a>
              <a
                href="tel:+15712753720"
                style={{
                  border: "1px solid rgba(255,255,255,0.25)",
                  padding: "12px 16px",
                  borderRadius: 10,
                  color: "white",
                }}
              >
                Call (571) 275-3720
              </a>
            </div>
          </div>

          <div
            style={{
              overflow: "hidden",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <img
              alt="Homeowner discussing options"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </section>
      </header>

      {/* Video + explainer */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "40px 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 28,
        }}
      >
        <div
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            borderRadius: 12,
            boxShadow: "0 6px 24px rgba(0,0,0,0.12)",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/7-o9dewIYFc"
            title="Foreclosure Options"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div>
          <h2 style={{ marginTop: 0 }}>How we help you choose</h2>
          <ul style={{ lineHeight: 1.7, paddingLeft: 18 }}>
            <li>We map deadlines (notice, sale date) and urgent actions.</li>
            <li>We explain lender programs and investor alternatives.</li>
            <li>We estimate timelines, costs, and credit impact for each path.</li>
            <li>No pressure—just facts so you decide confidently.</li>
          </ul>
        </div>
      </section>

      {/* Options grid */}
      <section
        style={{
          background: "#0f172a",
          color: "white",
          marginTop: 8,
          padding: "40px 0",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <h2 style={{ marginTop: 0 }}>Every Option, Clearly Explained</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 18,
              marginTop: 16,
            }}
          >
            {options.map((o) => (
              <article
                key={o.title}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <h3 style={{ margin: "0 0 6px", fontSize: 18 }}>{o.title}</h3>
                <p style={{ margin: 0, opacity: 0.9 }}>{o.blurb}</p>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              padding: 18,
              borderRadius: 12,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <strong>Heads-up:</strong> Lender rules vary by state and investor
            (FHA/VA/Conventional). We’ll verify what you qualify for and line up
            paperwork fast.
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "30px 24px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 18,
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Talk through your options in 10 minutes.</h2>
          <p style={{ marginTop: 6 }}>
            Call or email—no pressure, no obligation.
          </p>
        </div>
        <div style={{ justifySelf: "end", display: "flex", gap: 12 }}>
          <a
            href="tel:+15712753720"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px 16px",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            (571) 275-3720
          </a>
          <a
            href="mailto:admin@baruchermi.org"
            style={{
              border: "1px solid #2563eb",
              color: "#2563eb",
              padding: "12px 16px",
              borderRadius: 10,
              fontWeight: 700,
            }}
          >
            admin@baruchermi.org
          </a>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          padding: "28px 24px",
          textAlign: "center",
        }}
      >
        <small>
          © {new Date().getFullYear()} Baruch Ermi. All rights reserved.{" "}
          <a href="/terms">Terms &amp; Conditions</a>
        </small>
      </footer>
    </>
  );
}
