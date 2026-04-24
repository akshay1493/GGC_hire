import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { RECRUITMENT_SERVICES } from '../constants';
import { Layers, Users, GraduationCap, Search, CheckCircle, ArrowRight } from 'lucide-react';

const icons = [Layers, Users, GraduationCap, Search];

export default function Services() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="section-container">
        <SectionHeader 
          badge="Our Solutions"
          title="End-to-End Specialized Recruitment."
          subtitle="From campus drives to executive search, we provide a full spectrum of finance-focused hiring models."
        />

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {RECRUITMENT_SERVICES.map((service, i) => {
            const Icon = icons[i] || Layers;
            return (
              <Card key={i} className="p-10 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center mb-8">
                    <Icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-2xl font-display font-medium text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.benefits.map((benefit, bi) => (
                      <li key={bi} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/hire-talent">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    Inquire About This Service <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 text-white">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-display font-medium mb-8">Specialized Screening Solutions</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Already have a candidate pool but need expert technical vetting? Use our "Assisted Screening" service to ensure every hire meets your high standards.
              </p>
              <div className="space-y-6">
                {[
                  'Technical rounds conducted by senior CAs',
                  'Automated finance & taxation skill tests',
                  'Behavioral and culture-fit assessments',
                  'Comprehensive scoring reports for each candidate'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-400 font-bold text-xs uppercase">
                      ✓
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              {/* Abstract Visual for Screening */}
              <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-center overflow-hidden">
                <div className="space-y-4">
                   {[1, 2, 3].map(i => (
                     <motion.div 
                       key={i}
                       initial={{ x: -20, opacity: 0 }}
                       whileInView={{ x: 0, opacity: 1 }}
                       transition={{ delay: i * 0.2 }}
                       className="h-12 bg-white/10 rounded-xl border border-white/5 flex items-center px-4 gap-4"
                     >
                       <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.5)]" />
                       <div className="h-2 w-3/4 bg-white/20 rounded" />
                     </motion.div>
                   ))}
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-teal-500/10 blur-3xl rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
