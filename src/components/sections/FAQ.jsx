import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionItem, Button } from "@heroui/react";
import { MessageSquare } from 'lucide-react';

export const FAQ = () => {
    return (
        <section className="py-24 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-slate-500 font-bold">
                        Everything you need to know about Automateed's AI eBook generator
                    </p>
                </div>

                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
                    <Accordion
                        variant="splitted"
                        className="p-0 gap-4"
                        itemClasses={{
                            base: "group-[.is-splitted]:bg-slate-50/50 group-[.is-splitted]:shadow-none border border-slate-100 rounded-2xl p-2",
                            title: "font-bold text-slate-700 text-sm",
                            trigger: "px-4 py-4",
                            indicator: "text-indigo-600 font-black",
                            content: "text-slate-500 text-sm font-medium leading-relaxed px-4 pb-4"
                        }}
                    >
                        <AccordionItem
                            key="1"
                            aria-label="How does the AI eBook generator work?"
                            title="How does the AI eBook generator work?"
                        >
                            Automateed uses advanced AI to transform your ideas into complete manuscripts. Simply provide a topic, niche, or outline, and our engine generates polished chapters, formats the layout, and even suggests cover designs—all in under 15 minutes.
                        </AccordionItem>
                        <AccordionItem
                            key="2"
                            aria-label="Can I customize the generated content?"
                            title="Can I customize the generated content?"
                        >
                            Absolutely! You have full control. You can edit the structure, rewrite sections, change titles, and even tailor the AI's tone to match your specific brand voice or project requirements.
                        </AccordionItem>
                        <AccordionItem
                            key="3"
                            aria-label="What formats are supported for publishing?"
                            title="What formats are supported for publishing?"
                        >
                            We support all major publishing formats, including PDF, ePub, and Kindle-ready (mobi/azw3) files. You'll also get high-resolution images for your covers and internal chapters.
                        </AccordionItem>
                        <AccordionItem
                            key="4"
                            aria-label="How long does it take to create an ebook?"
                            title="How long does it take to create an ebook?"
                        >
                            Most users complete their first draft, including cover design and formatting, in less than 15 minutes. The AI handles the bulk of the heavy lifting, leaving you to just polish and publish.
                        </AccordionItem>
                        <AccordionItem
                            key="5"
                            aria-label="Is there a free trial available?"
                            title="Is there a free trial available?"
                        >
                            Yes! We offer a no-risk trial of up to 5,000 words. This allows you to experience the quality of the AI and the ease of the platform before committing to a plan.
                        </AccordionItem>
                        <AccordionItem
                            key="6"
                            aria-label="Can I sell the ebooks I create?"
                            title="Can I sell the ebooks I create?"
                        >
                            Yes, you own 100% of the rights to the content you generate with Automateed. You can sell them on Amazon KDP, Google Play, your own website, or any other platform.
                        </AccordionItem>
                        <AccordionItem
                            key="7"
                            aria-label="What makes Automateed different from other AI tools?"
                            title="What makes Automateed different from other AI tools?"
                        >
                            Unlike generic AI writers, Automateed is specifically built for eBook creation. It includes built-in formatting, cover designers, marketing strategy generators, and is optimized for long-form content over 90+ pages.
                        </AccordionItem>
                        <AccordionItem
                            key="8"
                            aria-label="Do I need writing experience to use Automateed?"
                            title="Do I need writing experience to use Automateed?"
                        >
                            Not at all! Automateed is designed for everyone—from entrepreneurs and niche marketers to parents and teachers. Our intuitive interface guides you through every step of the process.
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="text-center mt-16">
                    <p className="text-slate-400 font-bold mb-6 text-sm">Still have questions? We're here to help!</p>
                    <Button
                        color="default"
                        variant="bordered"
                        className="rounded-full px-8 py-6 font-black text-slate-700 bg-white border-slate-200"
                        startContent={<MessageSquare className="w-5 h-5 text-slate-400" />}
                    >
                        Contact our support team
                    </Button>
                </div>
            </div>
        </section>
    );
};
