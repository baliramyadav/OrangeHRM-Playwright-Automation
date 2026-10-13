import { test, expect, chromium } from '@playwright/test';

// Test Case 1: Open the browser
test('TC01 - Open Browser', async () => {
  const browser = await chromium.launch({ headless: true });// Launch the Chromium browser. 
  console.log('Browser opened successfully');  // Print a success message.
  await browser.close();
  // Close the browser.
});