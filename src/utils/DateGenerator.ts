/**
 * Date generation utilities for test automation
 */
export class DateGenerator {
  /**
   * Get future date based on days from today
   */
  static getFutureDate(daysFromToday: number): Date {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);
    return date;
  }

  /**
   * Format date for aria-label matching in calendar components
   */
  static formatDateForAriaLabel(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Get next month's check-in date formatted for aria-label (approximately 30 days from today)
   */
  static getNextMonthCheckInAriaLabel(): string {
    const nextMonth = this.getFutureDate(30);
    return this.formatDateForAriaLabel(nextMonth);
  }

  /**
   * @deprecated Use getNextMonthCheckInAriaLabel() instead
   * Get tomorrow's date formatted for aria-label (now returns next month for better test stability)
   */
  static getTomorrowAriaLabel(): string {
    return this.getNextMonthCheckInAriaLabel();
  }

  /**
   * Get check-out date (7 days after check-in) formatted for aria-label
   */
  static getCheckOutAriaLabel(): string {
    const checkOutDate = this.getFutureDate(37); // 30 days (check-in) + 7 days (duration)
    return this.formatDateForAriaLabel(checkOutDate);
  }

  /**
   * Get date range for booking (next month)
   */
  static getBookingDateRange(): { checkIn: Date; checkOut: Date; checkInLabel: string; checkOutLabel: string } {
    const checkIn = this.getFutureDate(30); // Next month (approximately 30 days)
    const checkOut = this.getFutureDate(37); // 7 days after check-in
    
    return {
      checkIn,
      checkOut,
      checkInLabel: this.formatDateForAriaLabel(checkIn),
      checkOutLabel: this.formatDateForAriaLabel(checkOut)
    };
  }

  /**
   * Format date for display
   */
  static formatDateForDisplay(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
