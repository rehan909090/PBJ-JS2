const fs = require('fs');

// Fungsi untuk mengambil catatan
const ambilCatatan = function () {
    return 'Ini Catatan Randi Proska...';
};

// Fungsi untuk menambahkan catatan
const tambahCatatan = function (judul, isi) {
    const catatan = muatCatatan();

    // Memeriksa apakah judul catatan sudah ada
    const catatanGanda = catatan.filter(function (note) {
        return note.judul === judul;
    });

    if (catatanGanda.length === 0) {
        // Menambahkan catatan baru jika judul belum ada
        catatan.push({
            judul: judul,
            isi: isi
        });

        // Menyimpan catatan ke file
        simpanCatatan(catatan);

        console.log('Catatan baru ditambahkan!');
    } else {
        console.log('Judul catatan telah dipakai');
    }
};

// Fungsi untuk menampilkan semua catatan
const tampilkanCatatan = function () {
    const catatan = muatCatatan();

    console.log('Daftar Catatan:');
    catatan.forEach(function (note) {
        console.log(`Judul: ${note.judul}\nIsi: ${note.isi}\n`);
    });
};

// Fungsi untuk membaca catatan berdasarkan judul
const bacaCatatan = function (judul) {
    const catatan = muatCatatan();

    const catatanDitemukan = catatan.find(function (note) {
        return note.judul === judul;
    });

    if (catatanDitemukan) {
        console.log(`Judul: ${catatanDitemukan.judul}\nIsi: ${catatanDitemukan.isi}`);
    } else {
        console.log('Catatan tidak ditemukan');
    }
};

// Fungsi untuk menghapus catatan berdasarkan judul
const hapusCatatan = function (judul) {
    let catatan = muatCatatan();

    // Mengecek apakah judul catatan ada dalam array
    const catatanBaru = catatan.filter(function (note) {
        return note.judul !== judul;
    });

    if (catatan.length !== catatanBaru.length) {
        // Jika ada perubahan, simpan catatan baru
        simpanCatatan(catatanBaru);
        console.log('Catatan berhasil dihapus');
    } else {
        console.log('Catatan tidak ditemukan');
    }
};

// Fungsi untuk menyimpan catatan ke file
const simpanCatatan = function (catatan) {
    const dataJSON = JSON.stringify(catatan, null, 2);
    fs.writeFileSync('catatan.json', dataJSON);
};

// Fungsi untuk membaca catatan dari file
const muatCatatan = function () {
    try {
        const dataBuffer = fs.readFileSync('catatan.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

// Eksport fungsi-fungsi agar dapat digunakan di file lain
module.exports = {
    ambilCatatan: ambilCatatan,
    tambahCatatan: tambahCatatan,
    tampilkanCatatan: tampilkanCatatan,
    bacaCatatan: bacaCatatan,
    hapusCatatan: hapusCatatan
};
