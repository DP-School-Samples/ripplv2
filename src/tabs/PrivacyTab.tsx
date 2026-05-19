import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileText } from 'lucide-react'

export function PrivacyTab() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-4 pb-20"
    >
      <div className="mb-6 pt-1">
        <h2 className="font-display text-[13px] tracking-[0.2em] text-text-primary">PRIVACY POLICY</h2>
        <p className="font-mono text-[10px] text-text-muted mt-0.5">your data, your control</p>
      </div>

      <div className="space-y-6">
        <section className="bg-surface-raised/40 rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={16} className="text-oasis-400" />
            <h3 className="font-body text-[14px] font-bold text-text-primary">Data Protection</h3>
          </div>
          <p className="font-body text-[12px] text-text-secondary leading-relaxed">
            Rippl is committed to protecting your personal data. We collect minimal information required to track your sustainability impact, including your name, email, and activity logs.
          </p>
        </section>

        <section className="bg-surface-raised/40 rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <Lock size={16} className="text-gulf-400" />
            <h3 className="font-body text-[14px] font-bold text-text-primary">Information Usage</h3>
          </div>
          <p className="font-body text-[12px] text-text-secondary leading-relaxed">
            Your data is used solely to provide and improve the Rippl experience, calculate your environmental impact, and manage your rewards. We never sell your personal data to third parties.
          </p>
        </section>

        <section className="bg-surface-raised/40 rounded-2xl border border-border p-4">
          <div className="flex items-center gap-2 mb-3">
            <Eye size={16} className="text-dune-400" />
            <h3 className="font-body text-[14px] font-bold text-text-primary">Transparency</h3>
          </div>
          <p className="font-body text-[12px] text-text-secondary leading-relaxed">
            You have the right to access, correct, or delete your personal data at any time through your profile settings. For any privacy-related inquiries, contact us at privacy@rippl.eco.
          </p>
        </section>

        <div className="flex items-center gap-2 justify-center py-4">
          <FileText size={14} className="text-text-muted" />
          <span className="font-mono text-[9px] text-text-muted uppercase tracking-widest">Last Updated: May 2026</span>
        </div>
      </div>
    </motion.div>
  )
}
