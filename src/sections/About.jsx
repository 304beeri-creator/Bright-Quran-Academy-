import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import { Award, UserCheck, Clock } from 'lucide-react';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-serif">About Bright Quran Academy</h2>
                <p className="text-lg text-primary-700 leading-relaxed mb-12">
                    Bright Quran Academy provides structured and easy-to-follow Quran education with experienced teachers.
                    We focus on correct pronunciation, <span className="font-semibold text-primary-900">Tajweed</span>, and practical Islamic knowledge for daily life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="p-8 bg-white rounded-2xl border border-[#E6EAF0] hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <Award className="text-accent-500 w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-primary-900 font-serif">Expert Teachers</h3>
                        <p className="text-primary-600">Qualified Male & Female Tutors dedicated to your success.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-[#E6EAF0] hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <UserCheck className="text-accent-500 w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-primary-900 font-serif">One-to-One</h3>
                        <p className="text-primary-600">Personalized attention to ensure steady progress.</p>
                    </div>
                    <div className="p-8 bg-white rounded-2xl border border-[#E6EAF0] hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <Clock className="text-accent-500 w-6 h-6" />
                        </div>
                        <h3 className="font-bold text-xl mb-3 text-primary-900 font-serif">Flexible Timing</h3>
                        <p className="text-primary-600">Schedule classes at times that fit your busy life.</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
