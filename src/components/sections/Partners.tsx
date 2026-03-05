"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "السعدي إلكتريك", country: "العراق", category: "الطاقة الشمسية" },
    { name: "Virtual Community", country: "السعودية", category: "حاضنات أعمال" },
    { name: "Positive Vibes", country: "السعودية", category: "مساحات عمل" },
    { name: "Pro Gear Egypt", country: "مصر", category: "معدات دراجات" },
    { name: "دكتور راشيل", country: "الأردن/فلسطين", category: "منتجات تجميل" },
    { name: "بودكاست الملتقى", country: "السعودية", category: "صناعة محتوى" },
    { name: "Luban AlGhazal", country: "مصر", category: "صناعة اللبان" },
    { name: "CrowTutor", country: "أونلاين", category: "تعليم وتوجيه" },
];

export default function Partners() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-bold mb-4 opacity-80"
                    >
                        شـركاء <span className="text-primary tracking-widest uppercase">النـجاح</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-default"
                        >
                            <div className="glass-card bg-white/[0.02] border-white/5 px-6 py-8 flex flex-col items-center gap-3 w-40 h-40 justify-center text-center transition-all group-hover:border-primary/30 group-hover:bg-primary/[0.02]">
                                <div className="text-white font-bold group-hover:text-primary transition-colors text-sm md:text-base leading-tight">
                                    {partner.name}
                                </div>
                                <div className="text-[10px] uppercase tracking-tighter text-white/30 group-hover:text-white/50 transition-colors">
                                    {partner.category} • {partner.country}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
