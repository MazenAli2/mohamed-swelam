"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const allCases = [
    {
        title: "حملة توسع لمتجر إلكتروني (E-commerce)",
        challenge: "انخفاض معدل التحويل وارتفاع تكلفة الاستحواذ على العميل.",
        strategy: "إعادة هيكلة الحملات الإعلانية واستخدام محتوى فيديو تفاعلي مع استهداف دقيق.",
        result: { roas: "8.4x", growth: "+300%", sales: "+1.2M EGP" },
        tag: "Media Buying",
    },
    {
        title: "بناء هوية لشركة خدمات عقارية",
        challenge: "غمار العلامة التجارية وسط المنافسين وضعف الثقة لدى العملاء.",
        strategy: "تصميم استراتيجية براندينج كاملة تركز على 'السلطة المعرفية' وصناعة محتوى تعليمي.",
        result: { roas: "N/A", growth: "+150%", sales: "24 Units Sold" },
        tag: "Branding",
    },
    {
        title: "إطلاق منتج جديد (SaaS)",
        challenge: "صعوبة وصول الرسالة التسويقية للجمهور المستهدف.",
        strategy: "خطة نمو شاملة تعتمد على الـ Omni-channel marketing والـ Retargeting المكثف.",
        result: { roas: "5.2x", growth: "+450%", sales: "2000+ Subs" },
        tag: "Full Strategy",
    },
    {
        title: "تحسين مبيعات منصة تدريب أونلاين",
        challenge: "ضعف الوعي بالعلامة التجارية في دول الخليج.",
        strategy: "حملات إعلانية تعتمد على المؤثرين وإعادة استهداف مكثفة لمن أكملوا 50% من الفيديو.",
        result: { roas: "4.8x", growth: "+200%", sales: "+500k$" },
        tag: "Digital Marketing",
    },
    {
        title: "استراتيجية نمو لشركة تأمين ناشئة",
        challenge: "صعوبة الحصول على بيانات العملاء المحتملين (Leads) بكلفة منخفضة.",
        strategy: "بناء Funnel متكامل يعتمد على Lead Magnet (كتاب مجاني) ثم تحويلهم عبر البريد.",
        result: { roas: "N/A", growth: "+320%", sales: "5000+ Leads" },
        tag: "Growth Hacking",
    },
    {
        title: "إعادة بناء براند لشركة تجارة تجزئة",
        challenge: "الصورة الذهنية للشركة كانت قديمة ولا تجذب جيل الشباب.",
        strategy: "تغيير الهوية البصرية بالكامل وإطلاق حملة 'تجرأ على التغيير' عبر TikTok.",
        result: { roas: "7.1x", growth: "+180%", sales: "+3M EGP" },
        tag: "Re-Branding",
    },
];

export default function CaseStudies() {
    const [showAll, setShowAll] = useState(false);

    const displayedCases = showAll ? allCases : allCases.slice(0, 3);

    return (
        <section id="cases" className="py-32 px-4 relative overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            نتائج تتحدث عن <span className="text-primary text-glow italic">نفسها</span>
                        </motion.h2>
                        <p className="text-white/50 max-w-xl">
                            نحن نؤمن بالأرقام والنتائج الملموسة. إليك بعض من قصص النجاح التي ساهمنا في تحقيقها لشركائنا.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 text-primary hover:text-white transition-colors font-bold group"
                    >
                        {showAll ? "عرض أقل" : "المزيد من المشاريع"}
                        {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />}
                    </button>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedCases.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="glass-card p-1 overflow-hidden group"
                            >
                                <div className="bg-surface/50 p-8 rounded-[19px] h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{project.tag}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-6 leading-tight">{project.title}</h3>

                                    <div className="space-y-4 mb-8 flex-grow">
                                        <div>
                                            <div className="text-xs text-white/30 uppercase mb-1">التحدي</div>
                                            <p className="text-sm text-white/70">{project.challenge}</p>
                                        </div>
                                        <div>
                                            <div className="text-xs text-white/30 uppercase mb-1">الاستراتيجية</div>
                                            <p className="text-sm text-white/70">{project.strategy}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 pt-6 border-t border-white/5">
                                        <div className="text-center">
                                            <div className="text-primary font-bold">{project.result.roas}</div>
                                            <div className="text-[10px] text-white/40">ROAS</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-primary font-bold">{project.result.growth}</div>
                                            <div className="text-[10px] text-white/40">نمو</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-primary font-bold">{project.result.sales}</div>
                                            <div className="text-[10px] text-white/40">نتائج</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
