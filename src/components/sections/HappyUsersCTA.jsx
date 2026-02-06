import React from 'react';
import { motion } from 'framer-motion';

export const HappyUsersCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto h-[300px] rounded-[2.5rem] bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] p-12 flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200"
                >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
                        Ready to Join These Happy Users?
                    </h2>
                    <p className="text-white/80 font-bold mb-10 relative z-10">
                        Start creating your professional eBook today and see why our users love Automateed
                    </p>

                    <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-lg shadow-xl hover:scale-105 transition-all relative z-10">
                        Get Started Free →
                    </button>
                </motion.div>
            </div>
        </section>
    );
};
