import {test as base,expect,Page} from '@playwright/test';

//Define fixture name and type
type MyFixtures={
    myPage:Page;
};

//Create a custom fixture
export const test= base.extend<MyFixtures>({
    //Define a fixture named myPage
    myPage: async ({page},use) =>{
        //setup open the website
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        //give the page to the test
        await use(page);
        console.log('test completed');
        
    }

});
export{expect};