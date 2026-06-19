export default function LiveTour() {
  const tours = [
    { title: 'Iceland Rift Zone', date: 'Jul 14, 2026', status: 'Upcoming', spots: 8 },
    { title: 'Himalayan Transect', date: 'Aug 22, 2026', status: 'Upcoming', spots: 12 },
    { title: 'Grand Canyon Stratigraphy', date: 'Sep 5, 2026', status: 'Upcoming', spots: 6 },
    { title: 'Hawaiian Hot Spot', date: 'Oct 11, 2026', status: 'Upcoming', spots: 10 },
    { title: 'Alpine Fold Belt', date: 'Recorded', status: 'Available', spots: null },
    { title: 'Atlas Mountain Transect', date: 'Recorded', status: 'Available', spots: null },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-2">Live Tour</h1>
        <p className="text-white/40 text-sm mb-10">Join expert-led field expeditions in real time.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tours.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#e8702a]/30 transition-all group">
              <h3 className="text-white text-base font-semibold mb-2 group-hover:text-[#e8702a] transition-colors">{t.title}</h3>
              <p className="text-white/40 text-sm mb-3">{t.date}</p>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                  t.status === 'Upcoming' ? 'bg-green-500/10 text-green-400' : 'bg-white/10 text-white/50'
                }`}>
                  {t.status}
                </span>
                {t.spots && (
                  <span className="text-xs text-white/40">{t.spots} spots left</span>
                )}
              </div>
              <button className="mt-4 w-full text-sm bg-white/10 hover:bg-[#e8702a] text-white py-2 rounded-full transition-all">
                {t.status === 'Upcoming' ? 'Reserve spot' : 'Watch replay'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
