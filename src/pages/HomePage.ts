import { Page, Locator } from '@playwright/test';
import { DateGenerator } from '../utils/DateGenerator';

/**
 * Home page object model for the booking system
 */
export class HomePage {
  readonly page: Page;
  readonly calendarIcon: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.calendarIcon = page.getByTestId('CalendarMonthOutlinedIcon');
    this.searchButton = page.getByTestId('search');
  }

  /**
   * Navigate to the home page
   */
  async navigateToHomePage(): Promise<void> {
    await this.page.goto('');
    await this.page.waitForSelector('text=Book your accommodation');
  }

  /**
   * Click on the calendar icon
   */
  async clickCalendarIcon(): Promise<void> {
    await this.calendarIcon.click();
  }

  /**
   * Select a future date (next month) for check-in
   */
  async selectFutureCheckInDate(): Promise<void> {
    // Wait for calendar to be visible
    await this.page.waitForSelector('.mbsc-datepicker', { timeout: 10000 });
    
    // Get next month's date label using DateGenerator
    const nextMonthLabel = DateGenerator.getNextMonthCheckInAriaLabel();
    
    // Click on next month's date using dynamic aria-label
    await this.page.locator(`[aria-label*="${nextMonthLabel}"]`).click();
  }

  /**
   * Select check-out date (7 days after check-in)
   */
  async selectCheckOutDate(): Promise<void> {
    // Get check-out date label using DateGenerator
    const checkOutLabel = DateGenerator.getCheckOutAriaLabel();
    
    // Click on the check-out date using dynamic aria-label - select first match
    await this.page.locator(`[aria-label*="${checkOutLabel}"]`).first().click();
  }

  /**
   * Click the search button
   */
  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  /**
   * Complete date selection flow
   */
  async selectBookingDates(): Promise<void> {
    await this.selectFutureCheckInDate();
    await this.page.waitForTimeout(1000);
    await this.selectCheckOutDate();
  }

  /**
   * Complete date selection flow for mobile (includes Done button)
   */
  async selectBookingDatesMobile(): Promise<void> {
    await this.selectFutureCheckInDate();
    await this.page.waitForTimeout(1000);
    await this.selectCheckOutDate();
    await this.clickDoneButton();
  }

  /**
   * Click the Done button that appears after date selection on mobile
   */
  async clickDoneButton(): Promise<void> {
    const doneButton = this.page.locator('button.mbsc-popup-button-bottom').filter({ hasText: 'Done' });
    await doneButton.click();
  }

  /**
   * Select a specific room type
   */
  async selectRoomType(roomName: string): Promise<void> {
    await this.page.getByText(roomName).click();
  }

  /**
   * Complete booking flow: select dates and search
   */
  async performBookingSearch(): Promise<void> {
    await this.selectBookingDates();
    await this.clickSearchButton();
  }

  /**
   * Complete booking flow for mobile: select dates (with Done button) and search
   */
  async performBookingSearchMobile(): Promise<void> {
    await this.selectBookingDatesMobile();
    await this.clickSearchButton();
  }

  /**
   * Complete booking flow: select dates, search, and select room
   * @param roomName - Name of the room type to select
   */
  async performCompleteBooking(roomName: string): Promise<void> {
    await this.selectBookingDates();
    await this.clickSearchButton();
    await this.selectRoomType(roomName);
  }

  /**
   * Click the "see prices" button for a specific room item
   * @param roomItemId - The test ID of the room item
   */
  async clickSeePricesButton(roomItemId: string): Promise<void> {
    await this.page.getByTestId(roomItemId).getByTestId('see-prices-btn-rates-page').click();
  }

  /**
   * Add Bed & Breakfast package to cart for a specific room using test data
   * @param roomItemId - The test ID of the room item
   * @param bedAndBreakfastName - Name of the Bed & Breakfast package
   */
  async addBedAndBreakfastToCart(roomItemId: string, bedAndBreakfastName: string): Promise<void> {
    const roomAccordion = this.page.getByTestId(roomItemId).getByTestId('accordion');
    const bedAndBreakfastItem = roomAccordion.getByTestId('room-price-list-item').filter({ hasText: bedAndBreakfastName });
    await bedAndBreakfastItem.getByTestId('add-to-cart-btn-rates-page').click();
  }
}
