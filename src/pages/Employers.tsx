import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { CheckCircle2, Building2, Users2, ShieldCheck, Zap } from 'lucide-react';

export default function Employers() {
  const valueProps = [
    { title: 'Specialized Sourcing', desc: 'Active database of 10k+ pre-screened CAs and finance professionals.', icon: Users2 },
    { title: 'Technical Vetting', desc: 'Our team includes finance experts who speak your language and test technical skill.', icon: ShieldCheck },
    { title: 'Platform Efficiency', desc: 'Custom employer portal to manage candidates, interviews, and feedback in real-time.', icon: Zap },
    { title: 'Replacement Assurance', desc: '90-day free replacement guarantee on all placements for total peace of mind.', icon: CheckCircle2 },
  ];

  return (
    <div className="pt-24 lg:pt-32">
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionHeader 
              align="left"
              badge="For Employers"
              title="Built for Firms That Value Specialized Talent."
              subtitle="Stop sifting through generic CVs. GGC Hire delivers pre-screened finance professionals ready to hit the ground running."
            />
            <div className="space-y-6 mb-10">
              <p className="text-slate-600 leading-relaxed">
                Whether you're a Top-tier CA firm looking for internal auditors or a growth-stage startup hiring your first Finance Head, we have the niche bandwidth you need.
              </p>
              <ul className="space-y-4">
                {[
                  'CAs with specific industry experience (NBFC, Fintech, Mfg)',
                  'Specialists in GST, Income Tax, and Transfer Pricing',
                  'F&A teams for global capability centers',
                  'Interim CFOs and specialized finance consultants'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/hire-talent">
              <Button size="lg" className="flex items-center gap-2">
                Get Started with Hiring <Building2 className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-teal-50 overflow-hidden shadow-xl border border-teal-100 flex items-center justify-center p-12">
               <Building2 className="w-48 h-48 text-teal-600/20" />
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 className="absolute inset-12 bg-white rounded-2xl shadow-lg p-8 border border-teal-50 flex flex-col justify-center"
               >
                 <div className="h-4 w-32 bg-slate-100 rounded mb-6" />
                 <div className="space-y-4">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="flex gap-3">
                       <div className="w-10 h-10 rounded-full bg-teal-50" />
                       <div className="flex-1 space-y-2">
                         <div className="h-3 w-1/2 bg-slate-100 rounded" />
                         <div className="h-2 w-full bg-slate-50 rounded" />
                       </div>
                     </div>
                   ))}
                 </div>
               </motion.div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map((prop, i) => (
            <Card key={i} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mx-auto mb-6">
                <prop.icon className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-display font-medium text-slate-900 mb-4">{prop.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{prop.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Fee Model Section */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeader 
              align="left"
              light
              badge="Pricing & Logic"
              title="A Fee Model That Aligns with Your Success."
              subtitle="Transparent, performance-driven selection with a focus on long-term placement quality."
            />
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-4">
                 <h4 className="text-teal-400 font-display font-medium text-lg uppercase tracking-wider">Success-Based Fee</h4>
                 <p className="text-slate-400 leading-relaxed">Pay only when you hire. No upfront engagement fees for standard recruitment requests.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-teal-400 font-display font-medium text-lg uppercase tracking-wider">Replacement Guarantee</h4>
                 <p className="text-slate-400 leading-relaxed">90-day free replacement policy if the candidate leaves for any reason.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-teal-400 font-display font-medium text-lg uppercase tracking-wider">Volume Discounts</h4>
                 <p className="text-slate-400 leading-relaxed">Preferential rates for bulk hiring or multi-year campus partnerships.</p>
              </div>
              <div className="space-y-4">
                 <h4 className="text-teal-400 font-display font-medium text-lg uppercase tracking-wider">Market Intelligence</h4>
                 <p className="text-slate-400 leading-relaxed">Complimentary salary benchmarking and talent landscape reports for our partners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
