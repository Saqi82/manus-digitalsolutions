/** Editorial Terminal: aligned category navigation with direct, related-page access. */
import { Menu, Search, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useMemo, useState } from "react";
import { searchItems } from "@/lib/site-data";
import BrandMark from "@/components/BrandMark";
import "@/components/brand-lockup.css";
import "@/components/header-discover.css";

const categoryMenus = [
  { label: "Business Software", path: "/business-software/", caption: "Choose the category that fits the work.", links: [["Business software", "/business-software/"], ["Accounting software", "/accounting-software/"], ["CRM software", "/crm-software/"], ["Invoicing software", "/invoicing-software/"], ["Project management", "/project-management-software/"]] },
  { label: "AI Tools", path: "/ai-tools/", caption: "Keep AI tasks focused and reviewable.", links: [["AI tools", "/ai-tools/"], ["Best AI tools", "/best-ai-tools/"], ["AI tools for business", "/ai-tools-for-business/"], ["AI automation tools", "/ai-automation-tools/"], ["AI writing tools", "/ai-writing-tools/"]] },
  { label: "Free Tools", path: "/free-tools/", caption: "Use practical tools and calculators to explore a decision.", links: [["Free business tools", "/free-business-tools/"], ["Business calculator", "/business-calculator/"], ["VAT calculator", "/tools/vat-calculator/"], ["Business loan calculator", "/tools/business-loan-calculator/"], ["ROI calculator", "/tools/roi-calculator/"]] },
  { label: "Reviews", path: "/reviews/", caption: "Read the scope before judging the fit.", links: [["Software reviews", "/reviews/"], ["Xero review", "/reviews/xero/"], ["QuickBooks review", "/reviews/quickbooks/"], ["Business guides", "/business-guides/"]] },
  { label: "Comparisons", path: "/comparisons/", caption: "Compare options against the same workflow.", links: [["Software comparison", "/software-comparison/"], ["Business software comparison", "/business-software-comparison/"], ["CRM comparison", "/crm-comparison/"], ["Accounting comparison", "/accounting-software-comparison/"], ["Project management comparison", "/project-management-software-comparison/"]] },
] as const;
const mobileLinks = [...categoryMenus.map(({ label, path }) => [label, path] as const), ["Business Guides", "/business-guides/"] as const, ["Topic Authority Map", "/topic-authority/"] as const];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [location, navigate] = useLocation();
  const isOpen = menuOpen || searchOpen;
  useEffect(() => { document.body.style.overflow = isOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [isOpen]);
  const matches = useMemo(() => searchItems.filter((item) => item.label.toLocaleLowerCase("en").includes(query.toLocaleLowerCase("en"))), [query]);
  const goTo = (path: string) => { navigate(path); setMenuOpen(false); setSearchOpen(false); setQuery(""); };

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><div className="header-inner">
      <Link className="brand-lockup" href="/" aria-label="DigitalSolutions.cv home"><BrandMark className="brand-mark" /><span>Digital<span>Solutions</span><i>.cv</i></span></Link>
      <nav className="desktop-nav category-nav" aria-label="Primary navigation">{categoryMenus.map((menu) => <div className="category-dropdown" key={menu.label}><Link className={`nav-link category-trigger ${location === menu.path ? "active" : ""}`} href={menu.path}>{menu.label}<ChevronDown size={14} aria-hidden="true" /></Link><div className="category-menu" aria-label={`${menu.label} related pages`}><div className="category-menu-intro"><span>{menu.label}</span><p>{menu.caption}</p><Link href={menu.path}>Explore {menu.label} <ArrowUpRight size={14} /></Link></div><div className="category-menu-links">{menu.links.map(([label, path], index) => <Link key={path} href={path}><b>0{index + 1}</b><span>{label}</span><ArrowUpRight size={14} /></Link>)}</div></div></div>)}<Link className={`nav-link ${location === "/business-guides/" ? "active" : ""}`} href="/business-guides/">Guides</Link><Link className={`nav-link ${location === "/topic-authority/" ? "active" : ""}`} href="/topic-authority/">Topics</Link></nav>
      <div className="header-actions"><button className="icon-button" type="button" onClick={() => setSearchOpen(true)} aria-label="Search the site"><Search size={19} /></button><Link className="button button-primary header-cta" href="/free-tools/">Explore free tools <ArrowUpRight size={16} /></Link><button className="icon-button mobile-menu-button" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu size={21} /></button></div>
    </div></header>
    {menuOpen && <div className="mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation"><div className="mobile-panel-top"><Link className="brand-lockup" href="/" onClick={() => setMenuOpen(false)} aria-label="DigitalSolutions.cv home"><BrandMark className="brand-mark" /><span>Digital<span>Solutions</span><i>.cv</i></span></Link><button className="icon-button" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu"><X size={22} /></button></div><nav className="mobile-nav" aria-label="Mobile primary navigation">{mobileLinks.map(([label, path], index) => <button key={path} type="button" onClick={() => goTo(path)}><span className="nav-index">0{index + 1}</span>{label}<ArrowUpRight size={17} /></button>)}</nav><div className="mobile-discover"><span>Related category pages</span>{categoryMenus.map((menu) => <div key={menu.label}><b>{menu.label}</b>{menu.links.slice(0, 2).map(([label, path]) => <button key={path} type="button" onClick={() => goTo(path)}>{label}<ArrowUpRight size={14} /></button>)}</div>)}</div><div className="mobile-panel-foot"><p>Practical digital tools, software guides and technology advice for better work.</p><button className="button button-primary" type="button" onClick={() => goTo("/free-tools/")}>Explore free tools <ArrowUpRight size={16} /></button></div></div>}
    {searchOpen && <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search DigitalSolutions.cv"><div className="search-dialog"><div className="search-input-row"><Search size={20} aria-hidden="true" /><label className="sr-only" htmlFor="site-search">Search pages and tools</label><input id="site-search" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search guides, sections and free tools" /><button className="icon-button" type="button" onClick={() => setSearchOpen(false)} aria-label="Close search"><X size={20} /></button></div><div className="search-results">{(query ? matches : searchItems).slice(0, 7).map((item) => <button type="button" key={item.path} onClick={() => goTo(item.path)}><span>{item.type}</span><strong>{item.label}</strong><ArrowUpRight size={16} /></button>)}{query && matches.length === 0 && <p className="empty-search">No matches yet. Try a broad term such as “AI”, “VAT” or “software”.</p>}</div></div></div>}
  </>;
}
