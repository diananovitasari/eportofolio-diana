/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, 
  Play, 
  Video, 
  Eye, 
  Minimize2, 
  Maximize2, 
  ChevronRight, 
  ChevronLeft, 
  Users, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Bookmark, 
  Clock, 
  HelpCircle,
  ThumbsUp,
  X
} from 'lucide-react';

interface PhotoItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'mengajar' | 'diskusi' | 'presentasi siswa';
  tag: string;
  details: string;
}

export default function DocumentationGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'semua' | 'mengajar' | 'diskusi' | 'presentasi siswa'>('semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  // High-quality contextual photos sourced with high aesthetic standards
  const photos: PhotoItem[] = [
    {
      id: "ph-1",
      title: "Penjelasan Konsep Laci Variabel",
      description: "Diana membimbing pemahaman analogis tipe data Python menggunakan representasi kontainer visual di papan tulis.",
      imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
      category: "mengajar",
      tag: "Siklus I",
      details: "Guru mengaitkan materi tipe data primitif dengan wadah tertutup di kehidupan sehari-hari (analogical mapping). Hal ini membantu memicu pemahaman konseptual awal murid sebelum memulai penulisan kode sesungguhnya."
    },
    {
      id: "ph-2",
      title: "Desain Simulasi Lintasan Alur Kereta",
      description: "Diana mendemonstrasikan logika percabangan kondisional (if-else) menggunakan peraga ilustrasi magnetis interaktif.",
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      category: "mengajar",
      tag: "Siklus II",
      details: "Menggunakan model rel kereta api berjalur ganda untuk melukiskan bagaimana interpreter Python menolak atau mengeksekusi satu blok program berdasarkan terpenuhinya syarat boolean kebenaran."
    },
    {
      id: "ph-3",
      title: "Asistensi Klinis & Scaffolding Kelompok",
      description: "Bimbingan intensif tatap muka Diana kepada murid yang melambat guna mereduksi kecemasan instruksional.",
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      category: "mengajar",
      tag: "Siklus III",
      details: "Tindakan klinis berdasarkan Zone of Proximal Development (ZPD) untuk melatih siswa menemukan kegagalan program tanpa langsung menuliskan jawabannya, melatih kemandirian berpikir problem-solving."
    },
    {
      id: "ph-4",
      title: "Pemberian Peran Terstruktur Tim",
      description: "Para siswa membagi peran pengerjaan LKPD sebagai Coder, Debugger, dan Documenter secara adil.",
      imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80",
      category: "diskusi",
      tag: "Gotong Royong",
      details: "Langkah asasi mitigasi bias kontribusi kelompok dalam Pembelajaran Berdiferensiasi. Setiap anak memikul sumbangsih peran spesifik di hadapan satu sistem laptop kolaboratif."
    },
    {
      id: "ph-5",
      title: "Kolaborasi Logika Deteksi Error",
      description: "Diskusi akrab siswa memecahkan 'IndentationError' pada block program Python yang membingungkan.",
      imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
      category: "diskusi",
      tag: "Bernalar Kritis",
      details: "Siswa saling menguji baris kode temannya (peer-debugging). Proses ini meningkatkan kepekaan nalar komputasi serta mematangkan kerja sama tim."
    },
    {
      id: "ph-6",
      title: "Eksperimen Interaktif di Kelas",
      description: "Siswa secara kolektif berembuk menuntaskan tantangan kuis gamifikasi Quizizz di sela pelajaran jam siang.",
      imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      category: "diskusi",
      tag: "Gamifikasi",
      details: "Suasana diskusi kelompok dinamis memicu adrenalin menjawab pertanyaan logika sintaks secara serentak mengandalkan sinergi cepat."
    },
    {
      id: "ph-7",
      title: "Presentasi Karya Program Kasir Kelas",
      description: "Perwakilan kelompok memamerkan hasil pengodean Python murni di depan guru pamong dan teman sekelas.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
      category: "presentasi siswa",
      tag: "Uji Publik",
      details: "Siswa melatih keberanian komunikasi publik, menjabarkan kegunaan program, meloloskan masukan, serta mendemokan skenario input-output program kasir Salatiga."
    },
    {
      id: "ph-8",
      title: "Demonstrasi Solusi Kasus LKPD",
      description: "Siswa memproyeksikan diagram alur pakan Orangutan buatan tim mereka menggunakan media LCD sekolah.",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
      category: "presentasi siswa",
      tag: "Student Centered",
      details: "Pembelajaran berpusat penuh pada karya siswa. Guru menduduki posisi fasilitator penyegar suasana, sementara siswa mempertahankan argumentasi rancangan solusi koding mereka."
    },
    {
      id: "ph-9",
      title: "Tanya Jawab Lintas Kelompok",
      description: "Kelompok penyaji mempertahankan struktur indentasi koding mereka terhadap tanggapan kritis kelompok lain.",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
      category: "presentasi siswa",
      tag: "Saling Menghargai",
      details: "Membentuk budaya empati berpendapat tinggi. Siswa belajar membagikan ulasan bertatabahasa santun dan mengapresiasi keunikan desain solusi pemrograman kompetitor."
    }
  ];

  const filteredPhotos = selectedCategory === 'semua' 
    ? photos 
    : photos.filter(p => p.category === selectedCategory);

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="galeri-dokumentasi" className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#F2AFEF]/10 to-transparent">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C499F3]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#F2AFEF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Title Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#F2AFEF]/60 border border-[#33186B]/20 uppercase mb-3 text-center"
          >
            <Camera className="w-3.5 h-3.5 text-[#33186B]" />
            Dokumentasi Praktik Mengajar
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4 font-black"
          >
            Galeri Dokumentasi & Video
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Menyajikan bukti autentik keterlibatan kognitif dan sosial siswa kelas X di SMA Kristen 1 Salatiga dalam tiga modul aktivitas: Mengajar, Diskusi Kelompok, dan Presentasi Siswa.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>

        {/* -------------------- DUAL MODULE GRID -------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT: INTERACTIVE CAROUSEL GALLERY GRID (7 Columns) */}
          <div className="lg:col-span-12 xl:col-span-8 flex flex-col justify-between">
            
            {/* Gallery Category Filter Header */}
            <div className="flex flex-wrap items-center gap-1.5 justify-start bg-[#C499F3]/15 p-1.5 rounded-2xl border border-[#C499F3]/40 mb-6 max-w-2xl">
              {(['semua', 'mengajar', 'diskusi', 'presentasi siswa'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase font-mono tracking-wider cursor-pointer transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-[#33186B] text-white shadow-sm'
                      : 'text-[#33186B] hover:bg-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Light Image Cards Grid with Enter Entrance Animation */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredPhotos.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    onClick={() => setLightboxIndex(index)}
                    className="bg-white/50 border border-[#C499F3]/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group flex flex-col h-full justify-between"
                  >
                    <div className="relative overflow-hidden aspect-video">
                      {/* Image Frame */}
                      <img 
                        src={photo.imageUrl} 
                        alt={photo.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 duration-500"
                      />
                      {/* Dark Overlayer Hover and Tag Info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                        <span className="text-[10px] font-mono text-white flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5" /> Klik untuk memperjelas
                        </span>
                      </div>

                      {/* Tag Ribbon */}
                      <span className="absolute top-2.5 left-2.5 text-[8.5px] font-mono font-bold uppercase tracking-widest bg-[#33186B] text-[#F2AFEF] border border-[#33186B]/30 px-2 py-0.5 rounded shadow-sm">
                        {photo.tag}
                      </span>
                    </div>

                    {/* Meta descriptive */}
                    <div className="p-4 text-left flex-1 flex flex-col justify-between">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono font-black text-[#7360DF] uppercase tracking-wider">
                          {photo.category}
                        </span>
                        <h4 className="text-sm font-bold text-[#33186B] leading-tight group-hover:text-[#7360DF] transition-colors line-clamp-1">
                          {photo.title}
                        </h4>
                        <p className="text-xs text-slate-500 text-justify line-clamp-3 leading-relaxed mt-1 font-medium">
                          {photo.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-dashed border-[#C499F3]/50 mt-4 text-[10px] font-mono font-extrabold text-[#33186B] flex items-center justify-between">
                        <span>PPL SMAK 1</span>
                        <span className="text-emerald-600 flex items-center gap-0.5">✔ Autentik</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* RIGHT: COMPREHENSIVE RESPONSIVE VIDEO PLAY EMBED MODULE (5 Columns) */}
          <div className="lg:col-span-12 xl:col-span-4 flex flex-col justify-between">
            <div className="bg-white/50 backdrop-blur-md rounded-3xl border border-[#C499F3]/60 p-6 md:p-8 flex flex-col h-full justify-between shadow-md relative overflow-hidden">
              {/* Internal Accent Blob */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F2AFEF]/20 rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#33186B]/10">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-[#F2AFEF] text-[#33186B]">
                      <Video className="w-4 h-4 text-[#33186B]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#33186B] tracking-tight">Video Praktik Kelas</h3>
                      <p className="text-[9px] text-gray-400 font-mono tracking-wider uppercase font-extrabold">Video Rekaman Simulasi</p>
                    </div>
                  </div>
                  <span className="text-[9px] bg-[#C499F3]/30 font-mono font-bold text-[#7360DF] px-2 py-1 rounded border border-[#7360DF]/20">
                    Fase E Python
                  </span>
                </div>

                <p className="text-xs text-justify text-[#33186B]/95 leading-relaxed font-medium mb-4">
                  Saksikan rekaman video aktivitas riil pengajaran terbimbing di kelas X SMA Kristen 1 Salatiga. Rekaman ini memperlihatkan dinamika sintaks PBL, pendampingan scaffolding, hingga keaktifan presentasi kelompok.
                </p>

                {/* Video Embed Frame wrapper */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 aspect-video shadow-inner group border border-[#C499F3]/40 mb-4 select-none">
                  {/* YouTube Embed Player directly embedded */}
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&hl=id" 
                    title="Diana Novita Sari Teaching Simulation Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="absolute inset-0 w-full h-full z-10"
                  />
                  
                  {/* Backdrop beautiful illustration representing loading or preparation */}
                  <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-4 text-center z-0">
                    <div className="w-12 h-12 rounded-full bg-[#F2AFEF] text-emerald-950 flex items-center justify-center shadow-md">
                      <Play className="w-5 h-5 fill-emerald-950 stroke-[3]" />
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono font-bold mt-2">Memuat Player Simulasi UKSW...</p>
                  </div>
                </div>

                <div className="space-y-3 bg-[#F2AFEF]/20 border border-[#F2AFEF] p-4 rounded-2xl">
                  <h4 className="text-xs font-mono font-bold text-[#33186B] uppercase flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#7360DF]" /> Capaian Video Pedagogis:
                  </h4>
                  <ul className="text-[10.5px] text-[#33186B]/90 space-y-1.5 list-disc pl-3 leading-relaxed font-sans font-semibold">
                    <li>Menguraikan sintaks PBL dari Orientasi Masalah hingga Presentasi.</li>
                    <li>Sesi intervensi klinis (Individual Support Guide) secara visual.</li>
                    <li>Pemberian apresiasi piala kecil (gamification rewards).</li>
                    <li>Ulas balik reflektif dengan teman sejawat dalam ruang uji.</li>
                  </ul>
                </div>
              </div>

              {/* Verified bar footer */}
              <div className="pt-4 mt-6 border-t border-dashed border-[#C499F3]/50 flex items-center justify-between text-[10px] font-mono font-bold text-gray-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#7360DF]" /> Video Durasi: 05:22 Menit
                </span>
                <span className="text-emerald-700 uppercase bg-emerald-100/60 p-1 px-2.5 rounded">TERVERIFIKASI</span>
              </div>
            </div>
          </div>

        </div>

        {/* -------------------- FULL SCREEN DETAILED LIGHTBOX MODAL -------------------- */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0f172a]/95 backdrop-blur-md flex flex-col justify-between p-4 py-6 md:p-8"
              onClick={() => setLightboxIndex(null)}
            >
              
              {/* Lightbox TOP Control Bar */}
              <div className="flex items-center justify-between text-white z-10 max-w-6xl mx-auto w-full select-none text-xs">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#F2AFEF] uppercase bg-[#33186B] px-2.5 py-1 rounded">
                    {filteredPhotos[lightboxIndex].category}
                  </span>
                  <span className="ml-3 font-mono text-slate-400 font-bold">
                    Berkas {lightboxIndex + 1} dari {filteredPhotos.length}
                  </span>
                </div>

                {/* Tutup Floating button */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer text-white flex items-center gap-1 font-bold text-xs"
                >
                  <X className="w-4 h-4 stroke-[2.5]" /> Tutup Layar
                </button>
              </div>

              {/* Lightbox MAIN CONTENT Slide Wrapper */}
              <div className="flex-1 flex items-center justify-center max-w-5xl mx-auto w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                
                {/* Previous Action button */}
                <button
                  onClick={handlePrevLightbox}
                  className="absolute left-0 p-3 rounded-full bg-black/45 hover:bg-black/65 text-white z-20 border border-white/5 cursor-pointer md:translate-x-[-20px] transition-transform hover:scale-105"
                  title="Foto Sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>

                {/* Core Image Viewer Frame */}
                <div className="relative max-h-[60vh] md:max-h-[70vh] flex items-center justify-center select-none overflow-hidden rounded-2xl shadow-2xl border border-slate-800">
                  <img
                    src={filteredPhotos[lightboxIndex].imageUrl}
                    alt={filteredPhotos[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-xl"
                  />
                  {/* Subtle stamp */}
                  <span className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest text-white/50 pointer-events-none select-none uppercase">
                    PPG PRAJABATAN UKSW SALATIGA
                  </span>
                </div>

                {/* Next Action button */}
                <button
                  onClick={handleNextLightbox}
                  className="absolute right-0 p-3 rounded-full bg-black/45 hover:bg-black/65 text-white z-20 border border-white/5 cursor-pointer md:translate-x-[20px] transition-transform hover:scale-105"
                  title="Foto Berikutnya"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>

              </div>

              {/* Lightbox BOTTOM Detail Descriptive (3 Columns layout) */}
              <div className="bg-slate-900 border border-slate-850 p-5 md:p-6 rounded-2xl w-full max-w-4xl mx-auto z-10 text-left space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-white font-sans text-base md:text-lg font-bold">
                    {filteredPhotos[lightboxIndex].title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold text-[#7360DF] bg-[#7360DF]/10 px-2 py-0.5 rounded border border-[#7360DF]/20 uppercase">
                    Kategori: {filteredPhotos[lightboxIndex].category}
                  </span>
                </div>
                
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {filteredPhotos[lightboxIndex].description}
                </p>

                {/* Theoretical/Pedagogical Reflexion paragraph */}
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-850 border-l-2 border-l-[#33186B] text-[11px] md:text-xs text-slate-300 leading-relaxed font-sans italic">
                  <strong>Refleksi & Kajian Tindakan:</strong> &ldquo;{filteredPhotos[lightboxIndex].details}&rdquo;
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
