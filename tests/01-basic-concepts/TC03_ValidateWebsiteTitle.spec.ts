import { test, expect } from '@playwright/test';

// Test Case 3: Validate the website title
test('TC03 - Validate Website Title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Open the website.
  await expect(page).toHaveTitle(/OrangeHRM/);  // Check whether the title contains OrangeHRM.
});