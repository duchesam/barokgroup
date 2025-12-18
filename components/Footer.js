import Link from "next/link";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <h3>Barok Group</h3>
          <p className="small">Nationwide foreclosure & auction solutions. Clear options, fast action.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/options">Options</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4>Get in Touch</h4>
          <p>Call: <a href="tel:+1(904) 478-9306">(904) 478-9306</a><br/>Email: <a href="mailto:hello@barokgroup.com">hello@barokgroup.com</a></p>
        </div>
      </div>
      <div className="container small">© 2025 Barok Group. All rights reserved.</div>
    </footer>
  );
}
