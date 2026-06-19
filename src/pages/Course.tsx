export default function Course() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8702a]/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-white text-5xl sm:text-6xl font-playfair italic">Solana Courses</h1>
            <span className="bg-[#e8702a]/10 text-[#e8702a] text-xs font-mono px-2 py-0.5 rounded-full">SOL</span>
          </div>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            Build on the fastest blockchain in crypto. Master Solana development — from Sealevel runtime to SVM deployments, AI agents, and DeFi protocols.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { title: 'Solana Smart Contracts', desc: 'Anchor framework, Rust for BPF, CPI calls, PDA derivation. Ship production-grade programs on mainnet.', hours: '32h', students: '3.1k' },
            { title: 'AI Agents on Solana', desc: 'Deploy autonomous agents that trade, arbitrage, and manage positions using Solana\'s sub-second finality.', hours: '28h', students: '1.8k' },
            { title: 'DeFi Protocol Design', desc: 'Build lending pools, AMMs, and liquid staking on Solana. Understand SVM, epoch scheduling, and rent economics.', hours: '36h', students: '2.2k' },
            { title: 'Solana Data & Indexing', desc: 'Parse transactions, build dashboards with Geyser plugins, and stream on-chain data using Yellowstone gRPC.', hours: '20h', students: '940' },
          ].map((c, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#e8702a]/30 transition-all duration-500 hero-anim hero-fade"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-lg font-semibold group-hover:text-[#e8702a] transition-colors">{c.title}</h3>
                <span className="text-[#e8702a] text-xs font-mono bg-[#e8702a]/10 px-2 py-0.5 rounded shrink-0">{c.hours}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span className="text-white/30 text-xs">{c.students} enrolled</span>
                <button className="text-sm text-white/40 group-hover:text-[#e8702a] transition-colors">
                  Enroll now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
