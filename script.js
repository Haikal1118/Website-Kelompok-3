function analisisMulti() {
    const hasil = document.getElementById("hasil");
    const checkboxes = document.querySelectorAll('.checkbox-group input:checked');

    if (checkboxes.length === 0) {
        hasil.classList.remove("hidden");
        hasil.innerHTML = "⚠️ Pilih minimal satu ciri serangga.";
        return;
    }

    const ciriDipilih = Array.from(checkboxes).map(cb => cb.value);

    const serangga = {
        "Kupu-kupu": ["sayap transparan", "warna cerah", "berbadan beruas"],
        "Capung": ["sayap transparan", "aktif di siang hari", "berbadan beruas"],
        "Semut": ["memiliki antena", "berbadan beruas", "berjalan lambat"],
        "Kumbang": ["memiliki antena", "berbadan beruas", "mengeluarkan bau"],
        "Nyamuk": ["mendengung", "gigitan gatal", "aktif di malam hari"],
        "Belalang": ["melompat", "berbadan beruas", "warna cerah"],
        "Lalat": ["mendengung", "sayap transparan"],
        "Kecoa": ["jejak cair", "berjalan lambat", "memiliki antena"]
    };

    let skor = {};

    for (let jenis in serangga) {
        let poin = 0;
        ciriDipilih.forEach(c => {
            if (serangga[jenis].includes(c)) poin++;
        });
        skor[jenis] = poin;
    }

    const kandidat = Object.entries(skor).sort((a, b) => b[1] - a[1])[0];
    const [namaSerangga, nilai] = kandidat;

    const maxCiri = serangga[namaSerangga].length;
    const persen = Math.round((nilai / maxCiri) * 100);

    hasil.classList.remove("hidden");
    hasil.innerHTML = `
        <b>Serangga paling mungkin:</b><br>
        <h2>🪲 ${namaSerangga}</h2>
        <p><b>Akurasi:</b> ${persen}%</p>
        <p><b>Ciri yang cocok:</b> ${nilai} dari ${maxCiri}</p>
        <hr>
        <p><b>Ciri yang kamu pilih:</b><br> ${ciriDipilih.join(", ")}</p>
    `;

    // ================================
    //   DETAIL KLASIFIKASI ILMIAH
    // ================================
    const detail = {
        "Kupu-kupu": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Lepidoptera",
            famili: "Nymphalidae",
            genus: "Danaus",
            spesies: "Danaus plexippus",
            status: "Polinator",
            gejala: "Muncul di sekitar bunga, aktif di siang hari",
            tips: "Pelihara bunga dan hindari penggunaan pestisida."
        },
        "Capung": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Odonata",
            famili: "Aeshnidae",
            genus: "Aeshna",
            spesies: "Aeshna juncea",
            status: "Pemangsa",
            gejala: "Sering berada di dekat air, terbang cepat",
            tips: "Sediakan area berair / kolam kecil."
        },
        "Semut": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Hymenoptera",
            famili: "Formicidae",
            genus: "Camponotus",
            spesies: "Camponotus pennsylvanicus",
            status: "Pemakan segala",
            gejala: "Muncul berkelompok, meninggalkan jejak",
            tips: "Bersihkan gula/makanan manis, gunakan kapur anti semut."
        },
        "Kumbang": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Coleoptera",
            famili: "Scarabaeidae",
            genus: "Scarabaeus",
            spesies: "Scarabaeus sacer",
            status: "Pengurai",
            gejala: "Sering di tanah lembap, berbau",
            tips: "Jaga kebersihan area dan kurangi sampah organik."
        },
        "Nyamuk": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Diptera",
            famili: "Culicidae",
            genus: "Aedes",
            spesies: "Aedes aegypti",
            status: "Penghisap darah",
            gejala: "Gigitan gatal, aktif malam",
            tips: "Hindari genangan air, gunakan lotion anti nyamuk."
        },
        "Belalang": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Orthoptera",
            famili: "Acrididae",
            genus: "Locusta",
            spesies: "Locusta migratoria",
            status: "Herbivora",
            gejala: "Melompat, makan daun",
            tips: "Gunakan perangkap alami atau tanaman pengusir serangga."
        },
        "Lalat": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Diptera",
            famili: "Muscidae",
            genus: "Musca",
            spesies: "Musca domestica",
            status: "Pembawa penyakit",
            gejala: "Mendengung, tertarik makanan",
            tips: "Jaga kebersihan dapur dan tutup makanan."
        },
        "Kecoa": {
            kingdom: "Animalia",
            phylum: "Arthropoda",
            kelas: "Insecta",
            ordo: "Blattodea",
            famili: "Blattidae",
            genus: "Periplaneta",
            spesies: "Periplaneta americana",
            status: "Pembawa bakteri",
            gejala: "Menjilat jejak cair, suka tempat lembap",
            tips: "Gunakan perangkap gel dan jaga kebersihan tempat gelap."
        }
    };

    if (detail[namaSerangga]) {
        const d = detail[namaSerangga];

        hasil.innerHTML += `
            <hr>
            <h3>🧬 Detail Klasifikasi Ilmiah</h3>

            <div class="klasifikasi-box">
                <p><b>Kingdom:</b> ${d.kingdom}</p>
                <p><b>Phylum:</b> ${d.phylum}</p>
                <p><b>Kelas:</b> ${d.kelas}</p>
                <p><b>Ordo:</b> ${d.ordo}</p>
                <p><b>Famili:</b> ${d.famili}</p>
                <p><b>Genus:</b> ${d.genus}</p>
                <p><b>Spesies:</b> <i>${d.spesies}</i></p>
                <p><b>Status:</b> ${d.status}</p>
                <br>
                <p><b>Gejala / Tanda:</b> ${d.gejala}</p>
                <p><b>Tips Perawatan / Pengendalian:</b> ${d.tips}</p>
            </div>
        `;
    }
}
