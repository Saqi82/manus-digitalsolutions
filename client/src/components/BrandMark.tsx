/** Editorial Terminal brand mark: a split-window decision panel and signal-blue action line. */
type BrandMarkProps = { className?: string; title?: string };

export default function BrandMark({ className, title }: BrandMarkProps) {
  return <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
    {title && <title>{title}</title>}
    <rect x="4" y="4" width="56" height="56" rx="16" fill="#0B1F3A" />
    <path d="M13 13.5C13 10.4624 15.4624 8 18.5 8H44.5C47.5376 8 50 10.4624 50 13.5V23H13V13.5Z" fill="#F6F8FB" />
    <circle cx="19" cy="15.5" r="1.7" fill="#0B1F3A" /><circle cx="24.5" cy="15.5" r="1.7" fill="#0B1F3A" /><circle cx="30" cy="15.5" r="1.7" fill="#0B1F3A" />
    <path d="M13 28H26V50C26 53.3137 23.3137 56 20 56H19C15.6863 56 13 53.3137 13 50V28Z" fill="#F6F8FB" />
    <path d="M31 28H41.5V50C41.5 53.3137 38.8137 56 35.5 56H31V28Z" fill="#BFD6FF" />
    <path d="M46.5 28H51C54.3137 28 57 30.6863 57 34V50C57 53.3137 54.3137 56 51 56H46.5V28Z" fill="#F6F8FB" />
    <path d="M39.5 6.5H48L35.2 57.5H26.7L39.5 6.5Z" fill="#1E6BFF" />
  </svg>;
}
