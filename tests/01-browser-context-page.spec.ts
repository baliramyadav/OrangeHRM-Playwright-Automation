// Import test to define a test case, expect for assertions, and chromium to launch the browser.
import { test, expect, chromium } from '@playwright/test';

// Define an asynchronous Playwright test with the name 'Test-1 BrowserContext and Page'.
test('Test-1 BrowserContext and Page', async () => {
  
// Launch the Chromium browser in headless mode (headless=true ,without a visible browser window).
  const browser = await chromium.launch({ headless: false });
  console.log(' Browser launched:', browser.browserType().name());
// Print the name of the browser that was launched (Chromium).  
  const contextA = await browser.newContext();
  // Create the first independent browser context with its own session and storage

  const pageA = await contextA.newPage();
  // Create a new browser page (tab) inside Context A.
  await pageA.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Navigate Page A to the OrangeHRM login page.
  await expect(pageA).toHaveTitle(/OrangeHRM/);
   // Verify that Page A's title contains the text 'OrangeHRM'.

  
  const contextB = await browser.newContext();
  // Create a second independent browser contextB, isolated from Context A.
  const pageB = await contextB.newPage();
  // Create a new browser page (tab) inside Context B.
  await pageB.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  // Navigate Page B to the same OrangeHRM login page.
  await expect(pageB).toHaveTitle(/OrangeHRM/);
   // Verify that Page B's title contains the text 'OrangeHRM'.

  console.log('Two isolated contexts, two isolated pages');
  // Print a message confirming that two contexts and their pages were created.
  console.log('Context A cookies:', (await contextA.cookies()).length);
  // Retrieve Context A's cookies and print the total number of cookies.
  console.log('Context B cookies:', (await contextB.cookies()).length);
  // Retrieve Context B's cookies and print the total number of cookies.

  await contextA.close(); // Close Context A and its associated pages, releasing its resources.
  await contextB.close();// Close Context B and its associated pages, releasing its resources.
  await browser.close();// Close the Chromium browser and release the remaining browser resources.
});