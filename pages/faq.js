import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const QA = ({ q, a }) => (
  <details className="faq-item"><summary>{q}</summary><div><p>{a}</p></div></details>
);

export default function FAQ(){
  return (
    <>
      <Head><title>FAQ – Baruch Ermi</title></Head>
      <Header />
      <main className="container content">
        <h1>Frequently Asked Questions</h1>
        <QA q="How fast can you help?" a="Often within 24–72 hours for an initial decision, faster for urgent auction timelines."/>
        <QA q="Will I pay commissions?" a="No. We don’t charge listing commissions. Standard closing costs may apply depending on the option you choose."/>
        <QA q="Is this legal or credit advice?" a="No. We provide options and coordination. Always consult a licensed professional for legal, tax, or credit advice."/>
        <QA q="Can I buy back my home?" a="Yes, via our 2-Year Buyback option if it fits your situation. Terms depend on payoff and underwriting."/>
        <QA q="What do you need from me?" a="Basic property info, payoff/reinstatement letters, and a quick call to understand your goals."/>
      </main>
      <Footer />
    </>
  );
}
