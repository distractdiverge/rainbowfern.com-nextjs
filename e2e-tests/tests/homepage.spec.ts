import { test, expect } from '@playwright/test';

const BASE_URL = 'https://www.rainbowfern.com';

test('has title', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await expect(page).toHaveTitle('Rainbow Fern | Astrid Lapinski | Software & Automation Consultant');
});

test('projects link', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'See My Projects' }).click();

    await expect(page).toHaveURL(/\/projects/);
});

test('contact me link', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Contact Me' }).click();

    await expect(page).toHaveURL(/\/contact/);
});