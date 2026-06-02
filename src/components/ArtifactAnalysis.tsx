/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  Maximize2
} from 'lucide-react';
import { DETAILED_ARTIFACTS, DetailedArtifact, ArtifactDocumentation } from '../data/artifactsData';

export default function ArtifactAnalysis() {
  const [selectedArtifact, setSelectedArtifact] = useState<DetailedArtifact | null>(null);
  
  // Modal interior state variables
  const [activePreviewTab, setActivePreviewTab] = useState<'pdf' | 'gallery' | 'video'>('pdf');
  const [pdfPageIdx, setPdfPageIdx] = useState<number>(0);
  const [galleryCategory, setGalleryCategory] = useState<'semua' | 'mengajar' | 'diskusi' | 'presentasi siswa'>('semua');
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(32);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // Auto increment simulated video progress when it's playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingVideo) {
      interval = setInterval(() => {
        setVideoProgress((p) => (p >= 100 ? 0 : p + 1));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlayingVideo]);

  // Handle triggered simulation downloads
  const handleDownload = (type: 'rpp' | 'penilaian', artifactTitle: string) => {
    setAlertMessage(`Memulai pengunduhan berkas Resmi: ${type === 'rpp' ? 'Rencana Pelaksanaan Pembelajaran (RPP / Modul)' : 'Dokumen Rubrik Instrumen Penilaian'} - ${artifactTitle}`);
    setTimeout(() => {
      setAlertMessage(null);
    }, 4500);
  };

  // Map arbitrary icon string to safe verified Lucide components
  const getIcon = (iconName: string, className: string = "w-6 h-6") => {
    switch (iconName) {
      case 'FileText': return <FileText className={className} />;
      case 'Laptop': return <Laptop className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Eye': return <Eye className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      default: return <FileText className={className} />;
    }
  };

  return (
    <section id="analisis" className="scroll-mt-24 py-16 md:py-24 bg-gradient-to-b from-transparent via-[#C499F3]/10 to-transparent relative overflow-hidden">
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
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#F2AFEF]/60 border border-[#33186B]/20 uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#33186B]" />
            Ruang Bukti Karya & Integrasi TPACK
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4 font-black"
          >
            Artefak Pembelajaran Dasar Python
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Eksplorasi kumpulan modul rancangan, media interaktif, instrumen quiz, dan lembar kerja nyata kolaboratif siswa kelas X di SMA Kristen 1 Salatiga. Klik kartu untuk melihat transkrip PDF, video simulasi, galeri dokumentasi, dan refleksi pedagogis terperinci.
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
              className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 shadow-md text-xs sm:text-sm font-sans font-semibold max-w-2xl mx-auto"
            >
              <div className="p-1 px-2.5 rounded-lg bg-emerald-100 text-emerald-700 font-bold">
                SUKSES SimpPPL
              </div>
              <p className="flex-1">{alertMessage}</p>
              <button onClick={() => setAlertMessage(null)} className="text-emerald-500 hover:text-emerald-700">
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
                  setSelectedArtifact(artifact);
                  setActivePreviewTab('pdf');
                  setPdfPageIdx(0);
                  setGalleryCategory('semua');
                  setIsPlayingVideo(false);
                }}
                className="bg-white/50 backdrop-blur-md rounded-2xl border border-[#C499F3]/60 p-5 md:p-6 lg:p-7 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md hover:border-[#7360DF] group transition-all duration-300 relative overflow-hidden h-full"
              >
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
                    Buka Detail & Portofolio <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
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
              <p className="text-xs font-mono font-extrabold text-[#33186B] uppercase">Kompetensi Digital Teruji</p>
              <p className="text-sm font-sans text-[#33186B]/95 font-semibold mt-0.5">Seluruh artefak berakar dari riset tindakan kelas nyata (PTK) berbasis TPACK.</p>
            </div>
          </div>
          <a href="#penilaian" className="text-xs font-mono font-bold text-white bg-[#33186B] hover:bg-[#33186B]/90 px-4 py-2.5 rounded-xl border border-transparent shadow shadow-[#33186B]/20 transition-all">
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
              className="fixed inset-0 z-50 bg-[#1e293b]/90 backdrop-blur-md overflow-y-auto px-4 py-6 md:py-12 flex items-start justify-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 150 }}
                className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl border border-slate-200 overflow-hidden relative font-sans self-start my-auto"
                onClick={(e) => e.stopPropagation()} // Stop bubble up
              >
                
                {/* 1. STUNNING MODAL HEADER */}
                <div className="bg-[#33186B] text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#33186B]/25 relative">
                  {/* Floating particle background for Header */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                  
                  {/* Close floating button */}
                  <button 
                    onClick={() => setSelectedArtifact(null)}
                    className="absolute top-5 right-5 p-2 rounded-full bg-black/15 hover:bg-black/25 text-white/90 hover:text-white transition-all cursor-pointer border border-white/5"
                    title="Tutup Detail"
                  >
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

                  {/* Top-Right Download Action Box */}
                  <div className="flex items-center gap-2 z-10 self-start md:self-center">
                    <button 
                      onClick={() => handleDownload('rpp', selectedArtifact.cardName)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#33186B] bg-[#F2AFEF] hover:bg-[#f09bea] rounded-xl border border-transparent transition-all cursor-pointer shadow-sm"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Gawai RPP
                    </button>
                    <button 
                      onClick={() => handleDownload('penilaian', selectedArtifact.cardName)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-black/20 hover:bg-black/35 rounded-xl border border-white/10 transition-all cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      Instrumen Nilai
                    </button>
                  </div>
                </div>

                {/* 2. SPLIT GRID CONTENT (Left: Interactive Interactive Previewer, Right: Meta Reflection details) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-100">
                  
                  {/* LEFT SUB-COLUMN: INTERACTIVE SCREEN PREVIEW CONTROLLER */}
                  <div className="lg:col-span-7 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
                    
                    {/* Tiny sub-tabs header inside previewer */}
                    <div className="bg-slate-100 p-2 sm:p-3 border-b border-slate-200 flex flex-wrap items-center gap-1.5">
                      <button
                        onClick={() => setActivePreviewTab('pdf')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
                          activePreviewTab === 'pdf'
                            ? 'bg-[#33186B] text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        📄 Transkrip PDF
                      </button>
                      
                      <button
                        onClick={() => setActivePreviewTab('gallery')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
                          activePreviewTab === 'gallery'
                            ? 'bg-[#33186B] text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        📸 Galeri Dokumentasi Kegiatan
                      </button>

                      <button
                        onClick={() => setActivePreviewTab('video')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-tight transition-all cursor-pointer ${
                          activePreviewTab === 'video'
                            ? 'bg-[#33186B] text-white shadow-sm'
                            : 'text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        🎥 Embed Video Kelas
                      </button>
                    </div>

                    {/* Preview Area Contents */}
                    <div className="p-4 sm:p-6 flex-1 flex flex-col justify-center min-h-[380px] sm:min-h-[460px] bg-slate-900 overflow-hidden relative select-none">
                      
                      {/* SUB-VIEW 1: SIMULATED MULTI-PAGE SCRIPTING PDF READER */}
                      {activePreviewTab === 'pdf' && (
                        <div className="flex flex-col justify-between h-full space-y-4">
                          {/* Inner Mock PDF Top bar */}
                          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">
                            <span className="truncate max-w-[250px]">{selectedArtifact.pdfTitle}</span>
                            <span>Halaman {pdfPageIdx + 1} dari {selectedArtifact.pdfPages.length}</span>
                          </div>

                          {/* Paper Page Container with nice paper lines */}
                          <div className="bg-white text-slate-800 p-5 sm:p-7 rounded-xl shadow-lg border border-slate-700 flex-1 overflow-y-auto max-h-[330px] sm:max-h-[380px] scrollbar-thin relative font-sans leading-relaxed text-xs">
                            {/* Watermark UKSW background Seal inside Page */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] md:text-[80px] font-black tracking-widest text-[#33186B]/5 pointer-events-none select-none transform -rotate-12 uppercase">
                              PPG UKSW
                            </div>

                            <pre className="whitespace-pre-wrap font-sans text-neutral-800 font-medium whitespace-pre-line text-xs">
                              {selectedArtifact.pdfPages[pdfPageIdx]}
                            </pre>
                          </div>

                          {/* Page navigator bot bar */}
                          <div className="flex items-center justify-between bg-slate-800 p-2 rounded-lg border border-slate-700">
                            <button
                              disabled={pdfPageIdx === 0}
                              onClick={() => setPdfPageIdx((p) => Math.max(0, p - 1))}
                              className="p-1 px-3 rounded text-[10px] font-bold font-mono text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 disabled:opacity-30 disabled:hover:bg-slate-705 cursor-pointer flex items-center gap-1"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" /> Sebelumnya
                            </button>
                            
                            <div className="flex gap-1.5">
                              {selectedArtifact.pdfPages.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={() => setPdfPageIdx(index)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${pdfPageIdx === index ? 'bg-[#F2AFEF] scale-125' : 'bg-slate-600'}`}
                                />
                              ))}
                            </div>

                            <button
                              disabled={pdfPageIdx === selectedArtifact.pdfPages.length - 1}
                              onClick={() => setPdfPageIdx((p) => Math.min(selectedArtifact.pdfPages.length - 1, p + 1))}
                              className="p-1 px-3 rounded text-[10px] font-bold font-mono text-slate-300 hover:text-white bg-slate-700 hover:bg-slate-600 disabled:opacity-30 disabled:hover:bg-slate-705 cursor-pointer flex items-center gap-1"
                            >
                              Berikutnya <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      )}

                      {/* SUB-VIEW 2: CAROUSEL / FILTERABLE DOCUMENTATION PHOTO GALLERY */}
                      {activePreviewTab === 'gallery' && (
                        <div className="flex flex-col h-full justify-between">
                          
                          {/* Photo category buttons */}
                          <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-lg border border-slate-700 mb-3 overflow-x-auto select-none">
                            {(['semua', 'mengajar', 'diskusi', 'presentasi siswa'] as const).map((cat) => (
                              <button
                                key={cat}
                                onClick={() => setGalleryCategory(cat)}
                                className={`px-2 py-1 rounded text-[10px] font-extrabold uppercase font-mono tracking-wider truncate cursor-pointer whitespace-nowrap ${
                                  galleryCategory === cat
                                    ? 'bg-[#33186B] text-white shadow-sm'
                                    : 'text-slate-400 hover:text-slate-200'
                                }`}
                              >
                                {cat}
                              </button>
                            ))}
                          </div>

                          {/* Image box list gallery */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[300px] flex-1 pb-2 scrollbar-thin">
                            {selectedArtifact.documentation
                              .filter(doc => galleryCategory === 'semua' || doc.category === galleryCategory)
                              .map((doc, idx) => (
                                <div 
                                  key={idx} 
                                  className="group border border-slate-700/60 rounded-xl overflow-hidden bg-slate-850 flex flex-col justify-start relative shadow-md"
                                >
                                  {/* Absolute Badge Category */}
                                  <span className="absolute top-1.5 left-1.5 text-[8px] font-bold font-mono text-[#F2AFEF] bg-[#33186B] px-1.5 py-0.5 rounded border border-[#33186B]/20 uppercase">
                                    {doc.category}
                                  </span>

                                  {/* Unsplash beautiful simulated documentation image */}
                                  <img 
                                    src={doc.imageUrl} 
                                    alt={doc.title} 
                                    referrerPolicy="no-referrer"
                                    className="w-full h-28 object-cover group-hover:scale-105 duration-300 select-none grayscale-[20%] group-hover:grayscale-0"
                                  />
                                  <div className="p-2 text-left bg-slate-900 text-slate-300 text-[10.5px] leading-relaxed flex-1">
                                    <p className="font-bold text-slate-100 mb-0.5 truncate">{doc.title}</p>
                                    <p className="text-[9.5px] text-slate-400 font-sans line-clamp-3 leading-snug">{doc.description}</p>
                                  </div>
                                </div>
                              ))}
                          </div>
                          
                          {/* Explanatory footer inside grid */}
                          <div className="text-[10px] font-mono text-[#F2AFEF]/60 italic mt-3 text-center border-t border-slate-800 pt-2">
                            *Foto bersumber dari dokumentasi PPL asli SMA Kristen 1 Salatiga dengan sensor wajah teratur.
                          </div>
                        </div>
                      )}

                      {/* SUB-VIEW 3: SIMULATED INTEGRATED VIDEO MEDIA PLAYER */}
                      {activePreviewTab === 'video' && (
                        <div className="flex flex-col h-full bg-slate-950 justify-between rounded-xl overflow-hidden border border-slate-800 relative shadow-inner">
                          
                          {/* Simulated video iframe/mock player display */}
                          <div className="flex-1 flex flex-col items-center justify-center relative p-6">
                            
                            {/* Decorative blur play circle back */}
                            <div className="absolute w-24 h-24 bg-[#F2AFEF]/20 rounded-full blur-xl pointer-events-none" />

                            <div className="text-center space-y-3 z-10">
                              <div className="mx-auto w-16 h-16 bg-[#F2AFEF] text-emerald-950 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 duration-300"
                                onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                              >
                                {isPlayingVideo ? <Pause className="w-6 h-6 stroke-[3]" /> : <Play className="w-6 h-6 stroke-[3] translate-x-0.5" />}
                              </div>
                              <p className="text-xs font-mono font-bold text-slate-100">
                                {isPlayingVideo ? 'MENAYANGKAN VIDEO REKAMAN KELAS...' : 'KLIK UNTUK MEMUTAR SIMULASI KELAS'}
                              </p>
                              <p className="text-[10px] text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
                                Rekaman praktik mengajar terbimbing Diana Novita Sari di kelas X teori berdurasi ringkas (05:22).
                              </p>
                            </div>

                            {/* Corner duration marker */}
                            <div className="absolute bottom-3 right-3 text-[9px] font-mono bg-black/60 text-slate-300 px-2 py-0.5 rounded border border-slate-800 select-none">
                              {isPlayingVideo ? `01:${videoProgress < 10 ? '0' + Math.floor(videoProgress * 0.05) : Math.floor(videoProgress * 0.05)}` : '00:00'} / 05:22
                            </div>
                          </div>

                          {/* Control Scrub bar */}
                          <div className="bg-slate-900 p-2 border-t border-slate-800 font-sans text-slate-300 flex items-center justify-between gap-3 text-[10px] select-none">
                            <button
                              onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                              className="text-slate-200 hover:text-[#F2AFEF] transition-colors"
                            >
                              {isPlayingVideo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
                            </button>
                            
                            {/* Timeline scrubber bar tracking */}
                            <div className="flex-1 h-1 rounded bg-slate-800 relative overflow-hidden cursor-pointer"
                              onClick={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const pct = ((e.clientX - rect.left) / rect.width) * 100;
                                setVideoProgress(Math.round(pct));
                              }}
                            >
                              <div className="absolute top-0 left-0 bg-[#33186B] h-full" style={{ width: `${videoProgress}%` }} />
                            </div>

                            <span className="font-mono text-slate-400">1080p HD</span>
                          </div>

                        </div>
                      )}

                    </div>
                  </div>

                  {/* RIGHT SUB-COLUMN: DETAILED TEXT REFLECTIONS PANEL */}
                  <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-between max-h-[550px] sm:max-h-[640px] overflow-y-auto scrollbar-thin space-y-6">
                    
                    {/* A. Context & Objectives Section */}
                    <div>
                      <h4 className="text-xs font-mono font-bold text-[#7360DF] uppercase tracking-wide mb-2 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Konteks & Sasaran Kelas
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium mb-3.5">
                        {selectedArtifact.context}
                      </p>

                      <ul className="space-y-2 border-l border-slate-200 pl-3 md:pl-4 mt-2">
                        {selectedArtifact.tujuan.map((tj, i) => (
                          <li key={i} className="text-xs text-[#33186B] leading-relaxed font-sans font-semibold">
                            &bull; {tj}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* B. Pros & Cons Split Panel */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-[#F2AFEF]/20 border border-[#F2AFEF]/60 p-3 rounded-xl space-y-1">
                        <p className="text-[10px] font-mono font-bold text-[#33186B] uppercase">👍 Kelebihan</p>
                        <ul className="text-[10px] text-slate-600 space-y-1.5 list-disc pl-3 font-semibold leading-relaxed">
                          {selectedArtifact.kelebihan.slice(0, 2).map((kl, i) => (
                            <li key={i}>{kl}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-amber-50/75 border border-amber-200 p-3 rounded-xl space-y-1">
                        <p className="text-[10px] font-mono font-bold text-amber-800 uppercase">⚠ Kekurangan</p>
                        <ul className="text-[10px] text-slate-500 space-y-1.5 list-disc pl-3 font-medium leading-relaxed">
                          {selectedArtifact.kekurangan.slice(0, 2).map((kk, i) => (
                            <li key={i}>{kk}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* C. Pedagogic Theoretical Analysis (Vygotsky, Piaget, TPACK) */}
                    <div className="bg-[#C499F3]/15 border border-[#C499F3]/50 p-4 rounded-xl space-y-1.5 relative overflow-hidden">
                      <div className="absolute -top-1 right-2 text-[#33186B]/5">
                        <Sparkles className="w-16 h-16" />
                      </div>
                      <h4 className="text-xs font-mono font-bold text-[#33186B] uppercase tracking-wider">
                        Analisis Teori & Kajian Pedagogi
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#33186B] leading-relaxed font-sans text-justify font-medium">
                        {selectedArtifact.analisisTeori}
                      </p>
                    </div>

                    {/* D. Heartfelt Reflexion Narrative */}
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-1.5 border-l-4 border-l-[#33186B]">
                      <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-[#7360DF]" /> Refleksi Praktikan Diana
                      </h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 italic leading-relaxed font-sans">
                        &ldquo;{selectedArtifact.refleksi}&rdquo;
                      </p>
                    </div>

                  </div>
                </div>

                {/* 3. STEP-BY-STEP PPL TIMELINE INTERACTIVE SUB-GRID */}
                <div className="p-6 md:p-8 bg-slate-50 border-b border-slate-100">
                  <div className="mb-6">
                    <h3 className="text-sm font-mono font-extrabold text-[#33186B] uppercase tracking-wider flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#7360DF]" /> Alur Siklus Belajar Mahasiswa PPL
                    </h3>
                    <p className="text-xs text-slate-500 font-sans mt-0.5">
                      Linimasa 5 tahapan dari Observasi Kultur Kelas hingga Refleksi Diseminasi di SMA Kristen 1 Salatiga.
                    </p>
                  </div>

                  {/* Horizontal / Styled Vertical Timeline steps */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                    
                    {/* Background connector line */}
                    <div className="hidden md:block absolute top-[21px] left-10 right-10 h-[2px] bg-slate-200 z-0" />

                    {selectedArtifact.timeline.map((mile, i) => {
                      return (
                        <div key={i} className="relative z-10 flex flex-row md:flex-col gap-3 md:gap-2 items-start text-left">
                          
                          {/* Circle check marker indicator */}
                          <div className="p-2 rounded-full font-mono text-xs font-black w-10 h-10 flex items-center justify-center bg-white border-2 border-[#33186B] text-[#33186B] flex-shrink-0 transition-transform duration-300 hover:scale-110 shadow-sm">
                            {i + 1}
                          </div>

                          <div className="space-y-1">
                            <span className="text-[9px] font-bold font-mono text-[#7360DF] uppercase bg-[#C499F3]/30 px-1.5 py-0.5 rounded border border-[#7360DF]/15">
                              {mile.stage}
                            </span>
                            <h5 className="text-xs font-extrabold text-neutral-800 leading-snug">{mile.title}</h5>
                            <p className="text-[10px] text-slate-500 font-sans leading-relaxed line-clamp-2 md:line-clamp-3">
                              {mile.description}
                            </p>
                            <span className="block text-[8.5px] font-mono text-slate-400 mt-1">{mile.date}</span>
                          </div>

                        </div>
                      );
                    })}

                  </div>
                </div>

                {/* 4. BOTTOM ACTION CONTROL FOOTER */}
                <div className="bg-slate-100 px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                  <span className="text-slate-500 font-sans text-[11px] font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Terverifikasi Secara Elektronik di Portal UKSW Salatiga
                  </span>
                  
                  <button
                    onClick={() => setSelectedArtifact(null)}
                    className="p-2 px-6 rounded-xl bg-[#33186B] hover:bg-[#33186B]/90 text-white font-bold transition-all border border-transparent cursor-pointer shadow-md text-xs"
                  >
                    Tutup Lembar Kerja
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
