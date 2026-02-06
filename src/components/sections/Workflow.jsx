import React from 'react';
import { motion } from 'framer-motion';
import { BookType, Zap, Download } from 'lucide-react';

const steps = [
    {
        number: "1",
        title: "Choose Your Topic",
        desc: "Simply enter your book topic and let our AI understand your vision and target audience.",
        icon: <BookType className="w-8 h-8" />,
        color: "bg-purple-600",
        shadow: "shadow-purple-100"
    },
    {
        number: "2",
        title: "AI Creates Content",
        desc: "Our advanced AI generates comprehensive chapters, creates stunning visuals, and formats everything professionally.",
        icon: <Zap className="w-8 h-8" />,
        color: "bg-blue-600",
        shadow: "shadow-blue-100"
    },
    {
        number: "3",
        title: "Download & Publish",
        desc: "Review, customize if needed, and download your finished eBook in multiple formats ready for publishing.",
        icon: <Download className="w-8 h-8" />,
        color: "bg-indigo-600",
        shadow: "shadow-indigo-100"
    }
];

export const Workflow = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-50/50 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold mb-6">
                        <Zap className="w-3.5 h-3.5 fill-purple-600" />
                        Simple Process
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
                        Simple 3-Step Process
                    </h2>
                    <p className="text-slate-500 font-medium">
                        Create your professional eBook in minutes, not months
                    </p>
                </div>

                {/* Steps Visual */}
                <div className="relative max-w-6xl mx-auto mb-32">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Icon & Number Wrapper */}
                                <div className="relative mb-10">
                                    <div className={`w-20 h-20 rounded-[2rem] ${step.color} ${step.shadow} flex items-center justify-center text-white shadow-2xl relative z-10 hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white border border-slate-100 shadow-lg flex items-center justify-center text-xs font-black text-slate-800 z-20">
                                        {step.number}
                                    </div>
                                    {/* Animated pulse background */}
                                    <div className={`absolute inset-0 rounded-[2rem] ${step.color} opacity-20 animate-ping -z-10`} />
                                </div>

                                <h4 className="text-xl font-black text-[#0f172a] mb-4">{step.title}</h4>
                                <p className="text-slate-500 leading-relaxed text-sm max-w-[280px]">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center bg-transparent"
                >
                    <h3 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6">
                        Ready to Create Your Next Bestseller?
                    </h3>
                    <p className="text-slate-500 mb-10 max-w-2xl mx-auto">
                        Join thousands of authors who've already transformed their ideas into published <br className="hidden md:block" /> eBooks with our AI powered platform.
                    </p>

                    <button className="relative group p-[2px] rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600" />
                        <div className="relative px-10 py-5 bg-white rounded-full group-hover:bg-transparent transition-colors">
                            <span className="flex items-center gap-3 font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 group-hover:text-white transition-colors">
                                Start Creating Your eBook
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.5 }}
                                >
                                    →
                                </motion.span>
                            </span>
                        </div>
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
