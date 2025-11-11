import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GetOffer(){
  return (
    <>
      <Head><title>Get Free Offer – Barok Group</title></Head>
      <Header />
      <main className="container content">
        <h1>Get a Cash Offer</h1>
        <p>Email <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a> with your property address and timeline, or call <a href="tel:+15712753720">(571) 275-3720</a>. We’ll reply quickly.</p>
      </main>
      <Footer />
    </>
  );
}
