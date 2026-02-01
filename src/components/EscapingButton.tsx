import { useState, useCallback, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface EscapingButtonProps {
  onEscape?: () => void;
}

const EscapingButton = ({ onEscape }: EscapingButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const messages = [
    "Nice try! 😏",
    "Not happening! 💕",
    "Nope! 🙈",
    "Keep trying! 😘",
    "You can't! 💝"
  ];

  const escape = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 100;
    const buttonHeight = 40;
    const padding = 20;

    // Calculate safe bounds
    const maxX = container.width - buttonWidth - padding;
    const maxY = container.height - buttonHeight - padding;

    // Generate random position
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;

    setPosition({ x: newX, y: newY });
    setEscapeCount((prev) => prev + 1);
    
    if (escapeCount >= 2) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1500);
    }

    onEscape?.();
  }, [escapeCount, onEscape]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!buttonRef.current) return;

      const button = buttonRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Calculate distance from mouse to button center
      const buttonCenterX = button.left + button.width / 2;
      const buttonCenterY = button.top + button.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(mouseX - buttonCenterX, 2) + Math.pow(mouseY - buttonCenterY, 2)
      );

      // Escape if mouse gets within 120px
      if (distance < 120) {
        escape();
      }
    },
    [escape]
  );

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-32 flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      <motion.button
        ref={buttonRef}
        className="btn-no absolute"
        animate={{
          x: position.x,
          y: position.y,
          scale: Math.max(0.6, 1 - escapeCount * 0.1),
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 25,
        }}
        onClick={(e) => {
          e.preventDefault();
          escape();
        }}
      >
        No
      </motion.button>
      
      {showMessage && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-0 text-sm text-muted-foreground font-medium"
        >
          {messages[Math.min(escapeCount - 3, messages.length - 1)]}
        </motion.span>
      )}
    </div>
  );
};

export default EscapingButton;
