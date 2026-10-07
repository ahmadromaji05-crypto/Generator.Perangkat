export function buildPrompt(params) {
  return `
Anda adalah asisten perancang kurikulum ahli Pendidikan Pancasila dan Kewarganegaraan (PPKn) untuk madrasah berbasis pesantren.
Susun dokumen perangkat ajar lengkap dengan identitas berikut:

INFORMASI UMUM:
- Satuan Pendidikan : ${params.satuanPendidikan}
- Nama Guru         : ${params.namaGuru}
- Mata Pelajaran    : Pendidikan Pancasila dan Kewarganegaraan
- Jenjang / Fase    : ${params.jenjang} / Fase ${params.fase}
- Kelas / Semester  : Kelas ${params.kelas} / Semester ${params.semester}
- Materi Pokok      : ${params.materiPokok}
- Alokasi Waktu     : ${params.alokasiWaktu}

PARAMETER INTEGRASI:
1. Kerangka Berpikir: Pendekatan Pembelajaran Mendalam (Deep Learning: Berkesadaran, Bermakna, Menggembirakan).
2. Mesin Kecerdasan STIFIn: Rancang diferensiasi proses/produk untuk tipe (Sensing, Thinking, Intuiting, Feeling, Insting).
3. Profil Lulusan (Pilih maks. 3): ${params.profilLulusan.join(", ")}.
4. Kurikulum Berbasis Cinta (Panca Cinta - Pilih maks. 3): ${params.pancaCinta.join(", ")}.
5. Konteks Keislaman & Lingkungan: Integrasikan nilai kepesantrenan (Ukhuwwah, Tasamuh, Fikih Kebangsaan) dan kearifan lokal ${params.lokasiDaerah}.

OUTPUT YANG HARUS DIBUAT:
1. RPP / Modul Ajar Terstruktur (Pendahuluan, Inti berbasis Memahami-Mengaplikasi-Merefleksi, Penutup).
2. Asesmen Lengkap:
   - Formatif (Sikap & Observasi Diskusi).
   - Sumatif (Soal Analisis Bernalar Kritis/HOTS + Kunci & Pembobotan).
3. Lampiran:
   - Bahan Ajar Ringkas Akademis.
   - Lembar Kerja Peserta Didik (LKPD) berbasis Diferensiasi STIFIn.
   - Rubrik Penilaian Sikap dan Pengetahuan.
   - Rencana Remedial dan Pengayaan.
   - Lembar Refleksi Guru dan Santri.

Format dokumen harus formal-edukatif, rapi, dan siap cetak tanpa memerlukan penyuntingan ulang.
`;
}
