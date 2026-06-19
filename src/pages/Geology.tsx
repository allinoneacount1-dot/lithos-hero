import { Zap, Bot, Landmark, Image, Shield, Pickaxe, Globe, Blocks, Telescope, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react'

const topics = [
  { title: 'Solana Architecture', desc: 'Sealevel runtime, Gulf Stream, Turbine block propagation, and the key innovations behind 400ms block times.', icon: Zap, articles: '44', color: '#e8702a' },
  { title: 'AI x Solana', desc: 'On-chain inference, agent frameworks, compute markets — how Solana is becoming the execution layer for autonomous AI.', icon: Bot, articles: '37', color: '#8b5cf6' },
  { title: 'DeFi on Solana', desc: 'Marginfi, Kamino, Meteora, Jupiter. The lending, leverage, and liquidity primitives reshaping permissionless finance.', icon: Landmark, articles: '52', color: '#10b981' },
  { title: 'Digital Assets', desc: 'Token Extensions, compressed NFTs, Metaplex Inscriptions, and the future of digital ownership on Solana.', icon: Image, articles: '41', color: '#f59e0b' },
  { title: 'Solana Security', desc: 'Fuzz testing Anchor programs, access control patterns, oracle manipulation, and common SVM vulnerability classes.', icon: Shield, articles: '29', color: '#ef4444' },
  { title: 'Validator Economics', desc: 'Staking, MEV, Jito bundles, tip distribution, and the incentive layer securing Solana\'s validator set.', icon: Pickaxe, articles: '33', color: '#06b6d4' },
  { title: 'Cross-Chain', desc: 'Wormhole, Zeus Network, Eclipse. The bridges and interoperability layers connecting Solana to every major chain.', icon: Globe, articles: '26', color: '#a855f7' },
  { title: 'SVM App Chains', desc: 'Build your own Solana-compatible chain using the SVM. Eclipse, Sonic, and the modular SVM ecosystem.', icon: Blocks, articles: '21', color: '#e8702a' },
  { title: 'Solana Research', desc: 'Academic papers, protocol upgrades, and emerging cryptography research shaping Solana\'s roadmap.', icon: Telescope, articles: '18', color: '#3b82f6' },
]

const quickLinks = [
  { label: 'Whitepapers', icon: BookOpen, count: '12' },
  { label: 'Research Papers', icon: Telescope, count: '24' },
  { label: 'Protocol Upgrades', icon: Zap, count: '8' },
  { label: 'Community Proposals', icon: Users, count: '36' },
]

export default function Geology() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#e8702a]/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Solana</h1>
          <p className="text-white/50 text-base max-w-xl">The high-performance blockchain powering the next generation of crypto AI — from sub-second settlement to autonomous on-chain agents.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.15s' }}>
          {[
            { label: 'Topics', value: '9', icon: BookOpen },
            { label: 'Total Articles', value: '301', icon: TrendingUp },
            { label: 'Contributors', value: '86', icon: Users },
            { label: 'Weekly Readers', value: '24.5k', icon: TrendingUp },
          ].map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white/40" />
                </div>
                <div>
                  <div className="text-white text-xl font-bold">{s.value}</div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-2 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.2s' }}>
          {quickLinks.map((l, i) => {
            const Icon = l.icon
            return (
              <button
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-white/20 rounded-full px-4 py-2 transition-all group"
              >
                <Icon size={12} className="text-white/40 group-hover:text-[#e8702a]" />
                <span className="text-white/60 text-xs group-hover:text-white transition-colors">{l.label}</span>
                <span className="text-white/20 text-[10px] bg-white/5 px-1.5 py-0.5 rounded">{l.count}</span>
              </button>
            )
          })}
        </div>

        {/* Topic Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {topics.map((t, i) => {
            const Icon = t.icon
            return (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:-translate-y-0.5 transition-all duration-300 hero-anim hero-fade relative overflow-hidden"
                style={{ animationDelay: `${0.1 + i * 0.06}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-5 transition-opacity group-hover:opacity-10" style={{ background: t.color }} />
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${t.color}15` }}>
                    <Icon size={16} style={{ color: t.color }} />
                  </div>
                  <span className="text-white/30 text-xs">{t.articles} articles</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-1.5 transition-colors" style={{ color: 'white' }}>{t.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{t.desc}</p>
                <button className="mt-3 text-xs flex items-center gap-1 transition-colors" style={{ color: '#ffffff60' }}>
                  Explore topic <ArrowRight size={10} />
                </button>
              </div>
            )
          })}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-[#e8702a]/10 to-transparent border border-[#e8702a]/20 rounded-xl p-6 sm:p-8 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold mb-1">Stay ahead of the curve</h3>
              <p className="text-white/50 text-sm max-w-lg">Get weekly Solana research, protocol analysis, and alpha delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 sm:w-52 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#e8702a]/40 transition-colors"
                readOnly
              />
              <button className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm px-5 py-2.5 rounded-full transition-all shrink-0">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
