import { BookOpen, Cpu, LineChart, Database, Users, Clock, TrendingUp, Award, Code, Shield, Workflow, GitBranch } from 'lucide-react'

const courses = [
  { title: 'Solana Smart Contracts', desc: 'Anchor framework, Rust for BPF, CPI calls, PDA derivation. Ship production-grade programs on mainnet.', hours: '32h', students: '3.1k', level: 'Advanced', icon: Code },
  { title: 'AI Agents on Solana', desc: 'Deploy autonomous agents that trade, arbitrage, and manage positions using Solana\'s sub-second finality.', hours: '28h', students: '1.8k', level: 'Intermediate', icon: Cpu },
  { title: 'DeFi Protocol Design', desc: 'Build lending pools, AMMs, and liquid staking on Solana. Understand SVM, epoch scheduling, and rent economics.', hours: '36h', students: '2.2k', level: 'Advanced', icon: LineChart },
  { title: 'Solana Data & Indexing', desc: 'Parse transactions, build dashboards with Geyser plugins, and stream on-chain data using Yellowstone gRPC.', hours: '20h', students: '940', level: 'Intermediate', icon: Database },
  { title: 'Security Auditing SVM', desc: 'Fuzz testing, static analysis, access control reviews, and common vulnerability patterns in Solana programs.', hours: '24h', students: '1.1k', level: 'Advanced', icon: Shield },
  { title: 'Token Engineering', desc: 'Design SPL tokens, Token Extensions, bonding curves, and dynamic supply mechanisms for crypto networks.', hours: '16h', students: '760', level: 'Beginner', icon: GitBranch },
  { title: 'Validator Operations', desc: 'Run, monitor, and optimize Solana validators. Understand staking, commissions, and MEV strategies.', hours: '30h', students: '520', level: 'Intermediate', icon: Workflow },
  { title: 'Cross-Chain Bridges', desc: 'Build and audit bridge infrastructure connecting Solana to Ethereum, Bitcoin, and L2 rollups via ZK light clients.', hours: '26h', students: '680', level: 'Advanced', icon: GitBranch },
]

const stats = [
  { label: 'Courses', value: '8', icon: BookOpen },
  { label: 'Total Students', value: '12.6k', icon: Users },
  { label: 'Live Hours', value: '212h', icon: Clock },
  { label: 'Completion Rate', value: '94%', icon: TrendingUp },
]

export default function Course() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8702a]/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
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

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 hero-anim hero-fade" style={{ animationDelay: '0.2s' }}>
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#e8702a]/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-[#e8702a]" />
                </div>
                <div>
                  <div className="text-white text-xl font-bold">{s.value}</div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 hero-anim hero-fade" style={{ animationDelay: '0.3s' }}>
          {['All', 'Beginner', 'Intermediate', 'Advanced'].map((f) => (
            <button
              key={f}
              className={`text-xs px-4 py-1.5 rounded-full transition-all ${
                f === 'All' ? 'bg-[#e8702a] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {courses.map((c, i) => {
            const Icon = c.icon
            return (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#e8702a]/30 hover:-translate-y-0.5 transition-all duration-500 hero-anim hero-fade"
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#e8702a]/10 flex items-center justify-center">
                    <Icon size={16} className="text-[#e8702a]" />
                  </div>
                  <span className="text-[#e8702a] text-xs font-mono bg-[#e8702a]/10 px-2 py-0.5 rounded shrink-0">{c.hours}</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-1.5 group-hover:text-[#e8702a] transition-colors">{c.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-3">{c.desc}</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-white/30 text-xs">{c.students} enrolled</span>
                  <span className="text-xs text-white/30">{c.level}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Instructor CTA */}
        <div className="bg-gradient-to-r from-[#e8702a]/10 to-transparent border border-[#e8702a]/20 rounded-xl p-6 sm:p-8 mb-16 hero-anim hero-fade" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 rounded-full bg-[#e8702a]/20 flex items-center justify-center shrink-0">
              <Award size={28} className="text-[#e8702a]" />
            </div>
            <div className="flex-1">
              <h3 className="text-white text-lg font-semibold mb-1">Become an Instructor</h3>
              <p className="text-white/50 text-sm max-w-lg">Share your Solana expertise with thousands of students. We provide the platform, you bring the knowledge.</p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-6 py-2.5 rounded-full transition-all shrink-0">Apply now →</button>
          </div>
        </div>
      </div>
    </div>
  )
}
