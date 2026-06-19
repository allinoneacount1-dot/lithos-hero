import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, Bot, Landmark, Image, Shield, Pickaxe, Globe, Blocks, Telescope, TrendingUp, Users, BookOpen, ArrowRight } from 'lucide-react'

const topics = [
  { title: 'Solana Bedrock', desc: 'Sealevel runtime, Gulf Stream, Turbine block propagation — the foundational strata behind 400ms block times.', icon: Zap, articles: '44', color: '#e8702a' },
  { title: 'AI Fossil Layers', desc: 'On-chain inference, agent frameworks, compute markets — how Solana is becoming the tectonic plate for autonomous AI.', icon: Bot, articles: '37', color: '#8b5cf6' },
  { title: 'DeFi Sediment', desc: 'Marginfi, Kamino, Meteora, Jupiter. The lending, leverage, and liquidity deposits reshaping permissionless finance.', icon: Landmark, articles: '52', color: '#10b981' },
  { title: 'Digital Veins', desc: 'Token Extensions, compressed NFTs, Metaplex Inscriptions — mineral veins running through Solana\'s digital crust.', icon: Image, articles: '41', color: '#f59e0b' },
  { title: 'Security Fault Lines', desc: 'Fuzz testing Anchor programs, access control patterns, oracle manipulation — the fracture zones every builder must map.', icon: Shield, articles: '29', color: '#ef4444' },
  { title: 'Validator Seismology', desc: 'Staking, MEV, Jito bundles, tip distribution — the tectonic forces securing Solana\'s validator layer.', icon: Pickaxe, articles: '33', color: '#06b6d4' },
  { title: 'Continental Drift', desc: 'Wormhole, Zeus Network, Eclipse. Bridges and subduction zones connecting Solana to every major chain.', icon: Globe, articles: '26', color: '#a855f7' },
  { title: 'SVM Formations', desc: 'Build your own Solana-compatible chain using the SVM. Eclipse, Sonic, and the modular SVM orogeny.', icon: Blocks, articles: '21', color: '#e8702a' },
  { title: 'Deep Research', desc: 'Academic papers, protocol upgrades, and emerging cryptography — the deepest boreholes into Solana\'s roadmap.', icon: Telescope, articles: '18', color: '#3b82f6' },
]

const quickLinks = [
  { label: 'Bedrock Papers', icon: BookOpen, count: '12', path: '/geology' },
  { label: 'Borehole Reports', icon: Telescope, count: '24', path: '/field-guides' },
  { label: 'Tectonic Shifts', icon: Zap, count: '8', path: '/live-tour' },
  { label: 'Community Surveys', icon: Users, count: '36', path: '/course' },
]

export default function Geology() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#e8702a]/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Strata</h1>
          <p className="text-white/50 text-base max-w-xl">Peel back the crust of the high-performance blockchain powering crypto AI. Each layer of sediment records a protocol — from sub-second settlement to autonomous on-chain agents.</p>
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
                onClick={() => navigate(l.path)}
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
                onClick={() => navigate('/course')}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:-translate-y-0.5 transition-all duration-300 hero-anim hero-fade relative overflow-hidden cursor-pointer"
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
                <span className="mt-3 text-xs flex items-center gap-1 text-white/40 group-hover:text-[#e8702a] transition-colors">
                  Explore topic <ArrowRight size={10} />
                </span>
              </div>
            )
          })}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-[#e8702a]/10 to-transparent border border-[#e8702a]/20 rounded-xl p-6 sm:p-8 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold mb-1">New strata, every week</h3>
              <p className="text-white/50 text-sm max-w-lg">Weekly borehole reports — Solana research, protocol sediment, and freshly exposed formations delivered to your inbox.</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 sm:w-52 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#e8702a]/40 transition-colors"
              />
              <button onClick={() => { if (email) { setEmail(''); alert('Subscribed! Check your inbox for the first borehole report.') } }} className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm px-5 py-2.5 rounded-full transition-all shrink-0">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
