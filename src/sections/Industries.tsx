import { motion } from 'motion/react';
import { Building, Wallet, Rocket, Factory, Briefcase, Landmark } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { INDUSTRIES } from '../constants';

const icons = {
  building: Building,
  wallet: Wallet,
  rocket: Rocket,
  factory: Factory,
  briefcase: Briefcase,
  landmark: Landmark,
};

export default function Industries() {
  return (
    <section className="section-container bg-slate-900 py-24">
      <SectionHeader 
        light
        title="Industries We Serve"
        subtitle="Our finance-first recruitment model adapts to the specific compliance and growth needs of diverse sectors."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
        {INDUSTRIES.map((industry, i) => {
          const Icon = icons[industry.icon as keyof typeof icons] || Building;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 group">
                <Icon className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-white font-medium text-center text-sm lg:text-base">{industry.name}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16 text-center">
        <p className="text-slate-400 text-sm lg:text-base italic">
          "Trusted by 150+ firms across India for specialized finance bandwidth."
        </p>
      </div>
    </section>
  );
}
