import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Target, Users, Zap, ShieldCheck, Linkedin, GraduationCap, Award } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Niche Expertise', desc: 'We only do finance. Period.', icon: Target },
    { title: 'Data-Driven Matching', desc: 'Removing bias with specialized algorithms.', icon: Zap },
    { title: 'Integrity First', desc: 'Verified profiles, transparent communication.', icon: ShieldCheck },
    { title: 'Ecosystem Growth', desc: 'Supporting the finance community through talent.', icon: Users },
  ];

  return (
    <div className="pt-24 lg:pt-32">
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <SectionHeader 
              align="left"
              badge="About GGC Hire"
              title="Finance Expertise Meets Modern Recruitment."
              subtitle="We bridge the gap between high-stakes finance requirements and specialized talent through a CA-led recruitment model."
            />
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                GGC Hire was founded with a singular vision: to create a dedicated ecosystem for finance hiring in India. We realized that generic recruitment platforms struggled to understand the difference between complex tax profiles and general accounting roles.
              </p>
              <p>
                By combining deep domain expertise in Chartered Accountancy with modern technology, we built a platform that speaks the language of both employers and candidates.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12">
               <div className="flex flex-col gap-2">
                 <span className="text-4xl font-display font-medium text-teal-600">10k+</span>
                 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Candidate Net</span>
               </div>
               <div className="flex flex-col gap-2">
                 <span className="text-4xl font-display font-medium text-teal-600">150+</span>
                 <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Firms Served</span>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1454165833762-0102b0c7971b?auto=format&fit=crop&q=80&w=2070" 
                  alt="Finance Expertise" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-teal-600/10 mix-blend-overlay" />
             </div>
             <motion.div 
               animate={{ rotate: [0, 5, 0] }}
               transition={{ duration: 10, repeat: Infinity }}
               className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl z-20 border border-slate-100 hidden lg:block"
             >
                <div className="flex items-center gap-4 mb-4">
                   <Award className="w-8 h-8 text-yellow-500" />
                   <h4 className="font-display font-bold text-slate-900">CA-Led <br />Recruitment</h4>
                </div>
                <p className="text-xs text-slate-500 max-w-[150px]">Founded and led by professionals with Big 4 and industry-leading finance backgrounds.</p>
             </motion.div>
          </div>
        </div>

        <SectionHeader 
          title="Our Core Values"
          subtitle="The principles that drive every placement and partnership."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {values.map((value, i) => (
            <Card key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6">
                 <value.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-display font-medium text-slate-900 mb-4">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
            </Card>
          ))}
        </div>

        {/* Founder / Leadership (Optional mockup) */}
        <div className="bg-slate-50 rounded-[3rem] p-12 lg:p-20 border border-slate-100">
           <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                 <h2 className="text-3xl font-display font-medium text-slate-900 mb-8">Leadership & Credibility</h2>
                 <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl">
                    Our leadership brings decades of experience from audit firms, listed entities, and high-growth startups. We don't just "match keywords"—we understand the strategic importance of each finance hire.
                 </p>
                 <div className="grid md:grid-cols-2 gap-8">
                    {[
                      { n: 'CA-Led Strategy', d: 'Expert vetting at every stage.', i: GraduationCap },
                      { n: 'Industry Insights', d: 'Real-time salary & trend data.', i: Zap }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                         <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                            <item.i className="w-5 h-5 text-teal-600" />
                         </div>
                         <div>
                            <h4 className="font-bold text-slate-900 text-sm">{item.n}</h4>
                            <p className="text-slate-500 text-xs">{item.d}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="bg-white rounded-3xl p-8 border border-slate-200">
                 <div className="w-20 h-20 rounded-full bg-slate-100 mb-6 flex items-center justify-center font-display font-bold text-2xl text-slate-400">LD</div>
                 <h4 className="text-xl font-display font-medium text-slate-900 mb-1">Founder Vision</h4>
                 <p className="text-slate-500 text-sm mb-6">CA, Ex-Big 4 Consultant</p>
                 <div className="flex gap-3 pt-6 border-t border-slate-100">
                    <a href="#" className="p-2 bg-slate-50 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
