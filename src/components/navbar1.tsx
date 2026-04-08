'use client'

import { motion } from 'framer-motion'
import { Menu, X, ShoppingCart, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <RGBBackground />
      <StringBalloons />
      <FlyingBirds />
      <FlyingHashtag />
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeroSection />
      <FeatureSection />
    </div>
  )
}

/* ================= RGB BACKGROUND ================= */
function RGBBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(0,255,255,0.3), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,0,255,0.3), transparent 40%)',
            'radial-gradient(circle at 70% 20%, rgba(255,0,128,0.3), transparent 40%), radial-gradient(circle at 30% 80%, rgba(0,128,255,0.3), transparent 40%)',
            'radial-gradient(circle at 20% 30%, rgba(0,255,255,0.3), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,0,255,0.3), transparent 40%)'
          ]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute inset-0 blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050510] to-black" />
    </div>
  )
}

/* ================= STRING BALLOONS ================= */
function StringBalloons() {
  const balloonColors = [
    'from-pink-500 to-purple-600',
    'from-cyan-400 to-blue-600',
    'from-yellow-400 to-orange-500',
    'from-green-400 to-emerald-600',
    'from-red-500 to-pink-500',
    'from-indigo-500 to-purple-700',
    'from-rose-400 to-red-600'
  ]

  return (
    <div className="absolute left-0 bottom-0 w-64 h-full pointer-events-none z-0">
      {balloonColors.map((color, i) => (
        <motion.div
          key={i}
          initial={{ y: 700, x: 40 + i * 25 }}
          animate={{
            y: -900,
            x: [40 + i * 25, 50 + i * 25, 35 + i * 25, 40 + i * 25]
          }}
          transition={{
            y: {
              duration: 18 + i * 3,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 1.2
            },
            x: {
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          className="absolute flex flex-col items-center"
        >
          {/* Balloon */}
          <div
            className={`w-12 h-16 rounded-full bg-gradient-to-b ${color} shadow-[0_0_25px_rgba(255,255,255,0.4)]`}
          />

          {/* Knot */}
          <div className="w-2 h-2 bg-white rounded-full mt-[-4px]" />

          {/* String */}
          <div className="w-[2px] h-20 bg-white/60" />
        </motion.div>
      ))}
    </div>
  )
}

/* ================= MULTIPLE BIRDS ================= */
function FlyingBirds() {
  const birds = Array.from({ length: 6 })

  return (
    <div className="absolute right-0 top-20 w-full h-full pointer-events-none z-0">
      {birds.map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: 400 + i * 120, y: 80 + i * 60 }}
          animate={{ x: -1600 }}
          transition={{
            duration: 18 + i * 3,
            repeat: Infinity,
            delay: i * 2,
            ease: 'linear'
          }}
          className="absolute text-white text-3xl opacity-80"
        >
          🕊️
        </motion.div>
      ))}
    </div>
  )
}

/* ================= FLYING HASHTAG ================= */
function FlyingHashtag() {
  return (
    <motion.div
      initial={{ x: -600, y: 250 }}
      animate={{ x: 1600 }}
      transition={{
        duration: 30,
        repeat: Infinity,
        ease: 'linear'
      }}
      className="absolute top-1/3 text-4xl md:text-6xl font-extrabold pointer-events-none z-0"
    >
      <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,0,255,0.8)] animate-pulse">
        #JusticeForHadi
      </span>
    </motion.div>
  )
}

/* ================= NAVBAR ================= */
function Navbar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />

        <div className="hidden md:flex gap-10 text-sm font-semibold tracking-wider">
          <NavLink label="Home" />
          <NavLink label="Products" />
          <NavLink label="Pricing" />
          <NavLink label="Contact" />
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative z-50">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <motion.div
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black/95 text-center"
      >
        <div className="flex flex-col gap-6 py-6">
          <NavLink label="Home" />
          <NavLink label="Products" />
          <NavLink label="Pricing" />
          <NavLink label="Contact" />
        </div>
      </motion.div>
    </nav>
  )
}

function NavLink({ label }: { label: string }) {
  return (
    <a href="#" className="relative group text-white hover:text-cyan-400 transition">
      {label}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 transition-all duration-500 group-hover:w-full" />
    </a>
  )
}

/* ================= LOGO ================= */
function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-extrabold tracking-widest"
    >
      <motion.span
        animate={{
          textShadow: ['0 0 10px cyan', '0 0 20px magenta', '0 0 10px cyan']
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Asad Tech BD
      </motion.span>
    </motion.div>
  )
}

/* ================= HERO ================= */
function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 pt-44 pb-28 relative z-10">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Next Level Digital Product Reselling
      </motion.h1>

      <motion.p className="mt-8 text-gray-300 text-lg md:text-xl max-w-2xl">
        High quality digital tools, subscriptions & software marketplace with secure automation system.
      </motion.p>

      <div className="mt-12 flex flex-col sm:flex-row gap-8">
        <motion.button whileHover={{ scale: 1.1 }}
          className="px-10 py-4 rounded-2xl bg-cyan-400 text-black font-bold shadow-[0_0_30px_cyan] flex items-center gap-2">
          <Sparkles size={18} /> Get Started
        </motion.button>

        <motion.button whileHover={{ scale: 1.1 }}
          className="px-10 py-4 rounded-2xl bg-pink-500 text-white font-bold shadow-[0_0_30px_magenta] flex items-center gap-2">
          <ShoppingCart size={18} /> Explore
        </motion.button>
      </div>
    </section>
  )
}

/* ================= FEATURES ================= */
function FeatureSection() {
  const features = [
    { title: 'RGB Secure System', desc: 'Advanced encrypted automation delivery system.' },
    { title: 'High Speed Delivery', desc: 'Instant digital access after successful payment.' },
    { title: 'Maximum Profit', desc: 'Best reseller margin structure in market.' }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 pb-28 grid md:grid-cols-3 gap-12 relative z-10">
      {features.map((f, i) => (
        <motion.div key={i} whileHover={{ scale: 1.05 }}
          className="p-10 rounded-3xl bg-black/40 backdrop-blur-2xl border border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
          <Zap className="mb-4 text-cyan-400" />
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
            {f.title}
          </h3>
          <p className="text-gray-400 text-sm">{f.desc}</p>
        </motion.div>
      ))}
    </section>
  )
}