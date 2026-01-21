

```md
# Booking Playwright TypeScript Framework

![Playwright Tests](https://github.com/vishnuvardhanburri/booking-playwright-automation/actions/workflows/playwright-tests.yml/badge.svg)

A production-ready **end-to-end booking system automation framework** built using **Playwright** and **TypeScript**, following the **Page Object Model (POM)** and modern automation best practices.

This project demonstrates **real browser automation** with **desktop and mobile coverage**, **CI execution**, and **recorded test runs**.

---

## 🚀 Key Features

- ✅ Page Object Model (POM)
- ✅ TypeScript with strong typing
- ✅ Real booking flow automation (calendar & search)
- ✅ Desktop & Mobile testing
- ✅ Custom Playwright fixtures
- ✅ CI/CD with GitHub Actions
- ✅ HTML, JSON & JUnit reports
- ✅ Screenshot & video capture on failures
- ✅ Parallel execution

---

## 🎥 Booking Automation Demo (Live)

This repository includes a **live booking automation demo** running on a real booking website UI.

### 🔍 Demo Flow
1. Opens the booking website in a real browser
2. Navigates to **Hotels**
3. Selects **check-in and check-out dates**
4. Performs a hotel search
5. Loads booking results automatically

### 📄 Demo Test File
```

tests/booking-demo.spec.ts

````

### ▶️ Run Demo Locally
```bash
npx playwright test --headed tests/booking-demo.spec.ts
````

> The browser opens and performs all steps automatically.

---

## 📹 Demo Video & HTML Report

Playwright automatically records execution and generates reports.

* **Execution videos**

  ```
  test-results/*/video.webm
  ```

* **Interactive HTML report**

  ```bash
  npx playwright show-report
  ```

Reports include screenshots, videos, browser details, and execution status.

---

## 📁 Project Structure

```
booking-playwright-ts/
├── src/
│   ├── pages/                # Page Object Models
│   ├── fixtures/             # Custom fixtures
│   └── utils/                # Helpers & test data
├── tests/
│   ├── booking-demo.spec.ts  # Live booking demo
│   ├── demo.spec.ts          # Basic demo
│   └── mobile-booking.spec.ts.bak
├── .github/workflows/
│   └── playwright-tests.yml  # CI pipeline
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Setup & Installation

### Prerequisites

* Node.js 18+
* npm

### Install

```bash
npm install
npx playwright install
```

---

## 🧪 Running Tests

```bash
# Run all tests
npx playwright test

# Run with browser UI
npx playwright test --headed

# Run booking demo only
npx playwright test --headed tests/booking-demo.spec.ts
```

---

## 📱 Supported Browsers & Devices

### Desktop

* Chromium (Desktop Chrome – 1920×1080)

### Mobile

* Mobile Chrome (Pixel 5 emulation)

---

## 🔄 Continuous Integration (CI)

GitHub Actions automatically:

* Installs dependencies
* Runs Playwright tests
* Generates reports
* Uploads artifacts

Workflow file:

```
.github/workflows/playwright-tests.yml
```

Triggered on push and pull requests.

---

## 📊 Reporting

Generated outputs:

* HTML report
* JSON report
* JUnit XML
* Screenshots on failure
* Video recordings

---

## 📌 Client Note

This project demonstrates **real-world booking automation**, not mock or simulated flows.

The framework can be adapted for:

* Hotel booking systems
* Appointment scheduling platforms
* Visa / slot booking portals
* Enterprise web applications

---

## 👤 Author

**Vishnu Vardhan Burri**
Automation Engineer | Playwright | End-to-End Testing

### Expertise

* Playwright UI Automation
* Booking & Appointment Systems
* Page Object Model (POM)
* CI/CD Automation
* Desktop & Mobile Test Strategy

### Tech Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions

📫 Contact

* GitHub: [https://github.com/vishnuvardhanburri](https://github.com/vishnuvardhanburri)
* Email: vishnuvardhanburri19@gmail.com
* LinkedIn: [[https://www.linkedin.com/in/your-linkedin-id](https://www.linkedin.com/in/your-linkedin-id)](https://www.linkedin.com/in/vishnuvardhanburri/)

> This repository is part of my professional automation portfolio.

---

## 📄 License

MIT License

---

**Happy Testing 🚀**

````

---

### ✅ NEXT STEP
```bash
git add README.md
git commit -m "Add final professional README"
git push
````
