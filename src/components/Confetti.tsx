import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  trigger: boolean;
}

const Confetti = ({ trigger }: ConfettiProps) => {
  useEffect(() => {
    if (!trigger) return;

    const duration = 4000;
    const end = Date.now() + duration;

    // Valentine's color palette
    const colors = ['#BE123C', '#FFE4E6', '#D4AF37', '#FFF5F5', '#B76E79'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });

    // Heart-shaped confetti
    const heartShape = confetti.shapeFromPath({
      path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        shapes: [heartShape],
        colors: ['#BE123C', '#B76E79'],
        scalar: 2,
      });
    }, 500);

    frame();
  }, [trigger]);

  return null;
};

export default Confetti;
