import { test, expect } from "@playwright/test";
import { login } from "../utils/helper";

test('add to cart 1 product success', async ({ page }) => {
    await login(page);
    await page.click('#add-to-cart-sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.click('#shopping_cart_container');
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');

})
test('add to cart 2 product success', async ({ page }) => {
    await login(page);
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    expect(page.locator('.shopping_cart_badge')).toHaveText('2');
    await page.click('#shopping_cart_container');
    await expect(page.locator('.cart_item')).toHaveCount(2);
})

// test.only('add to cart multiple products', async ({ page }) => {
//     await login(page);
//     const addToCartButtons = page.locator('.btn_inventory');
//     const numberOfProductsToAdd = 2;
//     for (let i = 0; i < numberOfProductsToAdd; i++) {
//         await addToCartButtons.nth(i).click();
//     }
//     await expect(page.locator('.shopping_cart_badge')).toHaveText(String(numberOfProductsToAdd));
// })
test.only('add and remove product', async ({ page }) => {
    await login(page);
    await page.click('#add-to-cart-sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await page.click('#remove-sauce-labs-backpack')
    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
})