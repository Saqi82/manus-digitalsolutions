import { Download, FileText, RotateCcw } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import "@/components/guide-toolkit.css";

type TemplateField = { id: string; label: string; placeholder: string };
type Toolkit = { title: string; description: string; prompt: string; download: string; fields: TemplateField[] };
type Draft = Record<string, string>;

const toolkits: Record<string, Toolkit> = {
  planning: {
    title: "Decision brief", description: "Frame the change before you compare options.", prompt: "What one decision needs to become clearer?",
    download: "/manus-storage/planning-checklist_cf87c1e9.pdf",
    fields: [{ id: "change", label: "The change we need", placeholder: "Describe the work that needs to become easier, clearer or more reliable." }, { id: "constraints", label: "What must stay intact", placeholder: "Note the people, systems, information or time constraints." }, { id: "evidence", label: "Evidence for the next step", placeholder: "What would show that a short trial or next step is worthwhile?" }],
  },
  productivity: {
    title: "Workflow reset", description: "Identify one routine worth simplifying.", prompt: "Where does everyday work create avoidable friction?",
    download: "/manus-storage/productivity-checklist_e39de80b.pdf",
    fields: [{ id: "routine", label: "The recurring routine", placeholder: "Name the work that gets repeated, chased or re-explained." }, { id: "friction", label: "The friction point", placeholder: "Describe where work waits, duplicates or loses context." }, { id: "simpler", label: "A simpler default", placeholder: "Write the smallest shared habit or workflow change to test." }],
  },
  "digital-marketing": {
    title: "Signal planner", description: "Connect an audience need to one useful next action.", prompt: "What question should the right audience be able to answer?",
    download: "/manus-storage/digital-marketing-checklist_9ff57fe4.pdf",
    fields: [{ id: "audience", label: "Audience moment", placeholder: "Describe the situation that makes someone start looking for help." }, { id: "message", label: "Useful message", placeholder: "Explain the practical outcome or clarity your content should offer." }, { id: "action", label: "Next action", placeholder: "Choose one meaningful step a reader can take after engaging." }],
  },
  cybersecurity: {
    title: "Safeguards note", description: "Turn a broad concern into a calm, visible routine.", prompt: "Which everyday safeguard would reduce the most uncertainty?",
    download: "/manus-storage/cybersecurity-checklist_3dc99ed1.pdf",
    fields: [{ id: "entry", label: "Access to protect", placeholder: "Name the account, device or access point that needs clearer ownership." }, { id: "verify", label: "Request to verify", placeholder: "Describe an unusual request people should pause and check." }, { id: "response", label: "First response", placeholder: "Write the first contact and action when something feels wrong." }],
  },
};

const buildEmptyDraft = (fields: TemplateField[]): Draft => Object.fromEntries(fields.map((field) => [field.id, ""])) as Draft;

function readDraft(key: string, fields: TemplateField[]): Draft {
  try {
    const stored = window.localStorage.getItem(key);
    if (!stored) return buildEmptyDraft(fields);
    const parsed = JSON.parse(stored) as Record<string, unknown>;
    return Object.fromEntries(fields.map((field) => [field.id, typeof parsed[field.id] === "string" ? parsed[field.id] : ""])) as Draft;
  } catch {
    return buildEmptyDraft(fields);
  }
}

export default function GuideToolkit({ slug }: { slug: string }) {
  const toolkit = toolkits[slug] ?? toolkits.planning;
  const storageKey = `digitalsolutions.guide-template.${slug}`;
  const [draft, setDraft] = useState(() => readDraft(storageKey, toolkit.fields));
  const completedCount = useMemo(() => toolkit.fields.filter((field) => draft[field.id]?.trim()).length, [draft, toolkit.fields]);

  useEffect(() => { setDraft(readDraft(storageKey, toolkit.fields)); }, [storageKey, toolkit.fields]);
  useEffect(() => { try { window.localStorage.setItem(storageKey, JSON.stringify(draft)); } catch { /* Keep the template available when local storage is unavailable. */ } }, [draft, storageKey]);

  return <section className={`guide-toolkit guide-toolkit-${slug}`} aria-label={`${toolkit.title} interactive template`}><div className="toolkit-header"><div><span className="eyebrow"><FileText size={15} /> Working template</span><h2>{toolkit.title} <em>for your context.</em></h2><p>{toolkit.description}</p></div><div className="toolkit-progress"><span>NOTES CAPTURED</span><strong>{completedCount}/3</strong></div></div><div className="toolkit-actions"><p>{toolkit.prompt}<small>Your notes stay in this browser.</small></p><a className="toolkit-download" href={toolkit.download} download><Download size={16} />Download checklist PDF</a></div><div className="toolkit-fields">{toolkit.fields.map((field, index) => <label key={field.id}><span>0{index + 1} / {field.label}</span><textarea value={draft[field.id] ?? ""} onChange={(event) => setDraft((current) => ({ ...current, [field.id]: event.target.value }))} placeholder={field.placeholder} /></label>)}</div><div className="toolkit-footer"><span aria-live="polite">Saved automatically in this browser.</span><button type="button" onClick={() => setDraft(buildEmptyDraft(toolkit.fields))}><RotateCcw size={15} />Clear template</button></div></section>;
}
