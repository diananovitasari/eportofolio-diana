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
  category: "mengajar" | "diskusi" | "presentasi siswa" | "lainnya";
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
  pdfPages: string[];
  videoEmbedUrl: string; // fallback preview embed representation
  timeline: ArtifactTimelineItem[];
  documentation: ArtifactDocumentation[];
  downloadRppUrl: string;
  downloadPenilaianUrl: string;
}

export const DETAILED_ARTIFACTS: DetailedArtifact[] = [
  {
    id: "modul-ajar",
    cardName: "Modul Ajar",
    title: "Modul Ajar Dasar Python Kelas X",
    subtitle: "Rancangan Berbasis Problem-Based Learning (PBL)",
    badge: "RPP / Modul Kurikulum Merdeka",
    iconName: "FileText",
    description: "Modul pembelajaran terstruktur yang mengintegrasikan model Problem-Based Learning (PBL) untuk menuntun siswa memahami variabel, tipe data, serta logika percabangan kondisional (if-else) pada pemrograman Python di SMA Kristen 1 Salatiga.",
    context: "Diujicobakan pada siswa Kelas X Fase E di SMA Kristen 1 Salatiga dengan rentang kesiapan kognitif (readiness) yang bervariasi—mulai dari murid yang belum pernah mengetik program komputer hingga yang memiliki logika komputasi awal.",
    tujuan: [
      "Mengidentifikasi variabel dan membedakan tipe data primitif (String, Integer, Float, Boolean) pada Python secara tepat.",
      "Mendesain serta menulis alur logika percabangan kondisional (if-elif-else) untuk memecahkan studi kasus dunia nyata.",
      "Mengeksekusi dan menguji coba kode program sederhana di IDE serta melakukan pelacakan kesalahan logika (basic debugging)."
    ],
    kelebihan: [
      "Mengintegrasikan tantangan pemecahan masalah (PBL) yang kontekstual dan dekat dengan keseharian siswa.",
      "Memiliki struktur scaffolding berlapis guna menuntun siswa berkemampuan belajar lambat lewat sintaks beruntun.",
      "Menyajikan alur asesmen formatif awal dan asesmen proses yang terintegrasi langsung di tiap fase pengerjaan."
    ],
    kekurangan: [
      "Sintaks PBL memakan durasi yang cukup padat sehingga melesetnya pengaturan waktu berisiko terjadi pada fase diskusi kelompok.",
      "Menuntut perhatian intensif dan bimbingan aktif dari guru di awal agar siswa tidak mengalami keputusasaan logika (logic blockage)."
    ],
    analisisTeori: "Mengacu kuat pada Teori Konstruktivisme Sosial Vygotsky mengenai Zone of Proximal Development (ZPD). Proses pembelajaran dirancang dengan scaffolding bertahap di mana guru bertindak sebagai fasilitator yang mengulurkan panduan kognitif terarah di awal, kemudian secara perlahan mengurangi intensitas intervensi tersebut seiring kemandirian berpikir kritis dan kompetensi siswa terbentuk.",
    refleksi: "Pada Siklus I, pembagian waktu fasilitasi PBL sempat terhambat karena siswa masih canggung berdiskusi mandiri. Pada Siklus II dan III, saya menyempurnakannya dengan 'Lembar Panduan Peran' serta modulasi instruksi visual visual cepat, sehingga keterlibatan aktif siswa meningkat pesat hingga 92% dan pengerjaan modul terselesaikan tepat waktu.",
    pdfTitle: "DOKUMEN MODUL AJAR - DIANA NOVITA SARI (PDF)",
    pdfPages: [
      "Halaman 1: INFORMASI UMUM & IDENTITAS MODUL\n- Satuan Pendidikan: SMA Kristen 1 Salatiga\n- Fase/Kelas: Fase E / Kelas X\n- Elemen Kurikulum: Berpikir Komputasional & Algoritma Pemrograman\n- Model Pembelajaran: Problem-Based Learning (PBL)\n- Target Peserta Didik: Siswa Reguler (32 Murid) dengan pembelajaran berdiferensiasi\n- Profil Pelajar Pancasila: Gotong Royong, Bernalar Kritis, Mandiri",
      "Halaman 2: LANGKAH-LANGKAH INTI INSTRUKSIONAL (SINTAKS PBL)\n- Tahap 1: Orientasi Siswa pada Masalah\n  Guru memaparkan masalah kontekstual berupa program kasir toko kelontong di Salatiga.\n- Tahap 2: Mengorganisasikan Siswa untuk Belajar\n  Siswa dibagi menjadi kelompok heterogen berisi 4 orang dengan pembagian peran yang terukur.\n- Tahap 3: Membimbing Penyelidikan Kelompok\n  Guru berkeliling melakukan pendampingan scaffolding dan menyalakan nalar kritis siswa.\n- Tahap 4: Mengembangkan dan Menyajikan Hasil Karya\n  Siswa merapikan kode program Python di laptop kelompok masing-masing.",
      "Halaman 3: RUBRIK & ASESMEN AUTENTIK\n- Asesmen Sikap: Menggunakan lembar observasi dimensi bergotong royong dan bernalar kritis.\n- Asesmen Performa: Rubrik pengerjaan kode pemrograman (Akurasi sintaks, Efisiensi logika, Eksekusi debug).\n- Rencana Remedial: Sesi bimbingan klinis terpandu (scaffolding tambahan) dengan kuis penjelas analogi."
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Representative instructional demonstration video
    downloadRppUrl: "#download-rpp-modul-ajar-pdf",
    downloadPenilaianUrl: "#download-penilaian-modul-ajar-pdf",
    timeline: [
      {
        stage: "Observasi",
        title: "Observasi Budaya Belajar & Diagnostik Kelas",
        date: "Pekan 1-2 PPL",
        description: "Mengamati karakteristik belajar siswa kelas X di SMA Kristen 1 Salatiga, memetakan gaya belajar kinestetik/visual, serta kebiasaan pemecahan masalah.",
        iconName: "Eye"
      },
      {
        stage: "Asistensi",
        title: "Asistensi Mengajar & Kolaborasi Guru Pamong",
        date: "Pekan 3-4 PPL",
        description: "Membantu Ibu Sri Wahyuni, S.Pd. dalam mengondisikan perangkat laboratorium, membagikan kertas kerja, dan berdiskusi perihal kendala prasyarat kognitif.",
        iconName: "Users"
      },
      {
        stage: "Praktik Mengajar",
        title: "Implementasi Terbimbing Siklus Pembelajaran",
        date: "Pekan 5-8 PPL",
        description: "Memimpin praktik mengajar terbimbing Siklus I sampai Siklus III berbasis model PBL dengan metode berdiferensiasi menggunakan Python.",
        iconName: "Presentation"
      },
      {
        stage: "Evaluasi",
        title: "Penilaian Autentik & Analisis Hasil Belajar",
        date: "Pekan 9-10 PPL",
        description: "Mengoreksi berkas tugas siswa pada LKPD, merekap nilai ujian sumatif, serta memetakan tingkat kepatuhan penulisan sintaks program.",
        iconName: "ClipboardCheck"
      },
      {
        stage: "Refleksi",
        title: "Kolaborasi Reflektif & Disseminasi Hasil riset",
        date: "Pekan 11-12 PPL",
        description: "Melaksanakan bimbingan refleksi pasca-praktik bersama Guru Pamong UKSW untuk merencanakan tindak lanjut adaptasi kelas masa depan.",
        iconName: "Sparkles"
      }
    ],
    documentation: [
      {
        title: "Aktivitas Memfasilitasi Kelas",
        description: "Diana sedang memberikan panduan analogi variabel Python menggunakan representasi kotak laci ajaib di hadapan seluruh siswa.",
        imageUrl: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
        category: "mengajar"
      },
      {
        title: "Bimbingan Kelompok Terarah",
        description: "Sesi scaffolding interaktif di mana Diana bersimpuh membantu kelompok lambat-belajar mengurai pesan error 'IndentationError'.",
        imageUrl: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80",
        category: "diskusi"
      },
      {
        title: "Presentasi Karya Logika",
        description: "Siswa perwakilan kelompok memaparkan algoritma program kasir sederhana buatan mereka menggunakan proyektor kelas.",
        imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
        category: "presentasi siswa"
      }
    ]
  },
  {
    id: "media-ppt",
    cardName: "Media PPT",
    title: "Media PPT Interaktif Pemrograman Dasar",
    subtitle: "Inovasi TPACK Berbantuan Canva & Quizizz",
    badge: "Media Pembelajaran Digital",
    iconName: "Laptop",
    description: "Slide presentasi interaktif dengan visualisasi grafis bernuansa hangat dan simulasi program terintegrasi yang memicu antusiasme belajar siswa pada jam kritis pembelajaran.",
    context: "Dirancang khusus mengatasi kejenuhan belajar siswa SMA Kristen 1 Salatiga yang sering kali kehilangan konsentrasi ketika dihadapkan pada teori pemrograman yang teoritis.",
    tujuan: [
      "Mentransformasikan konsep abstrak compiler programming menjadi analogi visual sederhana.",
      "Menggugah minat belajar visual siswa melalui implementasi skema warna kontras modern berstandar estetika tinggi.",
      "Memperoleh feedback kognitif pemahaman siswa secara langsung (real-time) di tengah pemaparan materi."
    ],
    kelebihan: [
      "Menggunakan teknik 'storytelling analogi' (seperti menganalogikan variabel sebagai gelas air minum) yang mudah diserap.",
      "Diselingi kuis interaktif Quizizz terintegrasi yang menghidupkan suasana kompetisi sehat.",
      "Sangat ramah digunakan di proyektor kelas maupun diakses secara mandiri oleh siswa di handphone."
    ],
    kekurangan: [
      "Sangat bergantung pada kelancaran server digital kuis online serta jaringan internet sekolah.",
      "Kurang efisien jika ruang kelas tidak dilengkapi pendingin memadai karena tingginya atensi visual terkadang melelahkan mata."
    ],
    analisisTeori: "Mengacu pada integrasi TPACK (Technological Pedagogical Content Knowledge). Media presentasi ini tidak hanya sebatas alat bantu saji (teknologi), melainkan sebuah wujud perkawinan antara metode pedagogi aktif (polling/kuis interaktif) dengan pemahaman konten materi ajar dasar komputer komputer agar relevan dengan karakteristik mental siswa.",
    refleksi: "Sebelum digunakannya slide terstruktur ini, dominasi kebosanan siswa sangat terasa (banyak yang mengantuk di jam siang). Setelah digunakannya presentasi interaktif bernuansa estetik di Siklus II, tingkat keaktifan respon siswa melesat hingga 300% dan sesi belajar berubah menjadi panggung diskusi interaktif.",
    pdfTitle: "SLIDE PRESENTASI INTERAKTIF (PDF PREVIEW)",
    pdfPages: [
      "Slide 1: SALAM & ANALOGI VARIABEL\n- Judul: Menjinakkan Logika Python dengan Gembira!\n- Konsep Analogi: Variabel diibaratkan sebagai Gelas Berlabel. Isi gelas (Tipe Data) bisa air keruh, air es, maupun koin logam, tetapi label gelas (Nama Variabel) tetap utuh.",
      "Slide 2: MARI BERPIKIR! STUDI KASUS PERCABANGAN\n- Kasus: Menentukan status kelulusan login admin.\n- Visualisasi Flowchart: Jalur rel kereta api bercabang dua—jika kartu tiket valid maka palang kereta terbuka, jika tidak maka palang tetap tertutup rapat.",
      "Slide 3: TANTANGAN KUIS CEpat\n- Kode QR & Tautan Quizizz Pemetaan Cepat.\n- Pertanyaan: 'Manakah penulisan nama variabel Python yang sah dari pilihan di bawah ini?'\n- Leaderboard interaktif diproyeksikan langsung di depan kelas."
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    downloadRppUrl: "#download-ppt-pdf",
    downloadPenilaianUrl: "#download-penilaian-ppt-pdf",
    timeline: [
      {
        stage: "Observasi",
        title: "Pemetaan Kejenuhan Kelas & Ketersediaan Alat",
        date: "Pekan 2 PPL",
        description: "Menemukan fakta bahwa media teks murni membuat fokus siswa merosot drastis. Memeriksa proyektor & bandwidth internet lab kelas.",
        iconName: "Eye"
      },
      {
        stage: "Asistensi",
        title: "Sketsa Analogi & Konsultasi Desain",
        date: "Pekan 4 PPL",
        description: "Merancang visualisasi kartun analogi variabel gelas berseri di Canva dan mempresentasikannya ke Guru Pamong untuk validasi pemahaman konten.",
        iconName: "Users"
      },
      {
        stage: "Praktik Mengajar",
        title: "Uji Coba Media Interaktif pada Pembelajaran",
        date: "Pekan 6 PPL",
        description: "Menayangkan slide interaktif di Siklus II. Menyelipkan game interaktif kuis berwaktu di sela pemaparan materi asinkron.",
        iconName: "Presentation"
      },
      {
        stage: "Evaluasi",
        title: "Rekapitulasi Keterlibatan Kelas",
        date: "Pekan 9 PPL",
        description: "Menganalisis statistik keaktifan dan kecepatan jawab murid di dashboard Quizizz untuk melacak bias pemahaman.",
        iconName: "ClipboardCheck"
      },
      {
        stage: "Refleksi",
        title: "Redesain Slide Berdasarkan Evaluasi Koneksi",
        date: "Pekan 11 PPL",
        description: "Menambahkan opsi alternatif kuis berbasis kertas tempel fisik (gamifikasi analog) jika di kemudian hari mendapati kendala internet.",
        iconName: "Sparkles"
      }
    ],
    documentation: [
      {
        title: "Paparan Analogi Kereta Api",
        description: "Diana sedang menunjuk bagan alur rel kereta api bergambar sebagai rujukan visual percabangan logika 'if-condition'.",
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        category: "mengajar"
      },
      {
        title: "Partisipasi Kuis Interaktif",
        description: "Siswa kelas X antusias bersorak melihat posisi tim mereka melesat naik di papan peringkat skor kuis Quizizz.",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
        category: "diskusi"
      },
      {
        title: "Tanya Jawab Analogi",
        description: "Seorang murid mengangkat tangan mengejar poin penjelasan tambahan perihal aturan sensitivitas huruf besar-kecil Python.",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
        category: "presentasi siswa"
      }
    ]
  },
  {
    id: "hasil-kerja-siswa",
    cardName: "Hasil Kerja Siswa",
    title: "LKPD Mandiri & Karya Kolaboratif Siswa",
    subtitle: "Analisis Rubrik Autentik Hasil Belajar Kelompok",
    badge: "Portofolio Hasil Kerja (LKPD)",
    iconName: "TrendingUp",
    description: "Evaluasi portofolio hasil pemecahan masalah (LKPD) kelompok yang mengintegrasikan tugas dunia nyata lengkap dengan rubrik penilaian otentik tiga dimensi.",
    context: "Menjadi pilar utama asesmen sumatif-proses di mana siswa mempraktikkan kolaborasi aktif, empati, dan gotong royong memecahkan tantangan baris bahasa Python.",
    tujuan: [
      "Mengasah keterampilan gotong royong dan pembagian tugas yang adil di dalam sistem kepengurusan kelompok.",
      "Mengukur performa akurasi kognitif algoritma percabangan siswa secara tertulis maupun eksekusi program.",
      "Membiasakan proses tinjauan sejawat (peer-review) serta metode evaluasi mandiri (self-assessment)."
    ],
    kelebihan: [
      "Merangsang partisipasi merata berkat penetapan panduan peran spesifik (Coder, Tester, Presenter, Documenter) di lembar kerja.",
      "Menyediakan panduan pertanyaan berarah (scaffolded prompts) untuk meminimalkan kecemasan saat buntu logika.",
      "Rubrik penilaian otentik yang jelas memudahkan siswa menilai kualitas pekerjaan mereka secara objektif."
    ],
    kekurangan: [
      "Membutuhkan kertas cetak yang tebal atau akses komputer kelompok yang konstan agar file kolaboratif terjaga.",
      "Siswa berkemampuan tinggi terkadang kesulitan menahan diri untuk tidak langsung menuliskan seluruh jawaban kelompok."
    ],
    analisisTeori: "Mengacu pada prinsip Pembelajaran Berdiferensiasi (Differentiated Instruction) Carol Ann Tomlinson. Lembar Kerja Peserta Didik (LKPD) dirancang modular dengan tingkat tantangan berjenjang (graduated difficulty) agar setiap kelompok beralih tugas sesuai tingkat kenyamanan logika kognitif masing-masing tanpa merasa tertinggal.",
    refleksi: "Di awal siklus, dominasi pengerjaan oleh beberapa siswa penyendiri sempat mempersempit dinamika gotong-royong kelompok. Melalui intervensi 'Kartu Tugas Peran' pada Siklus III, seluruh anggota berpartisipasi seimbang, terbukti dari nilai rata-rata LKPD yang meroket stabil mencapai angka 96.4.",
    pdfTitle: "LEMBAR KERJA SISWA (LKPD) PYTHON - KELOMPOK 4 (PDF)",
    pdfPages: [
      "Halaman 1: SKENARIO TANTANGAN REAL-WORLD\n- Nama Kelompok: Kelompok 4 (Turing Team)\n- Anggota & Peran: Budi (Coder), Susi (Debugger), Clara (Presenter), Danu (Documenter).\n- Kasus LKPD: Skuadron penyelamatan margasatwa di Salatiga butuh sistem Python otomatis untuk menghitung dosis pakan orangutan berdasarkan usia dan bobot badan.",
      "Halaman 2: SOLUSI KODE & RUNTIME OUTPUT PYTHON\n- Potongan Kode Hasil Kerja Siswa:\n  ```python\n  # Solusi pengerjaan tim 4\n  bobot = float(input('Masukkan berat badan: '))\n  if bobot < 10:\n      pakan = 'Susu & Buah Lembut'\n  elif bobot >= 10 and bobot <= 30:\n      pakan = 'Pisang Serat Tinggi'\n  else:\n      pakan = 'Daging Buah Kerat'\n  print('Menu makanan Orangutan:', pakan)\n  ```\n- Status Eksekusi: Sukses, Logika berjalan sempurna tanpa celah error.",
      "Halaman 3: CATATAN GURU & SKOR PENILAIAN AUTENTIK\n- Skor Pemecahan Masalah: 98 / 100\n- Catatan Penilai (Diana): 'Luar biasa bersih dan rapi! Kelompok 4 berhasil membagi struktur peran dengan harmonis. Alur logika program tertata sangat logis.'"
    ],
    videoEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    downloadRppUrl: "#download-lkpd-pdf",
    downloadPenilaianUrl: "#download-penilaian-lkpd-pdf",
    timeline: [
      {
        stage: "Observasi",
        title: "Mengidentifikasi Bias Pembagian Tugas Kelompok",
        date: "Pekan 3 PPL",
        description: "Menemukan kondisi di mana pengerjaan kelompok hanya ditumpukan pada satu anak terpintar, sementara anggota lain merasa diabaikan.",
        iconName: "Eye"
      },
      {
        stage: "Asistensi",
        title: "Perumusan Struktur 'Kartu Peran Perorangan'",
        date: "Pekan 4 PPL",
        description: "Merundingkan bersama Guru Pamong perihal rancangan lembar LKPD baru yang memecah lembar isian jawaban sesuai tugas masing-masing individu.",
        iconName: "Users"
      },
      {
        stage: "Praktik Mengajar",
        title: "Uji Coba LKPD Kolaboratif Berpembagian Peran",
        date: "Pekan 7 PPL",
        description: "Mengoperasikan pengerjaan LKPD interaktif di kelas. Melacak kepatuhan kelompok atas tata tertib 'gotong royong'.",
        iconName: "Presentation"
      },
      {
        stage: "Evaluasi",
        title: "Penilaian Peer-Assessment Siswa",
        date: "Pekan 10 PPL",
        description: "Membagikan kuesioner evaluasi diri antarteman untuk melacak tingkat kepuasan kolaborasi tiap personel kelompok.",
        iconName: "ClipboardCheck"
      },
      {
        stage: "Refleksi",
        title: "Penyusunan Portofolio Terbaik",
        date: "Pekan 12 PPL",
        description: "Menjilid seluruh lembar LKPD terbaik hasil kerja siswa sebagai katalog bukti nyata kesuksesan PPL di SMA Kristen 1 Salatiga.",
        iconName: "Sparkles"
      }
    ],
    documentation: [
      {
        title: "Diskus Kelompok Pembuatan Kode",
        description: "Susi dan Budi bahu membahu merancang kerangka kondisi if-else di satu layar komputer yang sama secara harmonis.",
        imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
        category: "diskusi"
      },
      {
        title: "Dokumentasi Presentasi LKPD",
        description: "Clara berdiri percaya diri mendemokan uji coba memasukkan angka acak pada program python miliknya di depan kelas.",
        imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
        category: "presentasi siswa"
      },
      {
        title: "Evaluasi Bersama Diana",
        description: "Diana membungkuk di samping meja kelompok memberikan masukan konstruktif atas rancangan visual presentasi mereka.",
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
        category: "mengajar"
      }
    ]
  }
];
