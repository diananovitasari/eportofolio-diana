/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArtifactReflection, AssessmentItem, TeacherMission, TeacherCompetence } from './types';

export const DIANA_PROFILE = {
  name: "Diana Novita Sari",
  title: "Calon Guru Profesional PPG Prajabatan",
  origin: "Blora, Jawa Tengah",
  institution: "Universitas Kristen Satya Wacana (UKSW)",
  pplPlacement: "SMA Kristen 1 Salatiga",
  profileImage: "/src/assets/images/foto-diana.jpeg", // Path of the AI-generated friendly portrait
  quote: "Mendidik bukanlah sekadar mentransfer ilmu, melainkan menumbuhkan jiwa, menyalakan rasa ingin tahu, dan menganyam karakter luhur untuk masa depan yang gemilang.",
  
  // Custom narrative about Blora origin
  originNarrative: "Blora terkenal dengan hamparan Hutan Jati yang kokoh dan bernilai tinggi, menggambarkan ketangguhan karakter masyarakatnya. Selain itu, kehangatan kuliner Sate Blora yang khas dengan siraman kuah santan gurih di atas pincuk daun jati mewakili rasa kebersamaan kami. Kegagahan seni Tari Barongan Blora yang sarat nilai spiritual dan gotong royong mengajarkan keberanian untuk menyuarakan kebenaran serta merawat kearifan lokal.",
  
  // Narrative explaining career inspiration & professional goals
  inspirationNarrative: "Inspirasi utama saya tumbuh dari kesadaran bahwa guru adalah penenun masa depan bangsa. Melalui Program Pendidikan Guru (PPG) di UKSW dan pembelajaran kontekstual selama PPL di SMA Kristen 1 Salatiga, saya melihat pentingnya menciptakan ruang belajar yang transformatif, memanusiakan hubungan, serta mengintegrasikan kemajuan teknologi secara kritis. Tujuan saya adalah menjadi guru profesional yang tidak hanya kompeten secara akademis, melainkan memiliki ketajaman empati untuk menuntun siswa menemukan versi terbaik dirinya sesuai kodrat alam dan kodrat zaman."
};

export const ARTEFAK_ANALYSIS: ArtifactReflection[] = [
  {
    aspect: "RPP / Modul Ajar",
    title: "Penyusunan Rencana Pelaksanaan Pembelajaran (RPP)",
    description: "Analisis penyusunan produk RPP/Modul Ajar berbasis Problem-Based Learning (PBL). Kendala utama terletak pada penyelarasan alokasi waktu tiap fase dan penyusunan instrumen Asesmen Formatif (Awal & Proses). Kami mengadopsi teori Konstruktivisme Sosial Vygotsky agar siswa mandiri memecahkan masalah. Faktor kunci keberhasilan terletak pada ketepatan penentuan ranah Kriteria Ketercapaian Tujuan Pembelajaran (KKTP).",
    iconName: "FileText"
  },
  {
    aspect: "Media PPT Interaktif",
    title: "Media PPT & Simulasi TPACK Digital",
    description: "Slide presentasi (PPT) dirancang interaktif menggunakan Canva dan Quizizz untuk mengoptimalkan visualisasi masalah kontekstual. Kendala media ini adalah ketergantungan konektivitas internet kelas di SMA Kristen 1 Salatiga. Keberhasilannya terbukti melipatgandakan keterlibatan murid (active student response), serta sangat fleksibel untuk disesuaikan dengan mengubah tingkat kesulitan soal kuis online.",
    iconName: "Laptop"
  },
  {
    aspect: "Hasil Kerja Siswa",
    title: "Analisis Portofolio Hasil Kerja Siswa (LKPD)",
    description: "Evaluasi terhadap hasil kerja kelompok dan mandiri siswa pada LKPD. Selama proses pengerjaan, kendala yang timbul adalah dominasi siswa tertentu dalam kelompok. Melalui evaluasi berkelanjutan, kami mendapati bahwa scaffolding berlapis terbukti mendorong gotong royong murid. Untuk situasi kelas dengan kognitif lambat, lembar kerja disederhanakan dengan panduan pertanyaan beruntun.",
    iconName: "TrendingUp"
  },
  {
    aspect: "Rencana Adaptasi",
    title: "Modifikasi Integratif Seluruh Komponen",
    description: "Sinergi RPP, Media PPT, dan LKPD agar siap menghadapi kelas yang hiperaktif maupun yang cenderung pasif. Pada kelas dengan atensi rendah, presentasi PPT dialihkan menjadi kuis visual cepat, sementara LKPD diubah menjadi bagan tempel fisik. Rencana aksi ini menjamin iklim merdeka belajar yang inklusif, relevan, serta adil bagi segenap keragaman potensi siswa.",
    iconName: "RefreshCw"
  }
];

