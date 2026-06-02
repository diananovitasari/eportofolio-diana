/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, School, GraduationCap, Quote, Sparkles } from 'lucide-react';
import { DIANA_PROFILE } from '../data';
import { motion } from 'motion/react';

const dianaProfile = "/src/assets/images/foto-diana.jpeg";

export default function StudentProfile() {
  return (
    <section id="profil" className="scroll-mt-24 py-12 md:py-20 relative overflow-hidden">
      {/* Absolute Decorative Background Glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#F2AFEF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#7360DF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title Block */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#C499F3]/40 border border-[#7360DF]/30 uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7360DF]" />
            Fondasi Dasar Karakter Mahasiswa
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4"
          >
            Profil Lengkap Mahasiswa
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full"
          />
        </div>

        {/* Dynamic Glassmorphic Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Column 1: Float Card with Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group select-none">
              {/* Animated colorful border glows */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#33186B] via-[#7360DF] to-[#F2AFEF] rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              {/* Main Card Frame */}
              <div className="relative bg-[#C499F3]/40 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-5 w-full max-w-sm flex flex-col items-center">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden shadow-inner border-2 border-white/80 relative mb-5 bg-gradient-to-b from-[#C499F3] to-[#7360DF]/30">
                  <img 
                    src={dianaProfile} 
                    alt={DIANA_PROFILE.name} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Avatar Overlay Label */}
                  <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#C499F3] text-[10px] font-mono font-semibold text-[#33186B] tracking-wide shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    AKTIF PPL
                  </div>
                </div>

                <h3 className="text-2xl font-sans font-bold text-[#33186B] text-center mb-1">
                  {DIANA_PROFILE.name}
                </h3>
                <p className="text-sm font-medium text-[#7360DF] text-center mb-4">
                  {DIANA_PROFILE.title}
                </p>

                {/* Micro Metadata Badges */}
                <div className="w-full space-y-2 text-xs text-[#33186B]/90">
                  <div className="flex items-center gap-3 bg-white/40 border border-white/50 rounded-xl px-4 py-2.5">
                    <MapPin className="w-4 h-4 text-[#7360DF] shrink-0" />
                    <span><strong>Asal:</strong> {DIANA_PROFILE.origin}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/40 border border-white/50 rounded-xl px-4 py-2.5">
                    <GraduationCap className="w-4 h-4 text-[#33186B] shrink-0" />
                    <span><strong>Program:</strong> PPG Prajabatan UKSW</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white/40 border border-white/50 rounded-xl px-4 py-2.5">
                    <School className="w-4 h-4 text-[#7360DF] shrink-0" />
                    <span><strong>PPL:</strong> SMA Kristen 1 Salatiga</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Rich Origin and Inspiration Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between h-full space-y-6"
          >
            {/* Origin & Blora's Uniqueness Card */}
            <div className="bg-[#C499F3]/20 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm relative overflow-hidden group hover:border-[#7360DF]/40 transition-colors duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F2AFEF]/30 via-transparent to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-[#7360DF]/20 text-[#33186B] font-bold text-sm tracking-widest uppercase">
                  Blora Mustika
                </span>
                <span className="text-xs font-mono text-gray-500">
                  Warisan Karakter Tangguh
                </span>
              </div>
              <h4 className="text-xl font-bold font-sans text-[#33186B] mb-2.5 flex items-center gap-2">
                Asal Daerah & Keunikan Budaya
              </h4>
              <p className="text-[#33186B]/90 text-sm md:text-base leading-relaxed">
                {DIANA_PROFILE.originNarrative}
              </p>
            </div>

            {/* Inspiration & Career Goal Card */}
            <div className="bg-[#F2AFEF]/20 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-sm relative overflow-hidden group hover:border-[#33186B]/30 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#C499F3]/30 via-transparent to-transparent pointer-events-none" />
              <div className="flex items-center gap-2 mb-3">
                <span className="p-1.5 rounded-lg bg-[#33186B]/20 text-[#33186B] font-bold text-sm tracking-widest uppercase">
                  Inspirasi Guru
                </span>
                <span className="text-xs font-mono text-gray-500">
                  Impian & Dedikasi
                </span>
              </div>
              <h4 className="text-xl font-bold font-sans text-[#33186B] mb-2.5 flex items-center gap-2">
                Panggilan Jiwa & Tujuan Menjadi Pendidik
              </h4>
              <p className="text-[#33186B]/90 text-sm md:text-base leading-relaxed">
                {DIANA_PROFILE.inspirationNarrative}
              </p>
            </div>

            {/* Quote Block */}
            <div className="relative pt-4 pl-4 mt-2">
              <div className="absolute top-0 left-0 text-[#7360DF]/40">
                <Quote className="w-12 h-12 transform -translate-y-2 -translate-x-1" />
              </div>
              <p className="relative italic text-base md:text-lg font-serif text-[#33186B] leading-relaxed font-semibold pl-6 border-l-2 border-[#7360DF]">
                &ldquo;{DIANA_PROFILE.quote}&rdquo;
              </p>
              <footer className="text-right text-xs font-mono font-semibold text-[#7360DF] tracking-widest mt-2 uppercase">
                &mdash; {DIANA_PROFILE.name}
              </footer>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
