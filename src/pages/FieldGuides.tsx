export default function FieldGuides() {
  const guides = [
    { title: 'Igneous Petrology Field Log', region: 'Yellowstone Caldera', pages: 48, difficulty: 'Intermediate', downloads: '3.4k' },
    { title: 'Carbonate Platform Mapping', region: 'The Bahamas Banks', pages: 36, difficulty: 'Advanced', downloads: '2.1k' },
    { title: 'Fluvial & Deltaic Systems', region: 'Mississippi Basin', pages: 52, difficulty: 'Beginner', downloads: '5.7k' },
    { title: 'Metamorphic Core Complexes', region: 'Basin & Range, USA', pages: 40, difficulty: 'Advanced', downloads: '1.8k' },
    { title: 'Submarine Volcanic Fields', region: 'Izu-Bonin Arc', pages: 28, difficulty: 'Intermediate', downloads: '960' },
    { title: 'Glacial Geomorphology', region: 'Patagonian Icefields', pages: 44, difficulty: 'Beginner', downloads: '4.2k' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-white/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Field Guides</h1>
          <p className="text-white/50 text-base max-w-xl">Peer-reviewed field guides for the modern geologist, crafted by domain experts across active terrains.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {guides.map((g, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-300 hero-anim hero-fade"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs text-[#e8702a] font-medium tracking-wide uppercase">{g.region}</span>
                <span className="text-white/30 text-xs">{g.downloads} downloads</span>
              </div>
              <h3 className="text-white text-base font-semibold mb-3 group-hover:text-[#e8702a] transition-colors leading-snug">{g.title}</h3>
              <div className="flex items-center gap-3 text-xs text-white/40 mb-4">
                <span>{g.pages} pages</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{g.difficulty}</span>
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-white/10 hover:bg-[#e8702a] text-white px-4 py-1.5 rounded-full transition-all">View</button>
                <button className="text-xs bg-white/5 hover:bg-white/10 text-white/60 hover:text-white px-4 py-1.5 rounded-full transition-all">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
