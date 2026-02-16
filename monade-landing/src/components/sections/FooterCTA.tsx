import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Cockpit", href: "/products" },
      { label: "Intelligence", href: "/products" },
      { label: "Workflows", href: "/#Workflows" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Open Claw", href: "/open-claw" },
      { label: "Blog", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "#" },
      { label: "Trust center", href: "#" },
      { label: "Status", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
];

export const FooterCTA = () => {
  return (
    <footer className="bg-white text-slate-900 pt-32 pb-16 font-sans antialiased border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-40">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900 mb-8">
            Ready to give your <br />business a voice?
          </h2>

          <p className="text-xl md:text-2xl text-slate-500 mb-10 leading-relaxed max-w-2xl">
            Deploy your first agent in minutes. No complex setups, just clear conversations.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link href="/pricing" className="px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all active:scale-[0.98]">
              Get started for free
            </Link>
            <Link
              href="https://calendly.com/monade-ai/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-50 text-slate-900 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-all"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-20 border-t border-slate-100">
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">M</div>
              <span className="font-bold text-xl tracking-tight">monade</span>
            </Link>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Helping businesses run voice workflows with human-grade intelligence and absolute control.
            </p>
            <div className="flex gap-5 pt-2">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link key={i} href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((category) => (
            <div key={category.title} className="space-y-6">
              <h3 className="font-semibold text-sm text-slate-900">{category.title}</h3>
              <ul className="space-y-4">
                {category.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-slate-500 hover:text-slate-900 transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-slate-400 font-medium">© 2026 Monade AI Inc. All rights reserved.</div>

          <div className="flex gap-8 text-sm text-slate-400 font-medium">
            <Link href="#" className="hover:text-slate-900 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
