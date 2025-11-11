import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact(){
  return (
    <>
      <Head><title>Contact – Barok Group</title></Head>
      <Header />
      <main className="container content">
        <h1>Get in Touch</h1>
        <p>Call <a href="tel:+15712753720">(571) 275-3720</a> or email <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>.</p>
        <div className="card" style={{maxWidth:680}}>
          <h3>Quick Message</h3>
          <p>Clicking the button opens your email app with a pre-filled subject and body.</p>
          <a className="btn"
             href="mailto:hello@barokgroup.org?subject=Help with foreclosure&body=Name:%0D%0APhone:%0D%0AProperty Address:%0D%0ATimeline / Auction Date:%0D%0AGoals:%0D%0A">
             Open Email Draft
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
