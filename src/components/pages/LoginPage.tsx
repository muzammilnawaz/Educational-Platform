import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Lock } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userData: any) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Mock login - in production, this would call an API
    if (email && password) {
      const userData = {
        id: '1',
        name: email.split('@')[0],
        email,
        isPremium: false // Change to true to test premium features
      };
      onLogin(userData);
      navigate('/subjects');
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2F6FED] to-[#A9C7FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">π</span>
            </div>
            <h1 className="mb-2">Welcome Back</h1>
            <p className="text-[#94A3B8]">Sign in to continue your learning journey</p>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm mb-2 text-[#94A3B8]">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#2F6FED] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-[#94A3B8]">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#94A3B8]" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-[#2F6FED] transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-[#94A3B8]">
                  <input type="checkbox" className="mr-2 rounded" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-[#2F6FED] hover:text-[#A9C7FF] transition-colors">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#2F6FED] hover:bg-[#2F6FED]/80 rounded-xl transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-[#94A3B8]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#2F6FED] hover:text-[#A9C7FF] transition-colors">
                Sign up
              </Link>
            </div>
          </div>

          {/* Demo Info */}
          <div className="mt-6 p-4 bg-[#2F6FED]/10 border border-[#2F6FED]/30 rounded-xl text-sm text-[#94A3B8] text-center">
            <p>Demo: Enter any email and password to continue</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
