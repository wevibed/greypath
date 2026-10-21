import { PROCESS_STEPS } from '@/lib/site';

export default function ProcessSteps({ className = '' }) {
  return (
    <div className={`grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4 ${className}`}>
      {PROCESS_STEPS.map((item) => (
        <div key={item.step} className="flex flex-col bg-graphite p-6 lg:p-8">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-steelblue">{item.step}</span>
          <h3 className="mt-6 font-heading text-lg font-medium leading-snug text-glacial">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-aluminium/70">{item.body}</p>
        </div>
      ))}
    </div>
  );
}