// Lampiran 7: Instrumen Penilaian Penyusunan Perangkat Pembelajaran (Siklus 1, 2, 3)
export const LAMPIRAN_7_ITEMS: AssessmentItem[] = [
  {
    id: "L7-1",
    indicator: "Kejelasan Perumusan Tujuan Pembelajaran (TP & Alur/ATP)",
    scoreCycle1: 80,
    scoreCycle2: 88,
    scoreCycle3: 96,
    description: "Kesesuaian tujuan pembelajaran dengan capaian pembelajaran (CP) serta kejelasan indikator kompetensi yang ingin dicapai."
  },
  {
    id: "L7-2",
    indicator: "Pemilihan dan Pengorganisasian Materi Ajar",
    scoreCycle1: 82,
    scoreCycle2: 90,
    scoreCycle3: 95,
    description: "Kedalaman, struktur, relevansi materi dengan kehidupan nyata (kontekstual), serta bebas dari miskonsepsi ilmiah."
  },
  {
    id: "L7-3",
    indicator: "Pemanfaatan Media, Sumber Belajar, & Integrasi TPACK",
    scoreCycle1: 85,
    scoreCycle2: 92,
    scoreCycle3: 98,
    description: "Kejelian memilih teknologi digital, kesesuaian media dengan gaya belajar siswa, serta kepraktisan penggunaan di kelas."
  },
  {
    id: "L7-4",
    indicator: "Skenario dan Langkah-Sintaks Kegitan Pembelajaran",
    scoreCycle1: 78,
    scoreCycle2: 86,
    scoreCycle3: 95,
    description: "Keteraturan sintaks PBL/PjBL, perwujudan student-centered learning, kejelasan transisi antarfase, dan estimasi waktu."
  },
  {
    id: "L7-5",
    indicator: "Rancangan Evaluasi & Instrumen Asesmen Pembelajaran",
    scoreCycle1: 80,
    scoreCycle2: 88,
    scoreCycle3: 96,
    description: "Kelengkapan instrumen asesmen kognitif, afektif (sikap), dan psikomotorik beserta rubrik penilaian yang objektif."
  }
];

// Lampiran 8: Instrumen Penilaian Praktik Mengajar (Siklus 1, 2, 3)
export const LAMPIRAN_8_ITEMS: AssessmentItem[] = [
  {
    id: "L8-1",
    indicator: "Keterampilan Membuka Pembelajaran (Apersepsi & Motivasi)",
    scoreCycle1: 82,
    scoreCycle2: 88,
    scoreCycle3: 96,
    description: "Kemampuan menarik perhatian siswa, mengaitkan materi sebelumnya, dan menyampaikan signifikansi materi saat ini."
  },
  {
    id: "L8-2",
    indicator: "Penguasaan Materi Esensial & Pengkondisian Kelas",
    scoreCycle1: 80,
    scoreCycle2: 90,
    scoreCycle3: 95,
    description: "Penyampaian materi secara lancar/akurat serta kepemimpinan yang tegas nan bersahabat dalam mengendalikan kebisingan kelas."
  },
  {
    id: "L8-3",
    indicator: "Penerapan Model Pembelajaran Berpusat pada Siswa",
    scoreCycle1: 78,
    scoreCycle2: 88,
    scoreCycle3: 98,
    description: "Keefektifan fasilitasi jalannya pemecahan masalah (PBL) atau proyek mandiri serta keterlibatan aktif setiap peserta."
  },
  {
    id: "L8-4",
    indicator: "Pemanfaatan Media Pembelajaran Digital & Penggunaan TPACK",
    scoreCycle1: 85,
    scoreCycle2: 92,
    scoreCycle3: 98,
    description: "Pengaplikasian alat bantu digital seperti Kahoot, Quizizz, atau slide visual interaktif secara lincah tanpa hambatan teknis."
  },
  {
    id: "L8-5",
    indicator: "Keterampilan Berinteraksi, Menanya, & Pemberian Feedback",
    scoreCycle1: 82,
    scoreCycle2: 89,
    scoreCycle3: 96,
    description: "Kecakapan melontarkan pertanyaan pemantik tingkat tinggi (HOTS) serta memberikan apresiasi hangat pada setiap respons siswa."
  },
  {
    id: "L8-6",
    indicator: "Keterampilan Menutup Pembelajaran & Refleksi Bersama",
    scoreCycle1: 80,
    scoreCycle2: 90,
    scoreCycle3: 96,
    description: "Memandu kesimpulan bersama siswa, melakukan refleksi evaluatif instan, serta menginformasikan agenda tindak lanjut."
  }
];

