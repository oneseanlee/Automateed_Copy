import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Sparkles, BookOpen, Library } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const books = [
    {
        title: "The City That Forgot Tomorrow",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=400&h=600",
        category: "Fiction"
    },
    {
        title: "Money, Finally Explained",
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&q=80&w=400&h=600",
        category: "Finance & Investing"
    },
    {
        title: "Into the Quantum Realm",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=600",
        category: "Science & Nature"
    },
    {
        title: "The Last Outpost",
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400&h=600",
        category: "Fiction"
    },
    {
        title: "The Sword of Ember",
        image: "https://images.unsplash.com/photo-1543004471-2401f3bbaf1a?auto=format&fit=crop&q=80&w=400&h=600",
        category: "Fantasy"
    },
];

export const Showcase = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container relative mx-auto px-4 z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold mb-6">
                        <BookOpen className="w-3.5 h-3.5" />
                        Book Examples Created with automateed
                    </div>

                    <h2 className="text-5xl md:text-6xl font-black text-[#0f172a] mb-6 tracking-tight">
                        Imagine Your Book Here
                    </h2>
                    <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        These books were created using our AI-powered platform. From cover design to content structure <br className="hidden md:block" /> – your next bestseller could look just like this.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={2}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        coverflowEffect={{
                            rotate: 35,
                            stretch: -20,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                            el: '.custom-swiper-pagination',
                        }}
                        navigation={{
                            nextEl: '.custom-swiper-next',
                            prevEl: '.custom-swiper-prev',
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="book-swiper !pb-24 !pt-10"
                    >
                        {books.map((book, index) => (
                            <SwiperSlide key={index} className="!w-[280px] md:!w-[320px]">
                                <div className="relative group perspective-[1200px]">
                                    <div className="relative rounded-lg overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white transition-transform duration-500 group-hover:scale-[1.02]">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="w-full aspect-[2/3] object-cover"
                                        />
                                        {/* Inner Glow/Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/10 pointer-events-none" />
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full -z-10" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Active slide info */}
                    <div className="absolute bottom-[-20px] left-0 right-0 flex flex-col items-center pointer-events-none">
                        <h3 className="text-2xl font-black text-[#0f172a] mb-3 tracking-tight">
                            {books[activeIndex]?.title}
                        </h3>
                        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#0095ff] text-white text-sm font-bold shadow-[0_4px_15px_rgba(0,149,255,0.3)]">
                            <Library className="w-4 h-4 fill-white/20" />
                            {books[activeIndex]?.category}
                        </div>
                    </div>

                    {/* Navigation buttons */}
                    <button className="custom-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button className="custom-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:scale-110 transition-all">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* Custom Pagination & Footer */}
                <div className="flex flex-col items-center mt-20 gap-8">
                    <div className="custom-swiper-pagination flex justify-center gap-1.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:bg-slate-200 [&_.swiper-pagination-bullet-active]:w-8 [&_.swiper-pagination-bullet-active]:bg-indigo-600 [&_.swiper-pagination-bullet]:transition-all [&_.swiper-pagination-bullet]:cursor-pointer" />

                    <p className="text-slate-400 font-medium text-sm">
                        Click any book to explore • Drag to browse
                    </p>

                    <button className="bg-[#6c47ff] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_10px_30px_rgba(108,71,255,0.3)] hover:shadow-[0_15px_40px_rgba(108,71,255,0.4)] transition-all flex items-center gap-2.5 translate-y-0 hover:-translate-y-1 group">
                        <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Create a Similar Book
                        <span className="text-xl">→</span>
                    </button>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .book-swiper .swiper-slide {
                    transition: opacity 0.4s ease;
                }
                .book-swiper .swiper-slide:not(.swiper-slide-active) {
                    opacity: 0.6;
                }
                .book-swiper .swiper-slide-shadow-left,
                .book-swiper .swiper-slide-shadow-right {
                    border-radius: 8px;
                }
            `}} />
        </section>
    );
};
