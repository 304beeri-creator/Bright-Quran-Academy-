import React from 'react';
import { Gift, Users } from 'lucide-react';

const ReferralOffer = () => {
    return (
        <section id="referral" className="bg-linear-to-r from-primary-900 to-primary-800 text-white py-16 text-center md:text-left relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-300 via-accent-500 to-accent-300"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="bg-primary-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-primary-700 shadow-2xl">
                    <div className="mb-8 md:mb-0 md:mr-8">
                        <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 text-accent-400">
                            <Gift className="w-6 h-6" />
                            <span className="font-bold tracking-widest uppercase text-xs">Special Offer</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif text-white leading-tight">
                            Invite & Earn <br />
                            <span className="text-accent-400">20% Discount</span>
                        </h2>
                        <p className="text-primary-100 text-lg max-w-xl leading-relaxed">
                            Invite your friends or family to join Bright Quran Academy.
                            If they enroll successfully, you receive a <span className="text-white font-semibold">20% discount</span> on your monthly fee!
                        </p>
                    </div>
                    <div className="flex-shrink-0 relative">
                        <div className="absolute inset-0 bg-accent-500/20 blur-2xl rounded-full"></div>
                        <div className="w-24 h-24 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform relative z-10">
                            <Users className="w-12 h-12 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReferralOffer;
