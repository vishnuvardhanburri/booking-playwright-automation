import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { BookingSummaryPage } from '../pages/BookingSummaryPage';
import testData from '../utils/testData.json';

/**
 * Extended test context with custom fixtures
 */
export interface TestFixtures {
  homePage: HomePage;
  checkoutPage: CheckoutPage;
  bookingSummaryPage: BookingSummaryPage;
  testData: typeof testData;
}

/**
 * Custom fixtures for test automation
 */
export const test = base.extend<TestFixtures>({
  /**
   * Home page fixture - provides a configured HomePage instance
   */
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  /**
   * Checkout page fixture - provides a configured CheckoutPage instance
   */
  checkoutPage: async ({ page }, use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
  },
  /**
   * Booking summary page fixture - provides a configured BookingSummaryPage instance
   */
  bookingSummaryPage: async ({ page }, use) => {
    const bookingSummaryPage = new BookingSummaryPage(page);
    await use(bookingSummaryPage);
  },
  /**
   * Test data fixture - provides access to test data
   */
  testData: async ({}, use) => {
    await use(testData);
  },
});

export { expect } from '@playwright/test';
