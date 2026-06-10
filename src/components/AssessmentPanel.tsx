/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { ClipboardCheck, FileText, Sparkles } from "lucide-react";

export default function AssessmentPanel() {
  const [activeLampiran, setActiveLampiran] = useState<"L7" | "L8">("L7");
  const [selectedCycle, setSelectedCycle] = useState<
    "cycle1" | "cycle2" | "cycle3"
  >("cycle3");

  // PDF URLs untuk Lampiran 7 dan 8 per siklus
  const pdfUrls = {
    L7: {
      cycle1: new URL(
        "../assets/images/modul/Lampiran 7 Siklus 1.pdf",
        import.meta.url,
      ).href,
      cycle2: new URL(
        "../assets/images/modul/Lampiran 7 Siklus 2.pdf",
        import.meta.url,
      ).href,
      cycle3: new URL(
        "../assets/images/modul/Lampiran 7 Siklus 3.pdf",
        import.meta.url,
      ).href,
    },
    L8: {
      cycle1: new URL(
        "../assets/images/modul/Lampiran 8 Siklus 1.pdf",
        import.meta.url,
      ).href,
      cycle2: new URL(
        "../assets/images/modul/Lampiran 8 Siklus 2.pdf",
        import.meta.url,
      ).href,
      cycle3: new URL(
        "../assets/images/modul/Lampiran 8 Siklus 3.pdf",
        import.meta.url,
      ).href,
    },
  };

  // Get current PDF URL based on active lampiran and selected cycle
  const getCurrentPdfUrl = () => {
    const cycleKey = selectedCycle;
    return pdfUrls[activeLampiran][cycleKey];
  };

  const getSiklusNumber = () => {
    return selectedCycle === "cycle1"
      ? "I"
      : selectedCycle === "cycle2"
        ? "II"
        : "III";
  };

  return (
    <section
      id="penilaian"
      className="scroll-mt-24 py-12 md:py-20 relative bg-slate-50/50">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#C499F3]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#F2AFEF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Title Block */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-[#33186B] bg-[#C499F3]/50 border border-[#7360DF]/40 uppercase mb-3">
            <ClipboardCheck className="w-3.5 h-3.5 text-[#7360DF]" />
            Dokumen Uji & Evaluasi Pamong
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-[#33186B] mb-4">
            Sertifikasi Dokumen & Instrumen Penilaian
          </motion.h2>
          <p className="text-sm md:text-base text-[#33186B]/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Tinjau transkrip lampiran penilaian otentik yang ditandatangani oleh
            Guru Pamong SMA Kristen 1 Salatiga dalam format lembar kerja PDF
            interaktif.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-[#7360DF] mx-auto rounded-full mt-4"
          />
        </div>

        {/* Document Type Selector */}
        <div className="mb-4 flex justify-center gap-3">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 flex gap-1">
            <button
              onClick={() => setActiveLampiran("L7")}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                activeLampiran === "L7"
                  ? "bg-[#33186B] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}>
              Lampiran 7 (Perangkat Pembelajaran)
            </button>
            <button
              onClick={() => setActiveLampiran("L8")}
              className={`px-5 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                activeLampiran === "L8"
                  ? "bg-[#33186B] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}>
              Lampiran 8 (Praktik Mengajar)
            </button>
          </div>
        </div>

        {/* Cycle Selector */}
        <div className="mb-5 flex justify-center gap-3">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-slate-200 flex gap-2">
            {(["cycle1", "cycle2", "cycle3"] as const).map((cy) => (
              <button
                key={cy}
                onClick={() => setSelectedCycle(cy)}
                className={`px-6 py-2 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  selectedCycle === cy
                    ? "bg-[#7360DF] text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}>
                Siklus {cy === "cycle1" ? "I" : cy === "cycle2" ? "II" : "III"}
              </button>
            ))}
          </div>
        </div>

        {/* PDF Viewer - Pure Native */}
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          <iframe
            title={`Lampiran ${activeLampiran === "L7" ? "7" : "8"} - Siklus ${getSiklusNumber()}`}
            src={getCurrentPdfUrl()}
            className="w-full"
            style={{ height: "80vh", minHeight: "600px" }}
            frameBorder={0}
          />
        </div>
      </div>
    </section>
  );
}
