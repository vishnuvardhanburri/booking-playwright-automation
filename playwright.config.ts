import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  timeout: 60_000,

  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/results.xml' }],
  ],

  use: {
    // 🌐 Base URL (ENV first, fallback for demo)
    baseURL: process.env.BASE_URL || 'https://demo.playwright.dev/todomvc',

    // 🎥 ALWAYS record video locally, retain only on failure in CI
    video: process.env.CI ? 'retain-on-failure' : 'on',

    // 📸 Screenshot on failure
    screenshot: 'only-on-failure',

    // 🧭 Trace only when retrying
    trace: 'on-first-retry',

    actionTimeout: 10_000,
    navigationTimeout: 30_000,

    // 🐢 Slow motion only for local demo visibility
    launchOptions: {
      slowMo: process.env.CI ? 0 : 500,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      },
    },
  ],
});
