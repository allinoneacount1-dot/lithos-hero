import { useState, useEffect, useCallback } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Wallet, X } from 'lucide-react'
import Home from './pages/Home'
import Course from './pages/Course'
import FieldGuides from './pages/FieldGuides'
import Geology from './pages/Geology'
import Plans from './pages/Plans'
import LiveTour from './pages/LiveTour'

const navLinks = [
  { label: 'Course', path: '/course' },
  { label: 'Field Guides', path: '/field-guides' },
  { label: 'Geology', path: '/geology' },
  { label: 'Plans', path: '/plans' },
  { label: 'Live Tour', path: '/live-tour' },
]

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
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [walletOpen, setWalletOpen] = useState(false)
  const [walletAddr, setWalletAddr] = useState<string | null>(null)

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
        <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <svg width={26} height={26} viewBox="0 0 256 256" fill={isHome ? '#ffffff' : '#e8702a'}>
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className={`text-2xl font-playfair italic ${isHome ? 'text-white' : 'text-white'}`}>Lithos</span>
        </button>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <button
                key={link.path}
                onClick={() => navigate(link.path)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            )
          })}
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/field-guides" element={<FieldGuides />} />
        <Route path="/geology" element={<Geology />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/live-tour" element={<LiveTour />} />
      </Routes>
    </div>
  )
}

export default App
