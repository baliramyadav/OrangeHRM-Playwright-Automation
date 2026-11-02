import { test, expect } from '../../fixtures/no-pom-fixtures';

test('Test1',async ({myPage}) =>{
    await expect(myPage).toHaveTitle(/OrangeHRM/);
    await expect(myPage).toHaveURL('web/index.php/auth/login');
    console.log('Title:', await myPage.title());
});

test('Login and Logout ',async ({myPage,page}) =>{

    await expect(myPage).toHaveTitle(/OrangeHRM/);
    await expect(myPage).toHaveURL('web/index.php/auth/login');
    console.log('Title:', await myPage.title());


    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]','admin123');
    await page.click('button[type="submit"]');
    //await expect(myPage.getByText('PIM').click());

    await page.locator('i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
    await page.getByRole('menuitem',{name:'Logout'}).click();




});