'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';
import { BG_MAIN_STYLE } from '@/config/bg-main-style';

export const AchieveButton = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
    setTimeout(() => {
      setShowOverlay(false);
    }, 3000); // 3秒後にオーバーレイを非表示
  };

  return (
    <>
      <Button
        onClick={handleClick}
        className={`${BG_MAIN_STYLE} w-full text-white font-bold`}
      >
        達成！
      </Button>

      {showOverlay && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-tr from-blue-400 via-indigo-500 to-purple-600 bg-opacity-80 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-white text-3xl font-bold opacity-90"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20,
              duration: 1.5,
            }}
          >
            Congratulation!
          </motion.h1>
        </motion.div>
      )}
    </>
  );
};
