export default function LiveTour() {
  const tours = [
    { title: 'Iceland Rift Zone', date: 'Jul 14, 2026', status: 'Upcoming', spots: 8, duration: '5 days', price: '$2,400' },
    { title: 'Himalayan Transect', date: 'Aug 22, 2026', status: 'Upcoming', spots: 12, duration: '12 days', price: '$4,800' },
    { title: 'Grand Canyon Stratigraphy', date: 'Sep 5, 2026', status: 'Upcoming', spots: 6, duration: '4 days', price: '$1,800' },
    { title: 'Hawaiian Hot Spot', date: 'Oct 11, 2026', status: 'Upcoming', spots: 10, duration: '7 days', price: '$3,200' },
    { title: 'Alpine Fold Belt', date: 'Recorded', status: 'Available', spots: null, duration: '6 days', price: 'Free' },
    { title: 'Atlas Mountain Transect', date: 'Recorded', status: 'Available', spots: null, duration: '8 days', price: 'Free' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-white/3 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-[#e8702a]/3 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12 hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Live Tour</h1>
          <p className="text-white/50 text-base max-w-xl">Join expert-led field expeditions in real time. Walk the outcrop with leading geologists from anywhere on Earth.</p>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase">Upcoming Expeditions</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tours.filter(t => t.status === 'Upcoming').map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#e8702a]/30 hover:-translate-y-0.5 transition-all duration-300 hero-anim hero-fade group"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-500/10 text-green-400">Upcoming</span>
                  <span className="text-white/30 text-xs">{t.spots} spots</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-[#e8702a] transition-colors">{t.title}</h3>
                <p className="text-white/40 text-xs mb-3">{t.date} · {t.duration}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-sm font-medium">{t.price}</span>
                  <button className="text-xs bg-white/10 hover:bg-[#e8702a] text-white px-3 py-1.5 rounded-full transition-all">Reserve</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="text-white/60 text-xs font-medium tracking-wide uppercase">Recorded Tours</span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tours.filter(t => t.status === 'Available').map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-300 hero-anim hero-fade group"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-white/10 text-white/50">Available</span>
                  <span className="text-white/30 text-xs">{t.duration}</span>
                </div>
                <h3 className="text-white text-sm font-semibold mb-1 group-hover:text-[#e8702a] transition-colors">{t.title}</h3>
                <p className="text-white/40 text-xs mb-3">{t.date}</p>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-xs">Free to watch</span>
                  <button className="text-xs bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full transition-all">Watch replay</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
