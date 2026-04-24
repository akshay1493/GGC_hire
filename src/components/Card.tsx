import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true, ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: '0 10px 30px -10px rgba(0,0,0,0.1)' } : {}}
      className={`bg-white rounded-2xl border border-slate-100 p-6 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
