import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function NotFound(){
  return (
    <>
      <Head><title>Page Not Found – Barok Group</title></Head>
      <Header />
      <main className="container content">
        <h1>Page Not Found</h1>
        <p>Let’s get you back on track.</p>
        <p><Link href="/" className="btn">Go Home</Link></p>
      </main>
      <Footer />
    </>
  );
}
