import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Options(){
  return (
    <>
      <Head><title>Options – Barok Group</title></Head>
      <Header />
      <main>
        <Section title="Your Options" intro="Every situation is unique. We’ll bring you the clearest path forward and move fast when you choose.">
          <Card title="2-Year Buyback">We buy the property, stop the auction, and give you a path to buy it back within 24 months (case-by-case).</Card>
          <Card title="Cash Offer">Receive up to ~70% of as-is value with no commissions, so you can reset and move forward.</Card>
          <Card title="Auction Rescue">Last-minute assistance to halt the sale while we evaluate reinstatement or payoff strategies.</Card>
          <Card title="Referral to Pros">When legal, credit, or tax help is best, we connect you with vetted professionals.</Card>
        </Section>

        <section className="container" style={{paddingBottom:36}}>
          <div className="card">
            <h3>Talk through your options in 10 minutes</h3>
            <p>Call <a href="tel:+15712753720">(571) 275-3720</a> or email <a href="mailto:hello@barokgroup.com">hello@barokgroup.com</a>.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
