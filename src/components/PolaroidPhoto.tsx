import { motion } from 'framer-motion';

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  className?: string;
}

const PolaroidPhoto = ({ 
  src, 
  alt, 
  caption, 
  rotation = -2,
  className = '' 
}: PolaroidPhotoProps) => {
  return (
    <motion.div
      className={`polaroid ${className}`}
      style={{ rotate: rotation }}
      whileHover={{ 
        rotate: 0, 
        scale: 1.02,
        boxShadow: '0 0 30px -5px hsla(43, 74%, 52%, 0.4), 0 10px 40px -10px hsla(0, 0%, 0%, 0.25)'
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>
      {caption && (
        <p className="absolute bottom-4 left-0 right-0 text-center font-romantic text-xl text-foreground/80">
          {caption}
        </p>
      )}
    </motion.div>
  );
};

export default PolaroidPhoto;
