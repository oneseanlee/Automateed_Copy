import React from 'react';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import { Button } from "@heroui/react";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            {/* Promo Bar */}
            <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-2 px-4 relative overflow-hidden">
                <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">💎 Lifetime Deal — Limited Time</span>
                    </div>
                    <button className="bg-yellow-400 text-black px-4 py-1 rounded-full text-[10px] sm:text-xs font-bold hover:bg-yellow-300 transition-colors">
                        Get Lifetime Access
                    </button>
                    <span className="opacity-90">Limited-time — price increases soon ⌛</span>
                </div>
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white">
                    <X className="w-4 h-4" />
                </button>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full relative">
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
                                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white rounded-full" />
                            </div>
                        </div>
                        <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Automateed</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-6 text-sm font-medium text-gray-600">
                            <a href="#" className="hover:text-indigo-600 transition-colors">How it works</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">AI News</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Lifetime Deal</a>
                            <a href="#" className="hover:text-indigo-600 transition-colors">Bookshelf</a>
                            <button className="flex items-center gap-1 hover:text-indigo-600 transition-colors">
                                All tools <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex items-center gap-4">
                            <a href="#" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Log in</a>
                            <Button
                                color="primary"
                                radius="full"
                                className="font-bold text-white shadow-lg shadow-indigo-200 hover:-translate-y-0.5 transition-transform"
                            >
                                Sign Up
                            </Button>
                            <button className="flex items-center gap-1 text-sm font-medium text-gray-600">
                                <Globe className="w-4 h-4" />
                                EN
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-100 p-4 space-y-4 shadow-xl">
                        <a href="#" className="block py-2 text-gray-600 font-medium">How it works</a>
                        <a href="#" className="block py-2 text-gray-600 font-medium">AI News</a>
                        <a href="#" className="block py-2 text-gray-600 font-medium">Lifetime Deal</a>
                        <a href="#" className="block py-2 text-gray-600 font-medium">Bookshelf</a>
                        <hr className="border-gray-100" />
                        <div className="flex flex-col gap-4">
                            <a href="#" className="text-center py-2 text-gray-600 font-medium">Log in</a>
                            <Button color="primary" radius="full" className="w-full font-bold py-6 text-white">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};
