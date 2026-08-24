/** Editorial Terminal: accessible browser-based calculators with plain-language assumptions. */
import { ArrowLeft, ArrowUpRight, Calculator as CalculatorIcon, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import CalculatorPanel, { type CalculatorKind } from "@/components/CalculatorPanel";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { calculatorKeywordTools } from "@/lib/calculator-definitions";
import "@/components/calculator-related.css";

export default function CalculatorPage({ slug }: { slug: string }) {
  const tool = calculatorKeywordTools.find((item) => item.slug === slug) ?? calculatorKeywordTools[0];
  const detail: { kind: CalculatorKind; title: string; description: string; assumptions: string[] } = tool;
  const currentIndex = calculatorKeywordTools.findIndex((item) => item.slug === tool.slug);
  const relatedTools = Array.from(new Map([1, -1, 2, -2, 3, -3].map((offset) => calculatorKeywordTools[(currentIndex + offset + calculatorKeywordTools.length) % calculatorKeywordTools.length]).map((item) => [item.path, item])).values());
  return <div className="site-shell page-shell"><PageMeta title={detail.title} path={tool.path} description={detail.description} /><SiteHeader /><main id="main-content"><section className="calculator-hero"><Link className="back-link" href="/free-tools/"><ArrowLeft size={16} />Free tools</Link><div className="page-signal-bar calculator-signal"><span>PRIMARY KEYWORD / {detail.title.toUpperCase()}</span><i /><span>Browser calculation</span></div><div className="calculator-heading"><div><span className="eyebrow"><CalculatorIcon size={15} /> Working calculator</span><h1>{detail.title} <em>with clarity.</em></h1><p>{detail.description}</p></div><div className="calculator-badge"><span>Browser-based</span><strong>No sign-up</strong></div></div></section><section className="calculator-page-grid"><div className="calculator-instrument"><div className="instrument-label"><span>INPUT / RESULT</span><b>Adjust the figures to explore the outcome.</b></div><CalculatorPanel kind={detail.kind} /></div><aside className="assumption-card"><span className="eyebrow">Assumptions</span><h2>Use the result as a useful <em>starting point.</em></h2>{detail.assumptions.map((item) => <p key={item}><CheckCircle2 size={17} />{item}</p>)}<Link href="/contact/">Suggest an improvement</Link></aside></section><section className="calculator-related section"><div className="body-label"><span>02</span><b>Calculator network · reciprocal links</b></div><div>{relatedTools.map((item) => <Link href={item.path} key={item.slug}><span>{item.title}</span><ArrowUpRight size={17} /></Link>)}</div></section></main><SiteFooter /></div>;
}
