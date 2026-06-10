/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ArtifactTimelineItem {
  stage: string;
  title: string;
  date: string;
  description: string;
  iconName: string;
}

export interface ArtifactDocumentation {
  title: string;
  description: string;
  imageUrl: string;
}

// Konfigurasi tab per card
export interface TabConfig {
  pdf: {
    label: string;
    icon: string;
  };
  pdf2?: {
    label: string;
    icon: string;
  };
  pdf3?: {
    label: string;
    icon: string;
  };
  gallery?: {
    label: string;
    icon: string;
  };
}

// Konten untuk sisi kanan per siklus
export interface SiklusContent {
  title: string;
  description: string;
  context: string;
  tujuan: string[];
}

export interface DetailedArtifact {
  id: string;
  cardName: string;
  title: string;
  subtitle: string;
  badge: string;
  iconName: string;
  description: string;
  context: string;
  tujuan: string[];
  kelebihan: string[];
  kekurangan: string[];
  analisisTeori: string;
  refleksi: string;
  pdfTitle: string;
  pdfTitle2?: string;
  pdfTitle3?: string;
  pdfPages: string[];
  pdfPages2?: string[];
  pdfPages3?: string[];
  timeline: ArtifactTimelineItem[];
  documentation: ArtifactDocumentation[];
  documentationSiklus1?: ArtifactDocumentation[];
  documentationSiklus2?: ArtifactDocumentation[];
  documentationSiklus3?: ArtifactDocumentation[];
  downloadRppUrl: string;
  downloadPenilaianUrl: string;
  tabConfig: TabConfig;
  // Konten per siklus untuk sisi kanan
  siklusContents?: {
    siklus1: SiklusContent;
    siklus2: SiklusContent;
    siklus3: SiklusContent;
  };
}

