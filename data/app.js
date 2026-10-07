import { buildPrompt } from './data/prompt_template.js';

window.updateKelas = function() {
  const fase = document.getElementById("pilihFase").value;
  const selectKelas = document.getElementById("pilihKelas");
  selectKelas.innerHTML = "";

  const opsiKelas = {
    "D": ["7", "8", "9"],
    "E": ["10"],
    "F": ["11", "12"]
  };

  opsiKelas[fase].forEach(k => {
    const opt = document.createElement("option");
    opt.value = k;
    opt.textContent = `Kelas ${k}`;
    selectKelas.appendChild(opt);
  });
};

window.generatePerangkat = function() {
  const dimensiChecked = Array.from(document.querySelectorAll('input[name="dimensi"]:checked')).map(el => el.value);
  const cintaChecked = Array.from(document.querySelectorAll('input[name="cinta"]:checked')).map(el => el.value);

  if (dimensiChecked.length > 3 || cintaChecked.length > 3) {
    alert("Peringatan: Maksimal 3 Dimensi Profil Lulusan dan 3 Panca Cinta.");
    return;
  }

  const params = {
    namaGuru: document.getElementById("namaGuru").value,
    satuanPendidikan: document.getElementById("satuanPendidikan").value,
    fase: document.getElementById("pilihFase").value,
    jenjang: document.getElementById("pilihFase").value === "D" ? "MTs / SMP" : "MA / SMA",
    kelas: document.getElementById("pilihKelas").value,
    semester: document.getElementById("pilihSemester").value,
    materiPokok: document.getElementById("materiPokok").value,
    alokasiWaktu: "2 x 45 menit",
    lokasiDaerah: "Lumajang, Jawa Timur",
    profilLulusan: dimensiChecked,
    pancaCinta: cintaChecked
  };

  const hasilPrompt = buildPrompt(params);
  document.getElementById("outputPrompt").value = hasilPrompt;
};

window.salinPrompt = function() {
  const copyText = document.getElementById("outputPrompt");
  copyText.select();
  navigator.clipboard.writeText(copyText.value);
  alert("Perangkat berhasil disalin ke clipboard!");
};
