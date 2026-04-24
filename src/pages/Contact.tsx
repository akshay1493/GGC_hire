import { motion } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader 
              align="left"
              badge="Let's Talk"
              title="Speak with a Finance Hiring Expert."
              subtitle="Whether you're looking to hire specialized talent or looking for your next career move, we're here to help."
            />

            <div className="space-y-8 mb-12">
               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                     <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-900">Email Us</h4>
                    <p className="text-slate-600 text-sm">General: info@hireggc.com</p>
                    <p className="text-slate-600 text-sm">Partnerships: partners@hireggc.com</p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                     <Phone className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-900">Call Us</h4>
                    <p className="text-slate-600 text-sm">+91 91361 58245</p>
                    <p className="text-slate-500 text-xs italic mt-1">Mon - Sat: 10:00 AM - 7:00 PM</p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0">
                     <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-slate-900">Office Location</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                       1002, 10th Floor, DLH Park, S.V. Road, <br />
                       Goregaon West, Mumbai - 400062, India
                    </p>
                  </div>
               </div>
            </div>

            <Card className="bg-slate-900 text-white p-8">
               <h4 className="text-xl font-display font-medium mb-4 flex items-center gap-3">
                  <MessageSquare className="w-6 h-6 text-teal-400" />
                  WhatsApp Inquiries
               </h4>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Fastest way to get a response for quick hiring needs or profile updates.
               </p>
               <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Message on WhatsApp</Button>
            </Card>
          </div>

          <Card className="p-10 lg:p-12 border-slate-200">
             <h3 className="text-2xl font-display font-medium text-slate-900 mb-8">Send an Inquiry</h3>
             <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                      <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Inquiry Type</label>
                   <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all">
                      <option>I'm looking to hire talent</option>
                      <option>I'm a candidate looking for a job</option>
                      <option>Partnerships / Media</option>
                      <option>Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Message</label>
                   <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Tell us more about your requirements or background..."></textarea>
                </div>

                <Button type="submit" className="w-full flex items-center justify-center gap-2">
                   Send Message <Send className="w-4 h-4" />
                </Button>
             </form>
          </Card>
        </div>
      </section>

      {/* Map Mockup */}
      <section className="h-96 w-full grayscale opacity-50 contrast-125 border-y border-slate-200 mt-20">
         <img 
            src="https://picsum.photos/seed/map/1920/600?blur=2" 
            alt="Office Location Map" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
         />
      </section>
    </div>
  );
}
