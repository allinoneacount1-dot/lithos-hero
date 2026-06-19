import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Prospector',
    price: 'Free',
    features: ['5 field guides', 'Basic geologic maps', 'Community forum', 'Mobile access'],
    cta: 'Get started',
  },
  {
    name: 'Geologist',
    price: '$19',
    period: '/mo',
    features: ['Unlimited field guides', 'High-res seismic data', 'AI-assisted core logging', 'Export to GIS formats', 'Priority support'],
    cta: 'Subscribe',
    featured: true,
  },
  {
    name: 'Researcher',
    price: '$49',
    period: '/mo',
    features: ['All Geologist features', 'Full subsurface API', 'Multi-user collaboration', 'Custom model training', 'Dedicated account manager', 'SLA guarantee'],
    cta: 'Contact sales',
  },
]

export default function Plans() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-2 text-center">Plans</h1>
        <p className="text-white/40 text-sm mb-12 text-center">Scale your geological toolkit.</p>
        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 border transition-all ${
                tier.featured
                  ? 'bg-[#e8702a]/10 border-[#e8702a]/40 scale-105 sm:scale-110'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <h3 className="text-white text-lg font-semibold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-0.5 mb-5">
                <span className="text-white text-3xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-white/40 text-sm">{tier.period}</span>}
              </div>
              <ul className="flex flex-col gap-3 mb-6">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/60 text-sm">
                    <Check size={14} className="text-[#e8702a] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full text-sm font-medium py-2.5 rounded-full transition-all ${
                  tier.featured
                    ? 'bg-[#e8702a] text-white hover:bg-[#d2611f]'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
