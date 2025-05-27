import { test, expect } from '@playwright/test';
test("API Login fail 401", async ({ request }) => {
    const response = await request.post("https://thinking-tester-contact-list.herokuapp.com/users/login");
    await expect(response.status()).toBe(401);
})
test.only("API login success 200", async ({ request }) => {
    const response = await request.post("https://thinking-tester-contact-list.herokuapp.com/users/login",
        {
            data: {
                email: 'huynhthiqc@gmail.com',
                password: '1234567',
            },
        }

    )
    await expect(response.status()).toBe(200);
})