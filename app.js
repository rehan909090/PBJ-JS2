const yargs = require('yargs');
const chalk = require('chalk');
const { tambahCatatan, hapusCatatan, tampilkanCatatan, bacaCatatan } = require('./catatan.js');

// Kustomisasi versi yargs
yargs.version('10.1.0');

// Membuat perintah (command) 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        tambahCatatan(argv.judul, argv.isi);
    }
});

// Perintah hapus
yargs.command({
    command: 'hapus',
    describe: 'hapus catatan',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        hapusCatatan(argv.judul);
    }
});

// Perintah tampilkan
yargs.command({
    command: 'tampilkan',
    describe: 'menampilkan semua catatan',
    handler: function () {
        tampilkanCatatan();
    }
});

// Perintah baca
yargs.command({
    command: 'baca',
    describe: 'membaca catatan berdasarkan judul',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        bacaCatatan(argv.judul);
    }
});

// Instruksi no.4 letakan disini
// letakan bagian ini pada baris terakhir
yargs.parse();
