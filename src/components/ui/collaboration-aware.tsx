// src/components/ui/collaboration-aware.tsx
'use client';

import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback } from "./avatar";
import { motion, AnimatePresence } from "framer-motion";

interface CollaboratorCursor {
  userId: string;
  userName: string;
  x: number;
  y: number;
}

export function CollaborationAware({ children }: { children: React.ReactNode }) {
  const [cursors, setCursors] = useState<CollaboratorCursor[]>([]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Send cursor position to server
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative">
      {children}
      
      <AnimatePresence>
        {cursors.map((cursor) => (
          <motion.div
            key={cursor.userId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              left: cursor.x,
              top: cursor.y,
              pointerEvents: 'none'
            }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 transform rotate-45" />
              <Avatar>
                <AvatarFallback>
                  {cursor.userName.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}