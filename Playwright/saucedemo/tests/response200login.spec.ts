import { test, expect, request } from '@playwright/test'

test('Login with response 200', async () => {
    const context = await request.newContext();

    const response = await context.get('https://thinking-tester-contact-list.herokuapp.com/');

    // Kiểm tra status code
    expect(response.status()).toBe(200);

});
