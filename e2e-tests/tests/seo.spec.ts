import { expect, test } from '@playwright/test';
import { seoPages } from './seo.config';

const WAIT_UNTIL = 'networkidle' as const;
const BASE_URL = 'https://www.rainbowfern.com';

seoPages.forEach((pageConfig) => {
    test.describe(`${pageConfig.name} page`, () => {
        test.beforeEach(async ({ page }) => {
            await page.goto(`${BASE_URL}${pageConfig.path}`, { waitUntil: WAIT_UNTIL });
        });

        test('matches expected title and description metadata', async ({ page }) => {
            await expect(page).toHaveTitle(pageConfig.title);

            const descriptionMeta = page.locator('meta[name="description"]');
            await expect(descriptionMeta, `Missing meta description on ${pageConfig.path}`).toHaveAttribute(
                'content',
                pageConfig.description,
            );
        });

        test('renders the expected heading hierarchy', async ({ page }) => {
            for (const heading of pageConfig.headings) {
                const locator = page.getByRole('heading', {
                    level: heading.level,
                    name: heading.name,
                    exact: true,
                });
                await expect(locator, `Missing heading level ${heading.level} with text "${heading.name}"`).toBeVisible();
            }
        });

        if (pageConfig.links?.length) {
            test('exposes required high-value links', async ({ page }) => {
                for (const link of pageConfig.links ?? []) {
                    const locator = page.getByRole('link', {
                        name: link.name,
                        exact: link.exact ?? false,
                    });
                    await expect(locator, `Missing link with accessible name "${link.name}"`).toBeVisible();
                }
            });

            test('exposes required high-value buttons', async ({ page }) => {
                for (const button of pageConfig.buttons ?? []) {
                    const locator = page.getByRole('button', {
                        name: button.name,
                        exact: button.exact ?? false,
                    });
                    await expect(locator, `Missing link with accessible name "${button.name}"`).toBeVisible();
                }
            });
        }
    });
});
