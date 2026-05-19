import { motion } from 'framer-motion'
import { LayoutDashboard, BarChart, Users, Globe, Building2, ArrowUpRight } from 'lucide-react'

export function CorporateTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pb-20"
    >
      <div className="mb-6 pt-1">
        <h2 className="font-display text-[13px] tracking-[0.2em] text-text-primary uppercase">Corporate ESG</h2>
        <p className="font-mono text-[10px] text-text-muted mt-0.5">enterprise-grade sustainability tracking</p>
      </div>

      <div className="bg-surface-raised/40 rounded-3xl border border-border overflow-hidden mb-6">
        <div className="p-6 bg-gradient-to-br from-gulf-400/20 to-transparent">
          <Building2 size={32} className="text-gulf-400 mb-4" />
          <h3 className="font-display text-[20px] text-text-primary leading-tight">Empower Your Workforce</h3>
          <p className="font-body text-[13px] text-text-secondary mt-2">
            Rippl for Enterprise provides real-time ESG metrics based on employee engagement and collective action.
          </p>
        </div>
        
        <div className="p-6 grid grid-cols-2 gap-4 border-t border-border">
          <div className="space-y-1">
            <p className="font-mono text-[9px] text-text-muted uppercase">Global Impact</p>
            <p className="font-display text-[18px] text-text-primary">12.4 Tons</p>
            <p className="font-mono text-[8px] text-oasis-400">↑ 14% vs last month</p>
          </div>
          <div className="space-y-1">
            <p className="font-mono text-[9px] text-text-muted uppercase">Engagement</p>
            <p className="font-display text-[18px] text-text-primary">84%</p>
            <p className="font-mono text-[8px] text-oasis-400">Active employees</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <DashboardFeature 
          icon={<LayoutDashboard size={18} />}
          title="Consolidated Reporting"
          desc="Automated ESG reports ready for audit and board meetings."
        />
        <DashboardFeature 
          icon={<BarChart size={18} />}
          title="Scope 3 Analytics"
          desc="Measure indirect emissions from employee commutes and habits."
        />
        <DashboardFeature 
          icon={<Users size={18} />}
          title="Team Competitions"
          desc="Foster a sustainable culture with internal department leaderboards."
        />
        <DashboardFeature 
          icon={<Globe size={18} />}
          title="SDG Alignment"
          desc="Track contribution to specific UN Sustainable Development Goals."
        />
      </div>

      <button className="w-full mt-6 bg-surface-raised border border-border hover:border-gulf-400/50 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all">
        <span className="font-body text-[13px] text-text-primary">Request Enterprise Demo</span>
        <ArrowUpRight size={14} className="text-text-muted" />
      </button>
    </motion.div>
  )
}

function DashboardFeature({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-4 bg-surface-raised/40 border border-border rounded-2xl">
      <div className="w-10 h-10 rounded-xl bg-surface-overlay flex items-center justify-center shrink-0 text-gulf-400">
        {icon}
      </div>
      <div>
        <h4 className="font-body text-[13px] font-bold text-text-primary">{title}</h4>
        <p className="font-body text-[11px] text-text-secondary mt-0.5 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}
