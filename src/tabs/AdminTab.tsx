import { motion } from 'framer-motion'
import { Shield, Mail, Check, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useApp } from '../App'
import { db } from '../firebase'
import { collection, query, where, getDocs, doc, updateDoc } from 'firebase/firestore'

interface AdminUser {
  uid: string
  displayName: string
  email: string
  isAdmin: boolean
}

export function AdminTab() {
  const { userData, user } = useApp()
  const [users, setUsers] = useState<AdminUser[]>([])
  const [loading, setLoading] = useState(true)
  const [searchEmail, setSearchEmail] = useState('')
  const [addingAdmin, setAddingAdmin] = useState(false)

  const isAdmin = (userData as any)?.isAdmin

  useEffect(() => {
    if (!isAdmin) return
    loadAdmins()
  }, [isAdmin])

  const loadAdmins = async () => {
    setLoading(true)
    const q = query(collection(db, 'users'), where('isAdmin', '==', true))
    const snap = await getDocs(q)
    setUsers(snap.docs.map(d => {
      const data = d.data()
      return {
        uid: d.id,
        displayName: data.displayName || 'Unknown',
        email: data.email || '',
        isAdmin: true,
      }
    }))
    setLoading(false)
  }

  const handleAddAdmin = async () => {
    if (!searchEmail.trim()) return
    setAddingAdmin(true)
    const q = query(collection(db, 'users'), where('email', '==', searchEmail.toLowerCase().trim()))
    const snap = await getDocs(q)
    if (snap.empty) {
      alert('User not found. Make sure they have signed in to the app first.')
      setAddingAdmin(false)
      return
    }
    const userDoc = snap.docs[0]
    await updateDoc(doc(db, 'users', userDoc.id), { isAdmin: true, email: searchEmail.toLowerCase().trim() })
    setSearchEmail('')
    setAddingAdmin(false)
    loadAdmins()
  }

  const handleRemoveAdmin = async (uid: string) => {
    if (uid === user?.uid) {
      alert('Cannot remove yourself as admin')
      return
    }
    if (!confirm('Remove this admin?')) return
    await updateDoc(doc(db, 'users', uid), { isAdmin: false })
    loadAdmins()
  }

  if (!isAdmin) {
    return (
      <motion.div
        key="admin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="px-4 pb-4"
      >
        <div className="mb-5 pt-1">
          <h2 className="font-display text-[13px] tracking-[0.2em] text-text-primary">ADMIN PANEL</h2>
        </div>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <Shield size={32} className="text-text-muted mb-4" />
          <p className="font-body text-[14px] text-text-primary mb-2">Admin access denied</p>
          <p className="font-mono text-[10px] text-text-muted">You don't have admin privileges</p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      key="admin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="px-4 pb-4"
    >
      <div className="mb-5 pt-1">
        <h2 className="font-display text-[13px] tracking-[0.2em] text-text-primary">ADMIN PANEL</h2>
        <p className="font-mono text-[10px] text-text-muted mt-0.5">manage admins & moderation</p>
      </div>

      <div className="bg-surface-raised/60 backdrop-blur-sm rounded-2xl border border-border p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Shield size={14} className="text-oasis-400" />
          <h3 className="font-body text-[13px] font-semibold text-text-primary">Add Admin</h3>
        </div>
        <div className="flex gap-2">
          <input
            type="email"
            value={searchEmail}
            onChange={e => setSearchEmail(e.target.value)}
            placeholder="Enter email (e.g., user@example.com)"
            className="flex-1 bg-surface-overlay rounded-xl px-3 py-2 font-body text-[12px] text-text-primary placeholder:text-text-muted outline-none border border-border"
            onKeyDown={e => e.key === 'Enter' && handleAddAdmin()}
          />
          <button
            onClick={handleAddAdmin}
            disabled={!searchEmail.trim() || addingAdmin}
            className="bg-oasis-500 hover:bg-oasis-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl px-4 py-2 transition-colors"
          >
            {addingAdmin ? (
              <div className="w-3.5 h-3.5 border-2 border-surface border-t-transparent rounded-full animate-spin" />
            ) : (
              <Check size={14} className="text-surface" />
            )}
          </button>
        </div>
      </div>

      <div className="bg-surface-raised/60 backdrop-blur-sm rounded-2xl border border-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <Mail size={14} className="text-gulf-400" />
          <h3 className="font-body text-[13px] font-semibold text-text-primary">Current Admins ({users.length})</h3>
        </div>
        {loading ? (
          <div className="text-center py-6">
            <div className="w-4 h-4 border-2 border-oasis-400 border-t-transparent rounded-full animate-spin mx-auto" />
          </div>
        ) : users.length === 0 ? (
          <p className="font-mono text-[10px] text-text-muted py-4">No admins yet</p>
        ) : (
          <div className="space-y-2">
            {users.map(u => (
              <div key={u.uid} className="flex items-center justify-between gap-3 bg-surface-overlay/40 rounded-lg p-2.5 border border-border">
                <div className="flex-1 min-w-0">
                  <p className="font-body text-[12px] font-medium text-text-primary">{u.displayName}</p>
                  <p className="font-mono text-[9px] text-text-muted truncate">{u.email || u.uid}</p>
                </div>
                <button
                  onClick={() => handleRemoveAdmin(u.uid)}
                  disabled={u.uid === user?.uid}
                  className="text-red-400 hover:text-red-300 disabled:opacity-30 disabled:cursor-not-allowed p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
