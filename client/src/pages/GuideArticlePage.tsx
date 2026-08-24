/** Editorial Terminal: practical guide articles designed around an actionable decision sequence. */
import { ArrowUpRight, CheckCircle2, ChevronRight, Compass, ShieldCheck } from "lucide-react";
import { Fragment } from "react";
import { Link } from "wouter";
import PageMeta from "@/components/PageMeta";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import GuideToolkit from "@/components/GuideToolkit";
import { guideArticles } from "@/lib/site-data";
import "@/components/guide-article.css";
import "@/components/guide-specimens.css";
import "@/components/guide-topic-variation.css";

function GuideSpecimen({ slug }: { slug: string }) {
  if (slug === "planning") return <section className="guide-decision-specimen decision-brief"><div className="specimen-kicker"><span>DECISION BRIEF</span><b>TURN A VAGUE IDEA INTO A TEST</b></div><div className="decision-brief-grid"><article><span>01 / SITUATION</span><strong>What needs to change?</strong><p>Name the work that currently costs time, clarity or confidence.</p></article><article><span>02 / CONSTRAINT</span><strong>What must stay intact?</strong><p>Make time, data, people and systems visible before searching.</p></article><article><span>03 / PROOF</span><strong>What would count as progress?</strong><p>Choose an observable signal before you test an option.</p></article></div></section>;
  if (slug === "productivity") return <section className="guide-decision-specimen workflow-map"><div className="specimen-kicker"><span>WORKFLOW MAP</span><b>MAKE THE NEXT ACTION VISIBLE</b></div><div className="workflow-lanes"><article><span>01 / CAPTURE</span><strong>Collect the request once.</strong></article><i /><article><span>02 / CLARIFY</span><strong>Name the owner and next step.</strong></article><i /><article><span>03 / COMPLETE</span><strong>Close the loop where work lives.</strong></article></div></section>;
  if (slug === "digital-marketing") return <section className="guide-decision-specimen signal-path"><div className="specimen-kicker"><span>SIGNAL PATH</span><b>MAKE THE MESSAGE EARN ITS NEXT STEP</b></div><div className="signal-path-grid"><article><span>01 / NEED</span><strong>Recognise the moment.</strong><p>Start with the real question someone is trying to answer.</p></article><i /><article><span>02 / MESSAGE</span><strong>Reduce uncertainty.</strong><p>Explain the useful outcome with clarity and evidence.</p></article><i /><article><span>03 / ACTION</span><strong>Make the step obvious.</strong><p>Give the reader one meaningful way to continue.</p></article></div></section>;
  return <section className="guide-decision-specimen safeguard-specimen"><div className="specimen-kicker"><span>SAFEGUARD MATRIX</span><b>BUILD A CALM RESPONSE PATH</b></div><div className="safeguard-matrix"><article><span>01 / PROTECT</span><strong>Secure entry points.</strong><p>Make ownership, sign-in and recovery routes deliberate.</p></article><article><span>02 / VERIFY</span><strong>Pause before unusual requests.</strong><p>Use a known channel to check what does not look right.</p></article><article><span>03 / RESPOND</span><strong>Know who acts next.</strong><p>Keep the first response simple, visible and practiced.</p></article></div></section>;
}

const closingCopy: Record<string, { title: string; emphasis: string; body: string }> = {
  planning: { title: "Move from a clear brief to a", emphasis: "practical test.", body: "Use this guide to frame a decision, identify what matters and design a proportionate next step. Adapt the brief to the people, systems and responsibilities involved." },
  productivity: { title: "Keep only routines that make work", emphasis: "easier to do well.", body: "Use this guide to surface friction, make responsibilities visible and strengthen the habits that genuinely save attention over time." },
  "digital-marketing": { title: "Turn attention into a", emphasis: "useful next step.", body: "Use this guide to connect audience need, a clear explanation and a single meaningful action. Improve the path by learning from real questions." },
  cybersecurity: { title: "Make the safe choice the", emphasis: "easy default.", body: "Use this guide to create calmer routines around access, verification and response. Adapt the process to the systems and responsibilities your organisation carries." },
};

const toolkitPlacement: Record<string, number | "before"> = { planning: "before", productivity: 0, "digital-marketing": 1, cybersecurity: 2 };

export default function GuideArticlePage({ slug }: { slug: string }) {
  const guide = guideArticles.find((item) => item.slug === slug) ?? guideArticles[0];
  const closing = closingCopy[guide.slug];
  const heroUsesSerif = guide.slug === "planning" || guide.slug === "digital-marketing";
  const placement = toolkitPlacement[guide.slug] ?? "before";
  return <div className="site-shell page-shell"><PageMeta title={guide.title} path={guide.path} description={guide.description} /><SiteHeader /><main id="main-content">
    <section className={`guide-article-hero guide-hero-${guide.slug}`}><div className="breadcrumb"><Link href="/">Home</Link><ChevronRight size={14} /><Link href="/business-guides/">Business Guides</Link><ChevronRight size={14} /><span>{guide.title}</span></div><div className="guide-hero-grid"><div><div className="page-signal-bar"><span>GUIDE / PRACTICAL</span><i /><span>Decision notes</span></div><span className="eyebrow"><Compass size={15} /> Business guide</span><h1>{guide.title}{heroUsesSerif && <em>{guide.emphasis}</em>}</h1><p>{guide.description}</p></div><div className={`guide-signal-panel guide-signal-${guide.slug}`} aria-label="Guide sequence"><div className="guide-signal-top"><span>GUIDE INDEX</span><b>01</b></div>{guide.signal.map((item, index) => <div className="guide-signal-row" key={item.label}><span>0{index + 1} / {item.label}</span><strong>{item.value}</strong></div>)}</div></div>
    </section>
    <section className="guide-article-layout"><aside className="guide-rail"><span>IN THIS GUIDE</span>{guide.sections.map((section) => <a href={`#${section.label.slice(0, 2)}`} key={section.label}>{section.heading}</a>)}</aside><article className={`guide-article-body guide-${guide.slug}`}><p className="guide-lede">{guide.intro}</p><GuideSpecimen slug={guide.slug} />{placement === "before" && <GuideToolkit slug={guide.slug} />}{guide.sections.map((section, index) => <Fragment key={section.label}><section id={section.label.slice(0, 2)} className={`guide-content-section guide-content-section-${index}`}><div className="body-label"><span>0{index + 1}</span><b>{section.label.replace(/^0\d\s\/\s/, "")}</b></div><h2>{section.heading}</h2><p>{section.body}</p><div className="guide-action-list">{section.points.map((point) => <p key={point}><CheckCircle2 size={17} />{point}</p>)}</div></section>{placement === index && <GuideToolkit slug={guide.slug} />}</Fragment>)}<section className={`guide-practice-note guide-practice-${guide.slug}`}><div className="body-label"><span>04</span><b>Keep it useful</b></div><h2>{closing.title} <em>{closing.emphasis}</em></h2><p>{closing.body}</p><ShieldCheck size={30} aria-hidden="true" /></section><section className="related-section"><div className="body-label"><span>05</span><b>Continue exploring</b></div><div className="related-grid">{guide.related.map((item) => <Link href={item.path} key={item.path}><span>{item.title}</span><ArrowUpRight size={17} /></Link>)}</div></section></article></section>
  </main><SiteFooter /></div>;
}

