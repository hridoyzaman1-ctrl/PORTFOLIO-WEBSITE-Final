
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect, createContext, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BackgroundScene } from './components/QuantumScene';
import { Menu, X, Lock, Moon, Sun, Edit3, Upload, Stethoscope, Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { SiteContent, DailyLifeItem, PageName } from './types';
import { HomePage, AboutPage, PortfolioPage, DailyLifePage, ContactPage } from './components/Pages';

// --- SITE CONTEXT & DATA ---
const defaultContent: SiteContent = {
  hero: {
    title: "Dr. Monia Zaman",
    subtitle: "Specialist (MBBS, DOWH)",
    description: "Providing high-quality women’s healthcare with a commitment to excellence, dignity, and compassion for over 25 years in the Gulf region.",
    imageUrl: "https://iili.io/fCYJ7hQ.png"
  },
  about: {
    title: "Compassion-Driven Medical Approach",
    bio: "Dr. Monia Zaman is a highly respected Bangladeshi Specialist in Obstetrics & Gynaecology...",
    philosophy: "Treat the patient, not just the condition — with empathy, clarity, and respect."
  },
  contact: {
    email: "moniazaman@gmail.com",
    phone: "+968 96101670",
    location: "Aster Royal Al Raffah Hospital, Muscat, Oman"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "",
    youtube: "",
    linkedin: "https://linkedin.com"
  },
  theme: {
    primaryColor: "#0d9488"
  }
};

const defaultGallery: DailyLifeItem[] = [
  { 
    id: '1', 
    type: 'blog', 
    title: 'The Journey of Motherhood: A Perspective', 
    date: 'Oct 24, 2023',
    caption: 'Witnessing the transformation of a woman into a mother is the greatest privilege of my profession. In this article, I share insights on emotional well-being during pregnancy and why mental health is just as important as physical health during this delicate time.',
    url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '2', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800', 
    caption: 'Morning rounds at Aster Royal Al Raffah Hospital. Every chart tells a story.',
    date: 'Nov 12, 2023'
  },
  { 
    id: '3', 
    type: 'video', 
    url: '', 
    caption: 'Demonstrating minimally invasive surgical techniques to residents.',
    date: 'Dec 05, 2023'
  },
  { 
    id: '4', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800', 
    caption: 'A moment of quiet reflection between consultations. Empathy starts with listening.',
    date: 'Jan 10, 2024'
  },
  { 
    id: '5', 
    type: 'blog', 
    title: 'Managing High-Risk Pregnancies', 
    date: 'Jan 15, 2024',
    caption: 'High-risk does not mean low hope. With modern medicine and close monitoring, complex cases can have beautiful outcomes. Here is what you need to know about gestational diabetes, hypertension, and advanced maternal age.',
    url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  { 
    id: '6', 
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800', 
    caption: 'Attending the International OBGYN Conference. Always learning, always improving.',
    date: 'Mar 15, 2024'
  },
  {
    id: '7',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800',
    caption: 'Post-operative care is just as crucial as the surgery itself. Checking in on my patients.',
    date: 'Mar 01, 2024'
  }
];

export const SiteContext = createContext<{
  content: SiteContent;
  updateContent: (c: SiteContent) => void;
  gallery: DailyLifeItem[];
  addToGallery: (item: DailyLifeItem) => void;
  removeFromGallery: (id: string) => void;
  isAdmin: boolean;
  login: (p: string) => boolean;
  logout: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: PageName;
  navigate: (page: PageName) => void;
} | null>(null);

const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [gallery, setGallery] = useState<DailyLifeItem[]>(defaultGallery);
  const [isAdmin, setIsAdmin] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to Dark Mode
  const [currentPage, setCurrentPage] = useState<PageName>('home');

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', content.theme.primaryColor);
  }, [content.theme.primaryColor]);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const login = (password: string) => {
    if (password === '123465') {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const addToGallery = (item: DailyLifeItem) => setGallery(prev => [item, ...prev]);
  const removeFromGallery = (id: string) => setGallery(prev => prev.filter(i => i.id !== id));

  const navigate = (page: PageName) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <SiteContext.Provider value={{
      content,
      updateContent: setContent,
      gallery,
      addToGallery,
      removeFromGallery,
      isAdmin,
      login,
      logout: () => setIsAdmin(false),
      darkMode,
      toggleDarkMode: () => setDarkMode(!darkMode),
      currentPage,
      navigate
    }}>
      {children}
    </SiteContext.Provider>
  );
};

