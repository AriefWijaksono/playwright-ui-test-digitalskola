module.exports = {
    use: {
        headless: false, // Ubah ke true jika ingin menjalankan tanpa tampilan GUI
        baseURL: 'https://www.saucedemo.com',
        viewport: { width: 1280, height: 720 },
        video: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
};
