import { Target, UserCheck, Zap, ShieldCheck } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { WHY_GGC } from '../constants';

const icons = {
  target: Target,
  'user-check': UserCheck,
  zap: Zap,
  'shield-check': ShieldCheck,
};

export default function WhyGGC() {
  return (
    <section className="section-container bg-white">
      <SectionHeader 
        badge="Niche Expertise"
        title="Why Choose GGC Hire?"
        subtitle="We build high-performance finance teams through specialization, speed, and trust."
      />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {WHY_GGC.map((item, i) => {
          const Icon = icons[item.icon as keyof typeof icons] || Target;
          return (
            <Card key={i} className="flex flex-col h-full bg-slate-50/50 hover:bg-white border-transparent hover:border-teal-100">
              <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-display font-medium text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm flex-grow">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
