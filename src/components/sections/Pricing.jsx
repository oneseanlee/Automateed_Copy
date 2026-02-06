import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, Tab, Card, CardHeader, CardBody, CardFooter, Button, Progress, Chip } from "@heroui/react";
import { Book, Image as ImageIcon, Zap, Check } from 'lucide-react';

const PricingCard = ({ title, price, ebooks, images, tasks, features, spots, totalSpots, isPopular, isPower }) => (
    <Card className="flex-1 min-w-[300px] border-none shadow-xl hover:shadow-2xl transition-all duration-300">
        <CardHeader className="flex flex-col gap-2 p-0">
            <div className={`w-full py-8 text-center text-white relative overflow-hidden ${isPower ? 'bg-slate-900' : 'bg-[#0f172a]'}`}>
                {isPopular && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                        <Chip size="sm" color="warning" variant="solid" className="font-bold">★ MOST POPULAR</Chip>
                    </div>
                )}
                {isPower && (
                    <div className="absolute top-4 left-1/2 -translate-x-1/2">
                        <Chip size="sm" color="primary" variant="solid" className="font-bold">⚡ POWER USERS</Chip>
                    </div>
                )}
                <h4 className="text-xl font-bold opacity-80 mb-2">{title}</h4>
                <div className="flex items-center justify-center gap-1">
                    <span className="text-4xl font-black">${price}</span>
                </div>
                <p className="text-xs opacity-60">One-time payment</p>
            </div>
        </CardHeader>
        <CardBody className="p-8">
            <div className="text-center mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Monthly Credits</p>
                <div className="flex justify-between items-center text-[#0f172a]">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black">{ebooks}</span>
                        <div className="flex items-center gap-1 opacity-50">
                            <Book className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold">eBooks</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black">{images}</span>
                        <div className="flex items-center gap-1 opacity-50">
                            <ImageIcon className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold">Images</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl font-black">{tasks}</span>
                        <div className="flex items-center gap-1 opacity-50">
                            <Zap className="w-3 h-3" />
                            <span className="text-[10px] uppercase font-bold">Tasks</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4 mb-10">
                <p className="text-xs font-bold text-slate-900 mb-2">What's Included</p>
                {features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs text-slate-600 font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <div className="space-y-4">
                <Progress
                    color="danger"
                    size="sm"
                    value={(spots / totalSpots) * 100}
                    className="max-w-md"
                    classNames={{
                        indicator: "bg-orange-500",
                        track: "bg-slate-100"
                    }}
                />
                <p className="text-[10px] text-center font-bold text-slate-400">
                    {spots} of {totalSpots} spots claimed
                </p>
            </div>
        </CardBody>
        <CardFooter className="p-8 pt-0">
            <Button
                color="primary"
                size="lg"
                className="w-full font-black text-sm shadow-lg shadow-blue-100"
                startContent={<div className="w-4 h-4 bg-white/20 rounded-sm flex items-center justify-center text-[10px]">C</div>}
            >
                Get Access ${price}
            </Button>
        </CardFooter>
    </Card>
);

