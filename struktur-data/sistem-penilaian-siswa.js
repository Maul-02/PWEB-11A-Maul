const siswa = {
  nama: "Ahmad",
  kelas: "11A",
  nilai: [75, 80, 65, 90, 70],
  // index nilai
  // 0 = Tugas
  // 1 = Quis
  // 2 = UTS
  // 3 = UAS
  // 4 = Project
};

function prosesNilai(nama, kelas) {
  // Tampilkan Nama dan Kelas
  // console.log("Nama Siswa: " + nama);
  // console.log("Kelas: " + kelas);

  // Update Nilai pakai DOT NOTATION
  siswa.nilai[2] = 70;
  siswa.nilai[4] = 85;
  // console.log(siswa.nilai);

  let totalNilai =
    siswa.nilai[0] +
    siswa.nilai[1] +
    siswa.nilai[2] +
    siswa.nilai[3] +
    siswa.nilai[4];

  const rataRata = totalNilai / siswa.nilai.length;
  // return `TOTAL NILAI ${totalNilai} RATA RATA ${rataRata}`

  // Rata Rata
  const predikat =
    rataRata >= 90
      ? "Predikat A"
      : rataRata >= 80
        ? "Predikat B"
        : rataRata >= 70
          ? "Predikat C"
          : rataRata >= 60
            ? "Predikat D"
            : "Predikat E";
  // console.log(predikat);

  // Status
  const status =
    rataRata >= 75 && siswa.nilai[2] >= 60 && siswa.nilai[3] >= 60
      ? "Lulus"
      : "Tidak Lulus";
  // console.log(status)

  // Keterangan
  const keterangan =
    predikat === "Predikat A"
      ? "Sangat Baik"
      : predikat === "Predikat B"
        ? "Baik"
        : predikat === "Predikat C"
          ? "cukuf"
          : predikat === "Predikat D"
            ? "Perlu Perbaikan"
            : "Perlu Perbaikan";

  // console.log(keterangan);

  // TAMPILKAN HASIL AKHIR
  return `===== HASIL PENILAIAN =====
    Nama       : ${nama}
    Kelas      : ${kelas}

    Tugas      : ${siswa.nilai[0]}
    Quis       : ${siswa.nilai[1]}
    UTS        : ${siswa.nilai[2]}
    UAS        : ${siswa.nilai[3]}
    Project    : ${siswa.nilai[4]}
    Total      : ${totalNilai}
    Rata-Rata  : ${rataRata}
    Predikat   : ${predikat}
    Status     : ${status}
    Keterangan : ${keterangan}
            `;
}

console.log(prosesNilai(siswa.nama, siswa.kelas));
