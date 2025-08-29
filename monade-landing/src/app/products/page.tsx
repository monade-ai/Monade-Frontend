export default function ProductsPage() {
  return (
    <section id="products" className="relative z-10 py-20 bg-[var(--background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our AI-Powered Agents</h2>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Unified memory across all channels ensures seamless customer experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-[var(--border)] rounded-none hover:-translate-y-0.5 transition-transform">
            <h3 className="text-2xl font-bold mb-4">Voice Agent</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Engage customers with lifelike AI voice interactions that understand context and intent, available 24/7.
            </p>
            <p className="text-[var(--brand)] font-semibold">Perfect for sales, support, and more.</p>
          </div>
          <div className="p-8 border border-[var(--border)] rounded-none hover:-translate-y-0.5 transition-transform">
            <h3 className="text-2xl font-bold mb-4">Email Agent</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Automate personalized email communication with AI that remembers past interactions and adapts tone.
            </p>
            <p className="text-[var(--brand)] font-semibold">Ideal for follow-ups, campaigns, and onboarding.</p>
          </div>
          <div className="p-8 border border-[var(--border)] rounded-none hover:-translate-y-0.5 transition-transform">
            <h3 className="text-2xl font-bold mb-4">WhatsApp Agent</h3>
            <p className="text-[var(--muted-foreground)] mb-4">
              Deliver instant, contextual responses on WhatsApp with AI that shares unified memory across channels.
            </p>
            <p className="text-[var(--brand)] font-semibold">Great for quick support, reminders, and updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
