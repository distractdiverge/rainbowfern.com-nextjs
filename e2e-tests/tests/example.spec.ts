import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await expect(page).toHaveTitle('Rainbow Fern | Astrid Lapinski | Software & Automation Consultant');
});

test('get started link', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await page.getByRole('link', { name: 'Get Started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});