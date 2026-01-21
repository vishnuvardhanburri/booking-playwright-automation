import { Page, Locator, FrameLocator } from '@playwright/test';

/**
 * Checkout page object model for the booking system
 */
export class CheckoutPage {
  readonly page: Page;
  readonly completeReservationText: Locator;
  readonly titleField: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly mobileField: Locator;
  readonly addressFinderField: Locator;
  readonly paymentContainer: Locator;
  readonly cardNumberField: FrameLocator;
  readonly expiryDateField: FrameLocator;
  readonly cvcField: FrameLocator;
  readonly cardHolderNameField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeReservationText = page.locator('text=/Complete your [Rr]eservation/');
    this.titleField = page.getByTestId('booking-summary-form-title').locator('input');
    this.firstNameField = page.getByTestId('booking-summary-form-first-name').locator('input');
    this.lastNameField = page.getByTestId('booking-summary-form-last-name').locator('input');
    this.emailField = page.getByRole('textbox', { name: 'Email Address *' });
    this.mobileField = page.getByTestId('booking-summary-form-mobile').locator('input');
    this.addressFinderField = page.getByTestId('booking-summary-form-address').locator('input');
    this.paymentContainer = page.locator('.adyen-checkout__payment-method__details');
    this.cardNumberField = page.frameLocator('[data-cse="encryptedCardNumber"] iframe');
    this.expiryDateField = page.frameLocator('[data-cse="encryptedExpiryDate"] iframe');
    this.cvcField = page.frameLocator('[data-cse="encryptedSecurityCode"] iframe');
    this.cardHolderNameField = page.locator('input[name="holderName"]');
  }

  /**
   * Fill guest details form
   * @param guestDetails - Object containing guest information
   */
  async fillGuestDetails(guestDetails: { firstName: string; lastName: string; email: string; mobile: string }): Promise<void> {
    await this.firstNameField.fill(guestDetails.firstName);
    await this.lastNameField.fill(guestDetails.lastName);
    await this.emailField.fill(guestDetails.email);
    await this.mobileField.fill(guestDetails.mobile);
  }

  /**
   * Fill address and select first suggestion
   * @param address - Address string to search for
   */
  async fillAddressAndSelect(address: string): Promise<void> {
    await this.addressFinderField.fill(address);
    await this.page.locator('#address-finder-option-0').click();
  }

  /**
   * Click the pay deposit button
   */
  async clickPayDepositButton(): Promise<void> {
    await this.page.getByTestId('book-now-btn-summary').click();
  }

  /**
   * Get the pay deposit button locator
   */
  getPayDepositButton(): Locator {
    return this.page.getByTestId('book-now-btn-summary');
  }

  /**
   * Get the payment container locator
   */
  getPaymentContainer(): Locator {
    return this.paymentContainer;
  }

  /**
   * Click the final Pay button
   */
  async clickPayButton(): Promise<void> {
    await this.page.locator('.adyen-checkout__button--pay').click();
  }

  /**
   * Fill all payment form fields
   * @param cardDetails - Object containing card payment information
   */
  async fillPaymentForm(cardDetails: { nameOnCard: string; cardNumber: string; expiryDate: string; cvc: string }): Promise<void> {
    await this.cardHolderNameField.fill(cardDetails.nameOnCard);
    await this.cardNumberField.getByRole('textbox', { name: 'Card number' }).fill(cardDetails.cardNumber);
    await this.expiryDateField.getByRole('textbox', { name: 'Expiry date' }).fill(cardDetails.expiryDate);
    await this.cvcField.getByRole('textbox', { name: 'Security code' }).fill(cardDetails.cvc);
  }

  /**
   * Complete the entire checkout process
   * @param guestDetails - Object containing guest information
   * @param cardDetails - Object containing card payment information
   */
  async completeCheckout(guestDetails: { firstName: string; lastName: string; email: string; mobile: string; address: string }, cardDetails: { nameOnCard: string; cardNumber: string; expiryDate: string; cvc: string }): Promise<void> {
    await this.fillGuestDetails(guestDetails);
    await this.fillAddressAndSelect(guestDetails.address);
    await this.clickPayDepositButton();
    await this.fillPaymentForm(cardDetails);
  }
}
