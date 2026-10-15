import { test, expect } from '../../fixtures/test-fixtures';
import { testCredentials } from '../../test-data/credentials';

// =====================================================
// TEST SUITE: OrangeHRM Login Page
// =====================================================

test.describe('OrangeHRM Login Page Automation', () => {

  // ---------------------------------------------------
  // HOOKS
  // ---------------------------------------------------

  test.beforeAll(async () => {
    console.log('Starting OrangeHRM login test suite');
  });

  test.beforeEach(async ({ loginPage }, testInfo) => {
    console.log(`Starting test: ${testInfo.title}`);

    // The loginPage fixture has already opened the page.
    // Add test-specific setup here if needed.
    await expect(loginPage.loginHeading).toBeVisible();
  });

  test.afterEach(async ({}, testInfo) => {
    console.log(`Finished test: ${testInfo.title} | Status: ${testInfo.status}`, );
  });

  test.afterAll(async () => {
    console.log('OrangeHRM login test suite completed');
  });

  // ---------------------------------------------------
  // TC01: Open Browser
  // ---------------------------------------------------

  test('TC01 - Open Browser', async ({ page }) => {
    // Playwright has already created the browser and page.
    await expect(page).toBeDefined();

    console.log('Browser and page are ready');
  });

  // ---------------------------------------------------
  // TC02: Open Website
  // ---------------------------------------------------

  test('TC02 - Open Website', async ({ loginPage }) => {
    await loginPage.verifyLoginHeading();
    console.log('OrangeHRM login website opened successfully');
  });

  // ---------------------------------------------------
  // TC03: Validate Website Title
  // ---------------------------------------------------

  test('TC03 - Validate Website Title', async ({ loginPage }) => {
    await loginPage.verifyPageTitle();
  });

  // ---------------------------------------------------
  // TC04: Validate Website URL
  // ---------------------------------------------------

  test('TC04 - Validate Website URL', async ({ loginPage }) => {
    await loginPage.verifyLoginURL();
  });

  // ---------------------------------------------------
  // TC05: Validate Login Page Heading
  // ---------------------------------------------------

  test('TC05 - Validate Login Page Heading', async ({ loginPage }) => {
    await loginPage.verifyLoginHeading();
  });

  // ---------------------------------------------------
  // TC06: Validate Username Field
  // ---------------------------------------------------

  test('TC06 - Validate Username Field', async ({ loginPage }) => {
    await loginPage.verifyUsernameField();
  });

  // ---------------------------------------------------
  // TC07: Validate Password Field
  // ---------------------------------------------------

  test('TC07 - Validate Password Field', async ({ loginPage }) => {
    await loginPage.verifyPasswordField();
  });

  // ---------------------------------------------------
  // TC08: Validate Login Button
  // ---------------------------------------------------

  test('TC08 - Validate Login Button', async ({ loginPage }) => {
    await loginPage.verifyLoginButton();
  });

  // ---------------------------------------------------
  // TC09: Validate Forgot Password Link
  // ---------------------------------------------------

  test('TC09 - Validate Forgot Password Link', async ({ loginPage }) => {
    await loginPage.verifyForgotPasswordLink();
  });

  // ---------------------------------------------------
  // TC10: Validate Login Form
  // ---------------------------------------------------

  test('TC10 - Validate Login Form', async ({ loginPage }) => {
    await loginPage.verifyLoginForm();
  });

  // ---------------------------------------------------
  // TC11: Verify Successful Login
  // ---------------------------------------------------

  test('TC11 - Verify Login Successfully',
    {
      tag: ['@smoke', '@login'],
    },
    async ({ loginPage }) => {
      const { username, password } = testCredentials.validUser;

      await loginPage.login(username, password);

      await loginPage.verifyDashboardVisible();

      console.log( 'Login successful! Dashboard page is displayed.',  );
    },
  );


  test(
  'TC12 - Verify Login with Invalid Password',
  {
    tag: ['@negative', '@login'],
  },
  async ({ loginPage }) => {
    await loginPage.login('Admin', 'WrongPassword123');

    await loginPage.verifyInvalidLoginMessage();
  },
);


});