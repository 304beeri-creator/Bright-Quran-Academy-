import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../config/contact';

const FloatingWhatsApp = () => {
    return (
        <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 right-5 z-50 flex items-center justify-center w-16 h-16 bg-[#D4AF37] text-primary-900 rounded-full shadow-lg hover:bg-primary-900 hover:text-[#D4AF37] transition-all duration-300 transform hover:scale-110 group"
            aria-label="Chat on WhatsApp"
        >
            {/* Pulse Animation */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75 animate-ping duration-1000 group-hover:hidden"></span>

            <MessageCircle size={32} className="relative z-10" />
        </a>
    );
};

export default FloatingWhatsApp;
