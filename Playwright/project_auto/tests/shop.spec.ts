import { test, expect } from '@playwright/test'
test.describe('test suite shop', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://practice.automationtesting.in/');
        await page.click('//a[text()="Shop"]');
    })
    test('1. Home Page with three Sliders only', async ({ page }) => {
        await page.click('//a[text()="Home"]');
        const sliders = await page.locator('.n2-ss-slide-background')
        await expect(sliders).toHaveCount(3);


    })
    test.afterEach(async ({ page }) => {
        await page.close();
    })

})

// 1) Open the browser
// 2) Enter the URL “http://practice.automationtesting.in/”
// 3) Click on Shop Menu
// 4) Now click on Home menu button
// 5) Test whether the Home page has Three Sliders only
// 6) The Home page must contains only three sliders