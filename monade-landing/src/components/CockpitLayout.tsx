import React from 'react';

interface CockpitLayoutProps {
  children: React.ReactNode;
}

const CockpitLayout: React.FC<CockpitLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen w-full bg-surface text-foreground font-sans selection:bg-primary/20">
      {/* Sidebar */}
      <aside className="w-[240px] h-full border-r border-border bg-white flex flex-col z-20">
        <div className="p-4 border-bottom border-border flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm"></div>
          <span className="font-bold tracking-tight text-sm">MONADE COCKPIT</span>
        </div>
        
        <nav className="flex-1 p-2 space-y-1">
          <SidebarItem label="Workflows" icon={<WorkflowIcon />} active />
          <SidebarItem label="Conversations" icon={<ChatIcon />} />
          <SidebarItem label="Compliance Audit" icon={<AuditIcon />} />
        </nav>

        <div className="p-4 border-t border-border mt-auto">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>System: Optimal</span>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 h-full overflow-auto bg-grid relative">
        {/* Header / Breadcrumb */}
        <header className="h-12 border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-10 flex items-center px-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
            <span>Ops</span>
            <span>/</span>
            <span className="text-foreground font-bold">Cockpit</span>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

interface SidebarItemProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon, active }) => {
  return (
    <button className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      active 
        ? 'bg-slate-100 text-foreground' 
        : 'text-slate-500 hover:bg-slate-50 hover:text-foreground'
    }`}>
      <span className="w-4 h-4 opacity-70">{icon}</span>
      {label}
    </button>
  );
};

// Simple SVG Icons
const WorkflowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const AuditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default CockpitLayout;
