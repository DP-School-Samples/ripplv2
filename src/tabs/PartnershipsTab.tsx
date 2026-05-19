import { motion } from 'framer-motion'
import { Handshake, Store, Tag, Sparkles, Megaphone, ArrowRight } from 'lucide-react'

export function PartnershipsTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pb-20"
    >
      <div className="mb-6 pt-1 text-right">
        <h2 className="font-display text-[13px] tracking-[0.2em] text-text-primary uppercase">Partnerships</h2>
        <p className="font-mono text-[10px] text-text-muted mt-0.5">grow with the green economy</p>
      </div>

      <div className="relative mb-8 rounded-3xl overflow-hidden bg-surface-raised border border-border">
        <div className="absolute inset-0 bg-gradient-to-l from-oasis-400/10 to-transparent pointer-events-none" />
        <div className="p-6">
          <Handshake size={32} className="text-oasis-400 mb-4" />
          <h3 className="font-display text-[20px] text-text-primary leading-tight">Brand Ecosystem</h3>
          <p className="font-body text-[13px] text-text-secondary mt-2">
            Connect your sustainable brand with a highly engaged audience looking to make a difference in the UAE.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <PartnerType 
          icon={<Store size={20} />}
          title="Reward Partner"
          desc="List your sustainable products or services in our Rewards marketplace."
        />
        <PartnerType 
          icon={<Tag size={20} />}
          title="Verified Vendor"
          desc="Get featured in the 'Local produce' and 'Eco-shopping' categories."
        />
        <PartnerType 
          icon={<Megaphone size={20} />}
          title="Impact Campaigns"
          desc="Sponsor community challenges and environmental initiatives."
        />
        <PartnerType 
          icon={<Sparkles size={20} />}
          title="White Label"
          desc="Integrate Rippl's verification engine into your own loyalty app."
        />
      </div>

      <div className="mt-8 p-6 bg-oasis-400/5 border border-oasis-400/20 rounded-3xl text-center">
        <h4 className="font-body text-[14px] font-bold text-text-primary mb-2">Ready to Rippl?</h4>
        <p className="font-body text-[12px] text-text-secondary mb-6">
          Join over 50+ sustainable brands in the UAE.
        </p>
        <button className="inline-flex items-center gap-2 bg-text-primary text-surface px-6 py-3 rounded-2xl font-body text-[13px] font-medium transition-transform active:scale-95">
          Become a Partner
          <ArrowRight size={14} />
        </button>
      </div>
    </motion.div>
  )
}

function PartnerType({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-5 bg-surface-raised/40 border border-border rounded-2xl hover:border-oasis-400/40 transition-all cursor-pointer">
      <div className="flex items-center gap-4 mb-2">
        <div className="text-oasis-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h4 className="font-body text-[14px] font-bold text-text-primary">{title}</h4>
      </div>
      <p className="font-body text-[12px] text-text-secondary leading-relaxed">{desc}</p>
    </div>
  )
}
