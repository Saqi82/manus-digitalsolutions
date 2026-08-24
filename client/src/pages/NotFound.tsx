/** Editorial Terminal: a useful, calm 404 route that points readers back to relevant decision paths. */
import { ArrowUpRight, SearchX } from "lucide-react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function NotFound() {
  return <div className="site-shell page-shell"><PageMeta title="Page not found" path="/404" description="The requested DigitalSolutions.cv page could not be found." /><SiteHeader /><main id="main-content" className="not-found"><SearchX size={44} /><span className="eyebrow">404 / Lost route</span><h1>Looks like this page took a <em>wrong turn.</em></h1><p>Try one of the useful routes below, or return to the DigitalSolutions.cv home page.</p><div><Link className="button button-primary" href="/">Go home <ArrowUpRight size={17} /></Link><Link className="button button-quiet" href="/free-tools/">Explore free tools</Link></div></main><SiteFooter /></div>;
}
