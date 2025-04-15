import { test, expect } from "@playwright/test";
import { login } from "../utils/helper";

test('check product detail', async ({ page }) => {
    await login(page);
    const expect_title = 'Sauce Labs Bolt T-Shirt';
    const expect_desc = 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.'
    const expect_price = '$15.99';
    await page.click('//div[text()= "Sauce Labs Bolt T-Shirt"]');
    await expect(page).toHaveURL(/.*inventory-item.html*./)
    await expect(page.locator('.inventory_details_name')).toHaveText(expect_title);
    await expect(page.locator('.inventory_details_desc')).toHaveText(expect_desc);
    await expect(page.locator('.inventory_details_price')).toHaveText(expect_price);
    await expect(page.locator('.inventory_details_img')).toBeVisible({ timeout: 5000 });
    const namebutton = page.getByRole('button', { name: /Add to cart|Remove/ });
    await expect(namebutton).toBeVisible({ timeout: 5000 });
})

// //Chat GPT
// /import { test, expect } from "@playwright/test";
// import { login } from "../utils/helper";

// test('check product detail', async ({ page }) => {
//     await login(page);
//     const expect_title = 'Sauce Labs Bolt T-Shirt';
//     const expect_desc = 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.'
//     const expect_price = '$15.99';
//     await page.getByText(expect_title).click();
//     await expect(page).toHaveURL(/.*inventory-item.html*./)
//     await expect(page.locator('.inventory_details_name')).toHaveText(expect_title);
//     await expect(page.locator('.inventory_details_desc')).toHaveText(expect_desc);
//     await expect(page.locator('.inventory_details_price')).toHaveText(expect_price);
//     await expect(page.locator('.inventory_details_img')).toBeVisible();
//     const namebutton = page.getByRole('button', { name: /Add to Cart | Remove/ });
//     await expect(namebutton).toBeVisible();
// })
