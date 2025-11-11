import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Terms(){
  return (
    <>
      <Head><title>Terms & Conditions – Barok Group</title></Head>
      <Header />
      <main className="container content">
        <h1>Terms & Conditions</h1>
        <p className="small">Last updated: 2025-10-31</p>
        <p>Welcome to www.barokgroup.com (“Site”). By accessing or using the Site, you agree to these Terms & Conditions. If you do not agree, please do not use the Site.</p>
        <h3>1. Services</h3>
        <p>Barok Group provides information and introductions related to real-estate options for distressed or time-sensitive situations. We are not a law firm, tax advisor, or credit counselor and do not provide legal, tax, or credit advice.</p>
        <h3>2. No Guarantees</h3>
        <p>Outcomes vary by case and jurisdiction. Timeframes and results are not guaranteed. All offers are subject to due diligence and final underwriting.</p>
        <h3>3. User Responsibilities</h3>
        <p>You agree that information you provide is accurate and that you have the right to share it. You are responsible for obtaining your own legal, tax, or financial advice.</        p>
        <h3>4. Privacy</h3>
        <p>We use contact details you share (such as phone and email) solely to respond and evaluate options. We do not sell personal information.</p>
        <h3>5. Intellectual Property</h3>
        <p>All Site content is owned by Barok Group and may not be reproduced without permission.</p>
        <h3>6. Limitation of Liability</h3>
        <p>To the fullest extent permitted by law, Barok Group is not liable for any indirect, incidental, or consequential damages arising from use of the Site or Services.</p>
        <h3>7. Changes</h3>
        <p>We may update these Terms at any time by posting a revised version on the Site.</p>
        <h3>8. Contact</h3>
        <p>Questions about these Terms? Email <a href="mailto:hello@barokgroup.org">hello@barokgroup.org</a>.</p>
      </main>
      <Footer />
    </>
  );
}
