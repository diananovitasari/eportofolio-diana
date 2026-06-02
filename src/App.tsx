/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  User, 
  FileText, 
  ClipboardCheck, 
  Compass, 
  BookOpen, 
  Award, 
  ChevronDown, 
  Sparkles,
  School,
  ArrowUpRight,
  Camera
} from 'lucide-react';

// Import subcomponents
import StudentProfile from './components/StudentProfile';
import ArtifactAnalysis from './components/ArtifactAnalysis';
import DocumentationGallery from './components/DocumentationGallery';
import AssessmentPanel from './components/AssessmentPanel';
import TargetTeacher from './components/TargetTeacher';
import EPortfolioReflection from './components/EPortfolioReflection';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle header background glass effect based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu links config
  const menuLinks = [
    { name: 'Profil Mahasiswa', href: '#profil', icon: User },
    { name: 'Analisis Artefak', href: '#analisis', icon: FileText },
    { name: 'Galeri Dokumentasi', href: '#galeri-dokumentasi', icon: Camera },
    { name: 'Instrumen Penilaian', href: '#penilaian', icon: ClipboardCheck },
    { name: 'Model Guru', href: '#visi-kompetensi', icon: Compass },
    { name: 'E-Portfolio II', href: '#e-portfolio-2', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#C499F3]/20 via-white to-[#F2AFEF]/20 text-[#33186B] selection:bg-[#7360DF]/30 selection:text-[#33186B] overflow-x-hidden font-sans">
      
      {/* 1. FLOATING NAV HEADER (GLASSMORPHISM) */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-white/70 backdrop-blur-xl border-b border-[#C499F3]/50 shadow-sm' 
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Name */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#33186B] to-[#7360DF] text-white font-extrabold shadow-sm group-hover:scale-105 transition-transform">
              D
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#F2AFEF] border border-white" />
            </div>
            <div>
              <span className="block font-sans font-black text-sm text-[#33186B] tracking-tight group-hover:text-[#7360DF] transition-colors">
                DIANA NOVITA SARI
              </span>
              <span className="block font-mono text-[9px] text-[#7360DF] font-bold tracking-widest uppercase">
                PPG Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#C499F3]/20 backdrop-blur-md p-1.5 border border-white/60 rounded-full">
            {menuLinks.map((link) => {
              const IconComp = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-xs font-bold text-[#33186B]/90 hover:text-[#33186B] hover:bg-white/60 transition-all duration-300 flex items-center gap-1.5"
                >
                  <IconComp className="w-3.5 h-3.5 text-[#7360DF]" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Call to Action Badge / Location */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-[10px] uppercase font-bold text-[#33186B] bg-[#F2AFEF]/60 px-2.5 py-1.5 rounded-lg border border-[#F2AFEF]/80">
              PPL SMA Kristen 1 Salatiga
            </span>
          </div>

          {/* Burger button for mobile */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#C499F3]/30 backdrop-blur-md border border-white text-[#33186B] focus:outline-none"
            aria-label="Toggle mobile menu"
            id="mobile-menu-burger"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER LINK DESK (SMOOTH TRANSITION) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[60px] inset-x-0 z-40 bg-white/95 backdrop-blur-2xl border-b border-[#C499F3]/60 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3 font-sans">
              {menuLinks.map((link) => {
                const IconComp = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3.5 p-3 rounded-xl bg-[#C499F3]/15 border border-[#C499F3]/20 text-[#33186B] font-bold text-sm tracking-tight hover:bg-[#C499F3]/30 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm text-[#7360DF]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span>{link.name}</span>
                  </a>
                );
              })}
              
              <div className="pt-4 border-t border-[#33186B]/10 flex items-center justify-between text-[11px] font-mono font-bold text-gray-400">
                <span>PPG PRAJABATAN UKSW</span>
                <span className="text-emerald-500 bg-emerald-50 px-2.5 py-1 rounded">ACTIVE PPL SIKLUS III</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* 2. HERO BANNER SECTION (SMOOTH ANIMATIONS) */}
      <section className="relative pt-24 pb-12 md:pt-36 md:pb-20 overflow-hidden">
        {/* Colorful backgrounds */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#F2AFEF]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C499F3]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/40 backdrop-blur-xl border border-white/60 p-6 md:p-12 rounded-3xl shadow-xl">
            
            {/* Left intro text */}
            <div className="lg:col-span-8 space-y-5 md:space-y-6">
              
              {/* Top welcome label */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2AFEF] rounded-full text-xs font-bold text-[#33186B] border border-[#F2AFEF]/80 uppercase tracking-widest pointer-events-none"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#33186B]" />
                REKAP REFLEKSI MANDIRI & HASIL PPL
              </motion.div>

              <div className="space-y-2.5">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="block font-mono text-xs md:text-sm font-semibold text-[#7360DF] tracking-wider uppercase"
                >
                  E-PORTFOLIO PEMBELAJARAN
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-none text-[#33186B] text-balance"
                >
                  Menyongsong Peran <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33186B] via-[#7360DF] to-[#7360DF]/80">
                    Guru Profesional
                  </span>
                </motion.h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-[#33186B]/95 text-justify max-w-3xl leading-relaxed"
              >
                Selamat datang di e-portfolio digital milik <strong>Diana Novita Sari</strong>. Halaman ini dirancang berdasarkan rekapitulasi reflektif terstruktur terhadap penyusunan modul/rencana ajar serta praktik mengajar sepanjang 3 Siklus PPL di SMA Kristen 1 Salatiga dalam program PPG Prajabatan Universitas Kristen Satya Wacana (UKSW).
              </motion.p>

              {/* Action Anchors */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <a 
                  href="#profil" 
                  className="group px-5 py-2.5 rounded-xl bg-[#33186B] hover:bg-[#33186B]/90 text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center gap-1 cursor-pointer"
                >
                  Tinjau Profil Diana
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a 
                  href="#penilaian" 
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#C499F3]/20 text-[#33186B] border border-[#C499F3] font-bold text-xs tracking-wide transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <ClipboardCheck className="w-4 h-4 text-[#7360DF]" />
                  Hasil Nilai Pamong
                </a>
              </motion.div>
            </div>

            {/* Right floating cards (Bento Quick Statistics) */}
            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 60, delay: 0.2 }}
              className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 select-none"
            >
              {/* Stat Card 1 */}
              <div className="bg-white/60 p-4 border border-white rounded-2xl shadow-sm flex items-center gap-3">
                <div className="p-2 bg-[#C499F3]/50 rounded-lg text-[#33186B]">
                  <School className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase">Kampus PPG</span>
                  <span className="block text-xs md:text-sm font-extrabold text-[#33186B]">UKSW Salatiga</span>
                </div>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-[#F2AFEF]/40 p-4 border border-[#F2AFEF] rounded-2xl shadow-sm flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg text-emerald-600 shadow-sm">
                  <Award className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-500 uppercase">Status PPL</span>
                  <span className="block text-xs md:text-sm font-extrabold text-emerald-800">3 Siklus Selesai</span>
                </div>
              </div>

              {/* Stat Card 3 */}
              <div className="bg-white/60 p-4 border border-white rounded-2xl shadow-sm flex items-center gap-3 col-span-2 lg:col-span-1">
                <div className="p-2 bg-[#7360DF]/20 rounded-lg text-[#7360DF]">
                  <BookOpen className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase">Fokus Model</span>
                  <span className="block text-xs md:text-sm font-extrabold text-[#33186B]">Problem-Based Learning</span>
                </div>
              </div>
            </motion.div>

          </div>
          
          {/* Decorative scroll indicator */}
          <div className="flex justify-center mt-10 md:mt-14">
            <motion.a 
              href="#profil"
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="p-2.5 rounded-full bg-white/60 border border-white shadow-sm text-[#33186B] flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wide cursor-pointer"
            >
              Gulir Kebawah <ChevronDown className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </section>

      {/* 3. SUB-COMPONENTS SECTIONS */}
      <main className="pb-24">
        {/* Component A: Profile & Karakter Fondasi */}
        <StudentProfile />

        {/* Component B: Artifact Synthesis & RPP Modul Analysis */}
        <ArtifactAnalysis />

        {/* Component B-2: Galeri Dokumentasi & Video Kegiatan PPL */}
        <DocumentationGallery />

        {/* Component C: Evaluation Sheet (Pamong evaluation and Graph) */}
        <AssessmentPanel />

        {/* Component D: Professional Mission, Competences & Goals */}
        <TargetTeacher />

        {/* Component E: E-Portfolio 2 final reflection & teaching philosophy */}
        <EPortfolioReflection />
      </main>

      {/* 4. SLEEK FOOTER */}
      <footer className="bg-[#33186B] text-[#C499F3]/90 py-10 md:py-14 border-t border-[#7360DF]/30 relative overflow-hidden">
        {/* Abstract blur backdrop */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#7360DF]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-white/15">
            <div>
              <h3 className="text-white text-lg font-sans font-extrabold tracking-tight">
                Diana Novita Sari, S.Pd.
              </h3>
              <p className="text-xs text-[#C499F3]/70 leading-relaxed font-sans mt-0.5">
                Pendidik Profesional Berbudi Luhur, PPG Prajabatan Universitas Kristen Satya Wacana (UKSW).
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold text-[#C499F3]">
              <span className="bg-white/10 px-3 py-1.5 rounded border border-white/10 uppercase">
                Blora Jawa Tengah
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded border border-white/10 uppercase">
                SMA Kristen 1 Salatiga
              </span>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#C499F3]/60">
            <span>&copy; {new Date().getFullYear()} Diana Novita Sari. All Rights Reserved.</span>
            <span>SIMPPG UKSW &bull; Portofolio Refleksi & Aksi Nyata</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
