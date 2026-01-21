import { test, expect } from '@playwright/test';

test('LIVE BOOKING DEMO – hotel search automation', async ({ page }) => {
  // Open booking website
  await page.goto('https://www.phptravels.net/');

  // Click Hotels tab
  await page.getByRole('tab', { name: /hotels/i }).click();

  // Click check-in
  await page.locator('#checkin').click();
  await page.locator('.day:not(.disabled)').first().click();

  // Click check-out
  await page.locator('#checkout').click();
  await page.locator('.day:not(.disabled)').nth(3).click();

  // Click Search
  await page.getByRole('button', { name: /search/i }).click();

  // Verify results page
  await expect(page).toHaveURL(/search/);

  // KEEP BROWSER OPEN so you can SEE it
  await page.waitForTimeout(20000);
});