export const DETAILED_ARTIFACTS: DetailedArtifact[] = [
  {
    id: "modul-ajar",
    cardName: "Modul Ajar",
    title: "Modul Ajar Dasar",
    subtitle: "Rancangan Berbasis Problem-Based Learning (PBL)",
    badge: "RPP / Modul Kurikulum Merdeka",
    iconName: "FileText",
    description:
      "Modul pembelajaran terstruktur yang mengintegrasikan model Problem-Based Learning (PBL) untuk menuntun siswa memahami variabel, tipe data, serta logika percabangan kondisional (if-else) pada pemrograman di SMA Kristen 1 Salatiga.",
    context:
      "Diujicobakan pada siswa Kelas X Fase E di SMA Kristen 1 Salatiga dengan rentang kesiapan kognitif (readiness) yang bervariasi—mulai dari murid yang belum pernah mengetik program komputer hingga yang memiliki logika komputasi awal.",
    tujuan: [
      "Mengidentifikasi variabel dan membedakan tipe data primitif (String, Integer, Float, Boolean) secara tepat.",
      "Mendesain serta menulis alur logika percabangan kondisional (if-elif-else) untuk memecahkan studi kasus dunia nyata.",
      "Mengeksekusi dan menguji coba kode program sederhana di IDE serta melakukan pelacakan kesalahan logika (basic debugging).",
    ],
    kelebihan: [
      "Mengintegrasikan tantangan pemecahan masalah (PBL) yang kontekstual dan dekat dengan keseharian siswa.",
      "Memiliki struktur scaffolding berlapis guna menuntun siswa berkemampuan belajar lambat lewat sintaks beruntun.",
      "Menyajikan alur asesmen formatif awal dan asesmen proses yang terintegrasi langsung di tiap fase pengerjaan.",
    ],
    kekurangan: [
      "Sintaks PBL memakan durasi yang cukup padat sehingga melesetnya pengaturan waktu berisiko terjadi pada fase diskusi kelompok.",
      "Menuntut perhatian intensif dan bimbingan aktif dari guru di awal agar siswa tidak mengalami keputusasaan logika (logic blockage).",
    ],
    analisisTeori:
      "Mengacu kuat pada Teori Konstruktivisme Sosial Vygotsky mengenai Zone of Proximal Development (ZPD). Proses pembelajaran dirancang dengan scaffolding bertahap di mana guru bertindak sebagai fasilitator yang mengulurkan panduan kognitif terarah di awal, kemudian secara perlahan mengurangi intensitas intervensi tersebut seiring kemandirian berpikir kritis dan kompetensi siswa terbentuk.",
    refleksi:
      "Pada Siklus I, pembagian waktu fasilitasi PBL sempat terhambat karena siswa masih canggung berdiskusi mandiri. Pada Siklus II dan III, saya menyempurnakannya dengan 'Lembar Panduan Peran' serta modulasi instruksi visual visual cepat, sehingga keterlibatan aktif siswa meningkat pesat hingga 92% dan pengerjaan modul terselesaikan tepat waktu.",
    pdfTitle: "Modul Ajar Informatika Sistem Komputer Algoritma Round Robin",
    pdfTitle2: "MODUL AJAR DEEP LEARNING - BAB 4 (CARA KOMPUTER BEKERJA)",
    pdfTitle3: "MODUL AJAR ALGORITMA DAN PEMROGRAMAN",
    timeline: [
      {
        stage: "Observasi",
        title: "Observasi Budaya Belajar & Diagnostik Kelas",
        date: "Pekan 1-2 PPL",
        description:
          "Mengamati karakteristik belajar siswa kelas X di SMA Kristen 1 Salatiga, memetakan gaya belajar kinestetik/visual, serta kebiasaan pemecahan masalah.",
        iconName: "Eye",
      },
      {
        stage: "Asistensi",
        title: "Asistensi Mengajar & Kolaborasi Guru Pamong",
        date: "Pekan 3-4 PPL",
        description:
          "Membantu Bapak Endro Febrianto P. Cahyono, S.Kom. dalam mengondisikan perangkat laboratorium, membagikan kertas kerja, dan berdiskusi perihal kendala prasyarat kognitif.",
        iconName: "Users",
      },
      {
        stage: "Praktik Mengajar",
        title: "Implementasi Terbimbing Siklus Pembelajaran",
        date: "Pekan 5-8 PPL",
        description:
          "Memimpin praktik mengajar terbimbing Siklus I sampai Siklus III berbasis model PBL dengan metode berdiferensiasi.",
        iconName: "Presentation",
      },
      {
        stage: "Evaluasi",
        title: "Penilaian Autentik & Analisis Hasil Belajar",
        date: "Pekan 9-10 PPL",
        description:
          "Mengoreksi berkas tugas siswa pada LKPD, merekap nilai ujian sumatif, serta memetakan tingkat kepatuhan penulisan sintaks program.",
        iconName: "ClipboardCheck",
      },
      {
        stage: "Refleksi",
        title: "Kolaborasi Reflektif & Disseminasi Hasil riset",
        date: "Pekan 11-12 PPL",
        description:
          "Melaksanakan bimbingan refleksi pasca-praktik bersama Guru Pamong UKSW untuk merencanakan tindak lanjut adaptasi kelas masa depan.",
        iconName: "Sparkles",
      },
    ],
    tabConfig: {
      pdf: {
        label: "Modul Ajar Siklus 1",
        icon: "FileText",
      },
      pdf2: {
        label: "Modul Ajar Siklus 2",
        icon: "FileText",
      },
      pdf3: {
        label: "Modul Ajar Siklus 3",
        icon: "FileText",
      },
    },
    siklusContents: {
      siklus1: {
        title: "DESKRIPSI ARTEFAK PEMBELAJARAN - SIKLUS 1",
        description:
          "Algoritma Round Robin Sistem Komputer, Komponen Penyusun Komputer, Interaksi Manusia dan Komputer, Sistem Operasi, Multitasking & Penjadwalan CPU.",
        context:
          "Peserta didik kelas X umumnya sudah sangat terbiasa berinteraksi menggunakan perangkat elektronik seperti smartphone dan komputer dalam kehidupan sehari-hari, serta memiliki keterampilan dasar dalam menggunakan internet. Namun, pemahaman mereka tentang bagaimana instruksi di balik layar diproses, cara komponen penyusun internal komputer bekerja, dan kolaborasi antara perangkat keras dengan sistem operasi masih sangat terbatas. Mereka memerlukan arahan teknis dan visual untuk mengaitkan pengalaman praktis dengan fondasi teori sistem komputer.",
        tujuan: [
          "Menjelaskan peran sistem operasi pada perangkat komputer.",
          "Menjelaskan cara kerja komputer dalam memproses data secara runut.",
          "Menjelaskan mekanisme internal yang terjadi pada interaksi antara perangkat keras, perangkat lunak, dan pengguna.",
        ],
      },
      siklus2: {
        title: "DESKRIPSI ARTEFAK PEMBELAJARAN - SIKLUS 2",
        description:
          "Arsitektur Dasar Komputer (CPU, Memori Utama, Bus, I/O Controller). Siklus Eksekusi CPU (Fetch, Decode, Execute). Mesin Konseptual Sederhana (Konsep Memori dan Register milik Mr. Algo: Program Counter, Instruction Register, Accumulator). Simulasi Manual (Tracing) Cara Komputer Bekerja di Buku Catatan.",
        context:
          "Peserta didik umumnya sudah sering berinteraksi dengan perangkat komputasi (komputer, laptop, atau smartphone) dalam kehidupan sehari-hari. Mereka mungkin sudah mengetahui nama-nama perangkat keras dasar seperti CPU (prosesor) dan RAM (memori). Namun, pemahaman tentang proses internal bagaimana komponen tersebut saling berkomunikasi (melalui Bus), memori dan Register, serta bagaimana CPU mengeksekusi sebuah program dari hulu ke hilir (Fetch-Decode-Execute) masih terbatas.",
        tujuan: [
          "Melalui penjelasan analogi konseptual, peserta didik dapat mengidentifikasi fungsi komponen utama arsitektur komputer Von Neumann (CPU, Memori Utama, Bus, dan Controller) dengan tepat.",
          "Melalui diskusi kelas dan visualisasi di papan tulis, peserta didik dapat menjelaskan tahapan siklus eksekusi instruksi (Fetch, Decode, Execute) secara berurutan dan logis.",
          "Melalui tanya jawab kontekstual, peserta didik dapat menyadari prinsip Garbage In, Garbage Out dan menyimpulkan bahwa gawai bekerja sepenuhnya berdasarkan instruksi manusia secara jujur.",
          "Melalui demonstrasi interaktif, peserta didik dapat memahami konsep pembagian memori dan register (Program Counter, Instruction Register, Accumulator) pada mesin konseptual Mr. Algo.",
          "Melalui praktik mandiri, peserta didik dapat menggambar kerangka visual 'Meja Kerja Mr. Algo' dan tabel memori di buku catatan dengan rapi dan terstruktur.",
          "Melalui penyelesaian studi kasus instruksi tertulis, peserta didik dapat melakukan pelacakan (tracing) dan menuliskan perubahan nilai/angka pada register dan memori secara akurat.",
          "Melalui diskusi berpasangan, peserta didik dapat memvalidasi hasil perhitungan manual mereka dan menemukan kesalahan logika (debugging) jika hasil pelacakan memori tidak sesuai.",
        ],
      },
      siklus3: {
        title: "DESKRIPSI ARTEFAK PEMBELAJARAN - SIKLUS 3",
        description:
          "Konsep Algoritma, Diagram Alir & Pseudocode, Ekspresi & Operator, Struktur Kontrol, Debugging & Tracing, dan Etika Pemrograman.",
        context:
          "Peserta didik kelas X umumnya sudah terbiasa berinteraksi menggunakan perangkat elektronik seperti smartphone dan komputer dalam kehidupan sehari-hari, memiliki keterampilan dasar dalam menggunakan komputer dan internet, menunjukkan ketertarikan yang cukup besar terhadap metode pembelajaran yang berbasis praktik dan visual. Namun, hal ini masih memerlukan arahan dalam mengerti konsep teknis karena pemahaman mereka tentang bagaimana instruksi di balik layar disusun melalui algoritma dan kode program prosedural masih sangat terbatas.",
        tujuan: [
          "Menjelaskan konsep dasar algoritma melalui representasi diagram alir (flowchart) dan pseudocode.",
          "Menentukan dan merancang algoritma (diagram alir atau pseudocode) yang sesuai dengan studi kasus atau permasalahan yang diberikan.",
          "Menggunakan alur pada diagram alir untuk melakukan tracing (penelusuran) dan troubleshooting (pencarian kesalahan) logika.",
          "Menjelaskan komponen dan struktur dasar program prosedural menggunakan Bahasa C.",
          "Menggunakan pemahaman aturan sintaks dan struktur kontrol (keputusan dan perulangan) dalam melakukan debugging program.",
          "Menjelaskan mekanisme evaluasi ekspresi (operator penugasan, aritmatika, dan logika) di dalam program.",
          "Memahami konsep pemecahan masalah menggunakan Fungsi serta mekanisme ruang lingkup variabel lokal.",
          "Mengaplikasikan proses pendeteksian dan perbaikan kesalahan kode (syntax error maupun logic error) secara tepat.",
          "Menjelaskan mekanisme aliran eksekusi program secara prosedural (berjalan dari atas ke bawah)",
          "Menerjemahkan algoritma ke dalam sintaks Bahasa C (coding) secara manual atau menggunakan IDE daring.",
        ],
      },
    },
  },
  {
    id: "media-ppt",
    cardName: "Media PPT",
    title: "Media PPT Interaktif Pemrograman Dasar",
    subtitle: "Inovasi TPACK Berbantuan Canva & Quizizz",
    badge: "Media Pembelajaran Digital",
    iconName: "Laptop",
    description:
      "Slide presentasi interaktif dengan visualisasi grafis bernuansa hangat dan simulasi program terintegrasi yang memicu antusiasme belajar siswa pada jam kritis pembelajaran.",
    context:
      "Dirancang khusus mengatasi kejenuhan belajar siswa SMA Kristen 1 Salatiga yang sering kali kehilangan konsentrasi ketika dihadapkan pada teori pemrograman yang teoritis.",
    tujuan: [
      "Mentransformasikan konsep abstrak compiler programming menjadi analogi visual sederhana.",
      "Menggugah minat belajar visual siswa melalui implementasi skema warna kontras modern berstandar estetika tinggi.",
      "Memperoleh feedback kognitif pemahaman siswa secara langsung (real-time) di tengah pemaparan materi.",
    ],
    kelebihan: [
      "Menggunakan teknik 'storytelling analogi' (seperti menganalogikan variabel sebagai gelas air minum) yang mudah diserap.",
      "Diselingi kuis interaktif Quizizz terintegrasi yang menghidupkan suasana kompetisi sehat.",
      "Sangat ramah digunakan di proyektor kelas maupun diakses secara mandiri oleh siswa di handphone.",
    ],
    kekurangan: [
      "Sangat bergantung pada kelancaran server digital kuis online serta jaringan internet sekolah.",
      "Kurang efisien jika ruang kelas tidak dilengkapi pendingin memadai karena tingginya atensi visual terkadang melelahkan mata.",
    ],
    analisisTeori:
      "Mengacu pada integrasi TPACK (Technological Pedagogical Content Knowledge). Media presentasi ini tidak hanya sebatas alat bantu saji (teknologi), melainkan sebuah wujud perkawinan antara metode pedagogi aktif (polling/kuis interaktif) dengan pemahaman konten materi ajar dasar komputer agar relevan dengan karakteristik mental siswa.",
    refleksi:
      "Sebelum digunakannya slide terstruktur ini, dominasi kebosanan siswa sangat terasa (banyak yang mengantuk di jam siang). Setelah digunakannya presentasi interaktif bernuansa estetik di Siklus II, tingkat keaktifan respon siswa melesat hingga 300% dan sesi belajar berubah menjadi panggung diskusi interaktif.",
    pdfTitle: "Bahan Ajar - Cara Komputer Bekerja (Siklus 1)",
    pdfTitle2: "Bahan Ajar - Cara Komputer Bekerja (Siklus 2)",
    pdfTitle3: "Bahan Ajar - Algoritma & Pemrograman (Siklus 3)",
    pdfPages: ["Bahan Ajar Materi Cara Komputer Bekerja - Siklus 1 & 2"],
    downloadRppUrl: "#download-ppt-pdf",
    downloadPenilaianUrl: "#download-penilaian-ppt-pdf",
    timeline: [
      {
        stage: "Observasi",
        title: "Pemetaan Kejenuhan Kelas & Ketersediaan Alat",
        date: "Pekan 2 PPL",
        description:
          "Menemukan fakta bahwa media teks murni membuat fokus siswa merosot drastis. Memeriksa proyektor & bandwidth internet lab kelas.",
        iconName: "Eye",
      },
      {
        stage: "Asistensi",
        title: "Sketsa Analogi & Konsultasi Desain",
        date: "Pekan 4 PPL",
        description:
          "Merancang visualisasi kartun analogi variabel gelas berseri di Canva dan mempresentasikannya ke Guru Pamong untuk validasi pemahaman konten.",
        iconName: "Users",
      },
      {
        stage: "Praktik Mengajar",
        title: "Uji Coba Media Interaktif pada Pembelajaran",
        date: "Pekan 6 PPL",
        description:
          "Menayangkan slide interaktif di Siklus II. Menyelipkan game interaktif kuis berwaktu di sela pemaparan materi asinkron.",
        iconName: "Presentation",
      },
      {
        stage: "Evaluasi",
        title: "Rekapitulasi Keterlibatan Kelas",
        date: "Pekan 9 PPL",
        description:
          "Menganalisis statistik keaktifan dan kecepatan jawab murid di dashboard Quizizz untuk melacak bias pemahaman.",
        iconName: "ClipboardCheck",
      },
      {
        stage: "Refleksi",
        title: "Redesain Slide Berdasarkan Evaluasi Koneksi",
        date: "Pekan 11 PPL",
        description:
          "Menambahkan opsi alternatif kuis berbasis kertas tempel fisik (gamifikasi analog) jika di kemudian hari mendapati kendala internet.",
        iconName: "Sparkles",
      },
    ],
    tabConfig: {
      pdf: {
        label: "Bahan Ajar Siklus 1",
        icon: "FileText",
      },
      pdf2: {
        label: "Bahan Ajar Siklus 2",
        icon: "FileText",
      },
      pdf3: {
        label: "Bahan Ajar Siklus 3",
        icon: "FileText",
      },
    },
  },
  {
    id: "hasil-kerja-siswa",
    cardName: "Hasil Kerja Siswa",
    title: "LKPD Mandiri & Karya Kolaboratif Siswa",
    subtitle: "Analisis Rubrik Autentik Hasil Belajar Kelompok",
    badge: "Portofolio Hasil Kerja (LKPD)",
    iconName: "TrendingUp",
    description:
      "Evaluasi portofolio hasil pemecahan masalah (LKPD) kelompok yang mengintegrasikan tugas dunia nyata lengkap dengan rubrik penilaian otentik tiga dimensi.",
    context:
      "Menjadi pilar utama asesmen sumatif-proses di mana siswa mempraktikkan kolaborasi aktif, empati, dan gotong royong memecahkan tantangan.",
    tujuan: [
      "Mengasah keterampilan gotong royong dan pembagian tugas yang adil di dalam sistem kepengurusan kelompok.",
      "Mengukur performa akurasi kognitif algoritma percabangan siswa secara tertulis maupun eksekusi program.",
      "Membiasakan proses tinjauan sejawat (peer-review) serta metode evaluasi mandiri (self-assessment).",
    ],
    kelebihan: [
      "Merangsang partisipasi merata berkat penetapan panduan peran spesifik (Coder, Tester, Presenter, Documenter) di lembar kerja.",
      "Menyediakan panduan pertanyaan berarah (scaffolded prompts) untuk meminimalkan kecemasan saat buntu logika.",
      "Rubrik penilaian otentik yang jelas memudahkan siswa menilai kualitas pekerjaan mereka secara objektif.",
    ],
    kekurangan: [
      "Membutuhkan kertas cetak yang tebal atau akses komputer kelompok yang konstan agar file kolaboratif terjaga.",
      "Siswa berkemampuan tinggi terkadang kesulitan menahan diri untuk tidak langsung menuliskan seluruh jawaban kelompok.",
    ],
    analisisTeori:
      "Mengacu pada prinsip Pembelajaran Berdiferensiasi (Differentiated Instruction) Carol Ann Tomlinson. Lembar Kerja Peserta Didik (LKPD) dirancang modular dengan tingkat tantangan berjenjang (graduated difficulty) agar setiap kelompok beralih tugas sesuai tingkat kenyamanan logika kognitif masing-masing tanpa merasa tertinggal.",
    refleksi:
      "Di awal siklus, dominasi pengerjaan oleh beberapa siswa penyendiri sempat mempersempit dinamika gotong-royong kelompok. Melalui intervensi 'Kartu Tugas Peran' pada Siklus III, seluruh anggota berpartisipasi seimbang, terbukti dari nilai rata-rata LKPD yang meroket stabil mencapai angka 96.4.",
    pdfTitle: "LEMBAR KERJA SISWA (LKPD) - KELOMPOK 4 (PDF)",
    pdfTitle2: "LKPD - Cara Komputer Bekerja (Siklus 2)",
    pdfTitle3: "LKPD - Ulangan Harian Algoritma (Siklus 3)",
    pdfPages: [],
    downloadRppUrl: "#download-lkpd-pdf",
    downloadPenilaianUrl: "#download-penilaian-lkpd-pdf",
    timeline: [
      {
        stage: "Observasi",
        title: "Mengidentifikasi Bias Pembagian Tugas Kelompok",
        date: "Pekan 3 PPL",
        description:
          "Menemukan kondisi di mana pengerjaan kelompok hanya ditumpukan pada satu anak terpintar, sementara anggota lain merasa diabaikan.",
        iconName: "Eye",
      },
      {
        stage: "Asistensi",
        title: "Perumusan Struktur 'Kartu Peran Perorangan'",
        date: "Pekan 4 PPL",
        description:
          "Merundingkan bersama Guru Pamong perihal rancangan lembar LKPD baru yang memecah lembar isian jawaban sesuai tugas masing-masing individu.",
        iconName: "Users",
      },
      {
        stage: "Praktik Mengajar",
        title: "Uji Coba LKPD Kolaboratif Berpembagian Peran",
        date: "Pekan 7 PPL",
        description:
          "Mengoperasikan pengerjaan LKPD interaktif di kelas. Melacak kepatuhan kelompok atas tata tertib 'gotong royong'.",
        iconName: "Presentation",
      },
      {
        stage: "Evaluasi",
        title: "Penilaian Peer-Assessment Siswa",
        date: "Pekan 10 PPL",
        description:
          "Membagikan kuesioner evaluasi diri antarteman untuk melacak tingkat kepuasan kolaborasi tiap personel kelompok.",
        iconName: "ClipboardCheck",
      },
      {
        stage: "Refleksi",
        title: "Penyusunan Portofolio Terbaik",
        date: "Pekan 12 PPL",
        description:
          "Menjilid seluruh lembar LKPD terbaik hasil kerja siswa sebagai katalog bukti nyata kesuksesan PPL di SMA Kristen 1 Salatiga.",
        iconName: "Sparkles",
      },
    ],
    // Hanya dokumentasi LKPD per siklus (tanpa documentation umum)
    documentation: [],
    documentationSiklus1: [
      {
        title: "LKPD Siswa Round Robin - Halaman 1",
        description:
          "Hasil pengerjaan LKPD kelompok 4 pada materi Algoritma Round Robin Siklus 1. Menunjukkan pemahaman konsep penjadwalan CPU.",
        imageUrl: new URL(
          "../assets/images/dokumentasi/Siklus 1/lkpd siswa round robin.JPG",
          import.meta.url,
        ).href,
        category: "lainnya",
      },
      {
        title: "LKPD Siswa Round Robin - Halaman 2",
        description:
          "Lembar kerja siswa lanjutan dengan studi kasus perhitungan waktu respons proses.",
        imageUrl: new URL(
          "../assets/images/dokumentasi/Siklus 1/LKPD SISWA ROUND ROBIN(1).JPG",
          import.meta.url,
        ).href,
        category: "lainnya",
      },
    ],
    documentationSiklus2: [
      {
        title: "LKPD Siswa Siklus 2 - Cara Komputer Bekerja",
        description:
          "Hasil kerja siswa dalam memahami arsitektur komputer, siklus CPU (Fetch-Decode-Execute), dan konsep memori Mr. Algo.",
        imageUrl: new URL(
          "../assets/images/dokumentasi/Siklus 2/LKPD Siswa siklus 2.JPG",
          import.meta.url,
        ).href,
        category: "lainnya",
      },
    ],
    documentationSiklus3: [
      {
        title: "LKPD Ulangan Harian - Algoritma (1)",
        description:
          "Hasil asesmen harian siswa pada materi algoritma dan pemrograman. Menunjukkan pemahaman diagram alir dan pseudocode.",
        imageUrl: new URL(
          "../assets/images/dokumentasi/Siklus 3/LKPD SISWA Ulangan Harian Algoritma dan Pemorgraman.JPG",
          import.meta.url,
        ).href,
        category: "lainnya",
      },
      {
        title: "LKPD Ulangan Harian - Algoritma (2)",
        description:
          "Lembar jawaban siswa untuk soal tracing algoritma dan debugging logika program.",
        imageUrl: new URL(
          "../assets/images/dokumentasi/Siklus 3/LKPD SISWA Ulangan Harian Algoritma dan Pemorgraman(1).JPG",
          import.meta.url,
        ).href,
        category: "lainnya",
      },
      {
        title: "LKPD Ulangan Harian - Algoritma (3)",
        description:
          "Portofolio hasil pengerjaan studi kasus pemrograman C oleh siswa kelas X.",
        imageUrl: new URL(
          "../assets/images/dokumentasi/Siklus 3/LKPD SISWA Ulangan Harian Algoritma dan Pemorgraman(2).JPG",
          import.meta.url,
        ).href,
        category: "lainnya",
      },
    ],
    // Tab config hanya untuk 3 tab LKPD (tanpa gallery)
    tabConfig: {
      pdf: {
        label: "LKPD Siklus 1 (Round Robin)",
        icon: "ClipboardList",
      },
      pdf2: {
        label: "LKPD Siklus 2 (Cara Komputer Bekerja)",
        icon: "ClipboardList",
      },
      pdf3: {
        label: "LKPD Siklus 3 (Ulangan Harian Algoritma)",
        icon: "ClipboardList",
      },
    },
  },
];
