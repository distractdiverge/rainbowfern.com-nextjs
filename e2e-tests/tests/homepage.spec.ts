import { test, expect } from '@playwright/test';

test('projects link', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'See My Projects' }).click();

    await expect(page).toHaveURL(/\/projects/);
});

test('contact me link', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Contact Me' }).click();

    await expect(page).toHaveURL(/\/contact/);
});