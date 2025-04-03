import { test, expect } from '@playwright/test';
import { login } from '../utils/helper';

test.describe('TS Logout', () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
        await page.click('#react-burger-menu-btn');
        await page.click('#logout_sidebar_link');
    })
    test('Logout success happycase', async ({ page }) => {
        await expect(page.locator('#login-button')).toHaveText('Login');
    })
    test('Logout success unhappy', async ({ page }) => {
        await page.goBack();
        await expect(page.locator('[data-test="error"]')).toHaveText("Epic sadface: You can only access '/inventory.html' when you are logged in.");
    })
    test.afterEach(async ({ page }) => {
        await page.close();
    })
})

