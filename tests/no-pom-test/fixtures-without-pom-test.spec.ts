import{test,expect} from '../fixtures/no-pom-fixtures';

test('Test1',async ({myPage}) =>{
    await expect(myPage).toHaveTitle(/Google/);
    await expect(myPage).toHaveURL(/google\.com/);
    console.log('Title:', await myPage.title());
});
