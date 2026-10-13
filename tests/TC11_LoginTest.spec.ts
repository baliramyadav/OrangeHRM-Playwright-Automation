import { test, expect } from '@playwright/test';

// Test Case: Verify OrangeHRM login
test('TC11 - Verify Login Successfully', async ({ page }) => {

  // Step 1: Open the OrangeHRM login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  // Step 2: Enter the username
  await page.getByPlaceholder('Username').fill('Admin');  // Step 3: Enter the password
  await page.getByPlaceholder('Password').fill('admin123');  // Step 4: Click the Login button
  await page.getByRole('button', { name: 'Login' }).click();  // Step 5: Check whether the Dashboard page is displayed
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();  // Step 6: Print the success message
  console.log('Login successful! Dashboard page is displayed.');

});