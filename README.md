# Booking Playwright TypeScript Framework

A comprehensive test automation framework for the booking system built with Playwright and TypeScript, following Page Object Model (POM) design pattern and best practices.

## 🚀 Features

- **Page Object Model (POM)** - Clean, maintainable test structure
- **TypeScript Support** - Full type safety and IntelliSense
- **Multi-Device Testing** - Desktop and mobile browser support
- **Custom Fixtures** - Reusable test fixtures for better organization
- **CI/CD Ready** - GitHub Actions workflow for automated testing
- **Mobile-Specific Testing** - Dedicated mobile test flows with touch interactions
- **Test Data Management** - Centralized test data utilities
- **Screenshot & Video Capture** - Automatic failure documentation

## 📁 Project Structure

```
booking-playwright-ts/
├── src/
│   ├── pages/                    # Page Object Models
│   │   ├── HomePage.ts          # Main booking page interactions
│   │   ├── CheckoutPage.ts      # Checkout and payment page
│   │   └── BookingSummaryPage.ts # Booking confirmation page
│   ├── fixtures/                 # Custom test fixtures
│   │   └── testFixtures.ts      # Test setup and page objects
│   └── utils/                    # Utility functions
│       ├── DateGenerator.ts     # Date calculation utilities
│       └── testData.json        # Test data configuration
├── tests/                        # Test specifications
│   ├── booking.spec.ts          # Desktop booking tests
│   └── mobile-booking.spec.ts   # Mobile booking tests
├── .github/workflows/            # CI/CD pipelines
│   └── playwright-tests.yml     # GitHub Actions workflow
├── playwright.config.ts          # Playwright configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd booking-playwright-ts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npm run install:browsers
   ```

## 🧪 Running Tests

### Quick Start Commands

```bash
# Run all tests (desktop + mobile)
npm test

# Run tests in headed mode (see browser)
npm run test:headed

# Run tests with debug mode
npm run test:debug

# Run tests with UI mode
npm run test:ui

# Generate test report
npm run test:report
```

### Device-Specific Tests

```bash
# Run desktop tests only (Chrome)
npm run test:desktop

# Run mobile tests only (Mobile Chrome)
npm run test:mobile

# Run desktop tests (same as test:desktop)
npm run test:chrome
```

### CI/CD Commands

```bash
# For continuous integration
npm run test:ci:desktop  # Desktop tests with reporting
npm run test:ci:mobile   # Mobile tests with reporting
```

## 📱 Supported Devices & Browsers

### Desktop Testing
- **Chrome** (Chromium) - 1920x1080 resolution

### Mobile Testing  
- **Mobile Chrome** (Pixel 5) - 393x851 resolution

## 🎯 Test Scenarios

The framework includes comprehensive end-to-end booking scenarios:

### Desktop Tests (`booking.spec.ts`)
- ✅ **Complete Booking Flow** - Full desktop booking journey
- ✅ **Date Selection** - Calendar interaction and date picking
- ✅ **Room Selection** - Room type and package selection
- ✅ **Cart Management** - Add to cart and checkout flow
- ✅ **Guest Details** - Form filling and validation
- ✅ **Payment Processing** - Credit card payment flow
- ✅ **Booking Confirmation** - Success verification

### Mobile Tests (`mobile-booking.spec.ts`)
- ✅ **Mobile Booking Flow** - Touch-optimized booking journey
- ✅ **Mobile Date Selection** - Touch calendar with Done button
- ✅ **Mobile Form Interaction** - Touch-friendly form filling
- ✅ **Mobile Payment** - Mobile-optimized payment flow
- ✅ **Responsive Design** - Mobile viewport validation

## 🔧 Configuration

### Playwright Configuration

The `playwright.config.ts` file includes:

- **Desktop Chrome** - 1920x1080 resolution
- **Mobile Chrome** - Pixel 5 device emulation (393x851)
- **Parallel test execution**
- **Automatic retry on failure** (2 retries on CI)
- **Screenshot and video capture on failure**
- **HTML and JSON reporting**

### Test Data Management

Test data is centralized in `src/utils/testData.json`:

