const dataPengendalian = {
    "belalang": { mekanis: "Jaring dan tangkap manual.", biologis: "Burung & parasitoid.", kimiawi: "Deltametrin.", organik: "Neem oil." },
    "kutu daun": { mekanis: "Semprot air.", biologis: "Kepik predator.", kimiawi: "Abamektin.", organik: "Sabun insektisida." },
    "ulat grayak": { mekanis: "Sanitasi lahan.", biologis: "BT & Trichogramma.", kimiawi: "Emamektin.", organik: "Daun sirsak." },
    "wereng": { mekanis: "Pengeringan lahan.", biologis: "Laba-laba.", kimiawi: "Buprofezin.", organik: "Serai." },
    "penggerek batang": { mekanis: "Potong batang.", biologis: "Trichogramma.", kimiawi: "Klorpirifos.", organik: "Tembakau." },
    "tungau": { mekanis: "Cuci daun.", biologis: "Stethorus.", kimiawi: "Abamektin.", organik: "Minyak nimba." },
    "lalat buah": { mekanis: "Perangkap.", biologis: "Fopius.", kimiawi: "Deltametrin.", organik: "Fermentasi gula." },
    "hama putih": { mekanis: "Bersihkan daun.", biologis: "Kumbang predator.", kimiawi: "Imidakloprid.", organik: "Sabun kalium." },
    "thrips": { mekanis: "Perangkap biru.", biologis: "Amblyseius.", kimiawi: "Spinosad.", organik: "Neem oil." },
    "kepik hijau": { mekanis: "Tangkap manual.", biologis: "Burung.", kimiawi: "Abamektin.", organik: "Ekstrak serai." },
    "rayap": { mekanis: "Buang kayu lembab.", biologis: "Nematoda.", kimiawi: "Termitisida.", organik: "Garam." },
    "kecoa": { mekanis: "Perangkap lem.", biologis: "Jangkrik predator.", kimiawi: "Boric acid.", organik: "Daun salam." },
    "nyamuk": { mekanis: "Menguras air.", biologis: "Ikan cupang.", kimiawi: "Larvasida BTI.", organik: "Serai wangi." },
    "ulat jantung": { mekanis: "Potong pucuk.", biologis: "Trichogramma.", kimiawi: "Metomil.", organik: "Tembakau." },
    "kepinding tanah": { mekanis: "Bersihkan gulma.", biologis: "Ayam tanah.", kimiawi: "Fipronil.", organik: "Bawang putih." },
    "kumbang daun": { mekanis: "Tangkap manual.", biologis: "Predator kumbang.", kimiawi: "Karbaryl.", organik: "Neem oil." },
    "ulat kubis": { mekanis: "Ambil ulat.", biologis: "BT.", kimiawi: "Spinetoram.", organik: "Pepaya." },
    "kumbang tanduk": { mekanis: "Kumpulkan larva.", biologis: "Virus Oryctes.", kimiawi: "Klorpirifos.", organik: "Tembakau." },
    "semut merah": { mekanis: "Lem penghalang.", biologis: "Nematoda.", kimiawi: "Fipronil.", organik: "Cuka." },
    "orong-orong": { mekanis: "Perangkap air.", biologis: "Ayam tanah.", kimiawi: "Fipronil.", organik: "Serai wangi." }
};

// mengisi daftar serangga
window.onload = () => {
    const list = document.getElementById("listSerangga");
    Object.keys(dataPengendalian).forEach(s => {
        const li = document.createElement("li");
        li.textContent = s;
        list.appendChild(li);
    });
};

function cariSerangga() {
    const input = document.getElementById("inputSerangga").value.trim().toLowerCase();
    const hasilBox = document.getElementById("hasil");

    if (!input) {
        hasilBox.innerHTML = "<p>❗ Masukkan nama serangga terlebih dahulu.</p>";
        return;
    }

    if (dataPengendalian[input]) {
        const s = dataPengendalian[input];
        hasilBox.innerHTML = `
            <h2>${input.charAt(0).toUpperCase() + input.slice(1)}</h2>
            <p><strong>Mekanis:</strong> ${s.mekanis}</p>
            <p><strong>Biologis:</strong> ${s.biologis}</p>
            <p><strong>Kimiawi:</strong> ${s.kimiawi}</p>
            <p><strong>Organik:</strong> ${s.organik}</p>
        `;
    } else {
        hasilBox.innerHTML = `<p>❓ Data untuk serangga <strong>${input}</strong> belum tersedia.</p>`;
    }
}