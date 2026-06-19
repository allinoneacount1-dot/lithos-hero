export default function Geology() {
  const topics = [
    { title: 'Plate Tectonics', desc: 'The unifying theory of geology — from ridge push to slab pull, explore how Earth\'s lithosphere evolves.', icon: '🌍' },
    { title: 'Mineralogy', desc: 'Crystal systems, bond chemistry, and optical properties that distinguish the 5,000+ known mineral species.', icon: '💎' },
    { title: 'Paleontology', desc: 'Fossil preservation, index taxa, and the geologic time scale built from extinction events and adaptive radiations.', icon: '🦴' },
    { title: 'Volcanology', desc: 'Magma genesis, eruption dynamics, and hazard assessment across arc, rift, and hot-spot settings.', icon: '🌋' },
    { title: 'Hydrogeology', desc: 'Groundwater flow through porous and fractured media, aquifer characterization, and contamination transport.', icon: '💧' },
    { title: 'Economic Geology', desc: 'Ore deposit models, from porphyry copper to unconformity-related uranium, and exploration targeting.', icon: '⛏️' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-2">Geology</h1>
        <p className="text-white/40 text-sm mb-10">The science that reads Earth's memory.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topics.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#e8702a]/30 transition-all group">
              <span className="text-3xl block mb-3">{t.icon}</span>
              <h3 className="text-white text-base font-semibold mb-2">{t.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t.desc}</p>
              <button className="mt-3 text-xs text-[#e8702a] hover:text-white transition-colors">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
