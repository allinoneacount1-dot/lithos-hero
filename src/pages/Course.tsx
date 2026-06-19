export default function Course() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8702a]/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Crypto AI Courses</h1>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            Master the intersection of blockchain and artificial intelligence — from writing smart contracts to deploying autonomous trading agents on-chain.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { title: 'Smart Contract Development', desc: 'Solidity, Vyper, and Rust for WASM. Write, test, and deploy secure contracts on EVM and SVM chains.', hours: '32h', students: '2.8k' },
            { title: 'AI Trading Agents', desc: 'Build reinforcement learning agents that execute strategies across CEX and DEX venues using real-time on-chain data.', hours: '28h', students: '1.9k' },
            { title: 'DeFi Protocol Engineering', desc: 'Design lending pools, AMMs, and liquid staking. Understand MEV resistance, oracles, and risk parameters.', hours: '36h', students: '1.4k' },
            { title: 'Zero-Knowledge ML', desc: 'ZK-SNARKs, zk-STARKs, and homomorphic encryption for privacy-preserving inference on decentralized networks.', hours: '24h', students: '870' },
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
