import { test, expect } from '@playwright/test'
test('check error 404', async ({ page }) => {
    const response = await page.goto('https://www.saucedemo.com/notfound');
    expect(response).not.toBeNull(); // đảm bảo response không null
    expect(response?.status()).toBe(404); // check status trả về 404 
})