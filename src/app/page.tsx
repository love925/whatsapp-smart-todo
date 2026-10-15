import { ArrowRight, BellRing, CheckCheck, CircleCheckBig, Database, GitBranch, Layers3, LockKeyhole, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import { DashboardShell } from "@/components/dashboard-shell";
import { PreviewTaskList } from "@/components/preview-task-list";

const snapshots = [
  { label: "Project foundation", value: "Ready", note: "Next.js + TypeScript", icon: Layers3, iconBg: "bg-[#e7f1fc]", iconColor: "text-[#4386b7]" },
  { label: "Database", value: "Next", note: "Neon · Chunk 2", icon: Database, iconBg: "bg-[#f0edfc]", iconColor: "text-[#8571c5]" },
  { label: "WhatsApp API", value: "Pending", note: "Cloud API · Chunk 4", icon: MessageSquareText, iconBg: "bg-[#e7f6ef]", iconColor: "text-[#379874]" },
  { label: "Reminders", value: "Pending", note: "Vercel Cron · Chunk 6", icon: BellRing, iconBg: "bg-[#fff2e8]", iconColor: "text-[#db9759]" },
];

const steps = [
  { icon: MessageSquareText, title: "Receive", body: "New messages to your Business number" },
  { icon: Sparkles, title: "Understand", body: "Detect tasks and capture context" },
  { icon: CircleCheckBig, title: "Organize", body: "Review, edit and save to PostgreSQL" },
  { icon: BellRing, title: "Remind", body: "Send approved WhatsApp templates" },
];

export default function HomePage() {
  return (
    <DashboardShell>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.19em] text-[#317b92]">Your workspace / Overview</p>
          <h1 className="text-[29px] font-bold tracking-[-0.045em] text-[#162d42] md:text-[38px]">Make room for what matters.</h1>
          <p className="mt-2 text-sm text-[#768b9d]">A simpler way to capture commitments and stay on top of your day.</p>
        </div>
        <span className="rounded-full border border-[#d9e6ee] bg-white px-4 py-2 text-xs font-semibold text-[#54718a]">Foundation preview · Chunk 1</span>
      </div>

      <section className="relative mb-7 overflow-hidden rounded-[26px] bg-[#155e78] px-7 py-8 text-white md:px-9 md:py-10">
        <div className="pointer-events-none absolute -right-10 -top-32 h-72 w-72 rounded-full border-[45px] border-white/[0.055]"/>
        <div className="pointer-events-none absolute -bottom-40 right-20 h-80 w-80 rounded-full border-[52px] border-white/[0.05]"/>
        <div className="relative z-[1] max-w-[650px]">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold text-[#d8f4f6]"><ShieldCheck size={13}/> FIRST MILESTONE</span>
          <h2 className="mt-5 text-[26px] font-bold leading-tight tracking-[-0.04em] md:text-[35px]">One calm place for every task.</h2>
          <p className="mt-3 max-w-[540px] text-sm leading-7 text-[#d8e8ee]">We&apos;re building the foundation first. In later chunks, your WhatsApp Business messages will be turned into reviewable tasks, followed by timely reminders.</p>
          <a href="#next-steps" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-[12px] font-bold text-[#155e78] transition hover:bg-[#e5f2f5]">Explore the build plan <ArrowRight size={15}/></a>
        </div>
      </section>

      <section aria-label="Project status" className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {snapshots.map(({ label, value, note, icon: Icon, iconBg, iconColor }) => (
          <div key={label} className="rounded-[21px] border border-[#e4ebf0] bg-white px-5 py-5 shadow-[0_10px_30px_rgba(20,40,70,0.025)]">
            <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}><Icon size={20}/></div>
            <p className="text-xs font-medium text-[#8092a2]">{label}</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-[#1b3348]">{value}</p>
            <p className="mt-1 text-[11px] text-[#99a7b4]">{note}</p>
          </div>
        ))}
      </section>

      <div className="mb-7 grid gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(300px,1fr)]">
        <PreviewTaskList />
        <section className="rounded-[22px] border border-[#e4ebf0] bg-white p-6 shadow-[0_12px_36px_rgba(25,49,73,0.035)]">
          <div className="flex items-center justify-between"><h2 className="text-base font-bold text-[#1c3047]">Build progress</h2><span className="text-xs font-bold text-[#246d83]">1 / 8</span></div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#eaf0f4]"><div className="h-full w-[12.5%] rounded-full bg-[#2286a0]"/></div>
          <p className="mb-6 mt-2 text-xs text-[#8495a4]">This screen is a preview. No personal data is collected.</p>
          <ol className="space-y-0">
            {[
              { title: "Foundation & deployment", caption: "Current chunk", complete: true },
              { title: "Database & data models", caption: "Chunk 2", complete: false },
              { title: "Private task dashboard", caption: "Chunk 3", complete: false },
              { title: "WhatsApp integration", caption: "Chunk 4", complete: false },
              { title: "Detection & reminders", caption: "Chunks 5–6", complete: false },
            ].map((item, index) => (
              <li key={item.title} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${item.complete ? "bg-[#e1f5ed] text-[#309c77]" : "bg-[#f0f4f7] text-[#8496a5]"}`}>{item.complete ? <CheckCheck size={15}/> : <span className="text-xs font-semibold">{index + 1}</span>}</div>
                  {index < 4 && <div className="h-7 w-px bg-[#e2eaf0]"/>}
                </div>
                <div className="pb-5 pt-0.5"><p className="text-xs font-semibold text-[#334a5e]">{item.title}</p><p className="mt-1 text-[11px] text-[#9cabb5]">{item.caption}</p></div>
              </li>
            ))}
          </ol>
          <div className="mt-1 rounded-xl bg-[#f1f8fb] p-4 text-xs leading-5 text-[#4d7991]">Once deployed, test <code className="rounded bg-white px-1 py-0.5">/api/health</code> to confirm the backend route is working.</div>
        </section>
      </div>

      <section id="architecture" className="mb-7 rounded-[22px] border border-[#e4ebf0] bg-white p-6 md:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2"><div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#4b8796]">The bigger picture</p><h2 className="mt-1 text-lg font-bold text-[#193249]">How it will work</h2></div><span className="rounded-full border border-[#e8edf2] px-3 py-1.5 text-[11px] font-semibold text-[#8294a3]">Planned architecture</span></div>
        <div className="grid gap-3 md:grid-cols-4">
          {steps.map(({ icon: Icon, title, body }, index) => (
            <div key={title} className="relative rounded-2xl border border-[#e8eef2] bg-[#fbfcfe] p-4">
              <div className="mb-3 flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e7f2f6] text-[#26758b]"><Icon size={20}/></div><span className="text-[10px] font-bold text-[#afbec8]">0{index+1}</span></div>
              <h3 className="text-sm font-bold text-[#253e53]">{title}</h3><p className="mt-1.5 text-xs leading-5 text-[#8294a3]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="next-steps" className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[22px] border border-[#d9e9e8] bg-[#eaf6f3] p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#3e9883]"><GitBranch size={20}/></div>
          <h2 className="text-base font-bold text-[#1f514a]">Ready for GitHub & Vercel</h2>
          <p className="mt-2 text-xs leading-6 text-[#557e79]">Follow README.md to install dependencies, run the app, create your repository, and deploy to Vercel.</p>
        </div>
        <div className="rounded-[22px] border border-[#e2eaf1] bg-[#f0f5fa] p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#5d85aa]"><LockKeyhole size={20}/></div>
          <h2 className="text-base font-bold text-[#2a445b]">Private data comes next</h2>
          <p className="mt-2 text-xs leading-6 text-[#678096]">Authentication is not active in this preview. Add it in Chunk 3 before entering real messages or tasks.</p>
        </div>
      </section>
    </DashboardShell>
  );
}
