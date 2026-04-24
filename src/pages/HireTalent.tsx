import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Send, Briefcase, Users, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import Card from '../components/Card';

export default function HireTalent() {
  return (
    <div className="bg-white min-h-screen">
      <section className="section-container !pt-32 lg:!pt-40">
        <Link to="/" className="inline-flex items-center text-sm text-slate-500 hover:text-teal-600 transition-colors mb-8">
           ← Back to Home
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <SectionHeader 
              align="left"
              badge="Post a Requirement"
              title="Secure Your Next Mid-to-Senior Finance Hire."
              subtitle="Fill out the form to share your specific hiring needs. Our specialist screening team will get in touch within 24 hours."
            />

            <div className="grid gap-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-slate-900 mb-1">Precision Matching</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">We sync with your firm's culture and the specific technical demands of the role.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-slate-900 mb-1">Verified Credentials</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">Every candidate is vetted for CA membership and domain-specific depth.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-lg font-display font-medium mb-4">GGC Hire Commitment</h4>
                <ul className="space-y-3">
                  {[
                    'No recruitment fee until you hire.',
                    '90-day free replacement guarantee.',
                    'Curated shortlist within 48-72 hours.'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-600/10 blur-3xl rounded-full" />
            </div>
          </div>

          <Card className="p-8 lg:p-10 border-slate-200 shadow-xl bg-white">
            <h3 className="text-2xl font-display font-medium text-slate-900 mb-8">Requirement Details</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="Enter your full name" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Company Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="e.g. Acme Finance" required />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="name@company.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Role Specialization</label>
                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all">
                  <option>Chartered Accountant (CA)</option>
                  <option>Financial Controller / CFO</option>
                  <option>Internal / Statutory Audit</option>
                  <option>Indirect Tax / GST</option>
                  <option>Investment Banking / M&A</option>
                  <option>Treasury & Risk Management</option>
                  <option>Other Specialized Finance</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Experience Range</label>
                  <select className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all">
                    <option>0-3 Years</option>
                    <option>3-7 Years</option>
                    <option>7-15 Years</option>
                    <option>15+ Years</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Salary Budget (Annual)</label>
                  <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="e.g. $100k - $150k" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Key Responsibilities / Skills</label>
                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none transition-all" placeholder="Describe the ideal candidate..."></textarea>
              </div>

              <Button type="submit" className="w-full flex items-center justify-center gap-2 py-4" size="lg">
                Submit Requirement <Send className="w-4 h-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
