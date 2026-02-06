import React from 'react';
import { motion } from 'framer-motion';
import { Card, Button, Chip } from "@heroui/react";
import { Star, CheckCircle2, MoveRight, Zap } from 'lucide-react';

export const FinalCTA = () => {
    return (
        <section className="py-24 bg-white px-4">
            <div className="container mx-auto">
                <Card className="max-w-6xl mx-auto rounded-[3rem] bg-[#4361ee] p-12 md:p-20 text-white border-none shadow-2xl shadow-blue-200 relative overflow-hidden">
                    <div className="relative z-10 text-center">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                            Ready to Create Your <br />
                            First Professional eBook?
                        </h2>
                        <p className="text-white/80 font-bold text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
                            Automatically create complete eBooks—150+ pages, images, AI cover, and a ready-to-publish PDF. Start your free trial today.
                        </p>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-2xl mx-auto mb-16 px-10">
                            <div className="flex items-center justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                                <span className="text-sm font-bold ml-2">4.9/5 from 1,403 reviews</span>
                            </div>
                            <blockquote className="text-lg italic font-bold mb-6">
                                "Automateed cut our ebook production time from weeks to minutes." — Laura, Marketer
                            </blockquote>
                            <div className="flex justify-center gap-8 opacity-60">
                                <span className="text-[10px] font-black tracking-widest uppercase">PRODUCT HUNT</span>
                                <span className="text-[10px] font-black tracking-widest uppercase">CAPTERRA</span>
                                <span className="text-[10px] font-black tracking-widest uppercase">G2</span>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 mb-16">
                            <Button
                                color="default"
                                size="lg"
                                className="bg-white text-indigo-600 font-black px-12 h-16 rounded-2xl text-lg hover:scale-105 transition-all shadow-xl"
                                endContent={<MoveRight className="w-5 h-5" />}
                            >
                                Start Free Trial
                            </Button>
                            <Button
                                variant="bordered"
                                size="lg"
                                className="border-2 border-white/30 text-white font-black px-12 h-16 rounded-2xl text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                            >
                                <span className="text-xl">🔥</span>
                                One-Time Payment - No Sub
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto pt-8 border-t border-white/10">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-10 h-10 rounded-full border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">No Credit Card Required</h4>
                                    <p className="text-[10px] opacity-60 font-bold">Try all features free for 7 days</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-10 h-10 rounded-full border-2 border-blue-400 flex items-center justify-center text-blue-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Setup in Minutes</h4>
                                    <p className="text-[10px] opacity-60 font-bold">Get started immediately with our intuitive interface</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center text-pink-400">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">24/7 Support</h4>
                                    <p className="text-[10px] opacity-60 font-bold">Get help whenever you need it</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
                </Card>
            </div>
        </section>
    );
};