export const Pricing = () => {
    return (
        <section className="py-24 bg-white overflow-hidden text-[#0f172a]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black mb-10">
                        Choose Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Plan</span>
                    </h2>

                    <div className="flex justify-center mb-12">
                        <Tabs
                            aria-label="Options"
                            color="secondary"
                            radius="full"
                            classNames={{
                                tabList: "bg-slate-100 p-1",
                                cursor: "bg-white text-indigo-600 shadow-sm",
                                tab: "px-8 py-4 font-bold h-12",
                                tabContent: "group-data-[selected=true]:text-indigo-600"
                            }}
                        >
                            <Tab
                                key="lifetime"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 bg-purple-500 rounded-sm flex items-center justify-center text-white text-[8px]">W</div>
                                        <span>Lifetime Access</span>
                                    </div>
                                }
                            />
                            <Tab
                                key="subscriptions"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <Zap className="w-4 h-4" />
                                        <span>Subscriptions</span>
                                    </div>
                                }
                            />
                        </Tabs>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
                        <Chip
                            size="lg"
                            color="success"
                            variant="flat"
                            className="font-black px-4 h-12 text-sm bg-emerald-500 text-white border-none"
                            startContent={<span className="text-lg mr-1">$</span>}
                        >
                            ONE-TIME PAYMENT — No Subscription!
                        </Chip>
                    </div>
                    <p className="text-slate-400 font-bold mb-16">
                        Pay once, use forever. No monthly fees, no hidden costs.
                    </p>

                    {/* Features Mini Row */}
                    <div className="flex flex-wrap justify-center gap-8 mb-20">
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-w-[200px] flex flex-col items-center">
                            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
                                <span className="text-xl">$</span>
                            </div>
                            <h5 className="font-black text-lg mb-1">Pay Once</h5>
                            <p className="text-[10px] text-slate-400 font-bold">No monthly payments, ever</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-w-[200px] flex flex-col items-center">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                                <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center text-white text-[10px]">W</div>
                            </div>
                            <h5 className="font-black text-lg mb-1">Lifetime Access</h5>
                            <p className="text-[10px] text-slate-400 font-bold">Use it forever</p>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm min-w-[200px] flex flex-col items-center">
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                                <Zap className="w-5 h-5" />
                            </div>
                            <h5 className="font-black text-lg mb-1">Credits Reset Monthly</h5>
                            <p className="text-[10px] text-slate-400 font-bold">Automatically each month</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto mb-16 px-4">
                    <PricingCard
                        title="Entry Lifetime"
                        price="149"
                        ebooks="4"
                        images="40"
                        tasks="100"
                        features={[
                            "All features unlocked",
                            "Access to 6 free courses",
                            "Free lifetime updates included",
                            "Premium email support"
                        ]}
                        spots={22}
                        totalSpots={25}
                    />
                    <PricingCard
                        title="Standard Lifetime"
                        price="239"
                        ebooks="8"
                        images="80"
                        tasks="200"
                        features={[
                            "All features unlocked",
                            "Access to 6 free courses",
                            "Free lifetime updates included",
                            "Premium email support",
                            "Priority response time"
                        ]}
                        spots={73}
                        totalSpots={75}
                    />
                    <PricingCard
                        title="Pro Lifetime"
                        price="299"
                        ebooks="12"
                        images="120"
                        tasks="300"
                        isPopular={true}
                        features={[
                            "All features unlocked",
                            "Access to 6 free courses",
                            "Free lifetime updates included",
                            "Premium email support",
                            "Priority response time",
                            "Early access to new features"
                        ]}
                        spots={47}
                        totalSpots={50}
                    />
                    <PricingCard
                        title="Elite Lifetime"
                        price="997"
                        ebooks="100"
                        images="1000"
                        tasks="10k"
                        isPower={true}
                        features={[
                            "All features unlocked",
                            "Access to 6 free courses",
                            "Free lifetime updates included",
                            "Priority 24/7 support",
                            "Early access to new features",
                            "Personal 1-on-1 onboarding call",
                            "Dedicated account manager"
                        ]}
                        spots={24}
                        totalSpots={25}
                    />
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-emerald-600 font-black text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 bg-emerald-500 text-white rounded flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        Secure Payment
                    </div>
                    <div className="flex items-center gap-1 ml-4 text-emerald-600">
                        <div className="w-4 h-4 bg-emerald-500 text-white rounded flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        Instant Access
                    </div>
                    <div className="flex items-center gap-1 ml-4 text-emerald-600">
                        <div className="w-4 h-4 bg-emerald-500 text-white rounded flex items-center justify-center">
                            <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        Lifetime Updates
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a href="#" className="text-indigo-600 font-black text-sm underline underline-offset-4 hover:text-indigo-700 transition-colors">
                        Learn more about our lifetime deals →
                    </a>
                </div>
            </div>
        </section>
    );
};
