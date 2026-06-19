export default function Geology() {
  const topics = [
    { title: 'Plate Tectonics', desc: 'The unifying theory of geology — from ridge push to slab pull, explore how Earth\'s lithosphere evolves.', icon: '🌍', articles: '48' },
    { title: 'Mineralogy', desc: 'Crystal systems, bond chemistry, and optical properties that distinguish the 5,000+ known mineral species.', icon: '💎', articles: '36' },
    { title: 'Paleontology', desc: 'Fossil preservation, index taxa, and the geologic time scale built from extinction events.', icon: '🦴', articles: '42' },
    { title: 'Volcanology', desc: 'Magma genesis, eruption dynamics, and hazard assessment across arc, rift, and hot-spot settings.', icon: '🌋', articles: '29' },
    { title: 'Hydrogeology', desc: 'Groundwater flow through porous and fractured media, aquifer characterization, and contamination transport.', icon: '💧', articles: '31' },
    { title: 'Economic Geology', desc: 'Ore deposit models, from porphyry copper to unconformity-related uranium, and exploration targeting.', icon: '⛏️', articles: '27' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-40 right-10 w-[450px] h-[450px] bg-[#e8702a]/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Geology</h1>
          <p className="text-white/50 text-base max-w-xl">The science that reads Earth's memory — a window into 4.5 billion years of planetary evolution.</p>
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
