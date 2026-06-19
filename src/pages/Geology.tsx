export default function Geology() {
  const topics = [
    { title: 'Solana Architecture', desc: 'Sealevel runtime, Gulf Stream, Turbine block propagation, and the key innovations behind 400ms block times.', icon: '⚡', articles: '44' },
    { title: 'AI x Solana', desc: 'On-chain inference, agent frameworks, compute markets — how Solana is becoming the execution layer for autonomous AI.', icon: '🤖', articles: '37' },
    { title: 'DeFi on Solana', desc: 'Marginfi, Kamino, Meteora, Jupiter. The lending, leverage, and liquidity primitives reshaping permissionless finance.', icon: '🏦', articles: '52' },
    { title: 'NFTs & Digital Assets', desc: 'Token Extensions, compressed NFTs, Metaplex Inscriptions, and the future of digital ownership on Solana.', icon: '🖼️', articles: '41' },
    { title: 'Solana Security', desc: 'Fuzz testing Anchor programs, access control patterns, oracle manipulation, and common SVM vulnerability classes.', icon: '🛡️', articles: '29' },
    { title: 'Validator Economics', desc: 'Staking, MEV, Jito bundles, tip distribution, and the incentive layer securing Solana\'s validator set.', icon: '⛏️', articles: '33' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#e8702a]/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Solana</h1>
          <p className="text-white/50 text-base max-w-xl">The high-performance blockchain powering the next generation of crypto AI — from sub-second settlement to autonomous on-chain agents.</p>
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
