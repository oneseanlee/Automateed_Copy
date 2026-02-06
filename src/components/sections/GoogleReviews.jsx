import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Info } from 'lucide-react';

const reviews = [
    {
        name: "Stephen Phillips",
        stats: "4 reviews • 2 photos",
        text: "I just got this platform and spent the evening going over everything that comes with a subscription. Wow! This is a GREAT deal! The tools that are included are great, and there are so many things to help and so many things you can do. I am so impressed. I have tried several other programs like this, but they really aren't like this. This is head and shoulders above the rest.",
        rating: 5,
        date: "17 hours ago",
        isNew: true,
        avatar: "S"
    },
    {
        name: "Marvin Bundy",
        stats: "Local Guide • 84 reviews • 43 photos",
        text: "This program is undoubtedly one of the finest available; it offers everything you could possibly require. Allow me to explain my enthusiasm for it. To begin with, it enables you to produce e-books, novels, and various other types of content. Additionally, you can transform your e-books into Audiobooks, which is a fantastic bonus. The ultimate feature is the ability to publish your e-book, novel, or children's book. I'm thrilled to have discovered this program two years back, and I intend to remain a loyal customer for as long as possible.",
        rating: 5,
        date: "4 days ago",
        isNew: true,
        avatar: "M"
    },
    {
        name: "Blazing Ken says",
        stats: "1 review • 0 photos",
        text: "This AI is excellent for writing eBooks with ease; it is remarkable and genuinely beneficial. I appreciate the user-friendly interface and would rate it 5 stars due to its outstanding performance.",
        rating: 5,
        date: "2 weeks ago",
        isNew: true,
        avatar: "B"
    },
    {
        name: "Vlad-Daniel Neacsu",
        stats: "1 review • 0 photos",
        text: "Very nice website! 100/100",
        rating: 5,
        date: "2 weeks ago",
        isNew: true,
        avatar: "V"
    },
    {
        name: "Ljubomir Kosanović",
        stats: "2 reviews • 0 photos",
        text: "Very good platform and easy to use.",
        rating: 5,
        date: "2 weeks ago",
        isNew: true,
        avatar: "L"
    },
    {
        name: "Elaine G",
        stats: "9 reviews • 1 photo",
        text: "I am loving Automateed. I have lots to learn but the support is amazing. Different time zones but speedy responses regardless.\nNew to AI, at the age of passing half a century, but I will master it with the amazing assistance I am getting from Stefan.",
        rating: 5,
        date: "6 weeks ago",
        isNew: false,
        avatar: "E"
    },
    {
        name: "Marjo Aikula",
        stats: "1 review • 0 photos",
        text: "Very fast and easy to use Automateed. It's good that you can also make a book cover. In addition, this makes pictures. Saves a lot of time when you can make the entire book with one app. Very good.",
        rating: 5,
        date: "6 weeks ago",
        isNew: false,
        avatar: "M"
    },
    {
        name: "Mark Hayward",
        stats: "7 reviews • 1 photo",
        text: "Great, easy way to produce an AI content publication based on my knowledge and experience throughout my long career.",
        rating: 5,
        date: "9 weeks ago",
        isNew: false,
        avatar: "M"
    },
    {
        name: "Ricardo Caus",
        stats: "5 reviews • 0 photos",
        text: "Simplesmente fantástico, com poucas palavras ele resume um livro extremamente detalhado com muitos capítulos, perfeito!!! nota 10",
        rating: 5,
        date: "10 weeks ago",
        isNew: false,
        avatar: "R"
    }
];

export const GoogleReviews = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-6">
                        Real Reviews from Google
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10">
                        Don't just take our word for it - see what our users are saying about Automateed on Google Reviews
                    </p>
                    <button className="px-8 py-4 bg-[#6366f1] text-white rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-[#4f46e5] transition-all flex items-center justify-center gap-3 mx-auto">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#6366f1]">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                        </div>
                        Read More Google Reviews
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold overflow-hidden">
                                        {review.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0f172a] text-sm group-hover:text-blue-600 transition-colors">
                                            {review.name}
                                        </h4>
                                        <p className="text-[10px] text-slate-400 font-medium">{review.stats}</p>
                                    </div>
                                </div>
                                <div className="text-slate-300">
                                    <Info className="w-4 h-4" />
                                </div>
                            </div>

                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-200'}`} />
                                ))}
                                <span className="text-[10px] text-slate-400 ml-2">{review.date}</span>
                                {review.isNew && (
                                    <span className="text-[10px] bg-slate-100 text-slate-900 font-black px-1.5 py-0.5 rounded ml-2 uppercase">NEW</span>
                                )}
                            </div>

                            <p className="text-slate-600 text-[12px] leading-relaxed line-clamp-6 mb-4 whitespace-pre-line">
                                {review.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
