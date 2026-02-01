import { motion } from 'framer-motion';
import PolaroidPhoto from './PolaroidPhoto';
import EscapingButton from './EscapingButton';
import couplePhoto from '@/assets/couple-photo-1.jpg';

interface ValentineQuestionProps {
  onYes: () => void;
}

const ValentineQuestion = ({ onYes }: ValentineQuestionProps) => {
  return (
    <motion.div
      className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <PolaroidPhoto
          src={couplePhoto}
          alt="Us together"
          rotation={-3}
          className="w-56 sm:w-64 md:w-72"
        />
      </motion.div>

      {/* Question */}
      <motion.h1
        className="font-romantic text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary text-center mb-8 animate-pulse-soft"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          textShadow: '0 2px 20px hsla(347, 77%, 40%, 0.3)',
        }}
      >
        Will You Be My Valentine?
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex flex-col items-center gap-4 w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {/* Yes Button */}
        <motion.button
          className="btn-yes"
          onClick={onYes}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
        >
          Yes! 💕
        </motion.button>

        {/* No Button (Escaping) */}
        <EscapingButton />
      </motion.div>

      {/* Decorative hearts */}
      <motion.div
        className="absolute top-10 left-10 text-primary/20"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-accent/30"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ValentineQuestion;
