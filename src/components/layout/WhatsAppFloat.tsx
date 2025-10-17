'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = '905337491843';
  const message = 'Merhaba! BESYO/PMYO kursları hakkında bilgi almak istiyorum.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
        whileHover={{ 
          scale: 1.05,
          boxShadow: '0 20px 40px rgba(34, 197, 94, 0.3)'
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="WhatsApp ile iletişime geç"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            repeatDelay: 3 
          }}
        >
          <MessageCircle size={24} />
        </motion.div>
        <span className="font-semibold text-sm hidden sm:block group-hover:text-green-50 transition-colors">
          WhatsApp
        </span>
      </motion.a>
      
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  );
}
