import React from 'react';
import { Clock, Calendar, Users, Video } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const ClassStructure = () => {
    const features = [
        {
            icon: <Video className="w-6 h-6 text-accent-500" />,
            title: "One-to-One Live Classes",
            desc: "Personalized attention for every student via Zoom or Microsoft Teams."
        },
        {
            icon: <Clock className="w-6 h-6 text-accent-500" />,
            title: "30 Minutes Per Class",
            desc: "Focused and effective learning sessions."
        },
        {
            icon: <Calendar className="w-6 h-6 text-accent-500" />,
            title: "Flexible Schedule",
            desc: "Choose days (3 or 5 per week) and timings that suit you."
        },
        {
            icon: <Users className="w-6 h-6 text-accent-500" />,
            title: "Expert Teachers",
            desc: "Experienced Male and Female teachers available."
        }
    ];

    return (
        <SectionWrapper id="structure" className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-[800px] mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-serif">How It Works</h2>
                    <p className="text-lg text-primary-700 mb-12 leading-relaxed">
                        Our class structure is designed to be convenient specifically for busy adults and parents.
                        We offer a comfortable learning environment with flexible timings.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map((item, idx) => (
                            <div key={idx} className="bg-white border border-[#E6EAF0] rounded-2xl p-6 hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex items-start space-x-4 group">
                                <div className="bg-primary-50 p-3 rounded-xl flex-shrink-0 group-hover:bg-primary-900 transition-colors">
                                    {React.cloneElement(item.icon, { className: "w-6 h-6 text-accent-500" })}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-900 mb-1 group-hover:text-primary-900">{item.title}</h4>
                                    <p className="text-primary-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default ClassStructure;
