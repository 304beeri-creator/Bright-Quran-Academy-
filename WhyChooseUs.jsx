import React from 'react';
import { Star, User, Heart, Timer, Globe } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const features = [
    {
        icon: <Star className="text-accent-500" size={32} />,
        title: "Experienced Teachers",
        description: "Highly qualified and certified Quran tutors."
    },
    {
        icon: <User className="text-accent-500" size={32} />,
        title: "Individual Attention",
        description: "Personalized focus on every student's progress."
    },
    {
        icon: <Heart className="text-accent-500" size={32} />,
        title: "Comfortable Environment",
        description: "Friendly and encouraging atmosphere for learning."
    },
    {
        icon: <Timer className="text-accent-500" size={32} />,
        title: "Flexible Schedule",
        description: "We adapt to your timing needs."
    },
    {
        icon: <Globe className="text-accent-500" size={32} />,
        title: "Worldwide Students",
        description: "Join our global community of learners."
    }
];

const WhyChooseUs = () => {
    return (
        <SectionWrapper id="why-choose-us" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 font-serif">Why Choose Us?</h2>
                <p className="text-lg text-primary-600 max-w-2xl mx-auto">
                    We are dedicated to making your Quran learning journey easy, effective, and spiritually rewarding.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-[#E6EAF0] hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="bg-white p-4 rounded-full shadow-sm mb-6 group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="font-bold text-xl text-primary-900 mb-2 font-serif">{feature.title}</h3>
                        <p className="text-primary-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default WhyChooseUs;
