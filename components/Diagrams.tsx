
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Calendar, MapPin, Plus, Trash2, Video, Send, Loader2, Upload, Quote, FileText, Image as ImageIcon, X, Maximize2, GraduationCap, Award } from 'lucide-react';
import { DailyLifeItem, Experience, Testimonial } from '../types';

// --- EXPERIENCE TIMELINE ---
export const ExperienceTimeline: React.FC = () => {
  const experiences: Experience[] = [
    {
      year: "2013 - Present",
      role: "Specialist (OBGYN)",
      location: "Aster Royal Al Raffah Hospital, Muscat, Oman",
      description: "Delivering comprehensive women's healthcare as a lead specialist. Expert in high-risk pregnancies, infertility treatments, and minimally invasive laparoscopic procedures.",
      details: ["High-Risk Obstetrics", "Laparoscopic Surgery", "Infertility Management", "Colposcopy"]
    },
    {
      year: "2011 - 2013",
      role: "Specialist OBGYN",
      location: "YAS Medical Center / Al Waha Medical Center, Oman",
      description: "Provided specialized gynecological care and antenatal management in a busy private practice setting.",
      details: ["Outpatient Care", "Diagnostic Ultrasound", "Patient Counseling"]
    },
    {
      year: "2005 - 2011",
      role: "Medical Officer / Specialist",
      location: "Ministry of Health Hospitals, Saudi Arabia & Oman",
      description: "Served diverse communities across the Gulf region, gaining deep expertise in handling obstetric emergencies and diverse pathologies.",
      details: ["Emergency Obstetrics", "Labor Ward Management", "Cultural Competence"]
    },
    {
      year: "2002 - 2005",
      role: "Early Career & Training",
      location: "Dhaka Medical College / Women's Medical College, Bangladesh",
      description: "Built foundational skills in a high-volume tertiary care setting, focusing on surgical skills and medical ethics."
    }
  ];

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-9 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--primary)] before:via-stone-300 before:to-transparent before:opacity-30">
      {experiences.map((exp, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-12 md:pl-20"
        >
          {/* Connector Dot */}
          <div className="absolute left-[11px] md:left-[27px] top-0 w-4 h-4 rounded-full bg-white dark:bg-stone-900 border-4 border-[var(--primary)] shadow-md z-10 translate-y-1.5"></div>
          
          {/* Card */}
          <div className="p-6 bg-white dark:bg-stone-900 rounded-xl border-l-4 border-l-[var(--primary)] border-y border-r border-stone-200 dark:border-stone-800 shadow-md hover:shadow-lg transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
              <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100">{exp.role}</h3>
              <span className="font-bold text-xs uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-2 py-1 rounded w-fit">
                {exp.year}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">
               <MapPin size={14} className="shrink-0 text-[var(--primary)]" /> {exp.location}
            </div>
            <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed mb-4">{exp.description}</p>
            {exp.details && (
                <div className="flex flex-wrap gap-2">
                    {exp.details.map((detail, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 rounded border border-stone-200 dark:border-stone-700">
                            {detail}
                        </span>
                    ))}
                </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- EDUCATION TIMELINE ---
export const EducationTimeline: React.FC = () => {
    const education = [
      {
        year: "2023",
        degree: "MRCOG - Part 1",
        institution: "Royal College of Physicians & Surgeons",
        location: "United Kingdom",
        desc: "Advanced membership qualification demonstrating excellence in obstetrics and gynaecology."
      },
      {
        year: "2012",
        degree: "Diploma in Women's Health (DOWH)",
        institution: "Royal College of Physicians of Ireland",
        location: "Dublin, Ireland",
        desc: "Specialized post-graduate diploma focusing on modern women's healthcare practices."
      },
      {
        year: "2003",
        degree: "Emergency Obstetrical Training (EOC)",
        institution: "Dhaka Medical College & Hospital",
        location: "Bangladesh",
        desc: "Intensive training certification for managing critical obstetric emergencies."
      },
      {
        year: "2002",
        degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
        institution: "Medical College for Women & Hospital",
        location: "Dhaka University, Bangladesh",
        desc: "Graduated with honors, establishing a strong foundation in medical science."
      }
    ];
  
    return (
      <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-9 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-amber-500 before:via-stone-300 before:to-transparent before:opacity-30">
        {education.map((edu, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-12 md:pl-20"
          >
            {/* Connector Icon */}
            <div className="absolute left-0 md:left-4 top-0 w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg z-10">
                <GraduationCap size={18} />
            </div>
            
            {/* Card */}
            <div className="p-6 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-md hover:shadow-xl hover:border-amber-500/50 transition-all group">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors">{edu.degree}</h3>
                <span className="font-serif font-bold text-amber-600 bg-amber-50 dark:bg-stone-800 px-3 py-1 rounded text-sm">
                  {edu.year}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">
                 <Award size={14} className="shrink-0 text-amber-500" /> {edu.institution} • {edu.location}
              </div>
              <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

// --- TESTIMONIALS ---
export const TestimonialCarousel: React.FC = () => {
  const testimonials: Testimonial[] = [
    { name: "Layla Al-Said", text: "Dr. Monia treated me with such patience and understanding. Her confidence made me feel safe during a difficult pregnancy." },
    { name: "Noor Al-Balushi", text: "A Doctor Who Truly Listens! Professional, Kind, and Skilled. Highly recommended for anyone seeking genuine care." },
    { name: "Fatima Al-Harthi", text: "One of the few doctors who genuinely takes time to understand your concerns. She made me feel heard and comfortable." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="p-8 bg-white dark:bg-stone-800 rounded-2xl border-2 border-stone-100 dark:border-stone-700 shadow-xl hover:shadow-2xl hover:border-[var(--primary)] transition-all duration-300 relative group"
        >
          <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote size={48} className="text-[var(--primary)]" />
          </div>
          
          <div className="mb-6">
              <div className="flex text-amber-400 gap-0.5 mb-2">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
          </div>

          <p className="text-stone-600 dark:text-stone-300 italic mb-6 relative z-10 leading-relaxed text-sm md:text-base">
            "{t.text}"
          </p>
          
          <div className="flex items-center gap-3 border-t border-stone-100 dark:border-stone-700 pt-4 mt-auto">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-teal-700 flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0">
              {t.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-bold text-stone-900 dark:text-white text-sm">{t.name}</div>
              <div className="text-[10px] text-stone-400 uppercase tracking-wider">Verified Patient</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// --- DAILY LIFE GALLERY ---
interface GalleryProps {
  items: DailyLifeItem[];
  isAdmin: boolean;
  onAddItem: (item: DailyLifeItem) => void;
  onRemoveItem: (id: string) => void;
}

export const DailyLifeGallery: React.FC<GalleryProps> = ({ items, isAdmin, onAddItem, onRemoveItem }) => {
  const [filter, setFilter] = useState<'all' | 'image' | 'video' | 'blog'>('all');
  
  // Admin Form State
  const [newItemUrl, setNewItemUrl] = useState('');
  const [newItemType, setNewItemType] = useState<'image' | 'video' | 'blog'>('image');
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  // Reader Modal State
  const [selectedBlog, setSelectedBlog] = useState<DailyLifeItem | null>(null);

  const filteredItems = filter === 'all' ? items : items.filter(i => i.type === filter);

  const handleAdd = () => {
    if ((newItemType !== 'blog' && !newItemUrl) || (newItemType === 'blog' && !title)) return;
    
    onAddItem({
      id: Date.now().toString(),
      type: newItemType,
      url: newItemUrl,
      title: title,
      caption: caption || "Dr. Monia's Update",
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });
    
    // Reset Form
    setNewItemUrl('');
    setTitle('');
    setCaption('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewItemUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* FILTER TABS */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {[
            { id: 'all', label: 'All Content', icon: Star },
            { id: 'image', label: 'Photos', icon: ImageIcon },
            { id: 'video', label: 'Videos', icon: Video },
            { id: 'blog', label: 'Articles', icon: FileText },
        ].map((tab) => (
            <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    filter === tab.id 
                    ? 'bg-[var(--primary)] text-white shadow-lg shadow-[var(--primary)]/30' 
                    : 'bg-white dark:bg-stone-800 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-700'
                }`}
            >
                <tab.icon size={16} /> {tab.label}
            </button>
        ))}
      </div>

      {/* ADMIN PANEL */}
      {isAdmin && (
        <div className="mb-12 p-6 bg-stone-50 dark:bg-stone-800 rounded-xl border border-dashed border-stone-300 dark:border-stone-600">
          <h4 className="text-sm font-bold uppercase mb-4 text-stone-500 flex items-center gap-2"><Plus size={16}/> Admin: Post Content</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select 
                value={newItemType}
                onChange={(e) => setNewItemType(e.target.value as any)}
                className="px-4 py-2 rounded-lg bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 outline-none focus:ring-2 focus:ring-[var(--primary)]"
              >
                <option value="image">Add Photo</option>
                <option value="video">Add Video</option>
                <option value="blog">Write Article</option>
              </select>

              {newItemType !== 'blog' && (
                 <label className="cursor-pointer flex items-center justify-center gap-2 w-full px-4 py-2 text-sm border border-stone-200 dark:border-stone-600 bg-white dark:bg-stone-700 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-600 transition-colors">
                    <Upload size={16} /> Upload Image File
                    <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
                 </label>
              )}
          </div>

          <div className="space-y-4">
             {newItemType === 'blog' && (
                 <input 
                    type="text" 
                    placeholder="Article Title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                 />
             )}

             {newItemType !== 'image' && (
                 <input 
                    type="text" 
                    placeholder={newItemType === 'video' ? "Video URL (YouTube/MP4)" : "Cover Image URL (Optional)"}
                    value={newItemUrl}
                    onChange={(e) => setNewItemUrl(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 outline-none focus:ring-2 focus:ring-[var(--primary)]"
                 />
             )}

             <textarea 
                rows={newItemType === 'blog' ? 6 : 2}
                placeholder={newItemType === 'blog' ? "Write your article here..." : "Caption..."}
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-stone-700 border border-stone-200 dark:border-stone-600 outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
             />

            <button 
              onClick={handleAdd}
              className="w-full py-3 bg-[var(--primary)] text-white rounded-lg font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send size={16} /> Publish Post
            </button>
          </div>
        </div>
      )}

      {/* GALLERY GRID */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              layout
              className={`group relative break-inside-avoid rounded-2xl overflow-hidden bg-white dark:bg-stone-800 shadow-md hover:shadow-xl transition-all border border-stone-100 dark:border-stone-700 ${item.type === 'blog' ? 'p-6' : ''}`}
            >
              {/* IMAGE TYPE */}
              {item.type === 'image' && (
                <>
                    <img src={item.url} alt={item.caption} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <span className="text-white/60 text-xs font-bold uppercase mb-2">{item.date}</span>
                        <p className="text-white font-medium font-serif leading-tight">{item.caption}</p>
                    </div>
                </>
              )}

              {/* VIDEO TYPE */}
              {item.type === 'video' && (
                <div className="relative group cursor-pointer">
                    <div className="w-full aspect-video flex items-center justify-center bg-stone-900 relative overflow-hidden">
                        {/* Placeholder visual */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-stone-900 opacity-80"></div>
                        <Video className="text-white/20 absolute -right-10 -bottom-10" size={150} />
                        
                        <div className="relative z-10 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                             <span className="text-[var(--primary)] text-xs font-bold uppercase flex items-center gap-1"><Video size={12}/> Video</span>
                             <span className="text-stone-400 text-xs">{item.date}</span>
                        </div>
                        <p className="text-stone-700 dark:text-stone-300 text-sm">{item.caption}</p>
                    </div>
                </div>
              )}

              {/* BLOG TYPE */}
              {item.type === 'blog' && (
                <div className="flex flex-col h-full">
                    {item.url && (
                        <div className="mb-4 rounded-xl overflow-hidden h-40 w-full relative">
                            <img src={item.url} className="w-full h-full object-cover" alt="Blog cover" />
                        </div>
                    )}
                    <div className="flex justify-between items-center mb-3">
                         <span className="text-[var(--primary)] text-xs font-bold uppercase flex items-center gap-1"><FileText size={12}/> Article</span>
                         <span className="text-stone-400 text-xs">{item.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-900 dark:text-white mb-3 leading-tight group-hover:text-[var(--primary)] transition-colors">
                        {item.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm line-clamp-3 mb-4 leading-relaxed">
                        {item.caption}
                    </p>
                    <button 
                        onClick={() => setSelectedBlog(item)}
                        className="mt-auto text-sm font-bold text-stone-900 dark:text-white hover:text-[var(--primary)] flex items-center gap-1"
                    >
                        Read Full Story <Maximize2 size={12} />
                    </button>
                </div>
              )}

              {isAdmin && (
                <button 
                  onClick={() => onRemoveItem(item.id)}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-lg z-20"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      
      {/* NO ITEMS STATE */}
      {filteredItems.length === 0 && (
            <div className="py-20 text-center text-stone-400 border-2 border-dashed border-stone-200 dark:border-stone-700 rounded-3xl">
                No content found in this category.
            </div>
      )}

      {/* BLOG READING MODAL */}
      <AnimatePresence>
          {selectedBlog && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="bg-white dark:bg-stone-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
                  >
                      <button 
                        onClick={() => setSelectedBlog(null)}
                        className="absolute top-4 right-4 p-2 bg-stone-100 dark:bg-stone-800 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors z-10"
                      >
                          <X size={20} className="text-stone-600 dark:text-stone-300"/>
                      </button>

                      {selectedBlog.url && (
                          <div className="h-64 w-full relative">
                              <img src={selectedBlog.url} className="w-full h-full object-cover" alt={selectedBlog.title} />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                          </div>
                      )}

                      <div className="p-8 md:p-12">
                          <div className="flex items-center gap-3 mb-6">
                              <span className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold rounded-full uppercase tracking-wider">
                                  {selectedBlog.date}
                              </span>
                              <span className="text-stone-400 text-xs uppercase tracking-wider">By Dr. Monia Zaman</span>
                          </div>

                          <h2 className="font-serif text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-8 leading-tight">
                              {selectedBlog.title}
                          </h2>

                          <div className="prose dark:prose-invert max-w-none text-stone-600 dark:text-stone-300 leading-loose">
                              {selectedBlog.caption.split('\n').map((paragraph, idx) => (
                                  <p key={idx} className="mb-4">{paragraph}</p>
                              ))}
                          </div>

                          <hr className="my-8 border-stone-200 dark:border-stone-700" />
                          
                          <div className="flex items-center gap-4">
                               <div className="w-12 h-12 rounded-full bg-stone-200 dark:bg-stone-700 overflow-hidden">
                                   {/* Ideally this is Dr. Monia's Avatar */}
                                   <div className="w-full h-full flex items-center justify-center text-stone-500 font-bold">MZ</div>
                               </div>
                               <div>
                                   <p className="font-bold text-stone-900 dark:text-white text-sm">Dr. Monia Zaman</p>
                                   <p className="text-xs text-stone-500">Specialist OBGYN</p>
                               </div>
                          </div>
                      </div>
                  </motion.div>
              </div>
          )}
      </AnimatePresence>
    </div>
  );
};

// --- CONTACT FORM ---
export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    age: '',
    problem: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending
    setTimeout(() => {
        alert(`Message sent to moniazaman@gmail.com!\n\nPatient: ${formState.name}\nAge: ${formState.age}\nIssue: ${formState.problem}`);
        setStatus('success');
        setFormState({ name: '', age: '', problem: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Full Name</label>
          <input 
            required
            type="text" 
            className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all dark:text-white"
            value={formState.name}
            onChange={e => setFormState({...formState, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Age</label>
          <input 
            required
            type="number" 
            className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all dark:text-white"
            value={formState.age}
            onChange={e => setFormState({...formState, age: e.target.value})}
          />
        </div>
      </div>
      <div>
         <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Medical Problem</label>
         <input 
            required
            type="text" 
            className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all dark:text-white"
            placeholder="e.g. Consultation, Checkup..."
            value={formState.problem}
            onChange={e => setFormState({...formState, problem: e.target.value})}
          />
      </div>
      <div>
        <label className="block text-xs font-bold uppercase text-stone-500 mb-2">Message</label>
        <textarea 
          required
          rows={4}
          className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none dark:text-white"
          value={formState.message}
          onChange={e => setFormState({...formState, message: e.target.value})}
        ></textarea>
      </div>
      <button 
        type="submit"
        disabled={status !== 'idle'}
        className="w-full py-4 bg-[var(--primary)] text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
            <><Loader2 className="animate-spin" size={20} /> Sending...</>
        ) : status === 'success' ? (
            'Message Sent!'
        ) : (
            <><Send size={18} /> Send Message</>
        )}
      </button>
    </form>
  );
};
