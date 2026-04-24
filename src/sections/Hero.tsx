import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden bg-slate-50/50">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal-50/50 to-transparent pointer-events-none" />
      <div className="absolute top-20 -right-20 w-96 h-96 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6 border border-teal-200">
              <Star className="w-3 h-3 fill-current" />
              <span>India's #1 CA & Finance Hiring Platform</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-medium text-slate-900 leading-[1.1] mb-8">
              Specialized Hiring for <span className="text-teal-600 italic">Finance Leaders.</span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
              We connect CAs, finance professionals, and specialized accounting talent with top-tier firms and growth-stage companies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/hire-talent">
                <Button size="lg" className="flex items-center gap-2">
                  Hire Finance Talent <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/candidates">
                <Button variant="outline" size="lg">
                  Create Candidate Profile
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="font-medium">Vetted CAs Only</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="font-medium">15-Day Turnaround</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="font-medium">Industry Best Fees</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-teal-500" />
                <span className="font-medium">Expert Screening</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-8"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 p-2 lg:p-4">
              {/* Mockup Top Bar */}
              <div className="flex items-center gap-2 mb-4 px-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="ml-4 h-6 w-32 bg-slate-100 rounded-lg animate-pulse" />
              </div>
              
              {/* Dashboard Content Mockup */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3 space-y-4">
                  <div className="h-32 bg-slate-50 rounded-xl border border-slate-100 p-3">
                    <div className="h-3 w-12 bg-teal-200 rounded mb-4" />
                    <div className="h-8 w-full bg-slate-200 rounded lg:mb-2" />
                    <div className="h-4 w-3/4 bg-slate-100 rounded" />
                  </div>
                  <div className="h-32 bg-teal-600 rounded-xl p-3 flex flex-col justify-between">
                    <div className="h-3 w-12 bg-white/30 rounded" />
                    <div className="h-10 w-full bg-white/20 rounded" />
                  </div>
                </div>
                <div className="col-span-9 space-y-4">
                  <div className="h-68 bg-slate-50 rounded-xl border border-slate-100 p-4">
                    <div className="flex justify-between items-center mb-6">
                      <div className="h-4 w-32 bg-slate-200 rounded" />
                      <div className="h-4 w-16 bg-teal-100 rounded" />
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-100" />
                            <div>
                              <div className="h-3 w-24 bg-slate-200 rounded mb-1.5" />
                              <div className="h-2 w-32 bg-slate-100 rounded" />
                            </div>
                          </div>
                          <div className="h-6 w-20 bg-emerald-50 rounded-full border border-emerald-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-500/5 blur-2xl rounded-full -z-10" />
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-1/4 bg-white p-4 rounded-xl shadow-xl border border-teal-50 max-w-[200px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">New Match</span>
              </div>
              <p className="text-sm font-medium text-slate-800">Chartered Accountant (5-7Y Exp) for Big 4 Role</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
