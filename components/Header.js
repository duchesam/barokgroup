import Link from "next/link";

export default function Header(){
  return (
    <header>
      <nav className="nav">
        <div className="brand">Barok Group</div>
        <div className="navlinks">
          <Link href="/">Home</Link>
          <Link href="/options">Options</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/get-offer" className="btn">Get Free Offer</Link>
        </div>
      </nav>
    </header>
  );
}
