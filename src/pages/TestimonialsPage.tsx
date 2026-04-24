import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';
import Button from '../components/Button';

export default function TestimonialsPage() {
  const employers = TESTIMONIALS.filter(t => t.type === 'employer');
  const candidates = TESTIMONIALS.filter(t => t.type === 'candidate');

  return (
    <div className="pt-24 lg:pt-32">
      <section className="section-container">
        <SectionHeader 
          badge="Success Stories"
          title="Verified Outcomes, Measured in Value."
          subtitle="Explore how GGC Hire has transformed regional and national finance teams across India."
        />

        <div className="mb-20">
          <h3 className="text-2xl font-display font-medium text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-teal-600 rounded-full" />
            Employer Experiences
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {employers.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
            {/* Added mock for density */}
            <TestimonialCard 
              testimonial={{
                name: 'Vikas Mehta',
                role: 'CFO',
                company: 'Apex NBFC',
                quote: 'Finding credit managers with the right regulatory knowledge used to take us months. GGC Hire closed our requirements in three weeks.',
                type: 'employer'
              }}
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-display font-medium text-slate-900 mb-10 flex items-center gap-3">
            <span className="w-8 h-1 bg-emerald-500 rounded-full" />
            Candidate Career Paths
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {candidates.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
            <TestimonialCard 
              testimonial={{
                name: 'Sneha Rao',
                role: 'Internal Audit Lead',
                company: 'Global Retail Corp',
                quote: 'Specialized consultants at GGC really understand the niche requirements of audit. They helped me land a lead role at a top retail giant.',
                type: 'candidate'
              }}
            />
          </div>
        </div>

        <div className="mt-32 text-center bg-teal-50 rounded-[2.5rem] p-12 lg:p-24 border border-teal-100">
           <h2 className="text-3xl lg:text-5xl font-display font-medium text-slate-900 mb-8">Ready to be our next success story?</h2>
           <Button size="lg">Get Started Today</Button>
        </div>
      </section>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: any, key?: React.Key }) {
  return (
    <Card className="flex flex-col justify-between h-full bg-slate-50/30 hover:border-teal-200">
      <div className="mb-8">
        <div className="flex gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
        </div>
        <Quote className="w-8 h-8 text-teal-100 mb-4 fill-current" />
        <p className="text-slate-600 italic leading-relaxed text-sm">"{testimonial.quote}"</p>
      </div>
      <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center font-bold text-teal-600 text-xs">
          {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
        </div>
        <div>
          <h5 className="font-display font-medium text-slate-900 text-sm">{testimonial.name}</h5>
          <p className="text-[10px] text-slate-500 uppercase tracking-widest">{testimonial.role} @ {testimonial.company}</p>
        </div>
      </div>
    </Card>
  );
}
