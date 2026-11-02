import {test as base, expect,Page} from '@playwright/test';

type MyFixtures={
    orangePage: Page;

};

export const test=base.extend<MyFixtures>({
    orangePage: async ({page},use) => {
        await page.goto('/web/index.php/auth/login');
        await use(page);
        console.log('OrangeHRM Locator Test completed');

    }
});
export {expect};