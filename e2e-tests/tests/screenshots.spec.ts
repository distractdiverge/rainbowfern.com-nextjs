import { expect, test } from '@playwright/test';

const SCREENSHOT_PATH = './screenshots';
const BASE_URL = 'https://www.rainbowfern.com';

test('homepage screenshot', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/homepage.png`, fullPage: true })).toMatchSnapshot();
});

test('projects screenshot direct', async ({ page }) => {
    await page.goto(`${BASE_URL}/projects`, { waitUntil: 'networkidle' });
    
    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/projects.png`, fullPage: true })).toMatchSnapshot();
});

test('projects screenshot navigated', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Projects', exact: true }).click();
    await page.waitForURL(/\/projects/, { waitUntil: 'networkidle' });

    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/projects.png`, fullPage: true })).toMatchSnapshot();
});

test('experience screenshot', async ({ page }) => {
    await page.goto(`${BASE_URL}/experience`, { waitUntil: 'networkidle' });
    
    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/experience.png`, fullPage: true })).toMatchSnapshot();
});

test('experience screenshot navigated', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Experience'}).click();
    await page.waitForURL(/\/experience/, { waitUntil: 'networkidle' });

    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/experience.png`, fullPage: true })).toMatchSnapshot();
});

test('education screenshot', async ({ page }) => {
    await page.goto(`${BASE_URL}/education`, { waitUntil: 'networkidle' });
    
    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/education.png`, fullPage: true })).toMatchSnapshot();
});

test('education screenshot navigated', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Education'}).click();
    await page.waitForURL(/\/education/, { waitUntil: 'networkidle' });

    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/education.png`, fullPage: true })).toMatchSnapshot();
});

test('contact screenshot', async ({ page }) => {
    await page.goto(`${BASE_URL}/contact`, { waitUntil: 'networkidle' });
    
    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/contact.png`, fullPage: true })).toMatchSnapshot();
});

test('contact screenshot navigated', async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    await page.getByRole('link', { name: 'Contact', exact: true}).click();
    await page.waitForURL(/\/contact/, { waitUntil: 'networkidle' });
    await page.waitForSelector('.items-start img', { state: 'visible' });
    
    expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/contact.png`, fullPage: true })).toMatchSnapshot();
});
