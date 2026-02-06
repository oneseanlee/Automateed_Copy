import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const Testimonials = () => {
    return (
        <section className="py-24 bg-[#030712] relative overflow-hidden">
            {/* Background Dot Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(#4f46e5 0.5px, transparent 0.5px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold mb-8">
                        Customer Testimonials
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Customers Say</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto mb-16">
                        Join thousands of satisfied authors, marketers, and creators who've transformed their content creation process
                    </p>

                    {/* Main Testimonial Card */}
                    <div className="max-w-4xl mx-auto mb-24">
                        <div className="border-l-2 border-blue-500 pl-12 py-4">
                            <blockquote className="text-3xl md:text-4xl font-black text-white italic leading-tight mb-10">
                                "AutomateEd drastically cut down my workload. My ebook was ready in no time, complete with an eye-catching cover and marketing plan."
                            </blockquote>

                            <div className="flex items-center justify-center gap-6">
                                <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white text-2xl font-black">
                                    R
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-black text-lg">— Rachel C.</h4>
                                    <div className="flex items-center gap-3">
                                        <span className="text-slate-400 text-sm">Freelancer</span>
                                        <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                                            <div className="w-3 h-3 bg-blue-500 rounded-sm flex items-center justify-center text-[8px] font-black text-white">C</div>
                                            <span className="text-xs text-slate-400">Capterra</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex items-center justify-center gap-3 mt-12">
                            <div className="w-3 h-1 bg-white/10 rounded-full" />
                            <div className="w-10 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-white/10 rounded-full" />
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-5xl font-black text-white mb-2">4.9/5</div>
                            <div className="text-sm font-bold text-slate-400">Average Rating</div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-5xl font-black text-white mb-2">65,000+</div>
                            <div className="text-sm font-bold text-slate-400">Happy Users</div>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-10 border border-white/10">
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div className="text-5xl font-black text-white mb-2">350,000+</div>
                            <div className="text-sm font-bold text-slate-400">eBooks Created</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
