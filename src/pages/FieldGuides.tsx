export default function FieldGuides() {
  const guides = [
    { title: 'Igneous Petrology Field Log', region: 'Yellowstone Caldera', pages: 48, difficulty: 'Intermediate' },
    { title: 'Carbonate Platform Mapping', region: 'The Bahamas Banks', pages: 36, difficulty: 'Advanced' },
    { title: 'Fluvial & Deltaic Systems', region: 'Mississippi Basin', pages: 52, difficulty: 'Beginner' },
    { title: 'Metamorphic Core Complexes', region: 'Basin & Range, USA', pages: 40, difficulty: 'Advanced' },
    { title: 'Submarine Volcanic Fields', region: 'Izu-Bonin Arc', pages: 28, difficulty: 'Intermediate' },
    { title: 'Glacial Geomorphology', region: 'Patagonian Icefields', pages: 44, difficulty: 'Beginner' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-2">Field Guides</h1>
        <p className="text-white/40 text-sm mb-10">Peer-reviewed field guides for the modern geologist.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((g, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all group">
              <div className="text-xs text-[#e8702a] font-medium mb-2">{g.region}</div>
              <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#e8702a] transition-colors">{g.title}</h3>
              <div className="flex items-center gap-3 text-xs text-white/40">
                <span>{g.pages} pages</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{g.difficulty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
