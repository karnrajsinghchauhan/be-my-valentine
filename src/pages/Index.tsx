import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import FloatingHearts from '@/components/FloatingHearts';
import ValentineQuestion from '@/components/ValentineQuestion';
import Celebration from '@/components/Celebration';

const Index = () => {
  const [saidYes, setSaidYes] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-gradient-romantic overflow-hidden">
      {/* Floating hearts background */}
      <FloatingHearts />

      {/* Main content */}
      <AnimatePresence mode="wait">
        {!saidYes ? (
          <ValentineQuestion key="question" onYes={() => setSaidYes(true)} />
        ) : (
          <Celebration key="celebration" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
