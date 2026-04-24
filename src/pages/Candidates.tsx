import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { User, FileText, Search, Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

export default function Candidates() {
  const steps = [
    { title: 'Create Finance Profile', desc: 'Build a profile that highlights your specific certifications (CA, CFA, CPA) and domain expertise.', icon: User },
    { title: 'Smart Match', desc: 'Our specialized algorithms match you with roles that fit your skills and career trajectory.', icon: Search },
    { title: 'Direct Interviews', desc: 'We skip the generic filters and get your resume directly in front of the hiring managers.', icon: Briefcase },
    { title: 'Onboarding Support', desc: 'We assist you throughout the negotiation and onboarding process for a smooth transition.', icon: GraduationCap },
  ];

  return (
    <div className="pt-24 lg:pt-32">
      <section className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <SectionHeader 
            badge="For Candidates"
            title="Accelerate Your Finance Career with Specialized Matches."
            subtitle="Join India's most focused talent pool for CAs and Finance Professionals. Find your next challenge with firms that value your specialization."
          />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="flex items-center gap-2">
              Create My Profile <FileText className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">Upload Resume Only</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {steps.map((step, i) => (
             <div key={i} className="relative group text-center lg:text-left">
               <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-teal-600 transition-colors duration-300 mx-auto lg:mx-0">
                 <step.icon className="w-8 h-8 text-teal-600 group-hover:text-white transition-colors" />
               </div>
               <h3 className="text-xl font-display font-medium text-slate-900 mb-4">{step.title}</h3>
               <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
               {i < steps.length - 1 && (
                 <div className="hidden lg:block absolute top-8 left-[calc(100%-20px)] w-full h-px bg-slate-100 z-0" />
               )}
             </div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-3xl p-12 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-display font-medium text-slate-900 mb-8">Why Candidates Prefer GGC Hire</h2>
              <div className="space-y-6">
                {[
                  { t: 'High-Value Clients', d: 'Work with top-tier CA firms, NBFCs, and listed corporates.' },
                  { t: 'Direct Access', d: 'Your profile goes directly to finance heads, not generic HR pools.' },
                  { t: 'Domain Relevance', d: 'We understand the difference between Audit and Statutory compliance.' },
                  { t: 'Confidentiality', d: 'Your search is strictly private. We never share data without your consent.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-teal-500" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wide">{item.t}</h4>
                      <p className="text-slate-600 text-sm">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Card className="bg-white p-10 border-slate-200">
               <h3 className="text-2xl font-display font-medium text-slate-900 mb-6">Candidate FAQ</h3>
               <div className="space-y-6">
                 {[
                   { q: 'Is there any fee for candidates?', a: 'No, our recruitment services are completely free for all candidates.' },
                   { q: 'What kind of roles do you have?', a: 'We specialize in mid-to-senior finance roles, CAs, specialized tax, and audit positions.' },
                   { q: 'Can I apply for multiple roles?', a: 'Yes, once your profile is verified, you can be matched with any relevant role.' }
                 ].map((faq, i) => (
                   <div key={i}>
                     <p className="font-bold text-slate-900 text-sm mb-2">{faq.q}</p>
                     <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                   </div>
                 ))}
               </div>
               <Button variant="ghost" className="mt-8 p-0 text-teal-600 font-bold flex items-center gap-2">
                 View All FAQs <ArrowRight className="w-4 h-4" />
               </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
