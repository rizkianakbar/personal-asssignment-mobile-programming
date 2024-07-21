# TravelApp

TravelApp adalah aplikasi mobile yang dibuat dengan React Native dan Expo, memungkinkan pengguna untuk menjelajahi destinasi wisata, melihat detail, lokasi di peta, dan melakukan pemesanan.

## Fitur

- Daftar destinasi wisata
- Detail destinasi termasuk deskripsi dan harga
- Tampilan peta untuk setiap destinasi
- Sistem pemesanan sederhana

## Prasyarat

Sebelum Anda memulai, pastikan Anda telah menginstal:

- [Node.js](https://nodejs.org/) (versi 12 atau lebih baru)
- [npm](https://www.npmjs.com/) atau [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Instalasi

1. Clone repositori ini:
   ```
   git clone https://github.com/username/TravelApp.git
   cd TravelApp
   ```

2. Instal dependensi:
   ```
   npm install
   ```
   atau jika Anda menggunakan Yarn:
   ```
   yarn install
   ```

3. Instal dependensi Expo tambahan:
   ```
   expo install react-native-maps react-native-safe-area-context @expo/vector-icons
   ```

## Menjalankan Aplikasi

1. Mulai server pengembangan:
   ```
   expo start
   ```

2. Gunakan aplikasi Expo Go di perangkat mobile Anda untuk memindai kode QR yang muncul di terminal atau di browser.

   Atau, Anda dapat menjalankan aplikasi di simulator dengan menekan:
   - `i` untuk iOS simulator
   - `a` untuk Android emulator

## Struktur Proyek

```
TravelApp/
├── assets/
├── src/
│   ├── screens/
│   │   ├── SplashScreen.tsx
│   │   ├── ListScreen.tsx
│   │   ├── DetailScreen.tsx
│   │   ├── MapScreen.tsx
│   │   └── BookingScreen.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   └── TravelCard.tsx
│   ├── hooks/
│   │   └── useSafeAreaInsets.ts
│   └── types/
│       └── navigation.ts
├── App.tsx
├── app.json
└── package.json
```

## Penggunaan

1. Buka aplikasi untuk melihat Splash Screen.
2. Tekan tombol "Mulai Jelajah" untuk melihat daftar destinasi wisata.
3. Ketuk pada destinasi untuk melihat detail.
4. Di halaman detail, Anda dapat:
   - Melihat deskripsi dan harga
   - Menekan "Lihat Peta" untuk melihat lokasi di peta
   - Menekan "Pesan" untuk melakukan pemesanan
5. Di halaman pemesanan, masukkan tanggal kunjungan dan jumlah pengunjung, lalu tekan "Pesan Sekarang".
