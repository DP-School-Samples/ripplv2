import { motion } from 'framer-motion'
import { Check, Star, Zap, Crown } from 'lucide-react'
import { useApp } from '../App'

export function PricingTab() {
  const {  } = useApp()

  const features = [
    'Advanced ESG Data Insights',
    'Exclusive Premium Rewards',
    'Custom Profile Badges',
    'Unlimited AI Verifications',
    'Early Access to New Features',
    'Ad-Free Experience'
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pb-20"
    >
      <div className="mb-6 pt-1 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-oasis-400/10 rounded-full mb-3">
          <Zap size={12} className="text-oasis-400" />
          <span className="font-mono text-[10px] text-oasis-400 font-bold tracking-widest uppercase">Premium</span>
        </div>
        <h2 className="font-display text-[28px] text-text-primary leading-tight">Elevate Your Impact</h2>
        <p className="font-mono text-[11px] text-text-muted mt-2">Join the Rippl Premium community</p>
      </div>

      <div className="bg-gradient-to-br from-surface-raised to-surface border-2 border-oasis-400/30 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4">
          <Crown size={24} className="text-oasis-400/20" />
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="font-display text-[42px] text-text-primary">15</span>
            <span className="font-display text-[20px] text-text-primary">AED</span>
            <span className="font-body text-[14px] text-text-muted">/ month</span>
          </div>
          <p className="font-body text-[13px] text-text-secondary mt-2 italic">Support the planet and gain exclusive benefits.</p>
        </div>

        <div className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-oasis-400/20 flex items-center justify-center">
                <Check size={12} className="text-oasis-400" />
              </div>
              <span className="font-body text-[13px] text-text-primary">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full bg-oasis-500 hover:bg-oasis-600 text-surface font-display text-[15px] py-4 rounded-2xl transition-all shadow-lg shadow-oasis-500/20 active:scale-[0.98]">
          Upgrade to Premium
        </button>
        
        <p className="font-mono text-[9px] text-text-muted text-center mt-4">Secure checkout powered by Stripe. Cancel anytime.</p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-surface-raised/40 border border-border rounded-2xl p-4">
          <Star size={16} className="text-gulf-400 mb-2" />
          <h4 className="font-body text-[12px] font-bold text-text-primary">Community Support</h4>
          <p className="font-body text-[10px] text-text-muted mt-1">10% of revenue goes to local reforestation projects.</p>
        </div>
        <div className="bg-surface-raised/40 border border-border rounded-2xl p-4">
          <Zap size={16} className="text-dune-400 mb-2" />
          <h4 className="font-body text-[12px] font-bold text-text-primary">Direct Impact</h4>
          <p className="font-body text-[10px] text-text-muted mt-1">Offset an additional 20kg of CO2 per month automatically.</p>
        </div>
      </div>
    </motion.div>
  )
}
