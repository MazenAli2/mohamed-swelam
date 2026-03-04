"use client";

import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, BarChart, Rocket } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Glows */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 text-primary mb-8"
                >
                    <TrendingUp size={16} />
                    <span className="text-sm font-medium">خبير نمو وتوسع العلامات التجارية</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
                >
                    نصنع <span className="text-primary text-glow italic">النمو</span> لعلامتك <br /> التجارية
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
                >
                    محمد سويلم - شريكك في النجاح. نجمع بين الإبداع في المحتوى ودقة استهداف الحملات الإعلانية لتحقيق مبيعات قياسية وتوسع مستدام.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <a href="#contact" className="px-8 py-4 rounded-xl bg-primary text-black font-bold text-lg neo-glow flex items-center gap-3 group">
                        ابدأ رحلة النمو الآن
                        <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    </a>

                    <a href="#cases" className="px-8 py-4 rounded-xl glass-card border-white/10 hover:bg-white/5 transition-colors font-medium">
                        عرض دراسات الحالة
                    </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto"
                >
                    {[
                        { label: "ميزانية إعلانية مدارة", val: "+5M$" },
                        { label: "متوسط العائد ROAS", val: "6.5x" },
                        { label: "عملاء نشطين", val: "50+" },
                        { label: "قصص نجاح", val: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
                            <div className="text-sm text-white/40">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
