
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useContext } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, BookOpen, Users, Star, Globe, Shield, Calendar, MapPin, Heart, Stethoscope, Baby, Activity, Quote, BadgeCheck, GraduationCap, Languages, Sparkles, Navigation, Facebook, Instagram, Twitter, Youtube, Linkedin, ExternalLink, Mouse, ShieldCheck, Clock } from 'lucide-react';
import { SiteContext } from '../App';
import { ExperienceTimeline, TestimonialCarousel, DailyLifeGallery, ContactForm, EducationTimeline } from './Diagrams';

// Helper for page transitions
const PageTransition: React.FC<React.PropsWithChildren<{}>> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="min-h-screen pt-24 pb-12 px-6 md:px-12"
  >
    {children}
  </motion.div>
);

export const HomePage = () => {
  const ctx = useContext(SiteContext);
  const { scrollY } = useScroll();
  // Parallax effect: moves image down 150px as user scrolls 1000px
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  if (!ctx) return null;

  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col">
        {/* --- AMBIENT BACKGROUND DECORATION --- */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[var(--primary)]/5 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-amber-500/5 rounded-full blur-[80px] opacity-30"></div>
        </div>

        {/* --- HERO SECTION --- */}
        <div className="container mx-auto px-6 flex-grow flex flex-col justify-center pt-24 pb-12 md:py-20 relative z-10">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full"
            >
                {/* TEXT CONTENT (Spans 7 columns) */}
                <div className="order-2 md:order-1 col-span-1 md:col-span-7 z-10 flex flex-col justify-center">
                    <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-stone-900 dark:text-white mb-6 tracking-tight">
                        {ctx.content.hero.title}
                    </h1>

                    {/* Badge moved here */}
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500 text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg hover:bg-amber-600 transition-colors cursor-default">
                            <BadgeCheck size={14} /> Certified Medical Professional
                        </div>
                    </div>

                    <p className="text-lg sm:text-xl md:text-2xl font-normal text-stone-600 dark:text-stone-300 mb-10 italic font-sans block max-w-2xl leading-relaxed">
                        {ctx.content.hero.description}
                    </p>

                    <div className="flex flex-col items-start gap-3 mb-10">
                         <div className="inline-flex items-center gap-3 px-5 py-3 border border-[var(--primary)]/30 text-[var(--primary)] text-sm font-bold tracking-widest uppercase rounded-2xl bg-white/50 dark:bg-black/40 backdrop-blur-sm shadow-sm whitespace-normal text-left">
                            <Award size={20} className="shrink-0" /> 
                            <span className="text-xs sm:text-sm">Specialist (MBBS, DOWH) <span className="opacity-50 mx-2">|</span> Aster Al Raffah Hospital</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-5 mt-2 w-full sm:w-auto">
                        <button 
                            onClick={() => window.open('https://www.aster.om/doctors/dr-monia-zaman/', '_blank')} 
                            className="px-8 py-4 bg-[var(--primary)] text-white rounded-full font-bold shadow-lg shadow-[var(--primary)]/30 hover:shadow-xl hover:-translate-y-1 transition-all text-center flex items-center justify-center gap-2 w-full sm:w-auto text-lg"
                        >
                            Book Appointment <ExternalLink size={20} />
                        </button>
                        <button onClick={() => ctx.navigate('about')} className="px-8 py-4 bg-white dark:bg-stone-800 text-stone-800 dark:text-white border border-stone-200 dark:border-stone-700 rounded-full font-bold hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors text-center w-full sm:w-auto text-lg">
                            Learn More
                        </button>
                    </div>

                    {/* Enhanced Stats Row */}
                    <div className="mt-16 grid grid-cols-2 gap-6 max-w-md">
                        <div className="p-4 rounded-2xl bg-white/60 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-1">
                                <Clock className="text-[var(--primary)]" size={20} />
                                <div className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white font-serif">25+</div>
                            </div>
                            <div className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Years Experience</div>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/60 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-1">
                                <Users className="text-[var(--primary)]" size={20} />
                                <div className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white font-serif">10k+</div>
                            </div>
                            <div className="text-[10px] uppercase tracking-wider font-bold text-stone-500">Patients Treated</div>
                        </div>
                    </div>
                </div>

                {/* IMAGE CONTENT (Spans 5 columns) */}
                <div className="order-1 md:order-2 col-span-1 md:col-span-5 flex justify-center relative z-10 mt-4 md:mt-0 w-full h-full items-center">
                     {/* Transparent Image Holder with Parallax Effect */}
                     {/* Changed w-full to w-auto/mx-auto so the wrapper hugs the image width, keeping absolute cards close */}
                    <motion.div 
                        style={{ y }}
                        className="relative h-[55vh] sm:h-[60vh] md:h-[75vh] max-h-[800px] flex items-end justify-center mx-auto"
                    >
                        {/* Floating Glass Card 1 (Top Left) */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute top-[15%] -left-6 md:-left-20 z-20 hidden md:flex items-center gap-3 p-4 rounded-2xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-white/50 dark:border-stone-700 shadow-2xl max-w-[200px]"
                        >
                            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-500 shrink-0">
                                <Star fill="currentColor" size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-stone-900 dark:text-white">Top Rated</div>
                                <div className="text-xs text-stone-500">5-Star Care</div>
                            </div>
                        </motion.div>

                        {/* Floating Glass Card 2 (Bottom Right) */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="absolute bottom-[20%] -right-6 md:-right-10 z-20 hidden md:flex items-center gap-3 p-4 rounded-2xl bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-white/50 dark:border-stone-700 shadow-2xl"
                        >
                            <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                                <ShieldCheck size={20} />
                            </div>
                            <div>
                                <div className="text-sm font-bold text-stone-900 dark:text-white">Verified Expert</div>
                                <div className="text-xs text-stone-500">OBGYN Specialist</div>
                            </div>
                        </motion.div>

                        {ctx.content.hero.imageUrl.includes('placeholder') ? (
                            <div className="w-full h-full flex items-center justify-center bg-stone-100 dark:bg-stone-800/50 rounded-3xl border-2 border-dashed border-stone-300 pointer-events-auto aspect-[3/4]">
                                <div className="flex flex-col items-center gap-4 text-stone-400 text-center p-8">
                                    <span className="font-serif text-6xl opacity-20">MBBS</span>
                                    <p className="text-sm uppercase tracking-widest font-bold">Dr. Monia Image<br/>(Transparent PNG)</p>
                                </div>
                            </div>
                        ) : (
                            <img 
                                src={ctx.content.hero.imageUrl} 
                                alt="Dr. Monia Zaman" 
                                fetchPriority="high"
                                className="w-auto h-full max-w-full object-contain object-bottom drop-shadow-2xl relative z-10 hover:scale-105 hover:brightness-110 transition-all duration-700 cursor-pointer pointer-events-auto"
                            />
                        )}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 dark:text-stone-500"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
                <motion.div 
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <Mouse size={24} />
                </motion.div>
            </motion.div>
        </div>

        {/* --- MISSION STATEMENT --- */}
        <div className="bg-white dark:bg-stone-900 py-16 md:py-24 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-30"></div>
             <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                 <h2 className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[var(--primary)] uppercase mb-6">Our Mission Statement</h2>
                 <p className="font-serif text-2xl sm:text-3xl md:text-5xl leading-tight text-stone-800 dark:text-stone-100 mb-8">
                    "To provide exceptional, compassionate, and evidence-based women’s healthcare, while uplifting every patient with <span className="text-[var(--primary)] italic">dignity, understanding, and respect</span>."
                 </p>
                 <div className="w-20 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
             </div>
        </div>

        {/* --- EXPERTISE GRID --- */}
        <div className="py-16 md:py-24 bg-stone-100 dark:bg-black">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-white mb-4">Comprehensive Women's Healthcare</h2>
                        <p className="text-stone-600 dark:text-stone-400 text-base md:text-lg">
                            Dedicated to empowering women's health with skill, empathy, and integrity across all stages of life.
                        </p>
                    </div>
                    <button onClick={() => ctx.navigate('portfolio')} className="hidden md:flex items-center gap-2 text-[var(--primary)] font-bold uppercase tracking-wide hover:text-stone-900 dark:hover:text-white transition-colors">
                        View Full Portfolio <ArrowRight size={16} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {[
                        { icon: Baby, title: "Obstetrics", desc: "High-risk pregnancies, ANC/PNC, and safe deliveries with a gentle touch." },
                        { icon: Stethoscope, title: "Gynecology", desc: "Diagnosis and treatment of complex gynecological conditions and disorders." },
                        { icon: Activity, title: "Infertility", desc: "Compassionate support and advanced treatments for reproductive health." },
                        { icon: Heart, title: "Well Woman", desc: "Preventive screenings, menopause management, and holistic care." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-stone-900 p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                            <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center text-[var(--primary)] mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                                <item.icon size={28} />
                            </div>
                            <h3 className="font-serif text-2xl text-stone-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-stone-500 dark:text-stone-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
                
                 <button onClick={() => ctx.navigate('portfolio')} className="mt-8 md:hidden w-full py-4 bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl font-bold text-[var(--primary)] flex items-center justify-center gap-2">
                        View Full Portfolio <ArrowRight size={16} />
                </button>
            </div>
        </div>

        {/* --- QUOTE PARALLAX (Redesigned) --- */}
        <div className="py-24 md:py-32 relative flex items-center justify-center overflow-hidden">
            {/* Dark elegant background for contrast against light sections */}
            <div className="absolute inset-0 z-0 bg-stone-950">
                 <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-black opacity-90"></div>
                 {/* Subtle pattern or texture could go here */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                 <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 md:mb-10 flex justify-center"
                 >
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
                         <Quote className="text-[var(--primary)] fill-[var(--primary)]" size={20} />
                    </div>
                 </motion.div>
                 
                 <motion.h2 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-serif text-2xl sm:text-3xl md:text-5xl md:leading-[1.4] text-stone-100 max-w-4xl mx-auto italic tracking-wide font-light"
                 >
                    <span className="text-[var(--primary)] opacity-60 text-4xl md:text-6xl align-top mr-2 leading-none">"</span>
                    Every patient’s story matters — compassion is part of the treatment.
                    <span className="text-[var(--primary)] opacity-60 text-4xl md:text-6xl align-bottom ml-2 leading-none">"</span>
                 </motion.h2>

                 <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-8 md:mt-12 flex flex-col items-center gap-4"
                 >
                    <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent opacity-70"></div>
                    <p className="text-stone-400 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">Dr. Monia Zaman</p>
                 </motion.div>
            </div>
        </div>

        {/* --- WHY CHOOSE DR MONIA (No Image) --- */}
        <div className="py-16 md:py-24 bg-white dark:bg-stone-900">
            <div className="container mx-auto px-6">
                 <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-6 flex items-center justify-center gap-2">
                        <Globe size={16} /> Global Experience with Local Values
                    </h2>
                    <h3 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-white mb-6 md:mb-8">A Proud Bangladeshi Serving the Gulf Community</h3>
                    <p className="text-stone-500 text-base md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto">
                        Combining decades of international medical expertise with a deep respect for cultural values and individual patient needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 text-left">
                        {[
                            { title: "25+ Years of Trust", text: "Two and a half decades of unwavering dedication to women's health in the Gulf region." },
                            { title: "Compassion-Driven", text: "Believes in blending medical excellence with empathy, ensuring patients feel supported." },
                            { title: "Cultural Connection", text: "Fluent in English, Bangla, Arabic, Hindi, and Urdu, bridging communication gaps effortlessly." },
                            { title: "Highly Respected", text: "Currently serving at Aster Al Raffah Hospital, one of the region's most reputable institutions." }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex gap-4 p-6 bg-stone-50 dark:bg-stone-800 rounded-xl border border-stone-100 dark:border-stone-700 hover:border-[var(--primary)]/30 transition-colors shadow-sm hover:shadow-lg">
                                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center text-white shadow-lg">
                                    <CheckCircle size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 dark:text-white text-lg">{feature.title}</h4>
                                    <p className="text-stone-500 text-sm mt-2 leading-relaxed">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>
        </div>

        {/* --- PATIENT STORIES --- */}
        <div className="py-16 md:py-24 bg-stone-50 dark:bg-black border-y border-stone-200 dark:border-stone-800">
             <div className="container mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-900 dark:text-white mb-4">Patient Stories</h2>
                    <p className="text-stone-500 max-w-xl mx-auto">
                        Hearing from those we've served is the greatest validation of our work.
                    </p>
                </div>
                <TestimonialCarousel />
             </div>
        </div>

        {/* --- CONTACT CTA --- */}
        <div className="bg-white dark:bg-stone-900 py-16 md:py-24">
            <div className="container mx-auto px-6">
                 <div className="max-w-4xl mx-auto bg-stone-50 dark:bg-stone-800 p-6 md:p-12 rounded-3xl shadow-2xl border border-stone-200 dark:border-stone-700">
                    <div className="text-center mb-8 md:mb-10">
                        <h2 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-2">Start Your Health Journey</h2>
                        <p className="text-stone-500">Send a direct message to Dr. Monia for appointments or consultations.</p>
                    </div>
                    <ContactForm />
                 </div>
            </div>
        </div>
    </div>
  );
};

export const AboutPage = () => {
    const ctx = useContext(SiteContext);
    if (!ctx) return null;

    const languages = [
        { name: 'English', level: 95 },
        { name: 'Bangla', level: 100 },
        { name: 'Arabic', level: 90 },
        { name: 'Hindi', level: 85 },
        { name: 'Urdu', level: 85 }
    ];

    const education = [
        { year: "1997-2002", title: "Medical Degree MBBS", inst: "Medical College for Women & Hospital, Dhaka University", note: "Excelled in academic performance" },
        { year: "2012", title: "DOWH", inst: "Ireland", note: "Diploma in Obstetrics and Women Health" },
        { year: "2023", title: "MRCOG - Part 1", inst: "Royal College of Physician & Surgeons of ENGLAND", note: "Advanced Certification" }
    ];

    return (
        <PageTransition>
            <div className="container mx-auto max-w-6xl pb-20">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-xs md:text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-3">About Dr. Monia</h2>
                    <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-white mb-6">Compassion, Excellence, Dignity</h1>
                    <div className="w-16 md:w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </div>

                {/* --- INTRO SECTION --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-16 md:mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img 
                            src="https://iili.io/fCECdjp.png" 
                            alt="Dr. Monia Zaman" 
                            loading="eager"
                            fetchPriority="high"
                            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700"
                        />
                         <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-40 md:h-40 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-4 md:mb-6 leading-tight">A Journey of Dedication to Women's Health</h3>
                            <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                                Dr. Monia Zaman is a highly respected Bangladeshi Specialist in Obstetrics & Gynaecology, serving in the Gulf region for the past 25 years. Currently practicing at <strong className="text-[var(--primary)]">Aster Al Raffah Hospital</strong> in Muscat, Oman.
                            </p>
                            <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                                Living abroad for many years, she continues to persevere through challenges with one purpose — to support and uplift her family. Her journey reflects strength, sacrifice, and a deep love for those she works for and cares for.
                            </p>
                        </div>

                        {/* --- LANGUAGES --- */}
                        <div className="bg-white dark:bg-stone-800 p-6 md:p-8 rounded-2xl shadow-lg border border-stone-100 dark:border-stone-700">
                             <h4 className="font-bold text-lg mb-6 flex items-center gap-2 text-stone-900 dark:text-white"><Languages size={20} className="text-[var(--primary)]"/> Language Fluency</h4>
                             <div className="space-y-4">
                                {languages.map((lang, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between text-sm mb-1 font-medium text-stone-700 dark:text-stone-300">
                                            <span>{lang.name}</span>
                                            <span>{lang.level}%</span>
                                        </div>
                                        <div className="w-full h-2 bg-stone-100 dark:bg-stone-700 rounded-full overflow-hidden">
                                            <motion.div 
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${lang.level}%` }}
                                                transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                                                className="h-full bg-[var(--primary)] rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </motion.div>
                </div>

                {/* --- PHILOSOPHY PARALLAX STRIP --- */}
                <div className="w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] mb-16 md:mb-24 py-16 md:py-24 bg-stone-900 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <Quote className="text-[var(--primary)] mx-auto mb-6 opacity-80" size={36} />
                        <h3 className="font-serif text-2xl md:text-5xl text-white italic max-w-4xl mx-auto leading-normal">
                             "{ctx.content.about.philosophy}"
                        </h3>
                    </div>
                </div>

                {/* --- EDUCATION CARDS --- */}
                <div className="mb-20">
                     <h3 className="text-2xl md:text-3xl font-serif text-stone-900 dark:text-white mb-8 md:mb-12 text-center flex items-center justify-center gap-3">
                        <GraduationCap size={28} className="text-[var(--primary)]" /> Educational Milestones
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {education.map((edu, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                                className="bg-stone-50 dark:bg-stone-800 p-6 md:p-8 rounded-2xl border-t-4 border-[var(--primary)] shadow-md hover:shadow-xl transition-shadow"
                            >
                                <div className="text-4xl md:text-5xl font-serif text-stone-200 dark:text-stone-700 mb-4 font-bold select-none">{edu.year}</div>
                                <h4 className="font-bold text-lg md:text-xl text-stone-900 dark:text-white mb-2">{edu.title}</h4>
                                <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">{edu.inst}</p>
                                <span className="inline-block px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold rounded-full">
                                    {edu.note}
                                </span>
                            </motion.div>
                        ))}
                     </div>
                </div>
            </div>
        </PageTransition>
    );
}

export const PortfolioPage = () => {
    return (
        <PageTransition>
            <div className="container mx-auto max-w-6xl pb-20">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-xs md:text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-3">Professional Track Record</h2>
                    <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-white mb-6">Expertise & Experience</h1>
                    <div className="w-16 md:w-24 h-1 bg-[var(--primary)] mx-auto rounded-full"></div>
                </div>

                {/* --- SKILLS DASHBOARD --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
                     {/* Clinical Expertise Grid - UPDATED FOR ELEGANCE */}
                    <div className="lg:col-span-2 bg-stone-100 dark:bg-stone-900/50 p-6 md:p-10 rounded-3xl shadow-sm border border-stone-200 dark:border-stone-800">
                        <h3 className="font-serif text-2xl text-stone-900 dark:text-white mb-8 flex items-center gap-2">
                            <Sparkles className="text-[var(--primary)]" /> Clinical Expertise
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Obstetrics & Gynecology",
                                "Infertility Treatment",
                                "High-risk Pregnancy Management",
                                "Minimally Invasive Procedures",
                                "Preventive Gynaecological Care",
                                "Antenatal & Postnatal Care",
                            ].map((skill, i) => (
                                <motion.div 
                                    key={i} 
                                    whileHover={{ y: -2, scale: 1.01 }}
                                    className="flex items-center gap-4 p-5 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 hover:border-[var(--primary)] shadow-sm hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 group-hover:bg-[var(--primary)] flex items-center justify-center text-[var(--primary)] group-hover:text-white transition-colors">
                                        <CheckCircle size={18} />
                                    </div>
                                    <span className="font-medium text-stone-700 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Key Skills Cloud - UPDATED */}
                    <div className="bg-stone-900 dark:bg-black text-white p-6 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-stone-800">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--primary)] rounded-full filter blur-[80px] opacity-20 -translate-y-1/3 translate-x-1/3"></div>
                        <h3 className="font-serif text-2xl mb-8 relative z-10">Technical & Soft Skills</h3>
                        <div className="flex flex-wrap gap-3 relative z-10">
                            {[
                                "Cesarean Sections", "Hysterectomy", "Laparoscopy", "Ultrasound (OBS-GYNAE)",
                                "Family Planning", "Patient Counseling", "Emergency Care", "Medical Ethics", "Leadership"
                            ].map((tag, i) => (
                                <span key={i} className="px-4 py-2 bg-white/5 hover:bg-white/10 text-stone-200 text-sm rounded-full cursor-default transition-all border border-white/10 hover:border-white/30 hover:text-white">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- TIMELINES SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:mb-24">
                    {/* Career Timeline */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-serif text-stone-900 dark:text-white mb-8 flex items-center gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                            <Calendar className="text-[var(--primary)]"/> Professional Experience
                        </h3>
                        <ExperienceTimeline />
                    </div>

                    {/* Education Timeline */}
                    <div>
                         <h3 className="text-xl md:text-2xl font-serif text-stone-900 dark:text-white mb-8 flex items-center gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                            <GraduationCap className="text-amber-500"/> Education & Qualifications
                        </h3>
                        <EducationTimeline />
                    </div>
                </div>

                {/* --- TESTIMONIALS SECTION (Separated Background) --- */}
                <div className="bg-stone-100 dark:bg-black p-6 md:p-12 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-inner">
                    <div className="text-center mb-8 md:mb-12">
                         <h3 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-white">What Patients Say</h3>
                         <p className="text-stone-500 mt-2">Real stories from real lives touched by Dr. Monia.</p>
                    </div>
                    <TestimonialCarousel />
                </div>
            </div>
        </PageTransition>
    );
}

export const DailyLifePage = () => {
     const ctx = useContext(SiteContext);
     if (!ctx) return null;

    return (
        <PageTransition>
            <div className="container mx-auto max-w-6xl">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12 border-b border-stone-200 dark:border-stone-800 pb-6">
                    <div>
                        <h2 className="text-xs md:text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-2">Personal Gallery</h2>
                        <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-white">Monia's Daily Life</h1>
                        <p className="text-stone-500 mt-4 max-w-xl text-sm md:text-base">
                            A glimpse into the daily routine, moments of care, and the balance between professional dedication and personal life.
                        </p>
                    </div>
                 </div>

                 <DailyLifeGallery 
                    items={ctx.gallery} 
                    isAdmin={ctx.isAdmin} 
                    onAddItem={ctx.addToGallery} 
                    onRemoveItem={ctx.removeFromGallery} 
                 />
            </div>
        </PageTransition>
    );
}

export const ContactPage = () => {
    const ctx = useContext(SiteContext);
    if (!ctx) return null;

    return (
        <PageTransition>
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-xs md:text-sm font-bold tracking-widest text-[var(--primary)] uppercase mb-3">Get In Touch</h2>
                    <h1 className="font-serif text-3xl md:text-5xl text-stone-900 dark:text-white mb-6">Book an Appointment</h1>
                    <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto text-sm md:text-base">
                        For comprehensive women’s healthcare, high-risk pregnancy management, or general consultation, Dr. Monia is here to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    {/* Contact Information Column */}
                    <div className="p-8 md:p-12 bg-white dark:bg-stone-800 rounded-3xl shadow-xl border border-stone-100 dark:border-stone-700 flex flex-col justify-center">
                        <h3 className="font-serif text-2xl text-stone-900 dark:text-white mb-8">Contact Information</h3>
                        <div className="space-y-8">
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[var(--primary)] shadow-sm shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 dark:text-white mb-1">Clinic Location</h4>
                                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{ctx.content.contact.location}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[var(--primary)] shadow-sm shrink-0">
                                    <Star size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 dark:text-white mb-1">Direct Contact</h4>
                                    <p className="text-stone-600 dark:text-stone-400">Oman: {ctx.content.contact.phone.slice(0, -5)}xxxxx</p>
                                    <p className="text-stone-600 dark:text-stone-400">Bangladesh: +880 71566xxxxx</p>
                                    <p className="text-stone-600 dark:text-stone-400 mt-2">{ctx.content.contact.email}</p>
                                    
                                    <button 
                                        onClick={() => window.open('https://www.aster.om/doctors/dr-monia-zaman/', '_blank')} 
                                        className="mt-6 w-full py-3 bg-[var(--primary)] text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                                    >
                                        Book Appointment Online <ExternalLink size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* SOCIAL MEDIA QUICK LINKS */}
                            <div className="flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[var(--primary)] shadow-sm shrink-0">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 dark:text-white mb-2">Connect Online</h4>
                                    <div className="flex gap-3">
                                        {ctx?.content.social.facebook && <a href={ctx.content.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors text-stone-500"><Facebook size={16} /></a>}
                                        {ctx?.content.social.instagram && <a href={ctx.content.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors text-stone-500"><Instagram size={16} /></a>}
                                        {ctx?.content.social.twitter && <a href={ctx.content.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors text-stone-500"><Twitter size={16} /></a>}
                                        {ctx?.content.social.linkedin && <a href={ctx.content.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors text-stone-500"><Linkedin size={16} /></a>}
                                        {ctx?.content.social.youtube && <a href={ctx.content.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 bg-stone-100 dark:bg-stone-700 rounded-full hover:bg-[var(--primary)] hover:text-white transition-colors text-stone-500"><Youtube size={16} /></a>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="p-8 md:p-12 bg-white dark:bg-stone-800 rounded-3xl shadow-xl border border-stone-100 dark:border-stone-700">
                         <h3 className="font-serif text-2xl text-stone-900 dark:text-white mb-6">Send a Message</h3>
                         <ContactForm />
                    </div>
                </div>

                {/* Massive Full Width Map Section */}
                <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-stone-700 relative group">
                     <iframe 
                        title="Aster Royal Al Raffah Hospital Map"
                        src="https://maps.google.com/maps?q=Aster+Royal+Al+Raffah+Hospital+Muscat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: "0" }} 
                        loading="lazy"
                        className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                    <div className="absolute bottom-6 right-6 bg-white dark:bg-stone-900 px-6 py-3 rounded-full shadow-lg flex items-center gap-2 pointer-events-none">
                        <Navigation size={16} className="text-[var(--primary)]" />
                        <span className="text-xs font-bold uppercase tracking-wider text-stone-900 dark:text-white">Get Directions</span>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}
