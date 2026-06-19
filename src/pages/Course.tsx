export default function Course() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e8702a]/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Geology Courses</h1>
          <p className="text-white/50 text-base leading-relaxed max-w-2xl">
            Explore our curated curriculum — from sedimentary petrology to seismic interpretation. Each course blends field theory with digital twin simulations.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { title: 'Sedimentology & Stratigraphy', desc: 'Understand layer formation, facies analysis, and basin evolution through hands-on core logging.', hours: '24h', students: '1.2k' },
            { title: 'Structural Geology', desc: 'Map folds, faults, and fractures. Learn cross-section balancing and 3D kinematic modeling.', hours: '18h', students: '980' },
            { title: 'Geophysical Prospecting', desc: 'Seismic, magnetics, and resistivity surveys. Process real field data from volcanic terrains.', hours: '30h', students: '720' },
            { title: 'Geochemistry', desc: 'Trace element and isotope geochemistry for provenance studies and hydrothermal exploration.', hours: '20h', students: '640' },
          ].map((c, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#e8702a]/30 transition-all duration-500 hero-anim hero-fade"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-lg font-semibold group-hover:text-[#e8702a] transition-colors">{c.title}</h3>
                <span className="text-[#e8702a] text-xs font-mono bg-[#e8702a]/10 px-2 py-0.5 rounded shrink-0">{c.hours}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span className="text-white/30 text-xs">{c.students} enrolled</span>
                <button className="text-sm text-white/40 group-hover:text-[#e8702a] transition-colors">
                  Enroll now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
