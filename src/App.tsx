import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Wallet, X, ExternalLink, Copy, LogOut, Check } from 'lucide-react'
import { useConnect, useAccount, useDisconnect, useBalance } from 'wagmi'
import { formatEther } from 'viem'
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors'
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

const walletOptions = [
  {
    id: 'metamask',
    name: 'MetaMask',
    icon: (
      <svg viewBox="0 0 35 33" width={28} height={28} fill="none">
        <path d="M32.958 1L19.674 10.483l2.437-5.758L32.958 1z" fill="#E17726" />
        <path d="M2.663 1l13.17 9.587-2.325-5.862L2.662 1zM28.19 23.393l-3.496 5.358 7.523 2.065 2.137-7.309-6.164-.114zM1.89 23.507l2.106 7.309 7.523-2.065-3.497-5.358-6.132.114z" fill="#E27625" />
        <path d="M10.724 14.173l-2.083 3.126 7.457.337-.247-8.013-5.127 4.55zM24.897 14.173l-5.22-4.55-.155 8.117 7.457-.338-2.082-3.229zM11.52 28.75l4.486-2.17-3.866-3.022-.62 5.192zM19.615 26.58l4.486 2.17-.62-5.193-3.866 3.023z" fill="#E27625" />
        <path d="M24.1 28.75l-4.486-2.17.36 2.903-.038 1.224 4.164-1.957zM11.52 28.75l4.164 1.957-.019-1.224.34-2.903-4.485 2.17z" fill="#D5BFB2" />
        <path d="M15.84 21.445l-3.733-1.09 2.63-1.203 1.103 2.293zM19.78 21.445l1.104-2.293 2.63 1.203-3.734 1.09z" fill="#233447" />
        <path d="M11.52 28.75l.64-5.193-4.24.038 3.6 5.155zM22.461 23.557l.649 5.193 3.591-5.155-4.24-.038zM25.14 17.299l-7.458.338.498 4.182 1.104-2.293 2.63 1.204 3.226-3.431zM14.107 21.73l2.63-1.203 1.104 2.293.497-4.182-7.457-.338 3.226 3.43z" fill="#CC6228" />
        <path d="M10.724 17.299l3.59 4.34-.207-1.909-3.383-2.431zM21.514 19.73l-.208 1.909 3.59-4.34-3.382 2.431zM15.84 21.445l-.497 4.182.622.422 1.104-.743.073-2.967-1.302-.894zM19.78 21.445l-1.302.894.064 2.967 1.103.743.621-4.182-.486-.422z" fill="#E27525" />
        <path d="M20.235 26.58l-1.104-.743-.093.627-.01 1.86 1.207-.567v-1.177zM15.385 26.58v1.177l1.188.567-.01-1.86-.083-.627-1.095.743z" fill="#F5841F" />
        <path d="M21.435 28.35l-4.164-1.957.63-.44h-3.303l.63.44-4.164 1.957 1.104.929 2.514-1.068h3.123l2.515 1.068 1.103-.93z" fill="#C0AC9D" />
        <path d="M19.615 26.58l-.632 4.647 1.322-.636 4.773-4.007-5.463-.004zM15.385 26.58l-5.463.004 4.773 4.007 1.322.636-.632-4.647z" fill="#161616" />
        <path d="M20.952 31.228l-1.322-.636.884-.676h-1.838l.884.676-1.322.636 1.699 1.144 1.367-.62-.352-.524zM15.668 31.228l-.352.524 1.367.62 1.699-1.144-1.322-.636.884-.676h-1.838l.884.676-1.322.636z" fill="#763E1A" />
        <path d="M21.424 30.184l-4.773 4.007.265-.037 1.817-1.077h.634l1.817 1.077.265.037 4.773-4.007-1.348-1.144-2.515 1.068H23.02l-2.515-1.068-1.08.944zM15.257 29.04l-1.08-.944-2.515 1.068h-1.123l-2.514-1.068-1.348 1.144 4.773 4.007.265-.037 1.817-1.077h.634l1.817 1.077.265.037 4.773-4.007-1.348-1.144-2.515 1.068h-1.123l-2.515-1.068z" fill="#F5841F" />
      </svg>
    ),
    desc: 'Connect to your MetaMask wallet',
    connector: injected({ target: 'metaMask' }),
  },
  {
    id: 'phantom',
    name: 'Phantom',
    icon: (
      <svg viewBox="0 0 128 128" width={28} height={28} fill="none">
        <rect width={128} height={128} rx={24} fill="#AB9FF2" />
        <path d="M80.5 44.5c-6.5 0-12 5.5-12 12v8.22c0 6.63 5.37 12 12 12s12-5.37 12-12V56.5c0-6.5-5.5-12-12-12z" fill="#fff" />
        <path d="M47.5 44.5c-6.5 0-12 5.5-12 12v8.22c0 6.63 5.37 12 12 12s12-5.37 12-12V56.5c0-6.5-5.5-12-12-12z" fill="#fff" opacity={0.6} />
        <path d="M35.5 68.5c0 6.63 5.37 12 12 12H47v-12c0-6.63 5.37-12 12-12s12 5.37 12 12v12h.5c6.63 0 12-5.37 12-12V56.5c0-6.5-5.5-12-12-12s-12 5.5-12 12c-3.75-3.75-8.5-5.32-13.5-4.68-4 .51-7.84 3.2-9.5 8.68-1.73 5.71-.35 10.35 2 13.5-1.5-1.06-2.82-2.43-3.82-4.06A11.98 11.98 0 0129 68.5c0-3.83 1.8-7.26 4.62-9.5-1.36 2.85-2.12 6.05-2.12 9.5z" fill="#fff" />
      </svg>
    ),
    desc: 'Connect to Phantom wallet',
    connector: injected({ target: 'phantom' }),
  },
  {
    id: 'walletconnect',
    name: 'WalletConnect',
    icon: (
      <svg viewBox="0 0 387 258" width={28} height={20} fill="none">
        <path d="M79.2 50.4c62.7-61.2 164.4-61.2 227.1 0l7.5 7.4a7.7 7.7 0 010 11l-25.7 25.1a4 4 0 01-5.6 0l-10.4-10.1c-43.7-42.7-114.5-42.7-158.2 0l-11.1 10.9a4 4 0 01-5.6 0L71.7 68.8a7.7 7.7 0 010-11l7.5-7.4zm280.3 51.9l22.9 22.4a7.7 7.7 0 010 11l-103.3 101c-5.8 5.6-15.1 5.6-20.9 0l-73.3-71.6a2 2 0 00-2.8 0l-73.3 71.6c-5.8 5.6-15.1 5.6-20.9 0L5.1 135.3a7.7 7.7 0 010-11L28 102c5.8-5.6 15.1-5.6 20.9 0l73.3 71.6a2 2 0 002.8 0l73.3-71.6c5.8-5.6 15.1-5.6 20.9 0l73.3 71.6a2 2 0 002.8 0l73.3-71.6c5.8-5.6 15.1-5.6 20.9 0z" fill="#3396FF" />
      </svg>
    ),
    desc: 'Scan with WalletConnect',
    connector: walletConnect({ projectId: 'abc123def456ghi789jkl012mno345pq' }),
  },
  {
    id: 'coinbase',
    name: 'Coinbase Wallet',
    icon: (
      <svg viewBox="0 0 1024 1024" width={28} height={28} fill="none">
        <rect width={1024} height={1024} rx={200} fill="#0052FF" />
        <path d="M341.3 512c0-94.3 76.4-170.7 170.7-170.7s170.7 76.4 170.7 170.7-76.4 170.7-170.7 170.7S341.3 606.3 341.3 512zm64 0c0 58.9 47.8 106.7 106.7 106.7s106.7-47.8 106.7-106.7-47.8-106.7-106.7-106.7S405.3 453.1 405.3 512z" fill="#fff" />
      </svg>
    ),
    desc: 'Connect to Coinbase Wallet',
    connector: coinbaseWallet({ appName: 'Lithos' }),
  },
]

function ConnectWalletModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const { connect } = useConnect()

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
          {walletOptions.map((w) => (
            <button
              key={w.id}
              onClick={() => {
                connect({ connector: w.connector })
                onClose()
              }}
              className="flex items-center gap-4 w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#e8702a]/40 rounded-xl px-4 py-3.5 transition-all group"
            >
              <span className="w-7 h-7 flex items-center justify-center shrink-0">{w.icon}</span>
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

function WalletStatus() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { data: balance } = useBalance({ address })
  const [copied, setCopied] = useState(false)

  if (!isConnected || !address) return null

  const shortAddr = `${address.slice(0, 4)}...${address.slice(-4)}`
  const explorerUrl = `https://etherscan.io/address/${address}`
  const balStr = balance ? `${parseFloat(formatEther(balance.value)).toFixed(4)} ${balance.symbol}` : ''

  const copyAddr = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-1 pr-1 py-1">
      <div className="flex items-center gap-2 pl-2 pr-1">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white text-xs font-medium">{shortAddr}</span>
        {balStr && (
          <span className="text-white/40 text-xs">{balStr}</span>
        )}
      </div>
      <div className="flex items-center">
        <button onClick={copyAddr} className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Copy address">
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
        <a href={explorerUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all" title="View on Etherscan">
          <ExternalLink size={14} />
        </a>
        <button onClick={() => disconnect()} className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Disconnect">
          <LogOut size={14} />
        </button>
      </div>
    </div>
  )
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [walletOpen, setWalletOpen] = useState(false)
  const { isConnected } = useAccount()

  return (
    <div
      className="min-h-screen bg-white tracking-[-0.02em]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        {!isHome && <div className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5 -z-10" />}
        <button onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
          <svg width={26} height={26} viewBox="0 0 256 256" fill="#ffffff">
            <path d="M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">Lithos</span>
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

        <div className="flex items-center gap-3">
          {isConnected ? (
            <WalletStatus />
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
        </div>
      </nav>

      <ConnectWalletModal open={walletOpen} onClose={() => setWalletOpen(false)} />

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
