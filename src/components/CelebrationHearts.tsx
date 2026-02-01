import { motion } from 'framer-motion';
import { useMemo } from 'react';

const CelebrationHearts = () => {
  const hearts = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 30 + 15,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{ left: heart.left, bottom: '-50px' }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: '-120vh', 
            opacity: [0, 1, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            ease: 'easeOut',
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default CelebrationHearts;
