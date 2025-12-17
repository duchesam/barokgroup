import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GetOffer(){
  return (
    <>
      <Head><title>Get Free Offer – Baruch Ermi</title></Head>
      <Header />
      <main className="container content">
        <h1>Get a Cash Offer</h1>
        <p>Email <a href="mailto:admin@baruchermi.org">admin@baruchermi.org</a> with your property address and timeline, or call <a href="tel:+(904) 478-9306">(904) 478-9306</a>. We’ll reply quickly.</p>
      </main>
      <Footer />
    </>
  );
}
