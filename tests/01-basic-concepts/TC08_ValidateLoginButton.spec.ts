import { test, expect } from '@playwright/test';
// Test Case 8: Validate the Login button
test('TC08 - Validate Login Button', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    // Open the website.
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  // Check whether the Login button is visible.
});