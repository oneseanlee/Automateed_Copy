import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
    { name: "Upload your manuscript", progress: 100 },
    { name: "Set pricing", progress: 95 },
    { name: "Create listing", progress: 85 },
    { name: "Publish & sell", progress: 100 },
];

export const Publishing = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold mb-6">
                            <CheckCircle2 className="w-4 h-4" />
                            Publish-ready
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight">
                            Become a <br /> Published Author
                        </h2>

                        <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-md">
                            Publish your ebook on the Automateed platform in a few clicks and start selling your masterpiece globally.
                        </p>

                        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-indigo-100 hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3">
                            <Rocket className="w-5 h-5" />
                            Create Your Free Account
                        </button>
                    </motion.div>

                    {/* Right Content - Publishing Steps Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 w-full"
                    >
                        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-100 relative group">
                            {/* Decorative background shapes */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full translate-x-1/4 -translate-y-1/4 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                {steps.map((step, idx) => (
                                    <div
                                        key={idx}
                                        className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:border-indigo-200 transition-all duration-300"
                                    >
                                        <p className="text-sm font-bold text-slate-800 mb-3">{step.name}</p>
                                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${step.progress}%` }}
                                                transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                                                style={{ width: `${step.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
