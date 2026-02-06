import React from 'react';
import { Button } from "@heroui/react";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Mail, Music2 } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-[#0f0426] text-white pt-32 pb-16 relative overflow-hidden">
            {/* Vibrant Purple Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e0b36] via-[#110427] to-[#1e0b36]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-10">
                            <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                Automateed
                            </span>
                        </div>
                        <p className="text-slate-400 font-bold text-sm leading-relaxed mb-10 max-w-sm">
                            AI-powered business automation and productivity tools for modern entrepreneurs. Transform your workflow with cutting-edge technology.
                        </p>

                        <div className="flex items-center gap-2.5">
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Facebook className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Instagram className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Music2 className="w-4 h-4" /> {/* TikTok Equivalent */}
                            </Button>
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Youtube className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Twitter className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Mail className="w-4 h-4" />
                            </Button>
                            <Button isIconOnly variant="flat" className="w-10 h-10 bg-white/5 hover:bg-white/10 text-slate-400 rounded-full border border-white/5 transition-all min-w-0">
                                <Linkedin className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h5 className="font-black text-white text-lg mb-8">Quick Links</h5>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-slate-400 text-sm font-bold">
                                <a href="#" className="hover:text-white transition-colors">Resources & Guides</a>
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-orange-500 rounded flex items-center justify-center text-[8px] text-white">W</span>
                                    <a href="#" className="hover:text-white transition-colors">AI eBook Creator Comparison</a>
                                </div>
                                <a href="#" className="hover:text-white transition-colors">🚀 Launch Express</a>
                                <a href="#" className="hover:text-white transition-colors">About Us</a>
                                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                                <a href="#" className="hover:text-white transition-colors">No-Refund Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Data Deletion Policy</a>
                                <a href="#" className="hover:text-white transition-colors text-[13px]">Best eBook Creation Software</a>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs">✨</span>
                                    <a href="#" className="hover:text-white transition-colors">Features (NEW!)</a>
                                </div>
                                <a href="#" className="hover:text-white transition-colors">AI Automateed Affiliate</a>
                                <a href="#" className="hover:text-white transition-colors">AI Automateed Pricing</a>
                                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                                <a href="#" className="hover:text-white transition-colors">eBook Examples PDF</a>
                                <a href="#" className="hover:text-white transition-colors">Earn Credits</a>
                                <a href="#" className="hover:text-white transition-colors">Blog</a>
                                <a href="#" className="hover:text-white transition-colors">LLMs.txt</a>
                                <a href="#" className="hover:text-white transition-colors">LLMs Full</a>
                                <a href="#" className="hover:text-white transition-colors">Editorial Policy</a>
                                <a href="#" className="hover:text-white transition-colors">Licensing</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-bold text-slate-400">
                    <p>© 2025 Content Petit LLC, Coastal Highway 16192, Lewes, Delaware. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Data Deletion</a>
                        <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
