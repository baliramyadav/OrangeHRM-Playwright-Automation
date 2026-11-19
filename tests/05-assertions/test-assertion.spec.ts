import {test,expect} from '@playwright/test'

test('TC1 verify login page using web first assertions',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL(/auth\/login/);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveTitle('OrangeHRM');          
    console.log('Login successfully');    
});

test('TC2 verify toBeVisible assertion',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL(/auth\/login/);

    const username = page.getByRole('textbox', { name: 'Username' });
    await expect(username).toBeVisible();
    await expect(username).toBeEnabled();
    await username.fill('Admin');
    await expect(username).toHaveValue('Admin');


    const password = page.getByRole('textbox', { name: 'Password' });
    await expect(password).toBeVisible();
    await expect(password).toBeEnabled();
    await password.fill('admin123');
     await expect(password).toHaveValue('admin123');

    await page.getByRole('button',{name:'Login'}).click();

    await expect(page).toHaveTitle('OrangeHRM');          
    console.log('Login successfully using toBeVisible, toBeVisible');    
});



test('TC03 Verify hard assertions', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Hard assertion 1
  await expect(page).toHaveURL(/dashboard/);
  // Hard assertion 2
  await expect( page.getByRole('heading', { name: 'Dashboard' }) ).toBeVisible();
  // Hard assertion 3
  await expect( page.locator('.oxd-userdropdown-tab') ).toBeVisible();
    console.log('Hard assertion have been executed.');

});

test('TC04 Verify soft assertions', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Soft assertion 1
  await expect.soft(page).toHaveURL(/dashboard/);
  // Soft assertion 2
  await expect.soft( page.getByRole('heading', { name: 'Dashboard' }) ).toBeVisible();
  // Soft assertion 3
  await expect.soft(  page.locator('.oxd-userdropdown-tab') ).toBeVisible();  
  console.log('Soft assertion have been executed.');

});

test('TC05 Verify auto-retrying assertions', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // Automatically retries until Dashboard is visible
  await expect( page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({   timeout: 10000  });
  // Automatically retries until URL matches
  await expect(page).toHaveURL(/dashboard/, {  timeout: 10000  });

});