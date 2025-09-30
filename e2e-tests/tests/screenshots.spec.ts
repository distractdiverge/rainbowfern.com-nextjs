import { expect, test } from '@playwright/test';

test('homepage screenshot', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await page.screenshot({ path: './screenshots/homepage.png' });
});

test('projects screenshot direct', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com/projects');
    await page.screenshot({ path: './screenshots/projects.png' });
});

test('projects screenshot navigated', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await page.getByRole('link', { name: 'Projects'}).click();
    await page.waitForURL('https://www.rainbowfern.com/projects');
    await page.screenshot({ path: './screenshots/projects.png' });
});

test('experience screenshot', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com/experience');
    await page.screenshot({ path: './screenshots/experience.png' });
});

test('experience screenshot navigated', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await page.getByRole('link', { name: 'Exoerience'}).click();
    await page.waitForURL('https://www.rainbowfern.com/experience');
    await page.screenshot({ path: './screenshots/experience.png' });
});

test('education screenshot', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com/education');
    await page.screenshot({ path: './screenshots/education.png' });
});

test('education screenshot navigated', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await page.getByRole('link', { name: 'Education'}).click();
    await page.waitForURL('https://www.rainbowfern.com/education');
    await page.screenshot({ path: './screenshots/education.png' });
});

test('contact screenshot', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com/contact');
    await page.screenshot({ path: './screenshots/contact.png' });
});

test('contact screenshot navigated', async ({ page }) => {
    await page.goto('https://www.rainbowfern.com');
    await page.getByRole('link', { name: 'Contact'}).click();
    await page.waitForURL('https://www.rainbowfern.com/contact');
    await page.screenshot({ path: './screenshots/contact.png' });
});
