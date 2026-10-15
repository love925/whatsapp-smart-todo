import Image from "next/image";
import { ArrowRight, Bell, Blocks, CalendarDays, CircleHelp, Inbox, LayoutDashboard, ListTodo, Settings2 } from "lucide-react";
import { appConfig } from "@/lib/config";

const primaryLinks = [
  { name: "Overview", icon: LayoutDashboard, href: "#overview", active: true },
  { name: "My tasks", icon: ListTodo, href: undefined },
  { name: "Message inbox", icon: Inbox, href: undefined },
  { name: "Reminders", icon: Bell, href: undefined },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen lg:flex">
      <aside className="hidden w-[254px] shrink-0 flex-col bg-[#112b42] px-5 py-7 text-white lg:flex">
        <div className="flex items-center gap-3 px-2">
          <Image src="/logo-mark.svg" alt="" width={40} height={40} />
          <div>
            <p className="text-lg font-bold tracking-tight">{appConfig.name}</p>
            <p className="text-[11px] text-[#a7c1cf]">Smart personal workspace</p>
          </div>
        </div>
        <p className="mb-4 mt-14 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fb0c4]">Workspace</p>
        <nav className="space-y-1" aria-label="Primary navigation">
          {primaryLinks.map(({ name, icon: Icon, href, active }) => {
            const classes = `flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm ${active ? "bg-[#24485f] font-semibold text-white" : "text-[#bdd0dc]"}`;
            return href ? (
              <a key={name} className={classes} href={href} aria-current={active ? "page" : undefined}>
                <Icon aria-hidden="true" size={18} />{name}
              </a>
            ) : (
              <span key={name} className={`${classes} cursor-not-allowed opacity-60`} title="Available in a later chunk">
                <Icon aria-hidden="true" size={18} />{name}<span className="ml-auto text-[10px]">Soon</span>
              </span>
            );
          })}
        </nav>
        <div className="my-9 border-t border-white/10" />
        <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8fb0c4]">Project</p>
        <a href="#architecture" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#bdd0dc] hover:bg-white/5 hover:text-white"><Blocks size={18}/>Architecture</a>
        <a href="#next-steps" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[#bdd0dc] hover:bg-white/5 hover:text-white"><Settings2 size={18}/>Setup progress</a>
        <div className="mt-auto rounded-2xl border border-[#406278] bg-[#1c3b52] p-4">
          <div className="mb-3 flex items-center justify-between"><CircleHelp size={18} className="text-[#a7d1e4]"/><span className="rounded-full bg-[#335c72] px-2 py-1 text-[10px] text-[#d8edf4]">CHUNK 01 / 08</span></div>
          <p className="text-sm font-semibold">Building the foundation</p>
          <p className="mt-2 text-xs leading-5 text-[#b1c9d7]">Database, login and WhatsApp connection will be added in the next chunks.</p>
          <a href="#next-steps" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#a6e6ea]">See the roadmap <ArrowRight size={13}/></a>
        </div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex h-[76px] items-center justify-between border-b border-[#e6edf2] bg-white/95 px-5 backdrop-blur md:px-9">
          <div className="flex items-center gap-3">
            <Image src="/logo-mark.svg" alt="" width={32} height={32} className="lg:hidden" />
            <div>
              <p className="text-[13px] font-semibold text-[#243a51] md:text-sm">Personal workspace</p>
              <p className="text-[11px] text-[#8293a4]">Chunk 1 foundation preview</p>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <span className="hidden items-center gap-2 rounded-full border border-[#dbece9] bg-[#f0faf6] px-3 py-2 text-xs font-semibold text-[#34755e] sm:flex"><span className="h-2 w-2 rounded-full bg-[#4aaf89]"/> Starter running</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0e8ee] bg-[#f5f8fb] text-[#51697f]"><CalendarDays size={17}/></span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ddecf5] text-xs font-bold text-[#235b78]">FB</span>
          </div>
        </header>
        <main id="overview" className="mx-auto max-w-[1390px] px-5 pb-14 pt-8 md:px-9 md:pt-10">{children}</main>
        <footer className="mx-auto max-w-[1390px] border-t border-[#e3e9ef] px-5 py-6 text-xs text-[#8998a7] md:px-9">{appConfig.name} · Starter project · Built for Vercel</footer>
      </div>
    </div>
  );
}
