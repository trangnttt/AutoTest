import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://vuahanghieu.com/');
  await page.getByText('×');
  await page.click('//span[text()= "Tài khoản"]');
  await page.click('//a[text()= " Đăng nhập "]');
  await page.locator('//input[@formcontrolname="email"]').fill('huynhthi0503@gmail.com');
  await page.locator('//input[@formcontrolname="password"]').fill('123456789');

  await page.click('//button[text()="Đăng nhập"]');
});