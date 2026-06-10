/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Camera,
  Eye,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  X,
  Loader2,
} from "lucide-react";

interface PhotoItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

export default function DocumentationGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(6);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Import gambar dari folder assets lokal
  const siklus1 = new URL(
    "../assets/images/dokumentasi/Siklus 1/Diskusi Guru Pamong.jpg",
    import.meta.url,
  ).href;
  const siklus11 = new URL(
    "../assets/images/dokumentasi/Siklus 1/Mencocokkan Hasil LKPD Siswa.jpg",
    import.meta.url,
  ).href;
  const siklus111 = new URL(
    "../assets/images/dokumentasi/Siklus 1/Siswa Menjelaskan Presentasi Algoritma Round Robin.jpeg",
    import.meta.url,
  ).href;
  const siklus2 = new URL(
    "../assets/images/dokumentasi/Siklus 2/Diskusi Guru Pamong.jpg",
    import.meta.url,
  ).href;
  const siklus22 = new URL(
    "../assets/images/dokumentasi/Siklus 2/Pendampingan Individu (Scaffolding).jpg",
    import.meta.url,
  ).href;
  const siklus222 = new URL(
    "../assets/images/dokumentasi/Siklus 2/Siklus 2 Mengajar Sistem Komputer (Cara Komputer Bekerja).JPG",
    import.meta.url,
  ).href;
  const siklus3 = new URL(
    "../assets/images/dokumentasi/Siklus 3/Latihan Soal Algoritma dan Pemrograman.JPG",
    import.meta.url,
  ).href;
  const siklus33 = new URL(
    "../assets/images/dokumentasi/Siklus 3/Asistensi Mengajar Siklus 3 Algoritma dan Pemorgraman.JPG",
    import.meta.url,
  ).href;

  // All photos data
  const allPhotos: PhotoItem[] = [
    {
      id: "ph-1",
      title: "Diskusi Guru Pamong",
      description:
        "Diskusi dan evaluasi bersama guru pamong, mengenai pembelajaran yang telah dilakukan dan yang akan dilakukan.",
      imageUrl: siklus1,
      tag: "Siklus I",
    },
    {
      id: "ph-2",
      title: "LKPD Siswa",
      description:
        "Mencocokkan Hasil LKPD Siswa tentang algoritma round robin.",
      imageUrl: siklus11,
      tag: "Siklus I",
    },
    {
      id: "ph-3",
      title: "Presentasi Siswa",
      description: "Siswa Menjelaskan Presentasi Algoritma Round Robin.",
      imageUrl: siklus111,
      tag: "Siklus I",
    },
    {
      id: "ph-4",
      title: "Diskusi Guru Pamong",
      description:
        "Diskusi dan evaluasi bersama guru pamong, mengenai pembelajaran yang telah dilakukan dan yang akan dilakukan.",
      imageUrl: siklus2,
      tag: "Siklus II",
    },
    {
      id: "ph-5",
      title: "Pendampingan Individu",
      description:
        "Mendampingi dan membantu siswa dalam memecahkan latihan soal saat siswa merasa kesulitan.",
      imageUrl: siklus22,
      tag: "Siklus II",
    },
    {
      id: "ph-6",
      title: "Mengajar Sistem Komputer",
      description:
        "Asistensi Mengajar Sistem Komputer (Cara Komputer Bekerja).",
      imageUrl: siklus222,
      tag: "Siklus II",
    },
    {
      id: "ph-7",
      title: "Latihan Soal",
      description:
        "Siswa mengerjakan latihan soal untuk menguji pemahaman mereka tentang algoritma dan pemrograman.",
      imageUrl: siklus3,
      tag: "Siklus III",
    },
    {
      id: "ph-8",
      title: "Asistensi Mengajar",
      description:
        "Guru pamong memberikan asistensi mengajar kepada siswa dalam proses belajar.",
      imageUrl: siklus33,
      tag: "Siklus III",
    },
  ];

  const hasMore = displayCount < allPhotos.length;
  const displayedPhotos = allPhotos.slice(0, displayCount);

  // Reset display count when component mounts
  useEffect(() => {
    setDisplayCount(4);
  }, []);

  // Infinite scroll observer
  useEffect(() => {
    if (!loaderRef.current || !hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setIsLoading(true);
          setTimeout(() => {
            setDisplayCount((prev) => Math.min(prev + 3, allPhotos.length));
            setIsLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1, rootMargin: "100px" },
    );

    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoading, allPhotos.length]);

  const handleNextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % allPhotos.length);
    }
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + allPhotos.length) % allPhotos.length,
      );
    }
  };

  return (
    <section
      id="galeri-dokumentasi"
      className="scroll-mt-24 py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#F2AFEF]/10 to-transparent">
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
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#F2AFEF]/60 border border-[#33186B]/20 uppercase mb-3 text-center">
            <Camera className="w-3.5 h-3.5 text-[#33186B]" />
            Dokumentasi Praktik Mengajar
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4 font-black">
            Galeri Dokumentasi
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Menyajikan bukti autentik keterlibatan kognitif dan sosial siswa
            kelas X di SMA Kristen 1 Salatiga selama proses pembelajaran.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>

        {/* Gallery Grid with Infinite Scroll */}
        <div ref={galleryRef} className="min-h-[400px]">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                whileHover={{ y: -6 }}
                onClick={() => setLightboxIndex(index)}
                className="bg-white/50 border border-[#C499F3]/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group flex flex-col h-full justify-between">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 duration-500"
                    onError={(e) => {
                      console.error(
                        `Gambar tidak dapat dimuat: ${photo.imageUrl}`,
                      );
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/800x600/33186B/white?text=Gambar+Tidak+Tersedia";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-[10px] font-mono text-white flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Klik untuk memperjelas
                    </span>
                  </div>
                  <span className="absolute top-2.5 left-2.5 text-[8.5px] font-mono font-bold uppercase tracking-widest bg-[#33186B] text-[#F2AFEF] border border-[#33186B]/30 px-2 py-0.5 rounded shadow-sm">
                    {photo.tag}
                  </span>
                </div>

                <div className="p-4 text-left flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-[#33186B] leading-tight group-hover:text-[#7360DF] transition-colors line-clamp-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-500 text-justify line-clamp-3 leading-relaxed mt-1 font-medium">
                      {photo.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-dashed border-[#C499F3]/50 mt-4 text-[10px] font-mono font-extrabold text-[#33186B] flex items-center justify-between">
                    <span>PPL SMAK 1 Salatiga</span>
                    <span className="text-emerald-600 flex items-center gap-0.5">
                      ✔ Autentik
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Infinite Scroll Loader */}
          {hasMore && (
            <div
              ref={loaderRef}
              className="flex justify-center items-center py-8 mt-4">
              {isLoading ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 text-[#7360DF] animate-spin" />
                  <span className="text-xs text-slate-500 font-mono">
                    Memuat foto lainnya...
                  </span>
                </div>
              ) : (
                <div className="text-center">
                  <span className="text-xs text-slate-400 font-mono">
                    Scroll untuk memuat lebih banyak
                  </span>
                </div>
              )}
            </div>
          )}

          {/* No more photos indicator */}
          {!hasMore && allPhotos.length > 6 && (
            <div className="text-center py-6 mt-2">
              <p className="text-xs text-slate-400 font-mono">
                Semua {allPhotos.length} foto telah dimuat
              </p>
            </div>
          )}

          {/* Empty state */}
          {allPhotos.length === 0 && (
            <div className="text-center py-12">
              <Camera className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-500">
                Belum ada dokumentasi yang tersedia
              </p>
            </div>
          )}
        </div>

        {/* -------------------- FULL SCREEN DETAILED LIGHTBOX MODAL -------------------- */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#0f172a]/95 backdrop-blur-md flex flex-col justify-between p-4 py-6 md:p-8"
              onClick={() => setLightboxIndex(null)}>
              <div className="flex items-center justify-between text-white z-10 max-w-6xl mx-auto w-full select-none text-xs">
                <div>
                  <span className="ml-3 font-mono text-slate-400 font-bold">
                    Berkas {lightboxIndex + 1} dari {allPhotos.length}
                  </span>
                </div>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer text-white flex items-center gap-1 font-bold text-xs">
                  <X className="w-4 h-4 stroke-[2.5]" /> Tutup Layar
                </button>
              </div>

              <div
                className="flex-1 flex items-center justify-center max-w-5xl mx-auto w-full relative"
                onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={handlePrevLightbox}
                  className="absolute left-0 p-3 rounded-full bg-black/45 hover:bg-black/65 text-white z-20 border border-white/5 cursor-pointer md:translate-x-[-20px] transition-transform hover:scale-105"
                  title="Foto Sebelumnya">
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>

                <div className="relative max-h-[60vh] md:max-h-[70vh] flex items-center justify-center select-none overflow-hidden rounded-2xl shadow-2xl border border-slate-800">
                  <img
                    src={allPhotos[lightboxIndex].imageUrl}
                    alt={allPhotos[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain rounded-xl"
                    onError={(e) => {
                      console.error(`Lightbox: Gambar tidak dapat dimuat`);
                      (e.target as HTMLImageElement).src =
                        "https://placehold.co/1200x800/33186B/white?text=Gambar+Tidak+Tersedia";
                    }}
                  />
                  <span className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest text-white/50 pointer-events-none select-none uppercase">
                    PPG PRAJABATAN UKSW SALATIGA
                  </span>
                </div>

                <button
                  onClick={handleNextLightbox}
                  className="absolute right-0 p-3 rounded-full bg-black/45 hover:bg-black/65 text-white z-20 border border-white/5 cursor-pointer md:translate-x-[20px] transition-transform hover:scale-105"
                  title="Foto Berikutnya">
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>
              </div>

              <div
                className="bg-slate-900 border border-slate-850 p-5 md:p-6 rounded-2xl w-full max-w-4xl mx-auto z-10 text-left space-y-3"
                onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-white font-sans text-base md:text-lg font-bold">
                    {allPhotos[lightboxIndex].title}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {allPhotos[lightboxIndex].description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