```json
{
  "deluxeKing": {
    "roomItemId": "room-item-123",
    "name": "Deluxe King Room"
  },
  "bedAndBreakfast": {
    "name": "Bed & Breakfast Package"
  },
  "guestDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "mobile": "+1234567890",
    "address": "123 Main St, City, State"
  },
  "cardDetails": {
    "nameOnCard": "John Doe",
    "cardNumber": "4111111111111111",
    "expiryDate": "12/25",
    "cvc": "123"
  }
}
```

## 🚀 CI/CD Integration

### GitHub Actions

The framework includes a GitHub Actions workflow (`.github/workflows/playwright-tests.yml`) that:

- **Desktop Tests Job** - Runs desktop tests on Chrome only
- **Mobile Tests Job** - Runs mobile tests on Mobile Chrome only
- **Parallel execution** - Both jobs run simultaneously for faster feedback
- **Artifact upload** - Test results saved for 30 days
- **Automatic retry** - 2 retries on CI for flaky tests

### Workflow Triggers

- Push to `main` or `develop` branches
- Pull requests to `main` branch

### CI/CD Commands

```bash
# Run desktop tests in CI
npm run test:ci:desktop

# Run mobile tests in CI  
npm run test:ci:mobile
```

## 📊 Reporting

The framework generates multiple report formats:

- **HTML Report** - Interactive test results with screenshots
- **JSON Report** - Machine-readable test results
- **JUnit XML** - CI/CD integration format
- **Screenshots** - Automatic capture on test failures
- **Videos** - Recorded test execution on failures

## 🛡️ Best Practices Implemented

### Page Object Model (POM)
- **HomePage** - Main page interactions and elements for the booking system
- **Reusable methods** - Encapsulated page interactions

### Test Fixtures
- **Custom fixtures** - Enhanced test context with utilities
- **Device detection** - Automatic mobile/tablet/desktop detection
- **Browser management** - Optimized browser configuration

### Error Handling
- **Automatic retries** - Handle flaky tests
- **Timeout management** - Configurable timeouts per action
- **Graceful failures** - Proper error reporting and cleanup

## 🔍 Debugging

### Debug Mode
```bash
npm run test:debug
```

### Code Generation
```bash
npm run test:codegen
```

### Trace Viewer
Test traces are automatically captured and can be viewed with:
```bash
npx playwright show-trace trace.zip
```

## 📝 Writing Tests

### Desktop Test Example

```typescript
// tests/booking.spec.ts
import { test, expect } from '../src/fixtures/testFixtures';

test.describe('E2E Flow', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToHomePage();
  });

  test('should navigate to home page and select booking dates @desktop @chrome', async ({ 
    homePage, checkoutPage, bookingSummaryPage, testData 
  }) => {
    await expect(homePage.calendarIcon).toBeVisible();
    await homePage.clickCalendarIcon();
    await homePage.performBookingSearch();
    
    // Complete booking flow...
  });
});
```

### Mobile Test Example

```typescript
// tests/mobile-booking.spec.ts
import { test, expect } from '../src/fixtures/testFixtures';

test.describe('E2E Flow', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToHomePage();
  });

  test('should navigate to home page and select booking dates @mobile', async ({ 
    homePage, checkoutPage, bookingSummaryPage, testData 
  }) => {
    await expect(homePage.calendarIcon).toBeVisible();
    await homePage.clickCalendarIcon();
    await homePage.performBookingSearchMobile(); // Mobile-specific method
    
    // Complete mobile booking flow...
  });
});
```

### Key Differences Between Desktop and Mobile Tests

| Feature | Desktop | Mobile |
|---------|---------|--------|
| **Date Selection** | `performBookingSearch()` | `performBookingSearchMobile()` |
| **Calendar Interaction** | `click()` | `tap()` + Done button |
| **Text Matching** | Exact case | Case-insensitive regex |
| **Viewport** | 1920x1080 | 393x851 (Pixel 5) |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Write tests following the existing patterns
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:

1. Check existing issues in the repository
2. Create a new issue with detailed information
3. Include test logs and screenshots if applicable

---

**Happy Testing! 🎉**
