import React from 'react';
import { Send, Phone } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { WHATSAPP_LINK } from '../config/contact';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your message! We will contact you shortly.');
    };



    const openWhatsApp = () => {
        window.open(WHATSAPP_LINK, '_blank');
    };

    return (
        <SectionWrapper id="contact" className="bg-primary-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-serif">Contact Us</h2>
                <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                    Have questions? Ready to start? We'd love to hear from you.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-primary-100">
                {/* Contact Info / WhatsApp */}
                <div className="bg-primary-900 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold mb-6 font-serif">Start Your Quran Journey Today</h3>
                        <p className="mb-8 text-primary-200 leading-relaxed">
                            Connect with us directly on WhatsApp for the fastest response. We are here to guide you.
                        </p>
                        <button
                            onClick={openWhatsApp}
                            className="bg-accent-500 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 hover:bg-accent-600 transition-colors w-full md:w-auto hover:shadow-lg shadow-md"
                        >
                            <Phone size={20} />
                            <span>Chat on WhatsApp</span>
                        </button>
                        <div className="mt-12 pt-8 border-t border-primary-800">
                            <p className="text-sm text-primary-300">Email us at:</p>
                            <p className="font-semibold text-white">contact@brightquran.com</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="p-8 md:p-12">
                    <h3 className="text-2xl font-bold text-primary-900 mb-6 font-serif">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-primary-50/50"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-primary-50/50"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                required
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-primary-200 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 outline-none transition-all bg-primary-50/50"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-colors mt-2 hover:shadow-lg"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
