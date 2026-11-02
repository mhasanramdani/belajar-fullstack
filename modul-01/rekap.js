const absensi = [
  { nama: "Andi", shift: "Pagi", jamMasuk: 8, jamKeluar: 17 },
  { nama: "Budi", shift: "Pagi", jamMasuk: 8, jamKeluar: 16 },
  { nama: "Citra", shift: "Sore", jamMasuk: 13, jamKeluar: 21 },
  { nama: "Dodi", shift: "Sore", jamMasuk: 14, jamKeluar: 21 },
];

const daftarNama = absensi.map((k) => k.nama);
console.log(daftarNama);

const denganDurasi = absensi.map((k) => ({
  ...k,
  durasi: k.jamKeluar - k.jamMasuk,
}));
console.log(denganDurasi);

const shiftPagi = denganDurasi.filter((k) => k.shift === "Pagi");
console.log(shiftPagi);

const totalJam = denganDurasi.reduce((total, k) => total + k.durasi, 0);
console.log(`Total jam kerja: ${totalJam} jam`);

const { nama, shift, durasi } = denganDurasi[0];
console.log(`${nama} bekerja shift ${shift} selama ${durasi} jam.`);
