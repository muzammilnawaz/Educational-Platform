import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { User, Mail, Crown, LogOut } from 'lucide-react';

interface ProfilePageProps {
  user: any;
  onLogout: () => void;
}

export default function ProfilePage({ user, onLogout }: ProfilePageProps) {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-12">My Profile</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-8">
                <h2 className="mb-6">Account Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-[#94A3B8] mb-2">Full Name</label>
                    <div className="flex items-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                      <User className="w-5 h-5 text-[#94A3B8] mr-3" />
                      <span>{user.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-[#94A3B8] mb-2">Email</label>
                    <div className="flex items-center px-4 py-3 bg-white/5 border border-white/10 rounded-xl">
                      <Mail className="w-5 h-5 text-[#94A3B8] mr-3" />
                      <span>{user.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Stats */}
              <div className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-8">
                <h2 className="mb-6">Learning Progress</h2>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-[#2F6FED]">12</div>
                    <div className="text-sm text-[#94A3B8]">Lessons Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-[#A9C7FF]">47</div>
                    <div className="text-sm text-[#94A3B8]">Questions Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl mb-2 text-[#F7C94C]">3</div>
                    <div className="text-sm text-[#94A3B8]">Sections Mastered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Status */}
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${user.isPremium ? 'from-[#F7C94C]/20 to-[#2F6FED]/20 border-[#F7C94C]/30' : 'from-[#0B1D34] to-[#0B1D34]/50 border-white/10'} border rounded-2xl p-6`}>
                <div className="flex items-center mb-4">
                  <Crown className={`w-6 h-6 mr-2 ${user.isPremium ? 'text-[#F7C94C]' : 'text-[#94A3B8]'}`} />
                  <h3>{user.isPremium ? 'Premium' : 'Free Plan'}</h3>
                </div>
                
                <p className="text-[#94A3B8] text-sm mb-6">
                  {user.isPremium 
                    ? 'You have access to all premium features including notes, unlimited questions, and AI tutor.'
                    : 'Upgrade to premium to unlock all features and accelerate your learning.'}
                </p>

                {!user.isPremium && (
                  <Link
                    to="/pricing"
                    className="block w-full py-3 bg-gradient-to-r from-[#F7C94C] to-[#2F6FED] hover:opacity-90 rounded-xl transition-all duration-300 text-center"
                  >
                    Upgrade to Premium
                  </Link>
                )}
              </div>

              {/* Actions */}
              <div className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-6">
                <h3 className="mb-4">Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-left text-sm">
                    Change Password
                  </button>
                  <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors text-left text-sm">
                    Email Preferences
                  </button>
                  <button
                    onClick={onLogout}
                    className="w-full px-4 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl transition-colors text-left text-sm text-red-400 flex items-center"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
