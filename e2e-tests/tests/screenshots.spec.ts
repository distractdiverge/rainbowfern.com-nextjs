import { expect, test } from '@playwright/test';

const SCREENSHOT_PATH = './screenshots';

test.describe('screenshots when directly navigating to the page', () => {

    test('homepage screenshot', async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/homepage.png`, fullPage: true })).toMatchSnapshot();
    });
    
    test('projects screenshot direct', async ({ page }) => {
        await page.goto('/projects', { waitUntil: 'networkidle' });
        
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/projects.png`, fullPage: true })).toMatchSnapshot();
    });
    
    test('experience screenshot', async ({ page }) => {
        await page.goto('/experience', { waitUntil: 'networkidle' });
        
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/experience.png`, fullPage: true })).toMatchSnapshot();
    });
    
    test('education screenshot', async ({ page }) => {
        await page.goto('/education', { waitUntil: 'networkidle' });
        
        await page.waitForTimeout(1000); // Explicit wait for the page's background image to load

        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/education.png`, fullPage: true })).toMatchSnapshot();
    });


    test('contact screenshot', async ({ page }) => {
        await page.goto('/contact', { waitUntil: 'networkidle' });
        
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/contact.png`, fullPage: true })).toMatchSnapshot();
    });

});

test.describe('screenshots when navigating via clicks to the page', () => {

    test('projects screenshot navigated', async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
        await page.getByRole('link', { name: 'Projects', exact: true }).click();
        await page.waitForURL(/\/projects/, { waitUntil: 'networkidle' });
    
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/projects.png`, fullPage: true })).toMatchSnapshot();
    });
    
    test('experience screenshot navigated', async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
        await page.getByRole('link', { name: 'Experience'}).click();
        await page.waitForURL(/\/experience/, { waitUntil: 'networkidle' });
    
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/experience.png`, fullPage: true })).toMatchSnapshot();
    });

    test('education screenshot navigated', async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
        await page.getByRole('link', { name: 'Education'}).click();
        await page.waitForURL(/\/education/, { waitUntil: 'networkidle' });
    
        await page.waitForTimeout(1000); // Explicit wait for the page's background image to load

        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/education.png`, fullPage: true })).toMatchSnapshot();
    });

    test('contact screenshot navigated', async ({ page }) => {
        await page.goto('/', { waitUntil: 'networkidle' });
        await page.getByRole('link', { name: 'Contact', exact: true}).click();
        await page.waitForURL(/\/contact/, { waitUntil: 'networkidle' });
        await page.waitForSelector('.items-start img', { state: 'visible' });
        
        expect(await page.screenshot({ path: `${SCREENSHOT_PATH}/contact.png`, fullPage: true })).toMatchSnapshot();
    });

});

