const TOOLS = ["Zoho", "Notion", "Odoo", "Google Sheets", "HubSpot"];

export const CRMIntegrations = () => {
  return (
    <section className="py-14 bg-background hairline-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <p className="machine-label text-ink/40 shrink-0">
            Plays well with
          </p>
          <div className="h-px flex-1 bg-[var(--hairline)] hidden md:block" />
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="font-display text-xl md:text-2xl text-ink/45 hover:text-ink transition-colors duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
            <span className="font-display text-xl md:text-2xl text-ink/25 cursor-default">
              + more
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMIntegrations;
