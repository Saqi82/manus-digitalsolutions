/** Editorial Terminal: concise, accurate metadata for each route and no invented structured claims. */
import { useEffect } from "react";

type FaqItem = { question: string; answer: string };
type PageMetaProps = { title: string; description: string; path?: string; faqItems?: readonly FaqItem[] };

export default function PageMeta({ title, description, path = "/", faqItems = [] }: PageMetaProps) {
  useEffect(() => {
    const fullTitle = `${title} | DigitalSolutions.cv`;
    document.title = fullTitle;
    const ensureMeta = (selector: string, attr: "name" | "property", key: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, key);
        document.head.appendChild(element);
      }
      return element;
    };
    ensureMeta('meta[name="description"]', "name", "description").content = description;
    ensureMeta('meta[property="og:title"]', "property", "og:title").content = fullTitle;
    ensureMeta('meta[property="og:description"]', "property", "og:description").content = description;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://digitalsolutions.cv${path}`;
    const schemaId = "digitalsolutions-faq-schema";
    const existingSchema = document.head.querySelector<HTMLScriptElement>(`script#${schemaId}`);
    if (faqItems.length > 0) {
      const schema = existingSchema ?? document.createElement("script");
      schema.id = schemaId;
      schema.type = "application/ld+json";
      schema.text = JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) });
      if (!existingSchema) document.head.appendChild(schema);
    } else {
      existingSchema?.remove();
    }
  }, [description, faqItems, path, title]);
  return null;
}
