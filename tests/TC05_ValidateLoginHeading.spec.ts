import { test, expect } from '@playwright/test';

// Test Case 5: Validate the login page heading
test('TC05 - Validate Login Page Heading', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Open the website.
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();  // Check whether the Login heading is visible.
});