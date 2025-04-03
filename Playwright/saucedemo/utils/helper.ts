import { Page } from '@playwright/test';
import * as dotenv from 'dotenv';

// Load biến môi trường từ file .env
dotenv.config();

export async function login(page: Page) {
    const baseURL = process.env.BASEURL || '';
    const username = process.env.USERNAME || '';
    const password = process.env.PASSWORD || '';
    await page.goto(baseURL);
    if (username) await page.fill('#user-name', username);
    if (password) await page.fill('#password', password);
    await page.click('#login-button');
}
