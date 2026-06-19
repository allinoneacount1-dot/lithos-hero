import { Calendar, MapPin, Users, Clock, Mic, Play, ArrowRight, Sparkles } from 'lucide-react'

const upcoming = [
  { title: 'Solana AI Hackathon', date: 'Jul 18, 2026', spots: 300, duration: '3 days', price: 'Free', location: 'Virtual + NYC', speakers: '12+' },
  { title: 'Breakpoint 2026', date: 'Sep 12, 2026', spots: 500, duration: '4 days', price: '$499', location: 'Singapore', speakers: '40+' },
  { title: 'Solana DeFi Summit', date: 'Oct 5, 2026', spots: 150, duration: '2 days', price: '$199', location: 'London', speakers: '18+' },
  { title: 'SVM Developer Workshop', date: 'Nov 8, 2026', spots: 80, duration: '1 day', price: '$99', location: 'Virtual', speakers: '6' },
  { title: 'Jito Restaking Launch', date: 'Dec 3, 2026', spots: 200, duration: '1 day', price: 'Free', location: 'Virtual', speakers: '8' },
  { title: 'Solana Mobile Summit', date: 'Jan 20, 2027', spots: 120, duration: '2 days', price: '$299', location: 'San Francisco', speakers: '15+' },
]

const recorded = [
  { title: 'Solana Agave Validator Call', date: 'Recorded', duration: '1 day', speakers: '4', views: '3.2k' },
  { title: 'Jito Restaking Deep Dive', date: 'Recorded', duration: '2 days', speakers: '6', views: '5.7k' },
  { title: 'Anchor v0.31 Launch Event', date: 'Recorded', duration: '3 hours', speakers: '3', views: '8.1k' },
  { title: 'Solana x AI Panel Discussion', date: 'Recorded', duration: '2 hours', speakers: '5', views: '4.5k' },
]

const speakers = [
  { name: 'Anatoly Yakovenko', role: 'Co-Founder, Solana Labs', initials: 'AY' },
  { name: 'Lucas Bruder', role: 'CEO, Jito Labs', initials: 'LB' },
  { name: 'Tarun Chitra', role: 'CEO, Gauntlet', initials: 'TC' },
  { name: 'Austin Federa', role: 'Strategy, Solana Foundation', initials: 'AF' },
]

export default function LiveTour() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-white/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-[#e8702a]/3 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Live Events</h1>
          <p className="text-white/50 text-base max-w-xl">The premier Solana conferences, hackathons, and workshops — live and on-chain. Join thousands of builders shaping the ecosystem.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.15s' }}>
          {[
            { label: 'Upcoming Events', value: '6', icon: Calendar },
            { label: 'Total Attendees', value: '12.4k', icon: Users },
            { label: 'Speakers', value: '100+', icon: Mic },
            { label: 'Recorded', value: '24', icon: Play },
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

        {/* Featured Event */}
        <div className="bg-gradient-to-r from-[#e8702a]/10 to-transparent border border-[#e8702a]/20 rounded-xl p-6 sm:p-8 mb-10 hero-anim hero-fade" style={{ animationDelay: '0.2s' }}>
          <div className="flex items-center gap-2 mb-3">
            <Sparkles size={14} className="text-[#e8702a]" />
            <span className="text-[#e8702a] text-xs font-medium uppercase tracking-wider">Next Up</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="flex-1">
              <h3 className="text-white text-xl font-semibold mb-1">Solana AI Hackathon</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/50 text-sm">
                <span className="flex items-center gap-1"><Calendar size={12} />Jul 18, 2026</span>
                <span className="flex items-center gap-1"><MapPin size={12} />Virtual + NYC</span>
                <span className="flex items-center gap-1"><Users size={12} />300 spots</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm px-6 py-2.5 rounded-full transition-all">Register free</button>
              <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-5 py-2.5 rounded-full transition-all">Learn more</button>
            </div>
          </div>
        </div>

        {/* Upcoming Grid */}
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.25s' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase">Upcoming Events</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {upcoming.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#e8702a]/30 hover:-translate-y-0.5 transition-all duration-300 group"
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-500/10 text-green-400">Upcoming</span>
                  <span className="text-white/30 text-xs">{t.spots} spots</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-2 group-hover:text-[#e8702a] transition-colors">{t.title}</h3>
                <div className="flex flex-col gap-1.5 mb-3 text-white/40 text-xs">
                  <span className="flex items-center gap-1.5"><Calendar size={11} />{t.date} · {t.duration}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={11} />{t.location}</span>
                  <span className="flex items-center gap-1.5"><Mic size={11} />{t.speakers} speakers</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-white text-sm font-medium">{t.price}</span>
                  <button className="text-xs bg-white/10 hover:bg-[#e8702a] text-white px-3 py-1.5 rounded-full transition-all">Register</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Speakers */}
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center justify-between mb-5">
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase">Featured Speakers</span>
            <button className="text-xs text-white/30 hover:text-white transition-colors flex items-center gap-1">View all <ArrowRight size={10} /></button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {speakers.map((s, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded-full bg-[#e8702a]/20 flex items-center justify-center text-[#e8702a] text-xs font-bold shrink-0">
                  {s.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-white text-sm font-medium truncate">{s.name}</div>
                  <div className="text-white/40 text-xs truncate">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recorded */}
        <div className="mb-10 hero-anim hero-fade" style={{ animationDelay: '0.35s' }}>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase">Recorded Events</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {recorded.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-300 group"
                style={{ animationDelay: `${0.3 + i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-white/10 text-white/50">On demand</span>
                  <span className="text-white/30 text-xs flex items-center gap-1"><Play size={10} />{t.views} views</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-[#e8702a] transition-colors">{t.title}</h3>
                <div className="flex items-center gap-3 text-white/40 text-xs mb-3">
                  <span className="flex items-center gap-1"><Clock size={11} />{t.duration}</span>
                  <span className="flex items-center gap-1"><Mic size={11} />{t.speakers} speakers</span>
                </div>
                <button className="text-xs bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5">
                  <Play size={10} /> Watch replay
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
