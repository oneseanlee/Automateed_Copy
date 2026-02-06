import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Plus, Star, BookOpen, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Input } from "@heroui/react";

export const Hero = () => {
    const [placeholder, setPlaceholder] = useState('');
    const ideas = [
        "Self-Improvement",
        "Artificial Intelligence",
        "Healthy Cooking",
        "Travel Guide",
        "Digital Marketing",
        "Children's Story"
    ];
    const [ideaIndex, setIdeaIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentIdea = ideas[ideaIndex];
            if (isDeleting) {
                setPlaceholder(currentIdea.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                setTypingSpeed(50);
            } else {
                setPlaceholder(currentIdea.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                setTypingSpeed(150);
            }

            if (!isDeleting && charIndex === currentIdea.length) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setIdeaIndex((prev) => (prev + 1) % ideas.length);
                setTypingSpeed(500);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, ideaIndex]);

    return (
        <section className="relative pt-40 pb-20 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute top-40 -right-20 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 text-center">
                {/* Top Toggle */}
                <div className="inline-flex items-center gap-1 bg-gray-100/50 p-1.5 rounded-full mb-12 backdrop-blur-sm">
                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-semibold text-indigo-600 shadow-sm transition-all hover:bg-gray-50">
                        <Plus className="w-4 h-4" /> Create a book with AI
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors">
                        <BookOpen className="w-4 h-4" /> I already have a book
                    </button>
                </div>

                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#111827] mb-6 tracking-tight leading-[1.1]">
                        Automateed: All-in-One <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
                            ai eBook Generator
                        </span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Generate 150+ pages with images, an AI-designed cover, and a ready-to-publish PDF — automatically.
                    </p>
                </motion.div>

                {/* Interactive Input Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-3xl mx-auto relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                    <div className="relative bg-white rounded-[32px] p-8 sm:p-12 shadow-2xl border border-indigo-50/50">
                        <h3 className="text-3xl font-bold text-[#111827] mb-10">
                            What do you want to create today?
                        </h3>

                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white">
                            <div className="flex-1 w-full relative">
                                {/* Glow layer */}
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur-md transition-opacity duration-300 peer-focus:opacity-70 pointer-events-none glow-wrapper" />
                                <Input
                                    type="text"
                                    placeholder={`e.g., ${placeholder}`}
                                    variant="bordered"
                                    radius="full"
                                    size="lg"
                                    classNames={{
                                        base: "peer",
                                        inputWrapper: "h-20 border-2 border-indigo-100 hover:border-indigo-300 data-[focus=true]:!border-indigo-400 transition-all px-8 bg-white !outline-none !ring-0 data-[focus=true]:!ring-0",
                                        input: "text-xl placeholder:text-gray-300 !outline-none",
                                    }}
                                />
                            </div>
                            <Button
                                color="primary"
                                radius="full"
                                size="lg"
                                className="h-20 px-12 font-bold text-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 shadow-xl shadow-indigo-200/50 hover:scale-[1.02] transition-transform"
                                endContent={<ArrowRight className="w-5 h-5" />}
                                startContent={<Sparkles className="w-5 h-5" />}
                            >
                                Start Free
                            </Button>
                        </div>

                        <p className="mt-6 text-sm text-gray-400 font-medium">
                            Optional: Leave blank if you're not sure yet
                        </p>
                    </div>

                    {/* Floating Element: Voice to Book */}
                    <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            whileHover={{ x: -10 }}
                            transition={{
                                y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                                x: { duration: 0.2 }
                            }}
                            className="bg-white p-4 rounded-l-2xl shadow-2xl border border-gray-100 flex items-center gap-4 cursor-pointer"
                        >
                            <div>
                                <p className="text-sm font-bold text-indigo-600 leading-none mb-1">Voice to Book</p>
                                <p className="text-[10px] text-white bg-emerald-500 px-2 py-0.5 rounded-full inline-block font-bold uppercase tracking-wider">NEW</p>
                            </div>
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                                <Plus className="w-6 h-6" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Social Proof */}
                <div className="mt-16 space-y-10">
                    <p className="text-sm font-medium text-gray-400">No credit card required.</p>

                    <button className="inline-flex items-center gap-3 bg-white border border-gray-100 px-8 py-4 rounded-full text-lg font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <Play className="w-4 h-4 fill-gray-700 text-gray-700 ml-0.5" />
                        </div>
                        Watch Demo
                    </button>

                    <div className="bg-white/80 backdrop-blur-sm border border-gray-100 inline-flex items-center gap-4 px-6 py-3 rounded-full shadow-sm">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-500" />
                            <span className="text-sm font-bold text-gray-700 whitespace-nowrap">AI-Powered eBook Creation</span>
                        </div>
                        <div className="w-px h-4 bg-gray-200" />
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            <span className="text-sm font-medium text-gray-600 ml-1">4.9 (1,403 reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
