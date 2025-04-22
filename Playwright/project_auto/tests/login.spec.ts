// https://practice.automationtesting.in/
// autoAa@123

import { test, expect } from '@playwright/test';
test('login success', async ({ page }) => {
    await page.goto('https://practice.automationtesting.in/');
    await page.click('//a[text()="My Account"]');
    await page.fill('#username', 'huynhthi0503@gmail.com');
    await page.fill('#password', 'autoAa@123');
    await page.click('//input[@name="login"]');
    await expect(page.locator('//a[text()="Logout"]')).toHaveText('Logout');

})