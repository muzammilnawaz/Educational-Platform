import { motion } from 'motion/react';
import { Check, Crown } from 'lucide-react';

export default function PricingPage() {
  const features = [
    'Access to all lesson notes',
    'Unlimited practice questions',
    'Detailed step-by-step solutions',
    'AI Tutor for instant help',
    'Progress tracking',
    'Downloadable resources',
    'Priority support',
    'Early access to new content'
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="mb-6">Unlock Your Full Potential</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Get unlimited access to all premium features and accelerate your mathematics journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-8"
          >
            <h3 className="mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-4xl">$0</span>
              <span className="text-[#94A3B8]">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-[#2F6FED] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-[#94A3B8]">6 free questions per lesson</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-[#2F6FED] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-[#94A3B8]">Basic progress tracking</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-[#2F6FED] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-[#94A3B8]">Community support</span>
              </li>
            </ul>
            <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-[#94A3B8] cursor-not-allowed">
              Current Plan
            </button>
          </motion.div>

          {/* Premium Plan - Featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-[#2F6FED]/20 to-[#F7C94C]/20 border-2 border-[#F7C94C] rounded-2xl p-8 lg:scale-105"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#F7C94C] to-[#2F6FED] rounded-full text-sm flex items-center">
              <Crown className="w-4 h-4 mr-1" />
              Most Popular
            </div>
            
            <h3 className="mb-2">Premium</h3>
            <div className="mb-6">
              <span className="text-4xl">$29</span>
              <span className="text-[#94A3B8]">/month</span>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-[#F7C94C] mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-3">
              <button className="w-full py-3 bg-gradient-to-r from-[#F7C94C] to-[#2F6FED] hover:opacity-90 rounded-xl transition-all duration-300">
                Subscribe with LemonSqueezy
              </button>
              <button className="w-full py-3 bg-[#2F6FED] hover:bg-[#2F6FED]/80 rounded-xl transition-colors">
                Subscribe with Paymob
              </button>
            </div>
          </motion.div>

          {/* Annual Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-8"
          >
            <div className="mb-2 flex items-center justify-between">
              <h3>Annual</h3>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500 rounded-full text-xs text-green-400">
                Save 30%
              </span>
            </div>
            <div className="mb-6">
              <span className="text-4xl">$245</span>
              <span className="text-[#94A3B8]">/year</span>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-[#A9C7FF] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-[#94A3B8]">{feature}</span>
                </li>
              ))}
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-[#F7C94C] mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-[#F7C94C]">2 months free!</span>
              </li>
            </ul>
            <div className="space-y-3">
              <button className="w-full py-3 bg-[#2F6FED]/30 hover:bg-[#2F6FED]/40 border border-[#2F6FED] rounded-xl transition-colors">
                Subscribe with LemonSqueezy
              </button>
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-colors">
                Subscribe with Paymob
              </button>
            </div>
          </motion.div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-8 text-center"
        >
          <h2 className="mb-6">Trusted by Thousands of Students</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-2 text-[#2F6FED]">98%</div>
              <div className="text-[#94A3B8]">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-[#A9C7FF]">50k+</div>
              <div className="text-[#94A3B8]">Questions Solved</div>
            </div>
            <div>
              <div className="text-4xl mb-2 text-[#F7C94C]">A*</div>
              <div className="text-[#94A3B8]">Average Grade</div>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! You can cancel your subscription at any time with no cancellation fees.'
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 14-day money-back guarantee if you\'re not satisfied with the premium features.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards through LemonSqueezy and local payment methods through Paymob.'
              },
              {
                q: 'Is there a student discount?',
                a: 'Yes! Contact our support team with your student ID for a special discount code.'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0B1D34] to-[#0B1D34]/50 border border-white/10 rounded-2xl p-6"
              >
                <h3 className="mb-3 text-[#A9C7FF]">{faq.q}</h3>
                <p className="text-[#94A3B8] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
