import { useRef, useState, useEffect, useCallback } from 'react'
import { Menu, Wallet, X } from 'lucide-react'
import RevealLayer from './components/RevealLayer'

const BG_IMAGE_1 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_195923_b0ba8ace-1d1d-4f2c-9a28-1ab84b330680.png&w=1280&q=85'
const BG_IMAGE_2 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_201152_bba90a12-bf12-459f-91f0-51f237dbaf3b.png&w=1280&q=85'

const wallets = [
  { id: 'metamask', name: 'MetaMask', icon: '🦊', desc: 'Connect to your MetaMask wallet' },
  { id: 'walletconnect', name: 'WalletConnect', icon: '🔗', desc: 'Scan with WalletConnect' },
  { id: 'coinbase', name: 'Coinbase Wallet', icon: '🔵', desc: 'Connect to Coinbase Wallet' },
  { id: 'phantom', name: 'Phantom', icon: '👻', desc: 'Connect to Phantom wallet' },
]

function ConnectWalletModal({ open, onClose, onConnect }: {
  open: boolean
  onClose: () => void
  onConnect: (id: string) => void
}) {
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-[#111] border border-white/10 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Wallet size={20} className="text-[#e8702a]" />
            <span className="text-white text-lg font-semibold">Connect Wallet</span>
          </div>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {wallets.map((w) => (
            <button
              key={w.id}
              onClick={() => { onConnect(w.id); onClose() }}
              className="flex items-center gap-4 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e8702a]/40 rounded-xl px-4 py-3.5 transition-all group"
            >
              <span className="text-2xl">{w.icon}</span>
              <div className="text-left flex-1">
                <div className="text-white text-sm font-medium group-hover:text-[#e8702a] transition-colors">{w.name}</div>
                <div className="text-white/40 text-xs">{w.desc}</div>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-5 text-center text-xs text-white/30">
          By connecting, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  )
}

function App() {
  const mouse = useRef({ x: -999, y: -999 })
  const smooth = useRef({ x: -999, y: -999 })
  const rafRef = useRef<number>(0)
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 })
  const [walletOpen, setWalletOpen] = useState(false)
  const [walletAddr, setWalletAddr] = useState<string | null>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouse.current.x = e.clientX
    mouse.current.y = e.clientY
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1
      setCursorPos({ x: smooth.current.x, y: smooth.current.y })
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [handleMouseMove])

  const handleConnect = useCallback((id: string) => {
    const short = `${id.slice(0, 2)}...${id.slice(-4)}`
    setWalletAddr(`${id.charAt(0).toUpperCase() + id.slice(1)} • ${short}`)
  }, [])

  return (
    <div
      className="min-h-screen bg-white tracking-[-0.02em]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <div className="flex items-center gap-2">
          <svg width={26} height={26} viewBox="0 0 256 256" fill="#ffffff">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">Lithos</span>
        </div>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white">Course</button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors">Field Guides</button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors">Geology</button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors">Plans</button>
          <button className="px-4 py-1.5 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors">Live Tour</button>
        </div>

        {walletAddr ? (
          <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full">
            <Wallet size={16} className="text-[#e8702a]" />
            {walletAddr}
          </div>
        ) : (
          <button
            onClick={() => setWalletOpen(true)}
            className="hidden md:flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-100 transition-all cursor-pointer"
          >
            <Wallet size={16} />
            Connect Wallet
          </button>
        )}

        <button className="md:hidden text-white" onClick={() => setWalletOpen(true)}>
          <Menu size={26} />
        </button>
      </nav>

      <ConnectWalletModal open={walletOpen} onClose={() => setWalletOpen(false)} onConnect={handleConnect} />

      <section className="relative w-full overflow-hidden h-screen bg-black" style={{ height: '100dvh' }}>
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
          style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
        />

        <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        <div className="absolute top-[14%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
          <h1 className="text-white leading-[0.95]">
            <span
              className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
              style={{ letterSpacing: '-0.05em', animationDelay: '0.25s' }}
            >
              Layers hold
            </span>
            <span
              className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
              style={{ letterSpacing: '-0.08em', animationDelay: '0.42s' }}
            >
              tales of time
            </span>
          </h1>
        </div>

        <div className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade" style={{ animationDelay: '0.7s' }}>
          <p className="text-sm text-white/80 leading-relaxed">
            Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us.
          </p>
        </div>

        <div
          className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] flex flex-col items-start gap-4 sm:gap-5 z-50 hero-anim hero-fade"
          style={{ animationDelay: '0.85s' }}
        >
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet.
          </p>
          <button className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30">
            Start Digging
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
