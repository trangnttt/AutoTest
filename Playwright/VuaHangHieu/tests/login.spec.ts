import { test, expect } from '@playwright/test';

test('login success', async ({ page }) => {
    await page.goto('https://vuahanghieu.com/');

    // Xóa popup
    await page.evaluate(() => {
        document.querySelector('.VHHPopupBackground')?.remove();
        document.querySelector('.wrapper-box')?.remove();
    });

    // Mở form đăng nhập
    await page.click('//span[text()= "Tài khoản"]');
    await page.click('//a[text()= " Đăng nhập "]');
    page.setDefaultTimeout(10000);
    // Chờ input xuất hiện và fill
    await page.locator('//input[@formcontrolname="email"]').fill('huynhthi0503@gmail.com');
    await page.locator('//input[@formcontrolname="password"]').fill('123456789');

    await page.click('//button[text()="Đăng nhập"]');

    // Kiểm tra kết quả
    await expect(page.locator('//span[text()="Xin chào: Bùi Thị Huỳnh Thi"]')).toHaveText('Xin chào: Bùi Thị Huỳnh Thi');

});
