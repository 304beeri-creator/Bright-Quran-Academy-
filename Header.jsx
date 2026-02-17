import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from '../config/contact';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Courses', href: '#courses' },
    { name: 'Class Structure', href: '#structure' },
    { name: 'Fees', href: '#fees' },
    { name: 'Referral Offer', href: '#referral' },
    { name: 'Contact', href: '#contact' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Custom navigation handler for smooth scroll and mobile menu closing
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);

        // If mobile menu is open, close it first
        if (isOpen) {
            setIsOpen(false);
        }

        if (element) {
            // Small delay to allow menu closing animation to start/finish if needed
            // and to decouple the state update from the scroll action
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-gray-100' : 'bg-white py-6 shadow-sm'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-primary-900 tracking-tight">
                    Bright Quran Academy
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href)}
                            className="text-primary-800 hover:text-accent-400 transition-colors font-medium text-sm"
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-primary-900 hover:bg-accent-400 text-accent-400 hover:text-primary-900 px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm border-2 border-primary-900 hover:border-accent-400"
                    >
                        Get Started
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary-900 hover:text-accent-400 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-left text-primary-800 hover:text-accent-400 py-3 font-medium border-b border-gray-50 last:border-0 hover:pl-2 transition-all"
                                >
                                    {item.name}
                                </a>
                            ))}
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-900 hover:bg-accent-400 text-accent-400 hover:text-primary-900 px-5 py-3 rounded-lg font-medium transition-colors w-full text-center mt-2 border border-primary-900 hover:border-accent-400"
                            >
                                Get Started
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
