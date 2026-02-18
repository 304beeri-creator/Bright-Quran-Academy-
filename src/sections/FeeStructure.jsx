import React from 'react';
import { Check } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { WHATSAPP_LINK } from '../config/contact';

const FeeStructure = () => {


    const openWhatsApp = () => {
        window.open(WHATSAPP_LINK, '_blank');
    };

    return (
        <SectionWrapper id="fees" className="bg-primary-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">Affordable Fees</h2>
                <p className="text-primary-600 max-w-2xl mx-auto">
                    Quality education at reasonable rates. Choose the plan that fits your schedule.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Plan 1 */}
                <div className="bg-white rounded-2xl border border-[#E6EAF0] hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-primary-900 mb-2 font-serif">3 Classes / Week</h3>
                    <p className="text-primary-500 mb-6">Perfect for steady progress</p>
                    <div className="text-5xl font-bold text-primary-800 mb-1">$30<span className="text-lg text-primary-400 font-normal">/mo</span></div>

                    <ul className="text-left space-y-4 my-8 w-full">
                        <li className="flex items-center text-primary-700">
                            <Check className="text-accent-500 mr-2 w-5 h-5" /> 12 Classes per month
                        </li>
                        <li className="flex items-center text-primary-700">
                            <Check className="text-accent-500 mr-2 w-5 h-5" /> 30 Minutes duration
                        </li>
                        <li className="flex items-center text-primary-700">
                            <Check className="text-accent-500 mr-2 w-5 h-5" /> One-to-One Session
                        </li>
                    </ul>
                    <button
                        onClick={openWhatsApp}
                        className="w-full py-3 px-6 rounded-lg bg-white hover:bg-primary-50 text-primary-800 hover:text-primary-900 font-semibold border-2 border-primary-200 hover:border-accent-400 transition-colors"
                    >
                        Enroll Now
                    </button>
                </div>

                {/* Plan 2 */}
                <div className="bg-white rounded-2xl shadow-xl border-2 border-accent-400 p-8 flex flex-col items-center text-center relative overflow-hidden transform md:-translate-y-4 hover:shadow-2xl hover:-translate-y-5 transition-all duration-300">
                    <div className="absolute top-0 right-0 bg-accent-400 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide">
                        Popular
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-2 font-serif">5 Classes / Week</h3>
                    <p className="text-primary-500 mb-6">Best for consistent learning</p>
                    <div className="text-5xl font-bold text-primary-800 mb-1">$50<span className="text-lg text-primary-400 font-normal">/mo</span></div>

                    <ul className="text-left space-y-4 my-8 w-full">
                        <li className="flex items-center text-primary-700">
                            <Check className="text-accent-500 mr-2 w-5 h-5" /> 20 Classes per month
                        </li>
                        <li className="flex items-center text-primary-700">
                            <Check className="text-accent-500 mr-2 w-5 h-5" /> 30 Minutes duration
                        </li>
                        <li className="flex items-center text-primary-700">
                            <Check className="text-accent-500 mr-2 w-5 h-5" /> One-to-One Session
                        </li>
                    </ul>
                    <button
                        onClick={openWhatsApp}
                        className="w-full py-3 px-6 rounded-lg bg-primary-900 hover:bg-accent-500 text-white font-semibold transition-colors shadow-md"
                    >
                        Enroll Now
                    </button>
                </div>
            </div>

            <p className="text-center text-sm text-primary-500 mt-12 bg-white inline-block px-4 py-2 rounded-full mx-auto shadow-xs border border-primary-100">
                Fees may vary slightly depending on country. Contact on WhatsApp for confirmation.
            </p>
        </SectionWrapper>
    );
};

export default FeeStructure;
