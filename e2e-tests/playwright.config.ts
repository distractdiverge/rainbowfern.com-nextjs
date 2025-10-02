import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI, // only fail if CI
    retries: process.env.CI ? 2 : 0, // only retry if run by CI
    workers: process.env.CI ? 1 : undefined, // Opt out of parallelization on CI
    reporter: 'html',
    use: {
        // baseURL: 'https://www.rainbowfern.com', // temp for now; TODO: Remove once tests exist
        baseURL: 'http://localhost:3000', // temp for now; TODO: Remove once tests exist
        trace: 'on-first-retry',
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] },
        },
        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] },
        },

        {
            name: 'Mobile Safari',
            use: { ...devices['iPhone 12'] },
        },
    ],

    /* Run your local dev server before starting the tests */
    webServer: {
         command: 'npm run dev',
         url: 'http://localhost:3000',
         reuseExistingServer: !process.env.CI,
    },
});
