import { test, expect } from '@playwright/test';

// Test Case 9: Validate the Forgot Password link
test('TC09 - Validate Forgot Password Link', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Open the website.
  await expect(page.getByText('Forgot your password?')).toBeVisible();
  // Check whether the Forgot Password link is visible.
});