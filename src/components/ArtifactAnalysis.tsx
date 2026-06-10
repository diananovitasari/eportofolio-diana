/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  Laptop,
  TrendingUp,
  RefreshCw,
  Sparkles,
  ChevronRight,
  Check,
  Eye,
  Users,
  X,
  ChevronLeft,
  Play,
  Pause,
  Clock,
  Download,
  HelpCircle,
  ArrowRight,
  Maximize2,
  Camera,
  Presentation,
  ClipboardList,
} from "lucide-react";
import {
  DETAILED_ARTIFACTS,
  DetailedArtifact,
  ArtifactDocumentation,
} from "../data/artifactsData";

export default function ArtifactAnalysis() {
  const [selectedArtifact, setSelectedArtifact] =
    useState<DetailedArtifact | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");

  // Modal interior state variables per-artifact so each card keeps its own tabs
  type PreviewTab = "pdf" | "pdf2" | "pdf3" | "gallery";
  type GalleryCat =
    | "semua"
    | "mengajar"
    | "diskusi"
    | "presentasi siswa"
    | "lainnya";
  type PreviewState = {
    activePreviewTab: PreviewTab;
    pdfPageIdx: number;
    galleryCategory: GalleryCat;
  };

  const defaultPreviewState: PreviewState = {
    activePreviewTab: "pdf",
    pdfPageIdx: 0,
    galleryCategory: "semua",
  };

  const [previewStates, setPreviewStates] = useState<
    Record<string, PreviewState>
  >({});

  const ensurePreviewState = (id: string) => {
    setPreviewStates((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: { ...defaultPreviewState } };
    });
  };

  const updatePreviewState = (id: string, patch: Partial<PreviewState>) => {
    setPreviewStates((prev) => ({
      ...prev,
      [id]: { ...(prev[id] || defaultPreviewState), ...patch },
    }));
  };
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // Direct URLs untuk PDF Siklus 1, 2, dan 3 - Modul Ajar
  const modulAjarPdfUrl1 = new URL(
    "../assets/images/modul/MODUL AJAR/SIKLUS 1/Modul_Ajar_Informatika_Sistem_Komputer_Algoritma Round Robin.pdf",
    import.meta.url,
  ).href;

  const modulAjarPdfUrl2 = new URL(
    "../assets/images/modul/MODUL AJAR/SIKLUS 2/Modul Ajar_Diana Novita Sari_Revisi.pdf",
    import.meta.url,
  ).href;

  const modulAjarPdfUrl3 = new URL(
    "../assets/images/modul/MODUL AJAR/SIKLUS 3/MODUL AJAR ALGORITMA DAN PEMROGRAMAN_Diana Novita Sari.pdf",
    import.meta.url,
  ).href;

  // Direct URLs untuk PDF Bahan Ajar Media PPT
  const bahanAjarPdfUrl1 = new URL(
    "../assets/images/modul/Bahan Ajar Materi Cara Komputer Bekerja.pdf",
    import.meta.url,
  ).href;

  const bahanAjarPdfUrl2 = new URL(
    "../assets/images/modul/Bahan Ajar Materi Cara Komputer Bekerja.pdf",
    import.meta.url,
  ).href;

  const bahanAjarPdfUrl3 = new URL(
    "../assets/images/modul/Bahan Ajar Senin 18052026.pdf",
    import.meta.url,
  ).href;

  // Handle triggered simulation downloads
  const handleDownload = (type: "rpp" | "penilaian", artifactTitle: string) => {
    setAlertMessage(
      `Memulai pengunduhan berkas Resmi: ${type === "rpp" ? "Rencana Pelaksanaan Pembelajaran (RPP / Modul)" : "Dokumen Rubrik Instrumen Penilaian"} - ${artifactTitle}`,
    );
    setTimeout(() => {
      setAlertMessage(null);
    }, 4500);
  };

  // Map arbitrary icon string to safe verified Lucide components
  const getIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case "FileText":
        return <FileText className={className} />;
      case "Laptop":
        return <Laptop className={className} />;
      case "TrendingUp":
        return <TrendingUp className={className} />;
      case "RefreshCw":
        return <RefreshCw className={className} />;
      case "Eye":
        return <Eye className={className} />;
      case "Users":
        return <Users className={className} />;
      case "Sparkles":
        return <Sparkles className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  // Get tab icon component
  const getTabIcon = (iconName: string, className: string = "w-3.5 h-3.5") => {
    switch (iconName) {
      case "FileText":
        return <FileText className={className} />;
      case "Camera":
        return <Camera className={className} />;
      case "Presentation":
        return <Presentation className={className} />;
      case "ClipboardList":
        return <ClipboardList className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  return (
    <section
      id="analisis"
      className="scroll-mt-24 py-16 md:py-24 bg-gradient-to-b from-transparent via-[#C499F3]/10 to-transparent relative overflow-hidden">
      {/* Decorative Blob Backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2AFEF]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C499F3]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Title Block */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#F2AFEF]/60 border border-[#33186B]/20 uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#33186B]" />
            Ruang Bukti Karya & Integrasi TPACK
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4 font-black">
            Artefak Pembelajaran
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Eksplorasi kumpulan modul rancangan, media interaktif, instrumen
            quiz, dan lembar kerja nyata kolaboratif siswa kelas X di SMA
            Kristen 1 Salatiga. Klik kartu untuk melihat transkrip PDF, video
            simulasi, galeri dokumentasi, dan refleksi pedagogis terperinci.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>

        {/* Dynamic Interactive Download Notification Box */}
        <AnimatePresence>
          {alertMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 shadow-md text-xs sm:text-sm font-sans font-semibold max-w-2xl mx-auto">
              <div className="p-1 px-2.5 rounded-lg bg-emerald-100 text-emerald-700 font-bold">
                SUKSES SimpPPL
              </div>
              <p className="flex-1">{alertMessage}</p>
              <button
                onClick={() => setAlertMessage(null)}
                className="text-emerald-500 hover:text-emerald-700">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Core Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {DETAILED_ARTIFACTS.map((artifact, idx) => {
            return (
              <motion.div
                key={artifact.id}
                id={`artifact-card-${artifact.id}`}
                whileHover={{ y: -6, scale: 1.01 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => {
                  ensurePreviewState(artifact.id);
                  setSelectedArtifact(artifact);
                }}
                className="bg-white/50 backdrop-blur-md rounded-2xl border border-[#C499F3]/60 p-5 md:p-6 lg:p-7 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md hover:border-[#7360DF] group transition-all duration-300 relative overflow-hidden h-full">
                {/* Visual Accent Corner Gradients */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F2AFEF]/20 via-[#C499F3]/10 to-transparent rounded-bl-full pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-[#7360DF] uppercase bg-[#C499F3]/30 p-1 px-2.5 rounded border border-[#7360DF]/20">
                      {artifact.badge}
                    </span>
                    <div className="p-2 sm:p-2.5 rounded-xl bg-[#F2AFEF] text-[#33186B] group-hover:bg-[#33186B] group-hover:text-white transition-all duration-300 shadow-inner">
                      {getIcon(artifact.iconName, "w-5 h-5")}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#33186B] leading-tight mb-2 tracking-tight group-hover:text-[#7360DF] transition-colors">
                    {artifact.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans font-medium text-slate-500 tracking-wide mb-6">
                    {artifact.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#33186B]/80 leading-relaxed line-clamp-3 mb-6 bg-slate-50/50 p-3.5 rounded-xl border border-slate-100">
                    {artifact.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-[#C499F3]/85 flex items-center justify-between text-xs font-sans">
                  <span className="text-neutral-400 font-mono font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> 3 Siklus PPL
                  </span>

                  <span className="text-[#33186B] font-bold tracking-tight inline-flex items-center gap-1 group-hover:translate-x-1 duration-300">
                    Buka Detail & Portofolio{" "}
                    <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM METADATA HELPER CARD */}
        <div className="bg-[#F2AFEF]/20 border border-[#33186B]/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white text-[#33186B] rounded-xl border border-[#33186B]/10">
              <Sparkles className="w-6 h-6 text-[#7360DF]" />
            </div>
            <div>
              <p className="text-xs font-mono font-extrabold text-[#33186B] uppercase">
                Kompetensi Digital Teruji
              </p>
              <p className="text-sm font-sans text-[#33186B]/95 font-semibold mt-0.5">
                Seluruh artefak berakar dari riset tindakan kelas nyata (PTK)
                berbasis TPACK.
              </p>
            </div>
          </div>
          <a
            href="#penilaian"
            className="text-xs font-mono font-bold text-white bg-[#33186B] hover:bg-[#33186B]/90 px-4 py-2.5 rounded-xl border border-transparent shadow shadow-[#33186B]/20 transition-all">
            Lihat Rekap Nilai Jurnal
          </a>
        </div>

        {/* -------------------- DEEP DETAIL OVERLAY MODAL -------------------- */}
        <AnimatePresence>
          {selectedArtifact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-[#1e293b]/90 backdrop-blur-md overflow-y-auto px-4 py-6 md:py-12 flex items-start justify-center">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
                className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl border border-slate-200 overflow-hidden relative font-sans self-start my-auto"
                onClick={(e) => e.stopPropagation()}>
                {/* 1. STUNNING MODAL HEADER */}
                <div className="bg-[#33186B] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#33186B]/25 relative">
                  {/* Floating particle background for Header */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

                  {/* Close floating button */}
                  <button
                    onClick={() => setSelectedArtifact(null)}
                    className="absolute top-5 right-5 p-2 rounded-full bg-black/15 hover:bg-black/25 text-white/90 hover:text-white transition-all cursor-pointer border border-white/5"
                    title="Tutup Detail">
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  <div className="space-y-2 z-10 max-w-xl pr-6">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest text-[#F2AFEF] bg-white/10 border border-white/10">
                      {selectedArtifact.badge}
                    </span>
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {selectedArtifact.title}
                    </h1>
                    <p className="text-xs md:text-sm text-white/80 font-mono font-medium">
                      {selectedArtifact.subtitle}
                    </p>
                  </div>
                </div>

                {/* 2. SPLIT GRID CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-100">
                  {/* LEFT SUB-COLUMN: INTERACTIVE SCREEN PREVIEW CONTROLLER */}
                  <div className="lg:col-span-7 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
                    {/* Tiny sub-tabs header inside previewer - Using per-card tab config */}
                    <div className="bg-slate-100 p-2 sm:p-3 border-b border-slate-200 flex flex-wrap items-center gap-1.5">
                      {(() => {
                        const currentPreview = selectedArtifact
                          ? previewStates[selectedArtifact.id] ||
                            defaultPreviewState
                          : defaultPreviewState;
                        const tabConf = selectedArtifact?.tabConfig;

                        return (
                          <>
                            {/* PDF Tab 1 */}
                            <button
                              onClick={() =>
                                selectedArtifact &&
                                updatePreviewState(selectedArtifact.id, {
                                  activePreviewTab: "pdf",
                                })
                              }
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
                                currentPreview.activePreviewTab === "pdf"
                                  ? "bg-[#33186B] text-white shadow-sm"
                                  : "text-slate-600 hover:bg-slate-200"
                              }`}>
                              {tabConf?.pdf &&
                                getTabIcon(tabConf.pdf.icon, "w-3.5 h-3.5")}
                              {tabConf?.pdf.label || "📄 Transkrip PDF"}
                            </button>

                            {/* PDF Tab 2 (jika ada) */}
                            {tabConf?.pdf2 && (
                              <button
                                onClick={() =>
                                  selectedArtifact &&
                                  updatePreviewState(selectedArtifact.id, {
                                    activePreviewTab: "pdf2",
                                  })
                                }
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
                                  currentPreview.activePreviewTab === "pdf2"
                                    ? "bg-[#33186B] text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-200"
                                }`}>
                                {getTabIcon(tabConf.pdf2.icon, "w-3.5 h-3.5")}
                                {tabConf.pdf2.label}
                              </button>
                            )}

                            {/* PDF Tab 3 (jika ada) */}
                            {tabConf?.pdf3 && (
                              <button
                                onClick={() =>
                                  selectedArtifact &&
                                  updatePreviewState(selectedArtifact.id, {
                                    activePreviewTab: "pdf3",
                                  })
                                }
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
                                  currentPreview.activePreviewTab === "pdf3"
                                    ? "bg-[#33186B] text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-200"
                                }`}>
                                {getTabIcon(tabConf.pdf3.icon, "w-3.5 h-3.5")}
                                {tabConf.pdf3.label}
                              </button>
                            )}

                            {/* Gallery Tab (hanya untuk card yang memiliki gallery) */}
                            {tabConf?.gallery && (
                              <button
                                onClick={() =>
                                  selectedArtifact &&
                                  updatePreviewState(selectedArtifact.id, {
                                    activePreviewTab: "gallery",
                                  })
                                }
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer flex items-center gap-1.5 ${
                                  currentPreview.activePreviewTab === "gallery"
                                    ? "bg-[#33186B] text-white shadow-sm"
                                    : "text-slate-600 hover:bg-slate-200"
                                }`}>
                                {getTabIcon(
                                  tabConf.gallery.icon,
                                  "w-3.5 h-3.5",
                                )}
                                {tabConf.gallery.label}
                              </button>
                            )}
                          </>
                        );
                      })()}
                    </div>

                    {/* Preview Area Contents */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center min-h-[380px] sm:min-h-[460px] bg-slate-900 overflow-hidden relative select-none">
                      {(() => {
                        const cur = selectedArtifact
                          ? previewStates[selectedArtifact.id] ||
                            defaultPreviewState
                          : defaultPreviewState;

                        // KHUSUS UNTUK CARD HASIL KERJA SISWA - TAMPILKAN FOTO LKPD
                        if (selectedArtifact?.id === "hasil-kerja-siswa") {
                          // Tentukan dokumentasi yang akan ditampilkan berdasarkan tab yang dipilih
                          let currentDocumentation: ArtifactDocumentation[] =
                            [];

                          if (cur.activePreviewTab === "pdf") {
                            currentDocumentation =
                              selectedArtifact?.documentationSiklus1 || [];
                          } else if (cur.activePreviewTab === "pdf2") {
                            currentDocumentation =
                              selectedArtifact?.documentationSiklus2 || [];
                          } else if (cur.activePreviewTab === "pdf3") {
                            currentDocumentation =
                              selectedArtifact?.documentationSiklus3 || [];
                          } else {
                            currentDocumentation = [];
                          }

                          return (
                            <div className="flex flex-col h-full justify-between">
                              {/* Grid Foto LKPD - Tanpa Filter Kategori dan Tanpa Header */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto max-h-[380px] flex-1 pb-2 scrollbar-thin">
                                {currentDocumentation.map((doc, idx) => (
                                  <div
                                    key={idx}
                                    className="group border border-slate-700/60 rounded-xl overflow-hidden bg-slate-850 flex flex-col justify-start relative shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-[#7360DF]/20"
                                    onClick={() => {
                                      setLightboxImage(doc.imageUrl);
                                      setLightboxTitle(doc.title);
                                    }}>
                                    <div className="relative overflow-hidden">
                                      <img
                                        src={doc.imageUrl}
                                        alt={doc.title}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-40 object-cover group-hover:scale-110 duration-500 transition-transform"
                                        onError={(e) => {
                                          console.error(
                                            `Gambar tidak dapat dimuat: ${doc.imageUrl}`,
                                          );
                                          (e.target as HTMLImageElement).src =
                                            "https://placehold.co/800x600/33186B/white?text=Gambar+Tidak+Tersedia";
                                        }}
                                      />
                                      {/* Overlay gradient on hover */}
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                                        <span className="text-[9px] text-white flex items-center gap-1">
                                          <Eye className="w-3 h-3" /> Klik untuk
                                          memperbesar
                                        </span>
                                      </div>
                                    </div>
                                    <div className="p-2.5 text-left bg-slate-900 text-slate-300 flex-1">
                                      <p className="font-bold text-slate-100 text-xs mb-1 line-clamp-1">
                                        {doc.title}
                                      </p>
                                      <p className="text-[9px] text-slate-400 font-sans line-clamp-2 leading-relaxed">
                                        {doc.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Jika tidak ada dokumentasi */}
                              {currentDocumentation.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                                  <Camera className="w-12 h-12 mb-3 opacity-30" />
                                  <p className="text-xs font-medium">
                                    Belum ada dokumentasi untuk siklus ini
                                  </p>
                                </div>
                              )}

                              <div className="text-[10px] font-mono text-[#F2AFEF]/50 italic mt-3 text-center border-t border-slate-800 pt-2">
                                📸 Dokumentasi asli PPL Diana Novita Sari di SMA
                                Kristen 1 Salatiga
                              </div>
                            </div>
                          );
                        }

                        // PDF View untuk card lainnya (modul-ajar, media-ppt)
                        if (
                          cur.activePreviewTab === "pdf" ||
                          cur.activePreviewTab === "pdf2" ||
                          cur.activePreviewTab === "pdf3"
                        ) {
                          const isPdf2 = cur.activePreviewTab === "pdf2";
                          const isPdf3 = cur.activePreviewTab === "pdf3";

                          let currentPdfUrl = "";
                          let currentPdfTitle = selectedArtifact?.pdfTitle;

                          if (selectedArtifact.id === "modul-ajar") {
                            if (isPdf2) {
                              currentPdfUrl = modulAjarPdfUrl2;
                              currentPdfTitle = selectedArtifact?.pdfTitle2;
                            } else if (isPdf3) {
                              currentPdfUrl = modulAjarPdfUrl3;
                              currentPdfTitle = selectedArtifact?.pdfTitle3;
                            } else {
                              currentPdfUrl = modulAjarPdfUrl1;
                            }
                          }

                          if (selectedArtifact.id === "media-ppt") {
                            if (isPdf2) {
                              currentPdfUrl = bahanAjarPdfUrl2;
                              currentPdfTitle = selectedArtifact?.pdfTitle2;
                            } else if (isPdf3) {
                              currentPdfUrl = bahanAjarPdfUrl3;
                              currentPdfTitle = selectedArtifact?.pdfTitle3;
                            } else {
                              currentPdfUrl = bahanAjarPdfUrl1;
                            }
                          }

                          return (
                            <div className="flex flex-col justify-between h-full space-y-4">
                              <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">
                                <span className="truncate max-w-[500px]">
                                  {currentPdfTitle}
                                </span>
                                <a
                                  href={currentPdfUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="text-xs text-[#F2AFEF] underline">
                                  Buka di Tab Baru
                                </a>
                              </div>
                              <div className="bg-white text-slate-800 p-0 rounded-xl shadow-lg border border-slate-700 flex-1 overflow-hidden">
                                <iframe
                                  title={`${selectedArtifact.id === "modul-ajar" ? "Modul Ajar" : "Bahan Ajar"} ${isPdf2 ? "Siklus 2" : isPdf3 ? "Siklus 3" : "Siklus 1"}`}
                                  src={currentPdfUrl}
                                  className="w-full h-[520px] sm:h-[640px]"
                                  frameBorder={0}
                                />
                              </div>
                            </div>
                          );
                        }

                        // Gallery View untuk card lainnya (modul-ajar, media-ppt)
                        if (cur.activePreviewTab === "gallery") {
                          return (
                            <div className="flex flex-col h-full justify-between">
                              <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 mb-3 overflow-x-auto select-none">
                                {(
                                  [
                                    "semua",
                                    "mengajar",
                                    "diskusi",
                                    "presentasi siswa",
                                  ] as const
                                ).map((cat) => (
                                  <button
                                    key={cat}
                                    onClick={() =>
                                      selectedArtifact &&
                                      updatePreviewState(selectedArtifact.id, {
                                        galleryCategory: cat as GalleryCat,
                                      })
                                    }
                                    className={`px-2 py-1 rounded text-[10px] font-extrabold uppercase font-mono tracking-wider truncate cursor-pointer whitespace-nowrap ${
                                      cur.galleryCategory === cat
                                        ? "bg-[#33186B] text-white shadow-sm"
                                        : "text-slate-400 hover:text-slate-200"
                                    }`}>
                                    {cat}
                                  </button>
                                ))}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[300px] flex-1 pb-2 scrollbar-thin">
                                {selectedArtifact.documentation
                                  .filter(
                                    (doc) =>
                                      cur.galleryCategory === "semua" ||
                                      doc.category === cur.galleryCategory,
                                  )
                                  .map((doc, idx) => (
                                    <div
                                      key={idx}
                                      className="group border border-slate-700/60 rounded-xl overflow-hidden bg-slate-850 flex flex-col justify-start relative shadow-md">
                                      <span className="absolute top-1.5 left-1.5 text-[8px] font-bold font-mono text-[#F2AFEF] bg-[#33186B] px-1.5 py-0.5 rounded border border-[#33186B]/20 uppercase">
                                        {doc.category}
                                      </span>
                                      <img
                                        src={doc.imageUrl}
                                        alt={doc.title}
                                        referrerPolicy="no-referrer"
                                        className="w-full h-28 object-cover group-hover:scale-105 duration-300 select-none grayscale-[20%] group-hover:grayscale-0"
                                      />
                                      <div className="p-2 text-left bg-slate-900 text-slate-300 text-[10.5px] leading-relaxed flex-1">
                                        <p className="font-bold text-slate-100 mb-0.5 truncate">
                                          {doc.title}
                                        </p>
                                        <p className="text-[9.5px] text-slate-400 font-sans line-clamp-3 leading-snug">
                                          {doc.description}
                                        </p>
                                      </div>
                                    </div>
                                  ))}
                              </div>

                              <div className="text-[10px] font-mono text-[#F2AFEF]/60 italic mt-3 text-center border-t border-slate-800 pt-2">
                                *Foto bersumber dari dokumentasi PPL asli SMA
                                Kristen 1 Salatiga dengan sensor wajah teratur.
                              </div>
                            </div>
                          );
                        }

                        return null;
                      })()}
                    </div>
                  </div>

                  {/* RIGHT SUB-COLUMN: DETAILED TEXT REFLECTIONS PANEL - DINAMIS PER SIKLUS */}
                  <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between max-h-[550px] sm:max-h-[640px] overflow-y-auto scrollbar-thin space-y-6">
                    {(() => {
                      const currentTab = selectedArtifact
                        ? previewStates[selectedArtifact.id]
                            ?.activePreviewTab || "pdf"
                        : "pdf";
                      let currentSiklusContent = null;

                      if (selectedArtifact?.siklusContents) {
                        if (currentTab === "pdf") {
                          currentSiklusContent =
                            selectedArtifact.siklusContents.siklus1;
                        } else if (currentTab === "pdf2") {
                          currentSiklusContent =
                            selectedArtifact.siklusContents.siklus2;
                        } else if (currentTab === "pdf3") {
                          currentSiklusContent =
                            selectedArtifact.siklusContents.siklus3;
                        }
                      }

                      const displayContext =
                        currentSiklusContent?.context ||
                        selectedArtifact?.context;
                      const displayTujuan =
                        currentSiklusContent?.tujuan ||
                        selectedArtifact?.tujuan;

                      return (
                        <>
                          <div>
                            {currentSiklusContent && (
                              <div className="mb-4 pb-2 border-b border-[#C499F3]/30">
                                <h3 className="text-sm font-bold text-[#33186B] mb-1">
                                  {currentSiklusContent.title}
                                </h3>
                                <p className="text-[11px] text-[#7360DF] font-mono italic">
                                  {currentSiklusContent.description}
                                </p>
                              </div>
                            )}

                            <h4 className="text-xs font-mono font-bold text-[#7360DF] uppercase tracking-wide mb-2 flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Konteks &
                              Sasaran Kelas
                            </h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium mb-3.5">
                              {displayContext}
                            </p>

                            <ul className="space-y-2 border-l border-slate-200 pl-3 md:pl-4 mt-2">
                              {displayTujuan?.map((tj, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-[#33186B] leading-relaxed font-sans font-semibold">
                                  &bull; {tj}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#F2AFEF]/20 border border-[#F2AFEF]/60 p-3 rounded-xl space-y-1">
                              <p className="text-[10px] font-mono font-bold text-[#33186B] uppercase">
                                👍 Kelebihan
                              </p>
                              <ul className="text-[10px] text-slate-600 space-y-1.5 list-disc pl-3 font-semibold leading-relaxed">
                                {selectedArtifact?.kelebihan
                                  .slice(0, 2)
                                  .map((kl, i) => (
                                    <li key={i}>{kl}</li>
                                  ))}
                              </ul>
                            </div>

                            <div className="bg-amber-50/75 border border-amber-200 p-3 rounded-xl space-y-1">
                              <p className="text-[10px] font-mono font-bold text-amber-800 uppercase">
                                ⚠ Kekurangan
                              </p>
                              <ul className="text-[10px] text-slate-500 space-y-1.5 list-disc pl-3 font-medium leading-relaxed">
                                {selectedArtifact?.kekurangan
                                  .slice(0, 2)
                                  .map((kk, i) => (
                                    <li key={i}>{kk}</li>
                                  ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-[#C499F3]/15 border border-[#C499F3]/50 p-4 rounded-xl space-y-1.5 relative overflow-hidden">
                            <div className="absolute -top-1 right-2 text-[#33186B]/5">
                              <Sparkles className="w-16 h-16" />
                            </div>
                            <h4 className="text-xs font-mono font-bold text-[#33186B] uppercase tracking-wider">
                              Analisis Teori & Kajian Pedagogi
                            </h4>
                            <p className="text-[11px] sm:text-xs text-[#33186B] leading-relaxed font-sans text-justify font-medium">
                              {selectedArtifact?.analisisTeori}
                            </p>
                          </div>

                          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 border-l-4 border-l-[#33186B]">
                            <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                              <TrendingUp className="w-3.5 h-3.5 text-[#7360DF]" />{" "}
                              Refleksi Praktikan Diana
                            </h4>
                            <p className="text-[11px] sm:text-xs text-slate-500 italic leading-relaxed font-sans">
                              &ldquo;{selectedArtifact?.refleksi}&rdquo;
                            </p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </div>

                {/* 3. STEP-BY-STEP PPL TIMELINE INTERACTIVE SUB-GRID */}
                <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-100">
                  <div className="mb-6">
                    <h3 className="text-sm font-mono font-extrabold text-[#33186B] uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#7360DF]" /> Alur Siklus
                      Belajar Mahasiswa PPL
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Linimasa 5 tahapan dari Observasi Kultur Kelas hingga
                      Refleksi Diseminasi di SMA Kristen 1 Salatiga.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    <div className="hidden md:block absolute top-[21px] left-10 right-10 h-[2px] bg-slate-200 z-0" />

                    {selectedArtifact.timeline.map((mile, i) => {
                      return (
                        <div
                          key={i}
                          className="relative z-10 flex flex-row md:flex-col gap-3 md:gap-2 items-start text-left">
                          <div className="p-2 rounded-full font-mono text-xs font-black w-10 h-10 flex items-center justify-center bg-white border-2 border-[#33186B] text-[#33186B] flex-shrink-0 transition-transform duration-300 hover:scale-110 shadow-sm">
                            {i + 1}
                          </div>

                          <div className="space-y-1">
                            <span className="text-[9px] font-bold font-mono text-[#7360DF] uppercase bg-[#C499F3]/30 px-1.5 py-0.5 rounded border border-[#7360DF]/15">
                              {mile.stage}
                            </span>
                            <h5 className="text-xs font-extrabold text-neutral-800 leading-snug">
                              {mile.title}
                            </h5>
                            <p className="text-[10px] text-slate-500 font-sans leading-relaxed line-clamp-2 md:line-clamp-3">
                              {mile.description}
                            </p>
                            <span className="block text-[8.5px] font-mono text-slate-400 mt-1">
                              {mile.date}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 4. BOTTOM ACTION CONTROL FOOTER */}
                <div className="bg-slate-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <span className="text-slate-500 font-sans text-[11px] font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />{" "}
                    Terverifikasi Secara Elektronik di Portal UKSW Salatiga
                  </span>

                  <button
                    onClick={() => setSelectedArtifact(null)}
                    className="p-2 px-6 rounded-xl bg-[#33186B] hover:bg-[#33186B]/90 text-white font-bold transition-all border border-transparent cursor-pointer shadow-md text-xs">
                    Tutup Lembar Kerja
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox untuk foto LKPD */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#0f172a]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <img
                src={lightboxImage}
                alt={lightboxTitle}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4">
                <p className="text-white text-sm font-medium text-center">
                  {lightboxTitle}
                </p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all backdrop-blur-sm">
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
