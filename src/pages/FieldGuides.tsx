import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Download, BookText, TrendingUp, Users, FileText, Search, ArrowUpRight, Star } from 'lucide-react'

const guides = [
  { title: 'Validator Drill Core', protocol: 'Jito-Solana', pages: 52, difficulty: 'Advanced', downloads: '8.2k', rating: 4.8, author: 'Jito Labs' },
  { title: 'Anchor Framework Stratum', protocol: 'Anchor Lang', pages: 44, difficulty: 'Intermediate', downloads: '14k', rating: 4.9, author: 'Coral Foundation' },
  { title: 'Token Extensions Field Map', protocol: 'Token 2022', pages: 38, difficulty: 'Beginner', downloads: '11k', rating: 4.7, author: 'Solana Foundation' },
  { title: 'SVM Runtime Bedrock', protocol: 'Sealevel', pages: 56, difficulty: 'Advanced', downloads: '5.4k', rating: 4.6, author: 'Anza' },
  { title: 'DeFi Fault Line Survey', protocol: 'Marginfi & Kamino', pages: 32, difficulty: 'Intermediate', downloads: '6.7k', rating: 4.5, author: 'Gauntlet' },
  { title: 'On-Chain Fossil Record', protocol: 'Giza & Render', pages: 28, difficulty: 'Beginner', downloads: '3.9k', rating: 4.4, author: 'Giza' },
  { title: 'ZK Compression Core Sample', protocol: 'Light Protocol', pages: 40, difficulty: 'Advanced', downloads: '2.8k', rating: 4.7, author: 'Light Protocol' },
  { title: 'Solana Pay Seam', protocol: 'Solana Pay', pages: 24, difficulty: 'Beginner', downloads: '7.1k', rating: 4.6, author: 'Solana Labs' },
  { title: 'Compressed Minting Vein', protocol: 'Metaplex & 3Land', pages: 36, difficulty: 'Intermediate', downloads: '4.5k', rating: 4.5, author: 'Metaplex' },
]

const difficultyColors: Record<string, string> = {
  Beginner: 'bg-green-500/10 text-green-400',
  Intermediate: 'bg-yellow-500/10 text-yellow-400',
  Advanced: 'bg-red-500/10 text-red-400',
}

export default function FieldGuides() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [difficulty, setDifficulty] = useState('All')

  const filtered = guides.filter(g => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase()) || g.protocol.toLowerCase().includes(search.toLowerCase())
    const matchDiff = difficulty === 'All' || g.difficulty === difficulty
    return matchSearch && matchDiff
  })

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-white/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Field Notes</h1>
          <p className="text-white/50 text-base max-w-xl">Core samples from Solana's deepest formations — validator geology, SVM tectonics, and on-chain fossil records, documented for the field researcher.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.15s' }}>
          {[
            { label: 'Total Guides', value: '9', icon: BookText },
            { label: 'Downloads', value: '58.4k', icon: Download },
            { label: 'Contributors', value: '24', icon: Users },
            { label: 'Avg Rating', value: '4.6', icon: TrendingUp },
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

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8 hero-anim hero-fade" style={{ animationDelay: '0.2s' }}>
          <div className="flex-1 relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search guides..."
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#e8702a]/40 transition-colors"
            />
          </div>
          <div className="flex gap-2">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setDifficulty(f)}
                className={`text-xs px-4 py-2 rounded-full transition-all ${
                  difficulty === f ? 'bg-[#e8702a] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((g, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 hero-anim hero-fade"
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-[#e8702a] font-medium tracking-wide uppercase">{g.protocol}</span>
                <div className="flex items-center gap-1">
                  <Star size={10} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-white/40 text-xs">{g.rating}</span>
                </div>
              </div>
              <h3 className="text-white text-sm font-semibold mb-2 group-hover:text-[#e8702a] transition-colors leading-snug">{g.title}</h3>
              <div className="flex items-center gap-3 text-xs text-white/40 mb-3">
                <span className="flex items-center gap-1"><FileText size={11} />{g.pages} pages</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${difficultyColors[g.difficulty]}`}>{g.difficulty}</span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <span className="text-white/30 text-[11px]">{g.author}</span>
                <div className="flex gap-1.5">
                  <button onClick={() => navigate('/field-guides')} className="text-xs bg-white/10 hover:bg-[#e8702a] text-white px-3 py-1 rounded-full transition-all flex items-center gap-1">
                    Read <ArrowUpRight size={10} />
                  </button>
                  <button onClick={() => navigate('/plans')} className="text-xs bg-white/5 hover:bg-white/10 text-white/40 hover:text-white px-3 py-1 rounded-full transition-all">
                    <Download size={11} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Guide Banner */}
        <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 rounded-xl p-6 sm:p-8 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center shrink-0 border border-yellow-500/20">
              <Star size={24} className="text-yellow-500 fill-yellow-500" />
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-medium text-yellow-500 uppercase tracking-wider">Featured Guide</span>
              <h3 className="text-white text-lg font-semibold mt-1 mb-1">Anchor Framework Stratum</h3>
              <p className="text-white/50 text-sm max-w-lg">The most comprehensive survey of Solana's Anchor formation. Updated for Anchor 0.31 with PDA derivation strata, CPI fault lines, and testing best practices.</p>
              <div className="flex items-center gap-4 mt-3 text-xs text-white/40">
                <span>44 pages</span>
                <span>14k downloads</span>
                <span>Updated June 2026</span>
              </div>
            </div>
            <button onClick={() => navigate('/field-guides')} className="bg-white/10 hover:bg-white/20 text-white text-sm px-6 py-2.5 rounded-full transition-all shrink-0 mt-2 sm:mt-0">Read now →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
