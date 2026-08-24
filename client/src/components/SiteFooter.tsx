/** Editorial Terminal: a structured, low-key utility footer with clear readable pathways. */
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { footerGroups } from "@/lib/site-data";
import BrandMark from "@/components/BrandMark";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-rail" /><div className="footer-grid"><div className="footer-brand"><Link className="brand-lockup footer-lockup" href="/" aria-label="DigitalSolutions.cv home"><BrandMark className="brand-mark" /><span>Digital<span>Solutions</span><i>.cv</i></span></Link><p>Practical digital tools, software guides and technology advice for businesses and professionals.</p><a className="footer-email" href="mailto:info@digitalsolutions.cv">info@digitalsolutions.cv <ArrowUpRight size={15} /></a></div>{footerGroups.map((group) => <div className="footer-column" key={group.title}><h2>{group.title}</h2>{group.links.map(([label, path]) => <Link href={path} key={label}>{label}</Link>)}</div>)}</div><div className="footer-bottom"><span>© 2026 DigitalSolutions.cv. All rights reserved.</span><span><Link href="/privacy-policy/">Privacy</Link><i>·</i><Link href="/terms-conditions/">Terms</Link><i>·</i><Link href="/contact/">Contact</Link></span></div></footer>;
}
