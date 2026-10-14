import { test as base, expect,} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

// Define the custom fixture type.
type MyFixtures = {
  loginPage: LoginPage;
};

// Extend Playwright's built-in test object.
export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    // Setup: Create the page object.
    const loginPage = new LoginPage(page);

    // Setup: Open the login page.
    await loginPage.openLoginPage();

    // Provide the prepared page object to the test.
    await use(loginPage);

    // Teardown: Runs after the test finishes.
    console.log('LoginPage fixture teardown completed');
  },
});

export { expect };