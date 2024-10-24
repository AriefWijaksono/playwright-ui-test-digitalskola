const { test, expect } = require('@playwright/test');
const LoginPage = require('./login.page');
const DashboardPage = require('./dashboard.page');
const CartPage = require('./cart.page');

test('User success login and add item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const cartPage = new CartPage(page);

    // Buka halaman login
    await page.goto('https://www.saucedemo.com/');

    // Login dengan user yang valid
    await loginPage.login('standard_user', 'secret_sauce');

    // Validasi user berhasil masuk ke dashboard
    const dashboardVisible = await dashboardPage.isDashboardVisible();
    expect(dashboardVisible).toBeTruthy();

    // Tambahkan item ke keranjang
    await cartPage.addItemToCart('Sauce Labs Backpack');

    // Validasi item berhasil ditambahkan ke keranjang
    const itemInCart = await cartPage.isItemInCart('Sauce Labs Backpack');
    expect(itemInCart).toBeTruthy();
});
