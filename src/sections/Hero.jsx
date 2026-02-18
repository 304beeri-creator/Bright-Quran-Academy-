import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { WHATSAPP_LINK } from '../config/contact';

const Hero = () => {
    const scrollToCourses = () => {
        const element = document.getElementById('courses');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    const openWhatsApp = () => {
        window.open(WHATSAPP_LINK, '_blank');
    };

    return (
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-primary-50">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary-100 to-transparent opacity-40 rounded-bl-full transform translate-x-1/4 -translate-y-1/4"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-linear-to-tr from-accent-100 to-transparent opacity-40 rounded-tr-full transform -translate-x-1/4 translate-y-1/4"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-primary-100 text-primary-800 text-sm font-semibold tracking-wide mb-6 border border-primary-200">
                        Start Your Journey Today
                    </span>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-tight mb-8 tracking-tight font-serif">
                        Learn Quran with <br className="hidden md:block" />
                        <span className="text-accent-500 relative">
                            Confidence
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span> & Proper <span className="text-accent-500">Tajweed</span>
                    </h1>

                    <p className="text-xl text-primary-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                        One-to-one live online Quran classes for adults, women, and children worldwide.
                        Experience spiritual growth from the comfort of your home.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={openWhatsApp}
                            className="w-full sm:w-auto px-8 py-4 bg-primary-900 hover:bg-accent-500 hover:text-white text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        >
                            <span>Contact Us on WhatsApp</span>
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={scrollToCourses}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-accent-50 text-primary-900 border-2 border-accent-400 hover:border-accent-500 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
                        >
                            <span>View Courses</span>
                            <BookOpen size={20} className="text-accent-500" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
