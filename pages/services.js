import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Services(){
  return (
    <>
      <Head><title>Services – Barok Group</title></Head>
      <Header />
      <main>
        <Section title="What We Do" intro="We specialize in clear, fast solutions for foreclosure and distressed situations nationwide.">
          <Card title="Situation Review">We review payoff, reinstatement, and title details to map real options quickly.</Card>
          <Card title="Timeline Management">We coordinate key dates (auction, payoff requests, buyer docs) to keep you protected.</Card>
          <Card title="Transaction Support">From offer through close, we keep communication simple with minimal paperwork.</Card>
          <Card title="After-Close Help">If you choose a buyback path, we support you with realistic milestones.</Card>
        </Section>
      </main>
      <Footer />
    </>
  );
}
