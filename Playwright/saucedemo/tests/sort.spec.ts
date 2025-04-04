import { test, expect } from '@playwright/test'
import { login } from '../utils/helper'
test.describe('TS sort', () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
    });
    test('Sort name A to Z', async ({ page }) => {
        await page.selectOption('.product_sort_container', 'az');

        //get all list
        const productNames = await page.locator('#inventory_container').allTextContents();
        //sort A to Z 
        const sortedName = [...productNames].sort();
        expect(productNames).toEqual(sortedName);

    })
    test('sort Z to A', async ({ page }) => {
        await page.selectOption('.product_sort_container', 'za');
        //get all list
        const productNames = await page.locator('#inventory_container').allTextContents();
        //sort Z to A
        const sortedName = [...productNames].sort().reverse();
        expect(productNames).toEqual(sortedName);

    })

    test('sort price low to hight', async ({ page }) => {
        await page.selectOption('.product_sort_container', 'lohi');
        //get all list price product 
        const productPricesText = await page.locator('.inventory_item_price').allTextContents();
        //convert String to float
        const productPrices = productPricesText.map(price => parseFloat(price.replace('$', '')));
        //sort price low to hight 
        const sortPrices = [...productPrices].sort((a, b) => a - b);
        expect(productPrices).toEqual(sortPrices);

    })

    test('sort price hight to low', async ({ page }) => {
        await page.selectOption('.product_sort_container', 'hilo');
        //get all list price product 
        const productPricesText = await page.locator('.inventory_item_price').allTextContents();
        //convert String to float
        const productPrices = productPricesText.map(price => parseFloat(price.replace('$', '')));
        //sort price low to hight 
        const sortPrices = [...productPrices].sort((a, b) => a - b).reverse();
        expect(productPrices).toEqual(sortPrices);

    })
    test.afterEach(async ({ page }) => {
        page.close();
    })

})
