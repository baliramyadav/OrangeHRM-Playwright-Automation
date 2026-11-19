import {test,expect} from '@playwright/test'

test('TC1 verify login page',async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();

    await expect(page).toHaveTitle('OrangeHRM');
    await page.getByText('Leave',{exact:true}).click();
    const leavePage = page.locator('.oxd-layout-context');

    await expect(leavePage).toBeVisible();
    
    console.log('Leave module opened successfully');

    
});
