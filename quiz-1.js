class Karyawan {
    constructor(nama, gaji) {
        if (typeof nama !== "string" || typeof gaji !== "number") {
            throw new Error("Nama harus string dan gaji harus angka");
        }
        this.nama = nama;
        this.gaji = gaji;
    }

    hitungBonus() {
        throw new Error("Subclass harus mengimplementasikan metode ini");
    }
}

class KaryawanTetap extends Karyawan {
    hitungBonus() {
        return 0.10 * this.gaji;
    }
}

class KaryawanKontrak extends Karyawan {
    hitungBonus() {
        return 0.05 * this.gaji;
    }
}

const daftarKaryawan = [
    new KaryawanTetap("Budi", 8000000),
    new KaryawanKontrak("Sita", 6000000)
];

const totalBonus = daftarKaryawan.reduce((total, karyawan) => {
    const bonus = karyawan.hitungBonus();
    console.log(`Bonus ${karyawan.nama}: Rp ${bonus.toLocaleString('id-ID')}`);
    return total + bonus;
}, 0);

console.log(`\nTotal bonus semua karyawan: Rp ${totalBonus.toLocaleString('id-ID')}`);
