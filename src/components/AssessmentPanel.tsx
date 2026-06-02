/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ClipboardCheck, 
  Award, 
  FileText,
  LineChart as LineIcon,
  BookOpenCheck,
  Download,
  Printer,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  FileSpreadsheet,
  Calendar,
  Layers,
  Sparkles,
  Award as RibbonIcon
} from 'lucide-react';
import { LAMPIRAN_7_ITEMS, LAMPIRAN_8_ITEMS } from '../data';

export default function AssessmentPanel() {
  const [activeLampiran, setActiveLampiran] = useState<'L7' | 'L8'>('L7');
  const [selectedCycle, setSelectedCycle] = useState<'cycle1' | 'cycle2' | 'cycle3'>('cycle3');
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [downloading, setDownloading] = useState(false);

  const activeItems = activeLampiran === 'L7' ? LAMPIRAN_7_ITEMS : LAMPIRAN_8_ITEMS;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadSimulation = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert(`Berhasil mengunduh dokumen: Diana_Novita_Sari_Lampiran_${activeLampiran === 'L7' ? '7_Penyusunan_Perangkat' : '8_Praktik_Mengajar'}_Siklus3.pdf`);
    }, 1200);
  };

  return (
    <section id="penilaian" className="scroll-mt-24 py-12 md:py-20 relative bg-slate-50/50">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C499F3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#F2AFEF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Title Block */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#C499F3]/50 border border-[#7360DF]/40 uppercase mb-3"
          >
            <ClipboardCheck className="w-3.5 h-3.5 text-[#7360DF]" />
            Dokumen Uji & Evaluasi Pamong
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4"
          >
            Sertifikasi Dokumen & Instrumen Penilaian
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Tinjau transkrip lampiran penilaian otentik yang ditandatangani oleh Guru Pamong SMA Kristen 1 Salatiga dalam format lembar kerja PDF interaktif.
          </p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>





        {/* ----------------- INTERACTIVE PDF VIEW SYSTEM ----------------- */}
        <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div>
            <h3 className="text-xl font-bold text-[#33186B] flex items-center gap-2">
              <FileText className="w-5.5 h-5.5 text-[#7360DF]" /> Lembar Jurnal & Portofolio PDF
            </h3>
            <p className="text-xs text-gray-500 font-sans mt-0.5">
              Gunakan simulator di bawah untuk memeriksa draf bertanda tangan resmi Lampiran 7 & 8.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold">
            <span className="text-gray-400 bg-white shadow-sm border border-slate-200 px-3 py-1 rounded">
              SKALA PRATINJAU: {zoomLevel}%
            </span>
          </div>
        </div>

        {/* The PDF App Frame Wrapper */}
        <div className="border border-slate-300/80 rounded-2xl overflow-hidden shadow-xl bg-slate-200 flex flex-col">
          
          {/* A. PDF Reader Top Chrome Toolbar Bar */}
          <div className="bg-[#1E293B] text-slate-100 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-sans md:border-b md:border-slate-700 select-none">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-[#F2AFEF] text-emerald-950 text-[10px] font-mono font-bold uppercase tracking-wider">
                PDF ACTIVE
              </span>
              <span className="font-mono text-slate-300 font-semibold truncate max-w-[200px] sm:max-w-none">
                Diana_Novita_Sari_Lampiran_{activeLampiran === 'L7' ? '7' : '8'}_SIKLUS_{selectedCycle === 'cycle1' ? '1' : selectedCycle === 'cycle2' ? '2' : '3'}.pdf
              </span>
            </div>

            {/* Scale & document toggle controls */}
            <div className="flex items-center gap-4">
              {/* Document Type tab switcher inside viewer */}
              <div className="bg-slate-800/80 p-0.5 rounded-lg border border-slate-700 flex ml-2">
                <button
                  onClick={() => setActiveLampiran('L7')}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold tracking-tight transition-all cursor-pointer ${
                    activeLampiran === 'L7' 
                      ? 'bg-[#33186B] text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Lampiran 7
                </button>
                <button
                  onClick={() => setActiveLampiran('L8')}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold tracking-tight transition-all cursor-pointer ${
                    activeLampiran === 'L8' 
                      ? 'bg-[#33186B] text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Lampiran 8
                </button>
              </div>

              {/* Cycle quick toggle in document inside PDF view */}
              <div className="hidden lg:flex items-center gap-1.5">
                <span className="text-slate-400 text-[10px] uppercase font-mono tracking-wider">Tinjau Siklus:</span>
                <div className="bg-slate-800 p-0.5 rounded-lg border border-slate-700 flex">
                  {(['cycle1', 'cycle2', 'cycle3'] as const).map((cy) => (
                    <button
                      key={cy}
                      onClick={() => setSelectedCycle(cy)}
                      className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono tracking-tight cursor-pointer ${
                        selectedCycle === cy
                          ? 'bg-[#7360DF] text-slate-900'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cy === 'cycle1' ? 'I' : cy === 'cycle2' ? 'II' : 'III'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zoom buttons */}
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => setZoomLevel(Math.max(60, zoomLevel - 10))}
                  className="p-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white"
                  title="Perkecil"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <span className="font-mono text-slate-300 w-8 text-center text-[10px] bg-slate-900/60 p-0.5 rounded">
                  {zoomLevel}%
                </span>
                <button 
                  onClick={() => setZoomLevel(Math.min(130, zoomLevel + 10))}
                  className="p-1 px-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white"
                  title="Perbesar"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Download and print buttons */}
              <div className="flex items-center gap-1">
                <button 
                  onClick={handlePrint}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-emerald-400 border border-slate-700 cursor-pointer flex items-center justify-center"
                  title="Print Mock Dokumen"
                >
                  <Printer className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={handleDownloadSimulation}
                  disabled={downloading}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-[#F2AFEF] border border-slate-700 cursor-pointer flex items-center justify-center relative"
                  title={downloading ? "Mengunduh..." : "Download file PDF asli"}
                >
                  <Download className={`w-3.5 h-3.5 ${downloading ? 'animate-bounce' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Helper Info */}
          <div className="block lg:hidden bg-slate-100 text-[#33186B] px-4 py-1.5 text-center text-[10px] font-mono font-bold border-b border-slate-200">
            💡 Geser/gulir layar ke kanan-kiri untuk melihat lembar PDF secara penuh di Handphone.
          </div>

          {/* B. PDF Content Sheet Wrapper */}
          <div className="p-4 md:p-8 overflow-x-auto overflow-y-auto max-h-[750px] scrollbar-thin bg-[#0F172A] flex justify-center">
            
            {/* The actual structured physical A4 document container */}
            <div 
              className="bg-white text-slate-800 p-6 md:p-12 shadow-2xl rounded border border-slate-300/60 select-none transition-all duration-300"
              style={{ 
                width: '100%', 
                maxWidth: '820px', 
                minWidth: '700px',
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: 'top center',
                marginBottom: zoomLevel > 100 ? `${(zoomLevel - 100) * 6}px` : '0px'
              }}
            >
              
              {/* 1. Official UKSW Kop Surat (Letterhead) */}
              <div className="border-b-4 border-double border-slate-900 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  {/* Left Side: UKSW representation */}
                  <div className="space-y-1">
                    <p className="font-serif text-xs tracking-widest font-bold text-slate-500 uppercase">UNIVERSITAS KRISTEN SATYA WACANA</p>
                    <p className="font-sans font-black text-lg md:text-xl text-[#33186B] tracking-tight">FAKULTAS KEGURUAN DAN ILMU PENDIDIKAN</p>
                    <p className="font-mono text-[9px] text-gray-400 font-medium">Jl. Diponegoro No. 52-60 Salatiga, Jawa Tengah – Telp (0298) 321212</p>
                  </div>
                  {/* Right Side Logo Seal Placeholders */}
                  <div className="text-right flex flex-col items-end">
                    <span className="text-[10px] font-mono font-extrabold text-[#7360DF] bg-[#C499F3]/30 p-1 rounded border border-[#7360DF]/15">
                      PPG PRAJABATAN
                    </span>
                    <span className="text-[8px] font-mono text-gray-400 mt-1 uppercase">Siklus PPL: {selectedCycle === 'cycle1' ? 'Siklus I' : selectedCycle === 'cycle2' ? 'Siklus II' : 'Siklus III'}</span>
                  </div>
                </div>
              </div>

              {/* 2. Document Title */}
              <div className="text-center mb-6 space-y-1">
                <h4 className="font-sans font-black text-md md:text-lg text-slate-900 tracking-tight uppercase leading-snug">
                  {activeLampiran === 'L7' 
                    ? 'LAMPIRAN 7: INSTRUMEN PENILAIAN PENYUSUNAN PERANGKAT PEMBELAJARAN' 
                    : 'LAMPIRAN 8: INSTRUMEN PENILAIAN PRAKTIK MENGAJAR'}
                </h4>
                <p className="text-[11px] font-mono text-slate-500">
                  Program Studi Pendidikan Profesi Guru (PPG) &bull; Universitas Kristen Satya Wacana Salatiga
                </p>
              </div>

              {/* 3. Student Identity Meta details block */}
              <div className="grid grid-cols-2 gap-4 text-xs font-sans text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                <div className="space-y-1.5">
                  <p><strong>Nama Mahasiswa:</strong> Diana Novita Sari</p>
                  <p><strong>Rumpun Pendidikan:</strong> PPG Prajabatan</p>
                  <p><strong>Sekolah Latihan PPL:</strong> SMA Kristen 1 Salatiga</p>
                </div>
                <div className="space-y-1.5 ml-4 border-l border-slate-200 pl-4">
                  <p><strong>Dosen Pembimbing:</strong> UKSW Salatiga Team</p>
                  <p><strong>Guru Pamong Penilai:</strong> Sri Wahyuni, S.Pd.</p>
                  <p><strong>Siklus Penilaian:</strong> {selectedCycle === 'cycle1' ? 'Siklus I (Awal)' : selectedCycle === 'cycle2' ? 'Siklus II (Tengah)' : 'Siklus III (Kematangan)'}</p>
                </div>
              </div>

              {/* 4. Official High-Contrast Data Assessment Sheet */}
              <div className="overflow-hidden border border-slate-400/80 mb-6 font-sans">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-400 text-slate-800 font-bold font-mono">
                      <th className="py-2.5 px-3 border-r border-slate-400 w-12 text-center">Kode</th>
                      <th className="py-2.5 px-3 border-r border-slate-400">Parameter & Indikator Kompetensi</th>
                      <th className="py-2.5 px-3 border-r border-slate-400 w-16 text-center">Skor Maks</th>
                      <th className="py-2.5 px-3 border-r border-slate-400 w-24 text-center bg-slate-200/50">Skor Dicapai</th>
                      <th className="py-2.5 px-3">Catatan Rubrik Deskriptif</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 font-medium">
                    {activeItems.map((item) => {
                      // pick score based on selected cycle tab on screen
                      const currentScore = selectedCycle === 'cycle1' 
                        ? item.scoreCycle1 
                        : selectedCycle === 'cycle2' 
                        ? item.scoreCycle2 
                        : item.scoreCycle3;

                      return (
                        <tr key={item.id} className="hover:bg-slate-50/50">
                          <td className="py-2.5 px-3 border-r border-slate-300 font-mono text-center text-slate-500 font-bold">{item.id}</td>
                          <td className="py-2.5 px-3 border-r border-slate-300 font-bold text-slate-900 leading-tight pr-4">{item.indicator}</td>
                          <td className="py-2.5 px-3 border-r border-slate-300 text-center text-slate-400 font-mono">100</td>
                          
                          {/* Achievement Score highlights in official table block */}
                          <td className="py-2.5 px-3 border-r border-slate-300 text-center font-mono font-black text-slate-900 bg-slate-100/30">
                            {currentScore}
                          </td>
                          
                          <td className="py-2.5 px-3 text-[10.5px] text-slate-500 font-sans leading-relaxed">{item.description}</td>
                        </tr>
                      );
                    })}

                    {/* Aggregation Row (Rata-rata/Total) */}
                    <tr className="bg-slate-50 border-t-2 border-slate-400 text-[13px] font-bold text-slate-900">
                      <td colSpan={3} className="py-3 px-3 border-r border-slate-300 text-right uppercase">
                        Skor Rata-Rata Kumulatif:
                      </td>
                      <td className="py-3 px-3 border-r border-slate-300 text-center font-mono font-black text-[#33186B] bg-[#C499F3]/30">
                        {(() => {
                          const total = activeItems.reduce((acc, curr) => {
                            const val = selectedCycle === 'cycle1' ? curr.scoreCycle1 : selectedCycle === 'cycle2' ? curr.scoreCycle2 : curr.scoreCycle3;
                            return acc + val;
                          }, 0);
                          return (total / activeItems.length).toFixed(1);
                        })()}
                      </td>
                      <td className="py-3 px-3 font-semibold text-xs text-slate-600">
                        Predikat: <span className="text-emerald-700 font-extrabold uppercase bg-emerald-100 px-2 py-0.5 rounded">SANGAT MEMUASKAN</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 5. Stamp Seal & Signatures blocks at bottom of A4 Sheet */}
              <div className="grid grid-cols-2 gap-8 mt-12 text-xs font-sans text-slate-700">
                
                {/* Left side: Kampus Seal representation */}
                <div className="relative pt-6 flex flex-col justify-between">
                  {/* Decorative circular PPG Seal Stamp in official blue color */}
                  <div className="absolute top-0 left-10 w-24 h-24 border-2 border-dashed border-blue-500/30 rounded-full flex items-center justify-center text-[8px] font-mono uppercase text-blue-500/30 pointer-events-none transform -rotate-12 select-none select-none">
                    <div className="text-center">
                      <p>PPG UNIVERSITAS</p>
                      <p className="font-bold text-[9px]">UKSW</p>
                      <p>TERVALIDASI</p>
                    </div>
                  </div>

                  <div className="relative space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <p className="font-bold text-[10px] text-[#33186B] uppercase tracking-wider">Metode Validasi:</p>
                    <p className="text-slate-500 leading-relaxed text-[10px]">
                      Halaman Portofolio PPG UKSW ini divalidasi secara elektronik melalui integrasi Nilai Pamong Jurnal SIMPPG Salatiga.
                    </p>
                  </div>
                </div>

                {/* Right side: Guru Pamong Sign and validation details */}
                <div className="text-right flex flex-col items-end justify-between pr-4 relative">
                  <div>
                    <p className="text-slate-500">Salatiga, 27 Mei 2026</p>
                    <p className="font-semibold text-slate-900 mt-1">Mengetahui, Guru Pamong</p>
                  </div>

                  {/* Cursive handwritten representation signature */}
                  <div className="my-3 relative select-none z-10">
                    {/* Blue ink stamp marker circle */}
                    <div className="absolute -top-3 right-6 w-16 h-16 border-4 border-double border-blue-500/45 rounded-full flex items-center justify-center text-[6px] font-mono text-blue-500/40 transform rotate-12 select-none">
                      <div className="text-center font-bold">
                        <p>SMA KRISTEN 1</p>
                        <p className="text-[7px]">SALATIGA</p>
                        <p>TERTANDA</p>
                      </div>
                    </div>

                    <span className="block font-serif italic text-xl md:text-2xl text-blue-800 font-medium tracking-wide translate-x-[-15px] transform rotate-[-3deg] select-none select-none select-none">
                      Sri Wahyuni
                    </span>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-slate-900">Sri Wahyuni, S.Pd.</p>
                    <p className="text-slate-400 font-mono text-[10px] uppercase">NIP PPG. 19820512 SMAK1</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* C. PDF Reader Bottom status navigation bar */}
          <div className="bg-[#1E293B] text-slate-400 px-4 py-2 flex items-center justify-between text-[11px] font-mono">
            <span>PPG Prajabatan UKSW Portofolio Engine</span>
            <div className="flex items-center gap-1">
              <span className="text-[#F2AFEF] font-bold">Dokumen Digital Valid</span>
              <span className="text-slate-500">|</span>
              <span>Halaman 1 dari 1</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
