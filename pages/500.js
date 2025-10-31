import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error500(){
  return (
    <>
      <Head><title>Server Error – Barok Group</title></Head>
      <Header />
      <main className="container content">
        <h1>Something went wrong</h1>
        <p>Please refresh, or contact us at <a href="mailto:hello@barokgroup.com">hello@barokgroup.com</a>.</p>
      </main>
      <Footer />
    </>
  );
}
