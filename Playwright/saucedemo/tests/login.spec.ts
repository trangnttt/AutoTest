import { test, expect } from '@playwright/test';
test.describe('TS Login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    })
    test('Login success', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator('.title')).toHaveText('Products');
    })
    test('Login fail usename', async ({ page }) => {
        await page.fill('#user-name', 'invalid');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container.error')).toContainText('Epic sadface: Username and password do not match any user in this service');
    })
    test('Login fail password', async ({ page }) => {
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'invalid');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Username and password do not match any user in this service');
    })
    test('Login lock usename', async ({ page }) => {
        await page.fill('#user-name', 'locked_out_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    })
    test('Login null usename,pass', async ({ page }) => {
        await page.click('#login-button');
        await expect(page.locator('.error-message-container.error')).toHaveText('Epic sadface: Username is required');
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    })
})
