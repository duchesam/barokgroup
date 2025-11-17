import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home(){
  return (
    <>
      <Head><title>Baruch Ermi – Nationwide Foreclosure Help</title></Head>
      <Header />
      <main>
        <section className="hero container">
          <h1>Nationwide Foreclosure Help</h1>
          <p>Real options when you need them most. We help homeowners across the U.S. avoid foreclosure, stop auctions, and move forward.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <a className="btn" href="/get-offer">Get a Cash Offer</a>
            <a className="btn" style={{background:"#15224a",color:"#fff",border:"1px solid #1e2a52"}} href="/options">Explore Options</a>
          </div>
        </section>

        <section className="container" style={{paddingTop:16}}>
          <div className="grid">
            <div className="pill">Fast decisions</div>
            <div className="pill">No commissions</div>
            <div className="pill">Nationwide network</div>
            <div className="pill">Transparent process</div>
            <div className="pill">Auction rescue</div>
            <div className="pill">2-Year buyback path</div>
          </div>
        </section>

        <section className="container content">
          <h2>How It Works</h2>
          <div className="grid">
            <div className="card"><h3>1) Submit</h3><p>Share your situation and goals.</p></div>
            <div className="card"><h3>2) Verify</h3><p>Provide payoff & reinstatement letters.</p></div>
            <div className="card"><h3>3) Choose</h3><p>Review buyback vs. cash offer.</p></div>
            <div className="card"><h3>4) Close</h3><p>We move fast to resolve the case.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
