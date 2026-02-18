import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, ExternalLink } from 'lucide-react';
import { WHATSAPP_LINK } from '../config/contact';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-900 text-white pt-16 pb-8 border-t border-primary-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 font-serif text-white">Bright Quran Academy</h3>
                        <p className="text-primary-200 leading-relaxed mb-6">
                            Learn Quran with confidence and proper Tajweed from the comfort of your home.
                            Dedicated to providing quality Islamic education worldwide.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-primary-300 hover:text-accent-400 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-primary-300 hover:text-accent-400 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-primary-300 hover:text-accent-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b-2 border-accent-600 inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#courses" className="text-primary-200 hover:text-accent-400 transition-colors flex items-center"><span className="mr-2 text-accent-500">›</span>Courses</a></li>
                            <li><a href="#structure" className="text-primary-200 hover:text-accent-400 transition-colors flex items-center"><span className="mr-2 text-accent-500">›</span>Class Structure</a></li>
                            <li><a href="#fees" className="text-primary-200 hover:text-accent-400 transition-colors flex items-center"><span className="mr-2 text-accent-500">›</span>Fee Structure</a></li>
                            <li><a href="#referral" className="text-primary-200 hover:text-accent-400 transition-colors flex items-center"><span className="mr-2 text-accent-500">›</span>Referral Program</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white border-b-2 border-accent-600 inline-block pb-1">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center text-primary-200">
                                <Phone size={20} className="mr-3 flex-shrink-0 text-accent-400" />
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                                    Available on WhatsApp for queries and enrollment
                                </a>
                            </li>
                            <li className="flex items-start text-primary-200">
                                <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-accent-400" />
                                <span>contact@brightquran.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-primary-400 text-sm">
                    <p>&copy; {currentYear} Bright Quran Academy. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center">Designed with care <HeartIcon className="w-3 h-3 mx-1 text-accent-500" /> for the Ummah.</p>
                </div>
            </div>
        </footer>
    );
};

const HeartIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
    </svg>
)

export default Footer;
