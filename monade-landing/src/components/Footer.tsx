import Link from "next/link";
import Logo from "./Logo";
import site from "@/content/site.json";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft">
      <div className="container-x flex flex-col gap-4 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="hidden text-muted-2 sm:inline">{site.footer.copyright}</span>
        </div>
        <div className="flex items-center gap-5">
          {site.footer.links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-text">
              {l.label}
            </Link>
          ))}
          <a href={site.footer.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-text">
            LinkedIn
          </a>
        </div>
        <span className="text-muted-2 sm:hidden">{site.footer.copyright}</span>
      </div>
    </footer>
  );
}
