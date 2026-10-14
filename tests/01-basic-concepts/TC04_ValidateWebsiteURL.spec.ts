import { test, expect } from '@playwright/test';

// Test Case 4: Validate the website URL
test('TC04 - Validate Website URL', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Open the website.
  await expect(page).toHaveURL(/auth\/login/);  // Check whether the URL contains auth/login.
});