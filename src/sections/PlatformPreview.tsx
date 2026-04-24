import { motion } from 'motion/react';
import { Layout, Filter, Search, Shield } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function PlatformPreview() {
  const features = [
    { 
      icon: Filter, 
      title: 'Finance-Specific Filters', 
      desc: 'Filter by PQE, specialized domains like GST, Transfer Pricing, or Internal Audit.' 
    },
    { 
      icon: Search, 
      title: 'Smart Matching', 
      desc: 'Our engine identifies the best-fit candidates based on technical expertise and firm culture.' 
    },
    { 
      icon: Shield, 
      title: 'Verified Profiles', 
      desc: 'Every profile is vetted for credential authenticity and finance competence.' 
    },
  ];

  return (
    <section className="section-container bg-white overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Platform Mockup UI */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900 rounded-3xl shadow-2xl p-6 lg:p-10 border border-slate-800"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-teal-500 flex items-center justify-center">
                    <Layout className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm tracking-tight">Employer Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                  <div className="w-2 h-2 rounded-full bg-slate-700" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="flex justify-between items-center mb-4">
                    <div className="h-4 w-40 bg-teal-500/20 rounded" />
                    <div className="h-4 w-20 bg-emerald-500/20 rounded" />
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-12 bg-white/5 rounded-lg" />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 h-32" />
                  <div className="bg-teal-600/10 rounded-2xl p-4 border border-teal-500/20 h-32 flex flex-col justify-between">
                     <div className="h-3 w-16 bg-teal-500/30 rounded" />
                     <div className="h-8 w-full bg-teal-500/20 rounded" />
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                  <div className="space-y-3">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-800" />
                        <div className="h-2 w-full bg-slate-800 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Float Decor */}
            <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute -top-6 -right-6 lg:-right-12 bg-emerald-500 p-6 rounded-2xl shadow-xl z-20 text-white max-w-[150px]"
            >
              <div className="text-3xl font-display font-bold mb-1">98%</div>
              <div className="text-[10px] uppercase font-bold tracking-widest opacity-80 leading-tight">Screening Accuracy Rate</div>
            </motion.div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeader 
            align="left"
            badge="The Product"
            title="A Powerful Portal Built for Professional Speed."
            subtitle="Our backend is optimized for the technical requirements of finance hiring. No more irrelevant CVs."
          />

          <div className="space-y-8 mb-10">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Button variant="outline" className="flex items-center gap-2">
            Schedule a Product Demo <Layout className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
