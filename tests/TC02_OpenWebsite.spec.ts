import { test, expect } from '@playwright/test';

// Test Case 2: Open the OrangeHRM website
test('TC02 - Open Website', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
  // Open the OrangeHRM login page.
  console.log('Website opened successfully');
  // Print a success message.
});