export const CYCLE_FEEDBACK = {
  cycle1: {
    title: "Siklus I (Awal Konstruksi Karakter)",
    pamong: "Ibu Sri Wahyuni, S.Pd. (Guru Pamong SMA Kristen 1 Salatiga)",
    comment: "Penyusunan modul sudah baik, namun pengelolaan sintaks PBL di kelas masih kaku sehingga diskusi molor dari jadwal. Manajemen kelas perlu dipertegas agar siswa tidak terlalu gaduh saat pengerjaan kelompok kelompok kecil.",
    improvement: "Fokus pada pembuatan guideline diskusi kelompok yang rigid dan latihan modulasi nada suara.",
    averageL7: 80.6,
    averageL8: 81.2
  },
  cycle2: {
    title: "Siklus II (Transformasi & Adaptasi)",
    pamong: "Ibu Sri Wahyuni, S.Pd. (Guru Pamong SMA Kristen 1 Salatiga)",
    comment: "Peningkatan yang sangat signifikan terlihat pada penataan skenario pembelajaran. Siswa sangat antusias dengan kuis Canva interaktif. Manajemen waktu sudah membaik, bimbingan kelompok sudah merata secara bertahap.",
    improvement: "Mulai sisipkan pertanyaan pemantik HOTS di awal diskusi kelompok, bukan hanya di akhir materi.",
    averageL7: 88.8,
    averageL8: 89.8
  },
  cycle3: {
    title: "Siklus III (Kematangan Profesional)",
    pamong: "Ibu Sri Wahyuni, S.Pd. (Guru Pamong SMA Kristen 1 Salatiga)",
    comment: "Sempurna dan luar biasa kondusif! Diana telah menunjukkan kematangan rasa percaya diri tinggi sebagai guru seutuhnya. Integrasi TPACK terwujud sangat natural, suasana inklusif, hasil asesmen autentik terpetakan dengan sangat rapi.",
    improvement: "Pertahankan ketulusan hati ini serta tularkan energi pembelajaran inovatif ini ke komunitas guru MGMP.",
    averageL7: 96.4,
    averageL8: 96.5
  }
};

export const TEACHER_MISI: TeacherMission[] = [
  {
    title: "Ekosistem Belajar Humanis",
    description: "Mengembangkan suasana kelas yang aman, inklusif, merdeka belajar, dan senantiasa berorientasi pada nilai-nilai utama Profil Pelajar Pancasila.",
    iconName: "Heart"
  },
  {
    title: "Inovasi TPACK Terintegrasi",
    description: "Merancang secara berkelanjutan media pembelajaran interaktif berbasis visual grafis dan kuis interaktif yang merespons gaya belajar digital masa kini.",
    iconName: "Cpu"
  },
  {
    title: "Pembelajaran Berkelanjutan (Lifelong Learning)",
    description: "Melakukan refleksi diri secara rutin, terus meng-upgrade wawasan melalui komunitas praktisi, pelatihan, dan eksperimen pedagogis di kelas.",
    iconName: "Compass"
  }
];

export const TEACHER_COMPETENCIES: TeacherCompetence[] = [
  {
    category: "Kompetensi Pedagogik",
    title: "Desainer Pembelajaran Bermakna",
    description: "Memetakan ragam keunikan cara belajar siswa dan menyusun rencana pembelajaran yang interaktif dan adaptif.",
    skills: ["Evaluasi Diagnosis", "Pembelajaran Berdiferensiasi", "PBL & PjBL", "Penyusunan Rubrik Autentik"]
  },
  {
    category: "Kompetensi Kepribadian",
    title: "Pendidik yang Berintegritas & Welas Asih",
    description: "Menampilkan pribadi yang dewasa, disiplin, berakhlak mulia, serta hangat dalam membimbing siswa tanpa diskriminasi.",
    skills: ["Disiplin Positif", "Kecerdasan Sosio-Emosional", "Suri Teladan Konsisten", "Komunikasi Empatis"]
  },
  {
    category: "Kompetensi Sosial",
    title: "Kolaborator Komunitas Pendidikan",
    description: "Mampu bersinergi dengan rekan sejawat, orang tua, Guru Pamong, Dosen, serta aktif dalam perbincangan komunitas praktisi.",
    skills: ["Empati Sosial", "Bekerjasama dalam Tim", "Resolusi Konflik Kelas", "Networking MGMP"]
  },
  {
    category: "Kompetensi Profesional",
    title: "Mastery of Content & Digital Fluency",
    description: "Menguasai struktur ilmu keilmuan secara mendalam dengan kemampuan digital yang tangkas dan mutakhir.",
    skills: ["TPACK Mastery", "Kurikulum Merdeka", "Riset Pembelajaran Reflektif", "Digital Content Creation"]
  }
];
