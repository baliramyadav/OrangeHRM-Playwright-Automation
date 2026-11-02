import {test,expect} from '../../fixtures/locator.fixture';

test('1Verify page title',async ({orangePage})=>{
    await expect(orangePage).toHaveTitle('OrangeHRM');
});

//Using getByRole ()
test('2Verify Login button',async ({orangePage})=>{
    const loginButton = orangePage.getByRole('button',{name:'Login'});
    await expect(loginButton).toBeVisible();
    await expect(loginButton).toBeEnabled();
});

//Using getByText()
test('3Verify Forgot Password text',async ({orangePage})=>{
    const forgotPassword= orangePage.getByText('Forgot your password?',{exact: true});
    await expect(forgotPassword).toBeVisible();
});

//Using getByPlaceholder()
test('4Verify Username and Password fields',async ({orangePage})=>{
    const username = orangePage.getByPlaceholder('Username');
    const password = orangePage.getByPlaceholder('Password');
    await expect(username).toBeVisible();
    await expect(password).toBeVisible();
});

// Using getByLabel()
test.only('5Verify Username using label', async ({ orangePage }) => {
    await orangePage.getByLabel('Username').fill('Admin');
    await orangePage.getByLabel('Password').fill('admin123');
    await orangePage.getByRole('button', { name: 'Login' }).click();
    await expect(orangePage.locator('h6')).toHaveText('Dashboard');

});

// Using getByTestId()
test.only('6Verify Login button using Test ID', async ({ orangePage }) => {
    await orangePage.getByTestId('username').fill('Admin');
    await orangePage.getByTestId('password').fill('admin123');
    await orangePage.getByTestId('login-button').click();
    await expect(orangePage.locator('h6')).toHaveText('Dashboard');

});

// Verify invalid login credentials
test.only('7Verify invalid login', async ({ orangePage }) => {
    await orangePage.getByPlaceholder('Username').fill('WrongUser');
    await orangePage.getByPlaceholder('Password').fill('WrongPassword123');
    await orangePage.getByRole('button', {name: 'Login'}).click();
    await expect(orangePage.getByText('Invalid credentials') ).toBeVisible();
});


//Verify empty login validation
test.only('8Verify empty login validation', async ({ orangePage }) => {
    await orangePage.getByRole('button', { name: 'Login' }).click();
    await expect(orangePage.getByText('Required', { exact: true })).toHaveCount(2);
});

// Verify login using valid credentials
test('9Verify login using valid credentials', async ({ orangePage }) => {
    await orangePage.getByPlaceholder('Username').fill('Admin');
    await orangePage.getByPlaceholder('Password').fill('admin123');    
    await orangePage.getByRole('button', {name: 'Login' }).click();

    await expect(orangePage.getByRole('heading', { name: 'Dashboard'})).toBeVisible();
    await expect(orangePage).toHaveURL(/dashboard/);
});



// ================================================================================
// Valid Login Using CSS Selectors

test('10Valid Login using CSS', async ({ orangePage }) => {
    await orangePage.locator('input[name="username"]').fill('Admin');
    await orangePage.locator('input[name="password"]').fill('admin123');    
    await orangePage.locator('button[type="submit"]').click();    
    await expect(orangePage.locator('h6')).toHaveText('Dashboard');    
    await expect(orangePage).toHaveURL(/dashboard/);

    //  Click profile menu and logout
    await orangePage.locator('.oxd-userdropdown-tab').click();
    await orangePage.locator('a[href="/web/index.php/auth/logout"]').click();
    await expect(orangePage.locator('input[name="username"]')).toBeVisible();
    await expect(orangePage).toHaveURL(/auth\/login/);

});

//Invalid Login Using CSS Selectors
test('11Invalid Login using CSS', async ({ orangePage }) => {
    await orangePage.locator('input[name="username"]').fill('WrongUser');
    await orangePage.locator('input[name="password"]').fill('WrongPassword123');
    await orangePage.locator('button[type="submit"]').click();
    await expect(orangePage.locator('.oxd-alert-content-text') ).toHaveText('Invalid credentials');
});



// ========================================
//  Valid Login Using XPath
test('12Valid Login using XPath', async ({ orangePage }) => {     
    await orangePage.locator('//input[@name="username"]').fill('Admin');     
    await orangePage.locator('//input[@name="password"]').fill('admin123');     
    await orangePage.locator('//button[@type="submit"]').click();     
    await expect(orangePage.locator('//h6[text()="Dashboard"]')).toBeVisible();     
    await expect(orangePage).toHaveURL(/dashboard/);
});

// Invalid Login Using XPath
test('13Invalid Login using XPath', async ({ orangePage }) => {    
    await orangePage.locator('//input[@name="username"]').fill('WrongUser');    
    await orangePage.locator('//input[@name="password"]').fill('WrongPassword123');    
    await orangePage.locator('//button[@type="submit"]').click();
    await expect(orangePage.locator('//div[contains(@class,"oxd-alert-content-text")]')).toHaveText('Invalid credentials');

});




//=================================using filter and hasText()=========================
test(' 14Login using filter hasText', async ({ orangePage }) => {
  await orangePage.locator('input[name="username"]').fill('Admin');  
  await orangePage.locator('input[name="password"]').fill('admin123');  
  const loginButton = orangePage.locator('button').filter({ hasText: 'Login' });
  await loginButton.click();  
  await expect(orangePage.locator('h6')).toHaveText('Dashboard');
  await expect(orangePage).toHaveURL(/dashboard/);
});


// Using Data-TestID locator

test('15Valid Login using data-testid', async ({ orangePage }) => { 
  await orangePage.getByTestId('username').fill('Admin');  
  await orangePage.getByTestId('password').fill('admin123'); 
  await orangePage.getByTestId('login-button').click();  
  await expect(orangePage.locator('h6')).toHaveText('Dashboard');
  await expect(orangePage).toHaveURL(/dashboard/);
});