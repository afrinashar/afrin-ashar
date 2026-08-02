export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950/90 text-white">
      <div className="glass rounded-[32px] border border-white/10 bg-slate-950/70 p-10 text-center shadow-2xl shadow-slate-950/40">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full border-4 border-white/15 border-t-sky-400 animate-spin" />
        <p className="text-xl font-semibold">Loading portfolio...</p>
        <p className="mt-2 text-slate-300">Please wait while the page loads.</p>
      </div>
    </div>
  );
}
