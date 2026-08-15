export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="animate-float absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-pink-300/60 to-rose-200/40 blur-3xl" />
      <div className="animate-float-slow absolute -top-20 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-sky-300/55 to-cyan-200/40 blur-3xl" />
      <div className="animate-float absolute bottom-[-8rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-violet-300/50 to-fuchsia-200/40 blur-3xl" />
      <div className="animate-float-slow absolute bottom-0 right-1/4 h-[22rem] w-[22rem] rounded-full bg-gradient-to-br from-emerald-200/55 to-lime-200/40 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.7),transparent_60%)]" />
    </div>
  )
}
