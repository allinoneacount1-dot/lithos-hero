export default function Geology() {
  const topics = [
    { title: 'Layer 1 Protocols', desc: 'Consensus mechanisms, validator economics, and the trade-offs between security, scalability, and decentralization.', icon: '⛓️', articles: '56' },
    { title: 'AI Model Markets', desc: 'Tokenized neural networks, decentralized inference, and the emergence of compute-backed asset classes.', icon: '🧠', articles: '41' },
    { title: 'MEV & Auction Theory', desc: 'Miner extractable value, PBS, MEV-share, and the game-theoretic landscape of block building.', icon: '⚡', articles: '33' },
    { title: 'Zero-Knowledge Cryptography', desc: 'Groth16, PLONK, Nova. Recursive proofs, aggregation, and the path toward full-chain privacy.', icon: '🔐', articles: '47' },
    { title: 'Tokenomics Design', desc: 'Supply schedules, bonding curves, veToken models, and incentive alignment for sustainable cryptonetworks.', icon: '📊', articles: '38' },
    { title: 'Decentralized Governance', desc: 'DAO structures, quadratic voting, conviction voting, and the political economy of on-chain decision-making.', icon: '🏛️', articles: '29' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#e8702a]/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Crypto AI</h1>
          <p className="text-white/50 text-base max-w-xl">The foundational primitives of cryptoeconomic systems and machine intelligence — from consensus layers to autonomous agents.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#e8702a]/30 hover:-translate-y-0.5 transition-all duration-300 hero-anim hero-fade"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl block">{t.icon}</span>
                <span className="text-white/30 text-xs">{t.articles} articles</span>
              </div>
              <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#e8702a] transition-colors">{t.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
              <button className="mt-3 text-xs text-white/40 group-hover:text-[#e8702a] transition-colors">Explore topic →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
