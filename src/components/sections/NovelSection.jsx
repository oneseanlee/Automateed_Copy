import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Rocket, Zap, Eye } from 'lucide-react';

export const NovelSection = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Top Section: Benefits */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6">
                        AI-Generated Novel or Informational Book
                    </h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed mb-12">
                        You can create e-books and instantly publish them on platforms like Kindle or Google Play, maximizing visibility for your potential customers. Each ebook format is carefully optimized for digital readers, ensuring a smooth user experience.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-24 text-center max-w-5xl mx-auto mb-10">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">Format, Customize &<br />Download</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                                <Palette className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">Stunning cover & Chapter<br />Images Included</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <span className="font-bold text-slate-700 text-sm">Perfect for platforms like<br />Kindle and Google Play</span>
                        </div>
                    </div>

                    <p className="font-black text-slate-800 mb-8">Book Cover & Chapter Images Included</p>

                    <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black shadow-xl shadow-blue-100 hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-2 mx-auto mb-32">
                        Explore pricing →
                    </button>
                </div>

                {/* Bottom Section: Free Trial Transition */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] text-center mb-16">
                        Is This a Free AI eBook Generator?
                    </h3>

                    <div className="flex flex-col lg:flex-row items-stretch gap-8">
                        {/* Guarantee Block */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] p-12 text-white shadow-xl shadow-purple-100"
                        >
                            <h4 className="text-3xl font-black mb-6 italic">Free Trial as a Guarantee!</h4>
                            <p className="text-purple-50 mb-8 leading-relaxed font-bold">
                                Yes, we offer a free trial of up to 5000 words. We want Automateed AI to be your go-to digital partner, but we understand that sometimes there isn't a good fit.
                            </p>
                            <p className="text-purple-50 leading-relaxed font-bold">
                                That's why we let you try a book in one seamless process before committing—no hidden fees or obligations. Zero risks, all rewards 💪.
                            </p>
                        </motion.div>

                        {/* Content Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 bg-[#F8FAFC]/50 rounded-[2.5rem] p-12 flex flex-col justify-center border border-slate-100"
                        >
                            <p className="text-slate-500 font-bold leading-relaxed mb-12">
                                Give it a go with this free AI ebook writer trial. Get a sample, and if you think there's no compatibility, we'll understand, and you won't have to spend a penny. It's a no-fuss, no-muss guarantee.
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <button className="px-8 py-4 bg-blue-600 text-white rounded-xl font-black shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-2">
                                    Start Your Free Trial →
                                </button>
                                <button className="px-8 py-4 bg-emerald-500 text-white rounded-xl font-black shadow-lg shadow-emerald-100 hover:bg-emerald-600 transition-all flex items-center gap-2">
                                    <span className="text-lg">🔥</span> No Subscription - View Plans
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
