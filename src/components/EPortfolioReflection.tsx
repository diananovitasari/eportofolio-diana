/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Lightbulb, 
  Compass, 
  HelpCircle, 
  ChevronRight, 
  UserCheck, 
  Sparkles, 
  Award,
  BookMarked,
  Heart,
  MessageSquare,
  ShieldCheck,
  Target
} from 'lucide-react';

export default function EPortfolioReflection() {
  const [activeTab, setActiveTab] = useState<'refleksi' | 'filosofi'>('refleksi');

  const refleksiAspek = [
    {
      id: "aspek-1",
      question: "Apa yang telah dipelajari sebagai calon guru selama tahapan PPL Terbimbing dari awal hingga akhir?",
      answer: "Selama menjalani tahapan PPL Terbimbing di SMA Kristen 1 Salatiga, pelajaran terbesar yang saya peroleh adalah bahwa mengajar tidak sekadar mentransfer baris sintaks Python atau membagikan slide presentasi. Saya belajar mengintegrasikan kerangka TPACK (Technological Pedagogical Content Knowledge) secara bermakna untuk merespons gaya belajar digital siswa. Pembelajaran harus berpusat sepenuhnya pada siswa (student-centered), di mana rancangan modul ajar, LKPD, dan media kuis online dirajut secara koheren untuk menuntun siswa menemukan sendiri pemecahan masalah (Problem-Based Learning) sesuai dengan tingkat kesiapan kognitif mereka.",
      badge: "Pembelajaran Esensial",
      icon: <GraduationCap className="w-5 h-5 text-[#33186B]" />
    },
    {
      id: "aspek-2",
      question: "Apakah terdapat pengalaman yang menantang dan bagaimana solusi nyata dari permasalahan tersebut?",
      answer: "Tantangan paling berat di kelas X Fase E adalah kesenjangan kognitif (readiness gap) yang sangat lebar; beberapa siswa sudah terbiasa memecahkan teka-teki logika kognitif komputer, sementara sebagian lainnya kesulitan melakukan pengetikan dasar. Solusi yang saya formulasikan adalah menerapkan Pembelajaran Berdiferensiasi (Differentiated Instruction). Saya membagi kelas menjadi kelompok heterogen dengan menetapkan 'Kartu Peran Spesifik' (Coder, Debugger, Presenter, Documenter) agar setiap anggota berkontribusi merata tanpa ada yang merasa tertinggal. Selain itu, saya merancang LKPD modular dengan scaffolding bertingkat, memberikan panduan intervensi lebih padat bagi kelompok yang melambat, dan memberikan tugas pengayaan kompetitif untuk kelompok berkemampuan cepat.",
      badge: "Solusi & Tantangan",
      icon: <Target className="w-5 h-5 text-[#7360DF]" />
    },
    {
      id: "aspek-3",
      question: "Apa umpan balik atau saran konstruktif dalam diskusi refleksi akhir untuk perbaikan tahap PPL Mandiri?",
      answer: "Umpan balik berharga dari Guru Pamong, Ibu Sri Wahyuni, S.Pd., dan Dosen Pembimbing Lapangan UKSW menekankan pentingnya mempersiapkan rencana mitigasi non-digital orisinal. internet lab sekolah yang sesekali tidak stabil tidak beralasan menghentikan keaktifan kelas. Untuk PPL Mandiri mendatang, saya disarankan mengembangkan media analog kreatif (seperti kartu kuis tempel fisik) sebagai cadangan permainan Quizizz digital, mengasah fleksibilitas manajemen manajemen alokasi sintaks waktu PBL agar transisi antarfase diskusi kelompok lebih dinamis, serta mempertajam variasi instrumen evaluasi diri antarteman (peer-assessment) secara konsisten.",
      badge: "Saran & Tindak Lanjut",
      icon: <MessageSquare className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <section id="e-portfolio-2" className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden bg-white/40">
      {/* Visual background decorations congruent with the color palette */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#F2AFEF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[#C499F3]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Dynamic Title Header Block */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#C499F3]/50 border border-[#7360DF]/40 uppercase mb-3"
          >
            <BookMarked className="w-3.5 h-3.5 text-[#7360DF]" />
            E-Portfolio Bagian II
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4 font-black"
          >
            Prinsip & Nilai Filosofis Guru
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Formulasi refleksi kognitif akhir dari PPL Terbimbing serta manifesto filsafat pengajaran mandiri yang akan melandasi ideologi pembelajaran Diana Novita Sari menjadi guru profesional.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>

        {/* Outer Tab Triggers */}
        <div className="flex justify-center mb-10 md:mb-12">
          <div className="bg-[#C499F3]/20 p-1 rounded-2xl border border-[#C499F3]/50 flex gap-2 w-full max-w-lg shadow-sm">
            <button
              onClick={() => setActiveTab('refleksi')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold tracking-tight transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'refleksi' 
                  ? 'bg-[#33186B] text-white shadow'
                  : 'text-[#33186B] hover:bg-white/60'
              }`}
            >
              <Sparkles className="w-4 h-4 shrink-0" />
              Siklus Refleksi PPL Terbimbing
            </button>
            <button
              onClick={() => setActiveTab('filosofi')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs md:text-sm font-extrabold tracking-tight transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'filosofi' 
                  ? 'bg-[#33186B] text-white shadow'
                  : 'text-[#33186B] hover:bg-white/60'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              Filosofi Mengajar Guru
            </button>
          </div>
        </div>

        {/* Core Content Switcher with Framer Motion AnimatePresence */}
        <div className="min-h-[420px]">
          <AnimatePresence mode="wait">
            {activeTab === 'refleksi' ? (
              <motion.div
                key="tab-refleksi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                
                {/* Aspek Refleksi Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                  {refleksiAspek.map((item, index) => (
                    <div 
                      key={item.id}
                      className="bg-white/60 backdrop-blur-md rounded-2xl border border-[#C499F3]/40 p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#7360DF]/60 transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Decorative internal blob */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#F2AFEF]/20 to-transparent rounded-bl-full pointer-events-none" />
                      
                      <div>
                        {/* Upper meta block */}
                        <div className="flex items-center justify-between mb-4 border-b border-[#33186B]/10 pb-3">
                          <span className="text-[10px] font-mono font-bold tracking-widest text-[#7360DF] uppercase">
                            {item.badge}
                          </span>
                          <div className="p-2 rounded-lg bg-[#F2AFEF]/50 text-[#33186B]">
                            {item.icon}
                          </div>
                        </div>

                        {/* Question title */}
                        <h4 className="text-sm md:text-base font-extrabold font-sans text-[#33186B] leading-tight mb-4 tracking-tight">
                          {item.question}
                        </h4>

                        {/* Detailed text details */}
                        <p className="text-xs md:text-sm text-[#33186B]/95 text-justify leading-relaxed font-sans font-medium bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                          {item.answer}
                        </p>
                      </div>

                      {/* Card stamp indicators */}
                      <div className="mt-6 pt-3 border-t border-dashed border-[#C499F3]/60 text-[10px] font-mono font-bold text-gray-400 flex items-center justify-between">
                        <span>Revisi Siklus I - III selesai</span>
                        <span className="text-emerald-600 flex items-center gap-1">✔ Valid</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Integration Info Box */}
                <div className="bg-[#F2AFEF]/20 rounded-2xl border border-[#33186B]/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-white text-emerald-700 rounded-lg border border-slate-150 shadow-sm flex-shrink-0">
                      <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    </div>
                    <p className="text-xs md:text-sm text-[#33186B] font-sans font-semibold">
                      Analisis refleksi ini dijadikan fondasi utama dalam merumuskan skema pembelajaran mandiri (PPL II) berstandar PPG Prajabatan Nasional.
                    </p>
                  </div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-950 font-mono font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-emerald-200">
                    SIMPPG UKSW Salatiga
                  </span>
                </div>

              </motion.div>
            ) : (
              <motion.div
                key="tab-filosofi"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="bg-white/60 backdrop-blur-md rounded-2xl border border-[#C499F3]/50 p-6 md:p-10 shadow-lg relative"
              >
                {/* Backdrop quotes marks */}
                <div className="absolute top-8 left-8 text-[#33186B]/5 pointer-events-none select-none">
                  <span className="text-[120px] font-serif font-bold leading-none">&ldquo;</span>
                </div>

                <div className="relative z-10 space-y-6 md:space-y-8 max-w-4xl mx-auto">
                  
                  {/* Title of Philosophy */}
                  <div className="border-b border-dashed border-[#C499F3] pb-4 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-sans font-extrabold text-[#33186B] tracking-tight">
                        Manifesto Filosofi Pengajaran Diana Novita Sari
                      </h3>
                      <p className="text-xs text-gray-400 font-mono font-bold mt-1 uppercase">
                        Ideologi Perjalanan Calon Guru Profesional PPG UKSW SMAK1 Salatiga
                      </p>
                    </div>
                    
                    <span className="self-start sm:self-center px-3 py-1 bg-[#F2AFEF] text-emerald-900 border border-[#F2AFEF] text-xs font-mono font-bold rounded-full">
                      Teori Pendidikan Teruji
                    </span>
                  </div>

                  {/* Paragraph 1 */}
                  <div className="space-y-2 border-l-2 border-l-[#7360DF] pl-4 md:pl-6">
                    <span className="text-[10px] font-mono tracking-widest font-extrabold text-[#7360DF] uppercase block mb-1">
                      Bagian 1: Hakikat Menuntun & Potensi Kodrat Anak
                    </span>
                    <p className="text-sm md:text-base text-[#33186B]/95 text-justify leading-relaxed font-sans font-medium">
                      Filosofi mengajar saya berakar pada pemikiran monumental Ki Hajar Dewantara mengenai konsep <strong>"Menuntun"</strong>. Saya meyakini sepenuhnya bahwa setiap anak lahir dengan keunikannya masing-masing, tumbuh selaras dengan garis kodrat alam dan kodrat zamannya yang tidak beralasan dihapus atau diganti secara paksa. Sebagai guru, tugas asasi saya bukanlah mengukir kayu mati atau membentuk tanah liat sesuai kehendak bebas guru sendiri, melainkan bertindak bagaikan seorang petani yang menyirami, menggemburkan tanah, membimbing, serta merawat tunas padi agar tumbuh subur dan kokoh. Pendidik harus hadir sebagai panutan luhur (ing ngarsa sung tulada), penyemangat dinamis di tengah siswa (ing madya mangun karsa), serta pendorong moril yang memerdekakan siswa untuk mandiri bersuara (tut wuri handayani).
                    </p>
                  </div>

                  {/* Paragraph 2 */}
                  <div className="space-y-2 border-l-2 border-l-[#33186B] pl-4 md:pl-6">
                    <span className="text-[10px] font-mono tracking-widest font-extrabold text-[#33186B] uppercase block mb-1">
                      Bagian 2: Konstruktivisme Sosial & Konstruksi Kognitif Mandiri
                    </span>
                    <p className="text-sm md:text-base text-[#33186B]/95 text-justify leading-relaxed font-sans font-medium">
                      Guna mengontekstualisasikan filosofi luhur tersebut dalam pengajaran modern ilmu komputer pemrograman Python, saya mengintegrasikannya dengan <strong>Teori Konstruktivisme Sosial Lev Vygotsky</strong>. Saya menolak konsepsi kelas pasif tradisional di mana murid diposisikan sebagai wadah kosong penerima dogma teori. Sebaliknya, pembelajaran coding harus dijembatani dalam <em>Zone of Proximal Development</em> (ZPD) melalui skema bimbingan (scaffolding) yang dinamis. Kesalahan penulisan sintaks program komputer (seperti 'IndentationError') tidak boleh dikonotasikan sebagai kegagalan fatal yang pantas mendapat hukuman, melainkan diposisikan sebagai pemicu eksplorasi rasa ingin tahu anak. Melalui scaffolding instruksional yang berstruktur heterogen, siswa dituntun bertukar pandangan dalam tim belajar, menantang nalar kritis mereka sendiri, hingga secara bertahap berhasil memecahkan teka-teki logika kognitif secara mandiri.
                    </p>
                  </div>

                  {/* Paragraph 3 */}
                  <div className="space-y-2 border-l-2 border-l-emerald-600 pl-4 md:pl-6">
                    <span className="text-[10px] font-mono tracking-widest font-extrabold text-emerald-700 uppercase block mb-1">
                      Bagian 3: Pembelajaran Berdiferensiasi & Pendidikan Welas Asih
                    </span>
                    <p className="text-sm md:text-base text-[#33186B]/95 text-justify leading-relaxed font-sans font-medium">
                      Sebagai komitmen perjuangan moral saya menuju predikat Pendidik Profesional, saya memeluk erat prinsip <strong>Pembelajaran Berdiferensiasi (Differentiated Instruction)</strong> dan <strong>Pendidikan Welas Asih (Compassionate Teaching)</strong>. Melayani keragaman bakat anak menuntut kelenturan hati seorang guru untuk mendesain pembelajaran yang fleksibel, adil, inklusif, dan tidak seragam. Saya berkomitmen mendedikasikan karir mengajar saya untuk senantiasa mendengarkan suara murid, mengembangkan regulasi emosi yang hangat, serta menyatukan kecerdasan kognitif dengan pembentukan budi pekerti yang luhur. Hanya melalui kehangatan empati, keterbukaan pikiran, dan penguasaan TPACK yang adaptif, kita dapat mengawal generasi emas Indonesia tumbuh menjadi manusia merdeka yang beradab, bergotong-royong, serta tangguh menghadapi arus peradaban zaman komputer yang terus bergulir.
                    </p>
                  </div>

                  {/* Quote footer card sign */}
                  <div className="mt-8 pt-6 border-t border-slate-150 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-2.5">
                      <Heart className="w-5 h-5 text-[#7360DF] fill-[#7360DF]/20" />
                      <span className="text-xs font-sans text-slate-500 font-semibold italic">
                        &ldquo;Mendidik dengan hati, menuntun dengan nalar luhur.&rdquo;
                      </span>
                    </div>

                    <div className="text-right">
                      <p className="text-xs font-bold text-[#33186B] font-sans">Diana Novita Sari, S.Pd.</p>
                      <p className="text-[10px] text-gray-400 font-mono uppercase">Mahasiswa PPG Prajabatan UKSW Salatiga</p>
                    </div>
                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
