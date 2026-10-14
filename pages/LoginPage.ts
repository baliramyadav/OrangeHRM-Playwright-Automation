import {  expect,  type Locator,  type Page,} from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  // Locators
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly loginHeading: Locator;
  readonly dashboardHeading: Locator;
  readonly loginForm: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login', });
    this.forgotPasswordLink = page.getByText('Forgot your password?',   );
    this.loginHeading = page.getByRole('heading', {  name: 'Login',  });
    this.dashboardHeading = page.getByRole('heading', { name: 'Dashboard',  });

    // Scope the form to its relevant login controls.
    this.loginForm = page.locator('form');
  }

  // Navigate to the login page.
  async openLoginPage(): Promise<void> {
    await this.page.goto('/web/index.php/auth/login');
  }

  // Validate the page title.
  async verifyPageTitle(): Promise<void> {
    await expect(this.page).toHaveTitle(/OrangeHRM/i);
  }

  // Validate the login URL.
  async verifyLoginURL(): Promise<void> {
    await expect(this.page).toHaveURL(/auth\/login/);
  }

  // Validate the login heading.
  async verifyLoginHeading(): Promise<void> {
    await expect(this.loginHeading).toBeVisible();
  }

  // Validate the username field.
  async verifyUsernameField(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.usernameInput).toBeEnabled();
  }

  // Validate the password field.
  async verifyPasswordField(): Promise<void> {
    await expect(this.passwordInput).toBeVisible();
    await expect(this.passwordInput).toBeEnabled();
  }

  // Validate the login button.
  async verifyLoginButton(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
    await expect(this.loginButton).toBeEnabled();
  }

  // Validate the forgot-password link.
  async verifyForgotPasswordLink(): Promise<void> {
    await expect(this.forgotPasswordLink).toBeVisible();
  }

  // Validate the login form.
  async verifyLoginForm(): Promise<void> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButton).toBeVisible();
  }

  // Enter username and password.
  async enterCredentials(
    username: string,
    password: string,
  ): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
  }

  // Click the login button.
  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  // Perform login.
  async login(
    username: string,
    password: string,
  ): Promise<void> {
    await this.enterCredentials(username, password);
    await this.clickLogin();
  }

  // Verify that login succeeded.
  async verifyDashboardVisible(): Promise<void> {
    await expect(this.dashboardHeading).toBeVisible();
  }
  
  async verifyInvalidLoginMessage(): Promise<void> {
  await expect(
    this.page.getByText('Invalid credentials'),
  ).toBeVisible();
}
}