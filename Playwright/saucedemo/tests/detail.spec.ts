import { test, expect } from "@playwright/test";
import { login } from "../utils/helper";

test('check product detail', async ({ page }) => {
    await login(page);
    const expect_title = 'Sauce Labs Bolt T-Shirt';
    const expect_desc = 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.'
    const expect_price = '$15.99';
    await page.click('//div[text() ="Sauce Labs Bolt T-Shirt"]')
    await expect(page.locator('.inventory_details_name')).toHaveText(expect_title);
    await expect(page.locator('.inventory_details_desc')).toHaveText(expect_desc);
    await expect(page.locator('.inventory_details_price')).toHaveText(expect_price);
})

//Chat GPT
// test('Check product detail - Sauce Labs Bolt T-Shirt', async ({ page }) => {
//     await login(page);

//     const productName = 'Sauce Labs Bolt T-Shirt';
//     const expectedDesc = 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.';
//     const expectedPrice = '$15.99';

//     await page.getByText(productName).click();

//     await expect(page).toHaveURL(/.*inventory-item.html.*/);
//     await expect(page.locator('.inventory_details_name')).toHaveText(productName);
//     await expect(page.locator('.inventory_details_desc')).toHaveText(expectedDesc);
//     await expect(page.locator('.inventory_details_price')).toHaveText(expectedPrice);
//     await expect(page.locator('.inventory_details_img')).toBeVisible();
//     await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
// });
