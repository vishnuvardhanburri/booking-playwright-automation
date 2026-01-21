import { test, expect } from '@playwright/test';

test('LIVE BOOKING DEMO – hotel search automation', async ({ page }) => {
  // 1. Open booking website
  await page.goto('https://www.phptravels.net/');

  // 2. Wait so you can SEE the page
  await page.waitForTimeout(3000);

  // 3. Click Hotels tab
  await page.getByRole('tab', { name: /hotels/i }).click();

  // 4. Open check-in calendar
  await page.locator('#checkin').click();
  await page.locator('.day:not(.disabled)').first().click();

  // 5. Open check-out calendar
  await page.locator('#checkout').click();
  await page.locator('.day:not(.disabled)').nth(3).click();

  // 6. Click Search
  await page.getByRole('button', { name: /search/i }).click();

  // 7. Keep browser open so you can SEE automation
  await page.waitForTimeout(20000);
});
