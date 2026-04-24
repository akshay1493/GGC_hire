import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-teal-600 rounded-[2.5rem] p-12 lg:p-24 text-center overflow-hidden shadow-2xl shadow-teal-200"
        >
          {/* Abstract background shapes */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-400/20 blur-3xl rounded-full" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-display font-medium text-white leading-tight mb-8">
              Ready to Hire Your Next <span className="italic text-emerald-200">Finance Superstar?</span>
            </h2>
            <p className="text-xl text-teal-50 mb-12 max-w-2xl mx-auto opacity-90">
              Join 150+ firms who have streamlined their specialized recruitment with GGC Hire. Let's build your high-performance finance team today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/hire-talent">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-emerald-50 w-full sm:w-auto px-10 flex items-center gap-2">
                  Book Hiring Consultation <Calendar className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/candidates">
                <Button variant="ghost" className="text-white hover:bg-white/10 w-full sm:w-auto px-10 flex items-center gap-2">
                  Candidate? Join the Pool <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
