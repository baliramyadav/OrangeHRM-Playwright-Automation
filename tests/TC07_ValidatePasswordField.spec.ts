import { test, expect } from '@playwright/test';

// Test Case 7: Validate the Password field
test('TC07 - Validate Password Field', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Open the website.
  await expect(page.getByPlaceholder('Password')).toBeVisible();
  // Check whether the Password field is visible.
});