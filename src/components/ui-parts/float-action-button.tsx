'use client';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/shadcn-ui/ui/button';

export const FloatActionButton = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref}>
      <motion.div
        className="fixed z-50 bottom-20 right-5"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileTap={{ scale: 0.6, rotate: -90, borderRadius: '100%' }}
      >
        <Button
          className=" w-16 h-16 
                 bg-blue-500 text-white rounded-full shadow-lg 
                 flex items-center justify-center 
                 hover:bg-blue-600 
                 transition-colors duration-300"
        >
          <Plus className="w-8 h-8" />
        </Button>
      </motion.div>
    </div>
  );
});

FloatActionButton.displayName = 'FloatActionButton';
