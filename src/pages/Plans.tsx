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

const faqs = [
  { q: 'Can I switch plans anytime?', a: 'Yes, upgrade or downgrade at any time. Changes take effect immediately.' },
  { q: 'Is there a student discount?', a: 'We offer 50% off for verified students and academic institutions.' },
  { q: 'What payment methods do you accept?', a: 'All major credit cards, crypto (ETH, USDC), and bank transfers for annual plans.' },
]

export default function Plans() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e8702a]/3 blur-[180px] rounded-full pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <div className="mb-12 text-center hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5 mx-auto" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Plans</h1>
          <p className="text-white/50 text-base max-w-md mx-auto">Scale your geological toolkit — from solo prospecting to enterprise-grade subsurface intelligence.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 items-start mb-16">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-xl p-6 border transition-all duration-300 hero-anim hero-fade ${
                tier.featured
                  ? 'bg-[#e8702a]/10 border-[#e8702a]/40 scale-105 sm:scale-110 shadow-lg shadow-[#e8702a]/5'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
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
                    ? 'bg-[#e8702a] text-white hover:bg-[#d2611f] shadow-md shadow-[#e8702a]/20'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-white text-xl font-playfair italic mb-6 text-center">Frequently asked questions</h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white/5 border border-white/10 rounded-xl p-4 open:border-[#e8702a]/20 transition-all">
                <summary className="text-white text-sm font-medium cursor-pointer list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-white/30 group-open:rotate-180 transition-transform text-xs">▼</span>
                </summary>
                <p className="text-white/50 text-sm mt-3 pt-3 border-t border-white/5">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
