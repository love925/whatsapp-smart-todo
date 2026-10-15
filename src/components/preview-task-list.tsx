import { ArrowUpRight, CalendarClock, Check, Circle, MessageSquareText, UserRound } from "lucide-react";

/** Demonstration only. No task storage exists at this stage. */
const sampleTasks = [
  { title: "Prepare the weekly progress report", note: "Example manual task", due: "Tomorrow · 10:00 AM", priority: "High", source: "Manual" },
  { title: "Follow up with the project team", note: "Example message extraction", due: "Friday · 2:30 PM", priority: "Medium", source: "WhatsApp" },
  { title: "Review the next milestone checklist", note: "Example manual task", due: "No due date", priority: "Low", source: "Manual" },
];

export function PreviewTaskList() {
  return (
    <section aria-labelledby="task-preview-title" className="overflow-hidden rounded-[22px] border border-[#e4ebf0] bg-white shadow-[0_12px_36px_rgba(25,49,73,0.035)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#eef1f5] px-6 py-5">
        <div>
          <h2 id="task-preview-title" className="text-base font-bold text-[#1c3047]">Task list preview</h2>
          <p className="mt-1 text-xs text-[#8292a2]">Sample items only. Nothing is saved yet.</p>
        </div>
        <span className="rounded-full bg-[#eef6fb] px-3 py-1.5 text-[11px] font-semibold text-[#376d8f]">DEMO DATA</span>
      </div>
      <div className="divide-y divide-[#edf1f5]">
        {sampleTasks.map((task) => (
          <article key={task.title} className="flex items-start gap-4 px-5 py-5 sm:px-6">
            <Circle aria-hidden="true" className="mt-0.5 shrink-0 text-[#bdd0da]" size={23} strokeWidth={1.6} />
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-[13px] font-semibold text-[#233a51] sm:text-sm">{task.title}</h3>
                {task.priority === "High" && <span className="rounded bg-[#fff1ed] px-2 py-0.5 text-[10px] font-semibold text-[#c66b55]">High priority</span>}
              </div>
              <p className="mt-1 text-xs text-[#9aa8b5]">{task.note}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-[#6e8295]">
                <span className="inline-flex items-center gap-1.5"><CalendarClock size={13}/>{task.due}</span>
                <span className="inline-flex items-center gap-1.5">{task.source === "WhatsApp" ? <MessageSquareText size={13}/> : <UserRound size={13}/>} {task.source}</span>
              </div>
            </div>
            <ArrowUpRight aria-hidden="true" className="shrink-0 text-[#c0cdd7]" size={17}/>
          </article>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-[#f8fafc] px-6 py-4 text-xs text-[#738a9c]"><Check size={15} className="text-[#4d9983]"/> Task creation, editing and completion are coming in Chunk 3.</div>
    </section>
  );
}
