/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TEACHER_MISI, TEACHER_COMPETENCIES } from '../data';
import { 
  Compass, 
  Heart, 
  Cpu, 
  Award, 
  Sparkles, 
  BookOpen, 
  CheckCircle,
  GraduationCap
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Heart: Heart,
  Cpu: Cpu,
  Compass: Compass,
};

export default function TargetTeacher() {
  return (
    <section id="visi-kompetensi" className="scroll-mt-24 py-12 md:py-20 relative overflow-hidden bg-gradient-to-t from-transparent via-[#F2AFEF]/15 to-transparent">
      {/* Absolute shapes for glass context */}
      <div className="absolute top-1/3 left-10 w-64 h-64 bg-[#7360DF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#33186B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Title block */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#F2AFEF]/60 border border-[#33186B]/20 uppercase mb-3"
          >
            <Compass className="w-3.5 h-3.5 text-[#33186B]" />
            Misi & Kompetensi Masa Depan
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4"
          >
            Model Guru yang Dituju
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Misi hidup, kompetensi andalan, dan budi pekerti pendidik yang dirancang Diana Novita Sari demi mewujudkan guru profesional yang humanis di era digital.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>

        {/* MISSION SUB-SECTION (3 Cards) */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-sans font-bold text-[#33186B] text-center mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-[#7360DF]" /> Tiga Misi Pembelajaran Diana
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TEACHER_MISI.map((misi, idx) => {
              const IconComp = iconMap[misi.iconName] || Compass;
              return (
                <motion.div
                  key={misi.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="bg-white/45 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm flex flex-col items-center text-center group transition-colors hover:border-[#7360DF]/40"
                >
                  <div className="p-3.5 rounded-xl bg-[#C499F3]/40 text-[#33186B] mb-4 group-hover:scale-110 group-hover:bg-[#7360DF]/20 transition-all duration-300">
                    <IconComp className="w-6 h-6 shrink-0" />
                  </div>
                  <h4 className="text-base font-bold font-sans text-[#33186B] mb-2 leading-tight">
                    {misi.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#33186B]/90 leading-relaxed font-sans font-medium">
                    {misi.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* COMPETENCIES GRID (4 Cards, 2x2 layout on desktop) */}
        <div className="mb-14">
          <h3 className="text-xl md:text-2xl font-sans font-bold text-[#33186B] text-center mb-8 flex items-center justify-center gap-2">
            <GraduationCap className="w-5.5 h-5.5 text-[#7360DF]" /> Empat Pilar Kompetensi Guru Profesional
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {TEACHER_COMPETENCIES.map((comp, idx) => (
              <motion.div
                key={comp.category}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl shadow-sm p-6 flex flex-col justify-between group hover:border-[#7360DF]/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Visual side accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tr from-transparent via-[#F2AFEF]/30 to-transparent pointer-events-none rounded-tr-2xl" />

                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-[#33186B]/10 pb-3">
                    <span className="text-xs font-mono font-bold text-[#7360DF] tracking-wider uppercase">
                      {comp.category}
                    </span>
                    <span className="p-1 px-2.5 rounded bg-[#F2AFEF]/60 border border-[#F2AFEF] text-[10px] text-[#33186B] font-bold uppercase font-mono tracking-widest">
                      PPG Standar
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-extrabold font-sans text-[#33186B] mb-2 leading-tight">
                    {comp.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#33186B]/90 leading-relaxed font-medium mb-4">
                    {comp.description}
                  </p>
                </div>

                {/* Subskill bullet tags */}
                <div className="pt-2">
                  <span className="block text-[10px] font-mono font-bold text-[#33186B]/60 uppercase tracking-wider mb-2">
                    Skil Khusus Penunjang PPL:
                  </span>
                  <div className="flex flex-wrap gap-1.5 font-sans">
                    {comp.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="bg-white/70 border border-[#C499F3]/70 rounded-full px-2.5 py-1 text-[11px] font-semibold text-[#33186B] shadow-sm flex items-center gap-1 shrink-0"
                      >
                        <CheckCircle className="w-3 h-3 text-[#7360DF] shrink-0" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CHARACTER VISION CALLOUT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#33186B] to-[#7360DF] rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
        >
          {/* Back glows */}
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#F2AFEF]/30 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#C499F3]/30 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-3 relative z-10">
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#C499F3] bg-white/10 px-2.5 py-1 rounded">
                Refleksi Karakter Luhur
              </span>
              <h4 className="text-2xl md:text-3xl font-sans font-bold tracking-tight">
                Pendidik Berbudi Pekerti Merdeka
              </h4>
              <p className="text-xs md:text-sm leading-relaxed text-white/90 text-justify">
                Diana percaya bahwa model guru masa depan harus menggabungkan kekuatan <strong>Welas Asih (Compassion)</strong> dengan ketangkasan digital. Nilai-nilai ini menjadi pijakan dasar karakter agar mampu melakukan asih, asah, dan asuh spiritual, menciptakan disiplin positif yang memerdekakan pemikiran kritis murid tanpa mematikan keberanian mengeksplorasi bakat individunya.
              </p>
            </div>

            <div className="md:col-span-4 flex justify-center md:justify-end relative z-10 select-none">
              <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center w-full max-w-xs md:max-w-none shadow-lg">
                <span className="block text-4xl mb-2 font-bold font-serif text-[#C499F3]">&ldquo;</span>
                <p className="text-xs font-medium italic text-white/95 leading-relaxed mb-3">
                  Ing Ngarsa Sung Tulada, Ing Madya Mangun Karsa, Tut Wuri Handayani.
                </p>
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#C499F3] uppercase block border-t border-white/10 pt-2.5">
                  &mdash; Ki Hajar Dewantara
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
