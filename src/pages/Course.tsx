export default function Course() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-6">Geology Courses</h1>
        <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-12">
          Explore our curated curriculum — from sedimentary petrology to seismic interpretation. Each course blends field theory with digital twin simulations.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: 'Sedimentology & Stratigraphy', desc: 'Understand layer formation, facies analysis, and basin evolution through hands-on core logging.', hours: '24h' },
            { title: 'Structural Geology', desc: 'Map folds, faults, and fractures. Learn cross-section balancing and 3D kinematic modeling.', hours: '18h' },
            { title: 'Geophysical Prospecting', desc: 'Seismic, magnetics, and resistivity surveys. Process real field data from volcanic terrains.', hours: '30h' },
            { title: 'Geochemistry', desc: 'Trace element and isotope geochemistry for provenance studies and hydrothermal exploration.', hours: '20h' },
          ].map((c, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[#e8702a]/30 transition-all">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-white text-lg font-semibold">{c.title}</h3>
                <span className="text-[#e8702a] text-xs font-mono bg-[#e8702a]/10 px-2 py-0.5 rounded">{c.hours}</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              <button className="mt-4 text-sm text-[#e8702a] hover:text-white transition-colors">Enroll now →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
