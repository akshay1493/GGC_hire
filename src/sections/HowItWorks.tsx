import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Briefcase, ChevronRight, UserPlus, FileSearch, Handshake, CheckCircle } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'employers' | 'candidates'>('employers');

  const employerSteps = [
    { icon: UserPlus, title: 'Define Role', desc: 'Share your specific requirements for CAs, Accountants, or Finance leads.' },
    { icon: FileSearch, title: 'Specialized Shortlist', desc: 'Receive a curated list of pre-screened finance talent within 48 hours.' },
    { icon: Handshake, title: 'Expert Assessment', desc: 'We assist in technical rounds or run automated finance skill tests for you.' },
    { icon: CheckCircle, title: 'Hired & Verified', desc: 'Onboard your new team member with our background verification support.' },
  ];

  const candidateSteps = [
    { icon: User, title: 'Create Profile', desc: 'Highlight your finance credentials, PQE, and specific domain expertise.' },
    { icon: FileSearch, title: 'Skill Matching', desc: 'Our platform matches your profile with roles from top CA firms and NBFCs.' },
    { icon: Briefcase, title: 'Direct Interviews', desc: 'Skip the generic HR rounds and interview directly with finance leaders.' },
    { icon: CheckCircle, title: 'Career Growth', desc: 'Get placed in high-growth companies that value specialized finance skills.' },
  ];

  const steps = activeTab === 'employers' ? employerSteps : candidateSteps;

  return (
    <section className="section-container bg-slate-50/50">
      <SectionHeader 
        badge="Zero Friction"
        title="Simplified Hiring, Specialized Outcomes"
        subtitle="Whether you are hiring a CFO or starting your first CA role, our process is built for efficiency."
      />

      <div className="flex justify-center mb-16">
        <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm flex inline-flex">
          <button 
            onClick={() => setActiveTab('employers')}
            className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'employers' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-4 h-4" /> For Employers
          </button>
          <button 
            onClick={() => setActiveTab('candidates')}
            className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'candidates' ? 'bg-teal-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4" /> For Candidates
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <AnimatePresence mode="wait">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={`${activeTab}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-2 border-white">
                      0{i + 1}
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-medium text-slate-800 mb-3">{step.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-20 flex justify-center">
        <Button size="lg" className="flex items-center gap-2">
          {activeTab === 'employers' ? 'Post a Finance Job' : 'Register as a Candidate'}
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
