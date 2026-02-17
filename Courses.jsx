import React from 'react';
import { Book, Star, Heart, CheckCircle } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const courses = [
    {
        title: "Noorani Qaida",
        description: "The foundation course for beginners to learn Arabic alphabets and basic pronunciation rules.",
        icon: <Book className="w-8 h-8 text-accent-500" />,
    },
    {
        title: "Quran Reading (Nazra)",
        description: "Learn to read the Quran fluently with proper pronunciation and flow.",
        icon: <Book className="w-8 h-8 text-accent-500" />,
    },
    {
        title: "Tajweed Course",
        description: "Master the rules of Tajweed to recite the Quran exactly as it was revealed.",
        icon: <Star className="w-8 h-8 text-accent-500" />,
    },
    {
        title: "Quran Memorization (Hifz)",
        description: "Structured memorization program for children and adults with regular revision.",
        icon: <Heart className="w-8 h-8 text-accent-500" />,
    },
    {
        title: "Basic Islamic Studies",
        description: "Learn about Salah, Duas, Kalmas, and essential Islamic manners.",
        icon: <Book className="w-8 h-8 text-accent-500" />,
    },
];

const Courses = () => {
    return (
        <SectionWrapper id="courses" className="bg-primary-50">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-serif">Our Courses</h2>
                <p className="text-primary-600 max-w-2xl mx-auto">
                    Comprehensive Quranic education tailored to your level and needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-8 border border-[#E6EAF0] hover:border-[#D4AF37] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-start group"
                    >
                        <div className="p-3 bg-primary-50 rounded-lg mb-6 group-hover:bg-primary-900 transition-colors">
                            {React.cloneElement(course.icon, { className: "w-8 h-8 text-accent-500" })}
                        </div>
                        <h3 className="text-xl font-bold text-primary-900 mb-3 font-serif">{course.title}</h3>
                        <p className="text-primary-600 mb-6 flex-grow">{course.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-primary-100">
                <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center font-serif">Comprehensive Learning</h3>
                <p className="text-center text-primary-600 mb-8 max-w-3xl mx-auto">
                    Along with Quran learning, we ensure a holistic Islamic education by teaching:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center space-x-3 bg-primary-50 p-4 rounded-lg border border-primary-100">
                        <CheckCircle className="text-accent-500 w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-primary-800">Salah (Namaz)</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-primary-50 p-4 rounded-lg border border-primary-100">
                        <CheckCircle className="text-accent-500 w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-primary-800">Six Kalmas</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-primary-50 p-4 rounded-lg border border-primary-100">
                        <CheckCircle className="text-accent-500 w-5 h-5 flex-shrink-0" />
                        <span className="font-medium text-primary-800">Daily Duas</span>
                    </div>
                </div>
                <p className="text-center text-sm text-primary-400 mt-6 italic">
                    Practical knowledge beneficial for daily Islamic life.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default Courses;
