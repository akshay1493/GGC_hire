import { TESTIMONIALS } from '../constants';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-container bg-white">
      <SectionHeader 
        badge="Proof"
        title="Trusted by Firms and Professionals"
        subtitle="Real stories from our hiring partners and the candidates whose careers we helped transform."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((t, i) => (
          <Card key={i} className="relative flex flex-col justify-between">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white shadow-lg z-10">
              <Quote className="w-5 h-5 fill-current" />
            </div>
            
            <div className="mb-8">
               <div className="flex gap-1 mb-4">
                 {[1, 2, 3, 4, 5].map((s) => (
                   <span key={s} className="text-yellow-400 text-lg">★</span>
                 ))}
               </div>
               <p className="text-slate-600 italic leading-relaxed">"{t.quote}"</p>
            </div>

            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-display font-bold text-slate-400 uppercase">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h5 className="font-display font-medium text-slate-900 text-sm">{t.name}</h5>
                <p className="text-xs text-slate-500 uppercase tracking-wider">{t.role}, {t.company}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
