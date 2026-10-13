import { test, expect } from '@playwright/test';

// Test Case 6: Validate the Username field
test('TC06 - Validate Username Field', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Open the website.
  await expect(page.getByPlaceholder('Username')).toBeVisible();  // Check whether the Username field is visible.
});