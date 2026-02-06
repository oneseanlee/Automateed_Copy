import React from 'react';
import { motion } from 'framer-motion';
import {
    Book, Briefcase, Camera, GraduationCap, PenTool,
    BarChart3, Store, Users, UserCheck, MoveRight
} from 'lucide-react';

const personas = [
    {
        icon: <Book className="w-6 h-6" />,
        title: "Aspiring Authors",
        desc: "Transform your ideas into professionally crafted books without spending months writing. Our AI helps you generate complete manuscripts with unique content, cover designs, and formatting—ready to publish on Amazon KDP or any platform.",
        features: ["Generate 90+ page books in minutes", "Professional covers included", "No writing experience needed"],
        cta: "Start Writing Your Book"
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        title: "Digital Entrepreneurs",
        desc: "Build powerful lead magnets and digital products that convert visitors into customers. Create valuable ebooks, courses, and resources that establish your expertise and grow your email list exponentially.",
        features: ["Create lead magnets in minutes", "Build comprehensive online courses", "Scale your digital product library"],
        cta: "Grow Your Business"
    },
    {
        icon: <Camera className="w-6 h-6" />,
        title: "Content Creators & Influencers",
        desc: "Expand your reach beyond social media by packaging your expertise into bestselling books and courses. Turn your knowledge into multiple income streams while building authority in your niche.",
        features: ["Monetize your expertise differently", "Reach audiences beyond social media", "Create passive income streams"],
        cta: "Expand Your Brand"
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        title: "Course Creators",
        desc: "Create powerful lead magnets and companion books that dramatically increase course enrollments. Generate workbooks, guides, and resources that add value to your courses and attract more students to your programs.",
        features: ["Create course lead magnets instantly", "Generate student workbooks & guides", "Boost course enrollment rates"],
        cta: "Create Lead Magnets"
    },
    {
        icon: <PenTool className="w-6 h-6" />,
        title: "Creative Writers & Novelists",
        desc: "Overcome writer's block and accelerate your storytelling with AI assistance. Generate plot outlines, develop characters, and create complete novels or story collections faster than ever before.",
        features: ["Beat writer's block forever", "Generate complete novels quickly", "Create children's storybooks"],
        cta: "Write Your Novel"
    },
    {
        icon: <BarChart3 className="w-6 h-6" />,
        title: "Marketing Agencies",
        desc: "Deliver exceptional value to clients by creating custom branded ebooks, whitepapers, and marketing materials. Save hundreds of billable hours while maintaining consistent quality across all client deliverables.",
        features: ["Save hundreds of hours monthly", "Create client branded materials", "Scale your service offerings"],
        cta: "Scale Your Agency"
    },
    {
        icon: <Store className="w-6 h-6" />,
        title: "Small Business Owners",
        desc: "Establish credibility and attract more customers with professionally written guides showcasing your industry expertise. Create customer resources, training manuals, and marketing materials without hiring expensive writers.",
        features: ["Build brand authority quickly", "Create customer education content", "Professional materials on budget"],
        cta: "Build Your Authority"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Parents & Teachers",
        desc: "Design personalized storybooks and educational coloring books that engage children in learning. Create custom content tailored to specific age groups, learning objectives, or special interests.",
        features: ["Personalized children's books", "Educational coloring activities", "Custom learning materials"],
        cta: "Create For Kids"
    },
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: "Consultants & Experts",
        desc: "Convert your specialized knowledge into authoritative publications that attract high-value clients. Publish industry guides, research reports, and thought leadership content that positions you as the go-to expert.",
        features: ["Establish thought leadership", "Attract premium clients", "Monetize your expertise"],
        cta: "Share Your Expertise"
    }
];

export const Personas = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
                        Designed For Creators Like You
                    </h2>
                    <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
                        Whether you're building a business, sharing knowledge, or pursuing creative passions—Automateed empowers you to create professional books and content in minutes, not months.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {personas.map((persona, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-6 border border-slate-100">
                                {persona.icon}
                            </div>

                            <h4 className="text-xl font-black text-[#0f172a] mb-4 group-hover:text-blue-600 transition-colors">
                                {persona.title}
                            </h4>

                            <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                                {persona.desc}
                            </p>

                            <ul className="space-y-3 mb-10">
                                {persona.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-3 text-sm text-[#0f172a] font-bold">
                                        <div className="w-4 h-4 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-100 hover:bg-blue-700 hover:shadow-blue-200 transition-all flex items-center justify-center gap-2 group/btn">
                                {persona.cta}
                                <MoveRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
