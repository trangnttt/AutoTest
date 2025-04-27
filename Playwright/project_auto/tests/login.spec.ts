// https://practice.automationtesting.in/
// autoAa@123

import { test, expect } from '@playwright/test';
test.describe('testsuite login', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.automationtesting.in/');
        await page.click('//a[text()="My Account"]');
    })
    test('1. Log-in with valid username and password.', async ({ page }) => {
        // await page.goto('https://practice.automationtesting.in/');
        // await page.click('//a[text()="My Account"]');
        await page.fill('#username', 'huynhthi0503@gmail.com');
        await page.fill('#password', 'autoAa@123');
        await page.click('//input[@name="login"]');
        await expect(page.locator('//a[text()="Logout"]')).toHaveText('Logout');
    })
    test('2. Log-in with incorrect username and incorrect password.	', async ({ page }) => {
        // await page.goto('https://practice.automationtesting.in/');
        // await page.click('//a[text()="My Account"]');
        await page.fill('#username', 'invalid_username');
        await page.fill('#password', 'invalid_pw');
        await page.click('//input[@name="login"]');
        // await expect(page.locator('.woocommerce-error')).toBeVisible();
        await expect(page.locator('.woocommerce-error')).toContainText("Error: The username invalid_username is not registered on this site. If you are unsure of your username, try your email address instead.")

    })
    test('3. Log-in with correct username and empty password.', async ({ page }) => {
        // await page.goto('https://practice.automationtesting.in/');
        // await page.click('//a[text()="My Account"]');
        await page.fill('#username', 'huynhthi0503@gmail.com');
        // await page.fill('#password', 'autoAa@123');
        await page.click('//input[@name="login"]');
        await expect(page.locator('.woocommerce-error')).toContainText("Error: Password is required.")
    })
    test('4. Log-in with empty username and valid password.', async ({ page }) => {
        // await page.goto('https://practice.automationtesting.in/');
        // await page.click('//a[text()="My Account"]');
        //await page.fill('#username', 'huynhthi0503@gmail.com');
        await page.fill('#password', 'autoAa@123');
        await page.click('//input[@name="login"]');
        await expect(page.locator('.woocommerce-error')).toContainText("Error: Username is required.")
    })
    test('5. Log-in with empty username and empty password.', async ({ page }) => {
        // await page.goto('https://practice.automationtesting.in/');
        // await page.click('//a[text()="My Account"]');
        // await page.fill('#username', 'huynhthi0503@gmail.com');
        // await page.fill('#password', 'autoAa@123');
        await page.click('//input[@name="login"]');
        await expect(page.locator('.woocommerce-error')).toContainText("Error: Username is required.")
    })
    test.only('6. Log-in -Password should be masked', async ({ page }) => {
        // await page.goto('https://practice.automationtesting.in/');
        // await page.click('//a[text()="My Account"]');
        // await page.fill('#username', 'huynhthi0503@gmail.com');
        const passwordField = page.locator('#password');
        const inputType = await passwordField.getAttribute('type');
        expect(inputType).toBe('password'); // ✅ Kiểm tra đã mask
    })
    // test('7. Login-Handles case sensitive', async ({ page }) => {
    //     await page.goto('https://practice.automationtesting.in/');
    //     await page.click('//a[text()="My Account"]');
    //     await page.fill('#username', 'huynhthi0503@gmail.com');
    //     await page.fill('#password', 'autoAa@123');
    //     await page.click('//input[@name="login"]');
    //     await expect(page.locator('//a[text()="Logout"]')).toHaveText('Logout');
    // })
    // test('8. Login-Authentication', async ({ page }) => {
    //     await page.goto('https://practice.automationtesting.in/');
    //     await page.click('//a[text()="My Account"]');
    //     await page.fill('#username', 'huynhthi0503@gmail.com');
    //     await page.fill('#password', 'autoAa@123');
    //     await page.click('//input[@name="login"]');
    //     await expect(page.locator('//a[text()="Logout"]')).toHaveText('Logout');
    // })
    test.afterEach(async ({ page }) => {
        await page.close();
    })

})
