import { useNavigate } from 'react-router-dom'
import { Check, X, Star } from 'lucide-react'
import { useScrollReveal } from '../useScrollReveal'

const tiers = [
  {
    name: 'Explorer',
    depth: 'Surface',
    price: 'Free',
    features: ['5 Solana protocol maps', 'Community dig site access', 'Basic on-chain surface scans', 'Mobile field kit', 'Email support'],
    missing: ['Real-time validator seismograph', 'AI agent excavation rig', 'Custom RPC boreholes', 'Dedicated Geyser core access', 'Multi-agent survey team', 'Program fault audits'],
    cta: 'Start digging',
  },
  {
    name: 'Validator',
    depth: 'Mid-Crust',
    price: '29',
    period: 'SOL/mo',
    features: ['Unlimited Solana field maps', 'Real-time validator seismograph', 'AI agent excavation rig', 'Priority survey support', 'Custom RPC boreholes', 'Advanced analytics station', 'Seismic webhook alerts'],
    missing: ['Dedicated Geyser core access', 'Multi-agent survey team', 'Custom SVM formation audits', 'On-site expedition training'],
    cta: 'Dig deeper',
    featured: true,
  },
  {
    name: 'Institution',
    depth: 'Bedrock',
    price: '99',
    period: 'SOL/mo',
    features: ['All Validator gear', 'Dedicated Geyser core access', 'Multi-agent survey team', 'Custom SVM formation audits', 'SLA bedrock guarantee', 'On-site expedition training', 'Dedicated expedition lead', 'Custom instrument integration'],
    missing: [],
    cta: 'Contact base camp',
  },
]

const faqs = [
  { q: 'Can I pay with SOL or USDC?', a: 'Every vein accepts SOL and USDC (native and SPL). Payments are processed on-chain — your depth tier activates the moment the transaction settles.' },
  { q: 'Is there a discount for bedrock builders?', a: 'Verified Solana builders and grant recipients dig at 40% off. Send your project core sample to base camp.' },
  { q: 'Do you support devnet / testnet?', a: 'All our instruments work on mainnet-beta, devnet, and testnet. Switch your survey site from the dashboard.' },
  { q: 'Can I upgrade mid-expedition?', a: 'Yes, upgrades take effect at the next block. We prorate your remaining claim.' },
  { q: 'What happens if I hit the mineral limit?', a: 'We signal at 80% extraction. Validator plans have soft caps; Bedrock tiers are seam-less.' },
]

const testimonials = [
  { name: 'Alex Chen', role: 'Lead Developer, Marginfi', text: 'Lithos gave our team the fastest path to Solana\'s bedrock. The Anchor stratum alone saved us weeks of digging in the dark.' },
  { name: 'Sarah Park', role: 'Protocol Engineer, Jito', text: 'The validator seismology field notes are essential reading for anyone drilling into Solana infrastructure. Every layer, precisely mapped.' },
]

function TierCard({ tier, i }: { tier: typeof tiers[number]; i: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  const navigate = useNavigate()
  return (
    <div ref={ref} className="hero-scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
      <div
        className={`rounded-xl p-6 border transition-all duration-500 ${
          tier.featured
            ? 'bg-[#e8702a]/10 border-[#e8702a]/40 scale-105 sm:scale-110 shadow-lg shadow-[#e8702a]/5'
            : 'bg-white/5 border-white/10 hover:border-white/20'
        }`}
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
          onClick={() => navigate('/plans')}
          className={`w-full text-sm font-medium py-2.5 rounded-full transition-all ${
            tier.featured
              ? 'bg-[#e8702a] text-white hover:bg-[#d2611f] shadow-md shadow-[#e8702a]/20'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          {tier.cta}
        </button>
      </div>
    </div>
  )
}

function TestimonialCard({ t, i }: { t: typeof testimonials[number]; i: number }) {
  const ref = useScrollReveal<HTMLDivElement>()
  return (
    <div ref={ref} className="hero-scroll-reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
      <div className="bg-white/5 border border-white/10 rounded-xl p-5">
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
    </div>
  )
}

export default function Plans() {
  const headerRef = useScrollReveal<HTMLDivElement>()
  const compareRef = useScrollReveal<HTMLDivElement>()
  const faqRef = useScrollReveal<HTMLDivElement>()

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 px-6 sm:px-14 relative">
      <div className="hero-grain" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e8702a]/3 blur-[180px] rounded-full pointer-events-none hero-glow-orbit" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef} className="hero-scroll-reveal mb-12 text-center" style={{ transitionDelay: '0.05s' }}>
          <div className="w-10 h-px bg-[#e8702a]/60 mb-5 mx-auto" />
          <h1 className="text-white text-5xl sm:text-6xl font-playfair italic mb-3">Depths</h1>
          <p className="text-white/50 text-base max-w-md mx-auto">From surface collectors to bedrock excavators — choose your depth and unearth the full Solana AI formation.</p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid sm:grid-cols-3 gap-6 items-start mb-16">
          {tiers.map((tier, i) => <TierCard key={i} tier={tier} i={i} />)}
        </div>

        {/* Comparison Table */}
        <div ref={compareRef} className="hero-scroll-reveal mb-16" style={{ transitionDelay: '0.15s' }}>
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
        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {testimonials.map((t, i) => <TestimonialCard key={i} t={t} i={i} />)}
        </div>

        {/* FAQ */}
        <div ref={faqRef} className="hero-scroll-reveal max-w-2xl mx-auto" style={{ transitionDelay: '0.2s' }}>
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
