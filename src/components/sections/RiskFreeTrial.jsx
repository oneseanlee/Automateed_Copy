import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, MoveRight } from 'lucide-react';

export const RiskFreeTrial = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto bg-[#22C55E] rounded-[40px] p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-green-200"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

                    <div className="relative z-10">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <Shield className="w-8 h-8 opacity-80" />
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Risk-Free Trial
                            </h2>
                            <Star className="w-8 h-8 opacity-80 fill-white" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-4 opacity-100">
                            Try a short e-book sample first - completely free!
                        </h3>

                        <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
                            No credit card required. No risk. Just pure AI-powered <br className="hidden md:block" /> creativity at your fingertips.
                        </p>

                        <button className="bg-white text-[#22C55E] px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center gap-3 mx-auto group">
                            Start Your Free Trial
                            <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
