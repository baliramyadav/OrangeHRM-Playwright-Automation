import { test, expect } from '@playwright/test';

// Test Case 10: Validate the login form
test('TC10 - Validate Login Form', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Open the website.
  await expect(page.getByPlaceholder('Username')).toBeVisible();  // Check the Username field.
  await expect(page.getByPlaceholder('Password')).toBeVisible();  // Check the Password field.
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  // Check the Login button.
});