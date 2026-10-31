import { test, expect } from '../../fixtures/no-pom-fixtures';

test('Test1',async ({myPage}) =>{
    await expect(myPage).toHaveTitle(/OrangeHRM/);
    await expect(myPage).toHaveURL('web/index.php/auth/login');
    console.log('Title:', await myPage.title());
});
