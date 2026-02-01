import { motion } from 'framer-motion';
import PolaroidPhoto from './PolaroidPhoto';
import Confetti from './Confetti';
import CelebrationHearts from './CelebrationHearts';
import couplePhoto from '@/assets/couple-photo-2.png';

const Celebration = () => {
  return (
    <>
      <Confetti trigger={true} />
      <CelebrationHearts />
      
      <motion.div
        className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 py-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Celebration Title */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="font-romantic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary animate-heartbeat">
            You've Made Me
          </h1>
          <h1 className="font-romantic text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-shimmer mt-2">
            The Happiest! 💕
          </h1>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.6,
            type: 'spring',
            stiffness: 100
          }}
          className="mb-8"
        >
          <PolaroidPhoto
            src={couplePhoto}
            alt="Us together"
            caption="Forever & Always ✨"
            rotation={2}
            className="w-64 sm:w-72 md:w-80"
          />
        </motion.div>

        {/* Love Message */}
        <motion.div
          className="max-w-lg text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="text-lg sm:text-xl text-foreground/80 font-body leading-relaxed">
            Thank you for being the most amazing person in my life. 
            I can't wait to spend this Valentine's Day with you. 
            <span className="block mt-3 text-primary font-medium">
              You mean everything to me. 🥰
            </span>
          </p>
        </motion.div>

        {/* Beating Heart */}
        <motion.div
          className="mt-8 text-primary"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <svg width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>

        {/* Footer */}
        <motion.p
          className="absolute bottom-6 text-muted-foreground/60 text-sm font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Made with love, just for you 💝
        </motion.p>
      </motion.div>
    </>
  );
};

export default Celebration;
