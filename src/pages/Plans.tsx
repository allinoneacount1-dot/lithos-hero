import { Check, X, Star } from 'lucide-react'

const tiers = [
  {
    name: 'Explorer',
    price: 'Free',
    features: ['5 Solana protocol guides', 'Community forum access', 'Basic on-chain analytics', 'Mobile app', 'Email support'],
    missing: ['Real-time validator API', 'AI agent sandbox', 'Custom RPC endpoints', 'Dedicated Geyser access', 'Multi-agent orchestration', 'Program audits'],
    cta: 'Get started',
  },
  {
    name: 'Validator',
    price: '29',
    period: 'SOL/mo',
    features: ['Unlimited Solana guides', 'Real-time validator data API', 'AI agent sandbox', 'Priority support', 'Custom RPC endpoints', 'Advanced analytics dashboard', 'Webhook alerts'],
    missing: ['Dedicated Geyser access', 'Multi-agent orchestration', 'Custom SVM program audits', 'On-site training'],
    cta: 'Subscribe',
    featured: true,
  },
  {
    name: 'Institution',
    price: '99',
    period: 'SOL/mo',
    features: ['All Validator features', 'Dedicated Geyser access', 'Multi-agent orchestration', 'Custom SVM program audits', 'SLA guarantee', 'On-site training', 'Dedicated account manager', 'Custom integrations'],
    missing: [],
    cta: 'Contact sales',
  },
]

const faqs = [
  { q: 'Can I pay with SOL or USDC?', a: 'Yes, we accept SOL and USDC (native and SPL). Payments are processed on-chain with instant plan activation.' },
  { q: 'Is there a discount for Solana builders?', a: 'Yes, verified Solana builders and grant recipients get 40% off. Reach out with your project details.' },
  { q: 'Do you support devnet/testnet?', a: 'All our APIs and RPC endpoints support mainnet-beta, devnet, and testnet. Switch networks in your dashboard.' },
  { q: 'Can I upgrade mid-cycle?', a: 'Yes, upgrades take effect immediately. We prorate the remaining balance on your current plan.' },
  { q: 'What happens if I exceed API limits?', a: 'We notify you at 80% usage. Validator plans have soft limits; Institution plans are unlimited.' },
]

const testimonials = [
  { name: 'Alex Chen', role: 'Lead Developer, Marginfi', text: 'Lithos gave our team the fastest path to production on Solana. The Anchor guide alone saved us weeks of trial and error.' },
  { name: 'Sarah Park', role: 'Protocol Engineer, Jito', text: 'The validator operations course is essential reading for anyone running Solana infrastructure. Updated and accurate.' },
]

export default function Plans() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e8702a]/3 blur-[180px] rounded-full pointer-events-none" />
      <div className="max-w-6xl mx-auto relative">
        <div className="mb-12 text-center hero-anim hero-fade" style={{ animationDelay: '0.1s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5 mx-auto" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Plans</h1>
          <p className="text-white/50 text-base max-w-md mx-auto">From solo explorers to institutional validators — scale your Solana AI infrastructure with confidence.</p>
        </div>

        {/* Pricing Tiers */}
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
              {tier.featured && (
                <div className="flex items-center gap-1 mb-3">
                  <Star size={12} className="text-[#e8702a] fill-[#e8702a]" />
                  <span className="text-[#e8702a] text-xs font-medium">Most popular</span>
                </div>
              )}
              <h3 className="text-white text-lg font-semibold mb-1">{tier.name}</h3>
              <div className="flex items-baseline gap-0.5 mb-5">
                <span className="text-white text-3xl font-bold">{tier.price}</span>
                {tier.period && <span className="text-white/40 text-sm">{tier.period}</span>}
              </div>
              <ul className="flex flex-col gap-2.5 mb-6">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-white/70 text-sm">
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

        {/* Comparison Table */}
        <div className="mb-16 hero-anim hero-fade" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-white text-xl font-playfair italic mb-6 text-center">Compare features</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-white/40 font-normal py-3 pr-4">Feature</th>
                  {tiers.map((t, i) => (
                    <th key={i} className={`text-center py-3 px-4 ${t.featured ? 'text-[#e8702a]' : 'text-white/40'}`}>{t.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Protocol guides',
                  'On-chain data API',
                  'AI agent sandbox',
                  'Priority support',
                  'Custom RPC',
                  'Geyser access',
                  'Multi-agent orchestration',
                  'SVM program audits',
                  'SLA guarantee',
                ].map((feat, j) => (
                  <tr key={j} className="border-b border-white/5">
                    <td className="text-white/60 py-3 pr-4 text-xs">{feat}</td>
                    {tiers.map((tier, k) => {
                      const has = tier.features.some(f => f.toLowerCase().includes(feat.toLowerCase().split(' ')[0]))
                      return (
                        <td key={k} className={`text-center py-3 px-4 ${tier.featured ? 'bg-[#e8702a]/5' : ''}`}>
                          {has ? <Check size={14} className="text-green-400 mx-auto" /> : <X size={14} className="text-white/20 mx-auto" />}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-2 gap-4 mb-16 hero-anim hero-fade" style={{ animationDelay: '0.5s' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#e8702a]/20 flex items-center justify-center text-[#e8702a] text-sm font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="text-white text-sm font-medium">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">"{t.text}"</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
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
