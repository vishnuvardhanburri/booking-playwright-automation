import { Page, Locator } from '@playwright/test';

/**
 * Booking Summary page object model for the booking system
 */
export class BookingSummaryPage {
  readonly page: Page;
  readonly bookingSuccessfulText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookingSuccessfulText = page.getByText('Booking Successful', { exact: true });
  }

  /**
   * Get the booking successful text locator
   */
  getBookingSuccessfulText(): Locator {
    return this.bookingSuccessfulText;
  }
}