// --- COMPONENTS ---

const AdminPanel = () => {
  const ctx = useContext(SiteContext);
  const [isOpen, setIsOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [editMode, setEditMode] = useState(false);

  if (!ctx) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctx.login(password)) {
      setIsOpen(false);
      setPassword('');
      setEditMode(true);
    } else {
      alert('Invalid Password');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, onSuccess: (url: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onSuccess(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  if (!ctx.isAdmin) {
    return (
      <>
        <button onClick={() => setIsOpen(true)} className="fixed bottom-4 left-4 z-50 p-2 bg-stone-200 dark:bg-stone-800 rounded-full opacity-50 hover:opacity-100 transition-opacity">
          <Lock size={16} />
        </button>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white dark:bg-stone-900 p-8 rounded-xl shadow-2xl w-full max-w-sm">
              <h3 className="text-xl font-serif mb-4 dark:text-white">Admin Access</h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <input 
                  type="password" 
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full px-4 py-2 rounded border border-stone-300 dark:border-stone-700 dark:bg-stone-800 dark:text-white"
                />
                <div className="flex justify-end gap-2">
                  <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 text-stone-500">Cancel</button>
                  <button type="submit" className="px-4 py-2 bg-[var(--primary)] text-white rounded">Login</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all ${editMode ? 'w-80' : 'w-auto'}`}>
      {!editMode ? (
        <button onClick={() => setEditMode(true)} className="p-3 bg-[var(--primary)] text-white rounded-full shadow-lg">
          <Edit3 />
        </button>
      ) : (
        <div className="bg-white dark:bg-stone-900 p-4 rounded-xl shadow-2xl border border-stone-200 dark:border-stone-700 max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-stone-900 dark:text-white">Admin Controls</h3>
            <button onClick={() => setEditMode(false)}><X size={18} /></button>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="text-xs font-bold text-stone-500 uppercase">Theme Color</label>
              <div className="flex gap-2 mt-2">
                {['#0d9488', '#C5A059', '#3b82f6', '#be123c', '#7c3aed'].map(color => (
                  <button 
                    key={color}
                    onClick={() => ctx.updateContent({...ctx.content, theme: {...ctx.content.theme, primaryColor: color}})}
                    className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <hr className="dark:border-stone-700" />

            <div>
              <label className="text-xs font-bold text-stone-500 uppercase">Hero Text</label>
              <input 
                className="w-full mt-1 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                value={ctx.content.hero.title}
                onChange={(e) => ctx.updateContent({...ctx.content, hero: {...ctx.content.hero, title: e.target.value}})}
              />
            </div>
             <div>
              <label className="text-xs font-bold text-stone-500 uppercase mb-1 block">Hero Image</label>
              <input 
                className="w-full mb-2 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                value={ctx.content.hero.imageUrl}
                placeholder="Image URL"
                onChange={(e) => ctx.updateContent({...ctx.content, hero: {...ctx.content.hero, imageUrl: e.target.value}})}
              />
              <label className="cursor-pointer flex items-center justify-center gap-2 w-full px-2 py-2 text-sm border border-dashed rounded dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors">
                <Upload size={14} /> Upload Image (PNG)
                <input 
                  type="file" 
                  accept="image/png, image/jpeg" 
                  className="hidden" 
                  onChange={(e) => handleImageUpload(e, (url) => ctx.updateContent({...ctx.content, hero: {...ctx.content.hero, imageUrl: url}}))}
                />
              </label>
            </div>

            <hr className="dark:border-stone-700" />

            <div>
              <label className="text-xs font-bold text-stone-500 uppercase">Social Media Links</label>
              <div className="space-y-2 mt-2">
                <div className="flex items-center gap-2">
                    <Facebook size={14} className="text-stone-400" />
                    <input 
                        className="flex-1 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                        placeholder="Facebook URL"
                        value={ctx.content.social.facebook}
                        onChange={(e) => ctx.updateContent({...ctx.content, social: {...ctx.content.social, facebook: e.target.value}})}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Instagram size={14} className="text-stone-400" />
                    <input 
                        className="flex-1 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                        placeholder="Instagram URL"
                        value={ctx.content.social.instagram}
                        onChange={(e) => ctx.updateContent({...ctx.content, social: {...ctx.content.social, instagram: e.target.value}})}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Twitter size={14} className="text-stone-400" />
                    <input 
                        className="flex-1 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                        placeholder="Twitter/X URL"
                        value={ctx.content.social.twitter}
                        onChange={(e) => ctx.updateContent({...ctx.content, social: {...ctx.content.social, twitter: e.target.value}})}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Youtube size={14} className="text-stone-400" />
                    <input 
                        className="flex-1 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                        placeholder="YouTube URL"
                        value={ctx.content.social.youtube}
                        onChange={(e) => ctx.updateContent({...ctx.content, social: {...ctx.content.social, youtube: e.target.value}})}
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Linkedin size={14} className="text-stone-400" />
                    <input 
                        className="flex-1 px-2 py-1 text-sm border rounded dark:bg-stone-800 dark:text-white" 
                        placeholder="LinkedIn URL"
                        value={ctx.content.social.linkedin}
                        onChange={(e) => ctx.updateContent({...ctx.content, social: {...ctx.content.social, linkedin: e.target.value}})}
                    />
                </div>
              </div>
            </div>

            <button onClick={ctx.logout} className="w-full py-2 mt-4 bg-red-50 text-red-600 rounded text-sm hover:bg-red-100">Logout</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ctx = useContext(SiteContext);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClass = (page: PageName) => 
    `uppercase tracking-wide transition-colors ${ctx?.currentPage === page ? 'text-[var(--primary)] font-bold' : 'hover:text-[var(--primary)]'}`;

  const handleNav = (page: PageName) => {
    ctx?.navigate(page);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || isOpen ? 'bg-white/95 dark:bg-stone-900/95 backdrop-blur shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNav('home')}>
            <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                <Stethoscope size={20} />
            </div>
            <div className="font-serif font-bold text-xl md:text-2xl text-[var(--primary)] truncate mr-4 group-hover:opacity-80 transition-opacity">
                DR. MONIA ZAMAN
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
          <button onClick={() => handleNav('home')} className={navItemClass('home')}>Home</button>
          <button onClick={() => handleNav('about')} className={navItemClass('about')}>About</button>
          <button onClick={() => handleNav('portfolio')} className={navItemClass('portfolio')}>Portfolio</button>
          <button onClick={() => handleNav('daily-life')} className={navItemClass('daily-life')}>Gallery</button>
          <button onClick={() => handleNav('contact')} className={navItemClass('contact')}>Contact</button>
          
          <button 
            onClick={ctx?.toggleDarkMode}
            className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            {ctx?.darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 md:hidden">
            <button 
                onClick={ctx?.toggleDarkMode}
                className="p-2 rounded-full hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-stone-600 dark:text-stone-300"
            >
                {ctx?.darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-800 dark:text-white p-1">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
            <div className="absolute top-full left-0 w-full bg-white dark:bg-stone-900 border-t border-stone-100 dark:border-stone-800 shadow-xl flex flex-col p-6 gap-2 text-center md:hidden h-[calc(100vh-60px)] overflow-y-auto">
                <button onClick={() => handleNav('home')} className="py-4 text-lg border-b border-stone-100 dark:border-stone-800 hover:text-[var(--primary)] dark:text-stone-300">Home</button>
                <button onClick={() => handleNav('about')} className="py-4 text-lg border-b border-stone-100 dark:border-stone-800 hover:text-[var(--primary)] dark:text-stone-300">About</button>
                <button onClick={() => handleNav('portfolio')} className="py-4 text-lg border-b border-stone-100 dark:border-stone-800 hover:text-[var(--primary)] dark:text-stone-300">Portfolio</button>
                <button onClick={() => handleNav('daily-life')} className="py-4 text-lg border-b border-stone-100 dark:border-stone-800 hover:text-[var(--primary)] dark:text-stone-300">Monia's Daily Life</button>
                <button onClick={() => handleNav('contact')} className="py-4 text-lg hover:text-[var(--primary)] dark:text-stone-300">Contact</button>
            </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
    const ctx = useContext(SiteContext);
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
            <div className="container mx-auto px-6 text-center">
                <div className="font-serif text-2xl text-white mb-4 flex items-center justify-center gap-2">
                    <Stethoscope size={24} className="text-[var(--primary)]" />
                    DR. MONIA ZAMAN
                </div>
                <p className="text-sm mb-6">Specialist in Obstetrics & Gynaecology • Muscat, Oman</p>
                
                <div className="flex justify-center gap-4 mb-8">
                    {ctx?.content.social.facebook && <a href={ctx.content.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800 hover:bg-[var(--primary)] text-stone-400 hover:text-white transition-all"><Facebook size={18} /></a>}
                    {ctx?.content.social.instagram && <a href={ctx.content.social.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800 hover:bg-[var(--primary)] text-stone-400 hover:text-white transition-all"><Instagram size={18} /></a>}
                    {ctx?.content.social.twitter && <a href={ctx.content.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800 hover:bg-[var(--primary)] text-stone-400 hover:text-white transition-all"><Twitter size={18} /></a>}
                    {ctx?.content.social.youtube && <a href={ctx.content.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800 hover:bg-[var(--primary)] text-stone-400 hover:text-white transition-all"><Youtube size={18} /></a>}
                    {ctx?.content.social.linkedin && <a href={ctx.content.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-stone-800 hover:bg-[var(--primary)] text-stone-400 hover:text-white transition-all"><Linkedin size={18} /></a>}
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                    <button onClick={() => ctx?.navigate('home')} className="hover:text-white transition-colors">Home</button>
                    <button onClick={() => ctx?.navigate('about')} className="hover:text-white transition-colors">About</button>
                    <button onClick={() => ctx?.navigate('portfolio')} className="hover:text-white transition-colors">Portfolio</button>
                    <button onClick={() => ctx?.navigate('contact')} className="hover:text-white transition-colors">Contact</button>
                </div>
                <p className="text-xs text-stone-600">&copy; {new Date().getFullYear()} Dr. Monia Zaman. All rights reserved.</p>
            </div>
        </footer>
    );
};

// --- MAIN APP ---

const App: React.FC = () => {
  return (
    <SiteProvider>
      <Layout />
    </SiteProvider>
  );
};

const Layout = () => {
    const ctx = useContext(SiteContext);
    if (!ctx) return null;

    return (
        // Added overflow-x-hidden to prevent horizontal scrolling on mobile
        <div className="min-h-screen bg-stone-50 dark:bg-black text-stone-900 dark:text-white selection:bg-[var(--primary)] selection:text-white transition-colors duration-500 font-sans flex flex-col overflow-x-hidden">
            <Navbar />
            
            <BackgroundScene primaryColor={ctx.content.theme.primaryColor} darkMode={ctx.darkMode} />
            
            <main className="flex-grow z-10 relative">
                <AnimatePresence mode="wait">
                    {ctx.currentPage === 'home' && <HomePage key="home" />}
                    {ctx.currentPage === 'about' && <AboutPage key="about" />}
                    {ctx.currentPage === 'portfolio' && <PortfolioPage key="portfolio" />}
                    {ctx.currentPage === 'daily-life' && <DailyLifePage key="daily-life" />}
                    {ctx.currentPage === 'contact' && <ContactPage key="contact" />}
                </AnimatePresence>
            </main>

            <Footer />
            <AdminPanel />
        </div>
    );
}

export default App;
