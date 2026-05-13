//user- Add users module test
import { test, expect } from '@playwright/test';
test('canteen_login', async ({ page }) => {
 
  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');
//user- Add users module test
  //click User in tab
  await page.getByRole('link', { name: ' Users ' }).click();
  //click Add user in tab
  await page.getByRole('link', { name: ' Add User' }).click();
  // Enter form first name
  await page.getByPlaceholder('First Name *').click();
  await page.getByPlaceholder('First Name *').fill('amruta');
    // Enter form last name
  await page.getByPlaceholder('Last Name *').click();
  await page.getByPlaceholder('Last Name *').fill('bhalerao');
    // Enter form email
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).click();
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).fill('amruta09@gmail.com');
   // Enter form phone number must be 10 digits
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('8878977999');
   // Enter form password at least 6 characters
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).fill('Pass@123');
  // Enter form password confirmation
  await page.getByRole('textbox', { name: 'Retype password *' }).dblclick();
  await page.getByRole('textbox', { name: 'Retype password *' }).fill('Pass@123');
  //Select user role
  //select campus
  await page.getByLabel('Select Campus').selectOption('1');
  //Click register button
  await page.getByRole('button', { name: 'Register' }).click();
  //Display the page
  await expect(page.getByRole('heading', { name: 'Manage User' })).toBeVisible();

  //create the canteen admin 
  await page.getByRole('link', { name: ' Add User' }).click();
  // Enter form first name
  await page.getByPlaceholder('First Name *').click();
  await page.getByPlaceholder('First Name *').fill('amruta');
    // Enter form last name
  await page.getByPlaceholder('Last Name *').click();
  await page.getByPlaceholder('Last Name *').fill('bhalerao');
    // Enter a valid email,dont use existing email
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).click();
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).fill('amruta78@gmail.com');
   // Enter form phone number must be 10 digits
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9978965609');
   // Enter form password at least 6 characters
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).fill('Pass@123');
  // Enter form password confirmation
  await page.getByRole('textbox', { name: 'Retype password *' }).dblclick();
  await page.getByRole('textbox', { name: 'Retype password *' }).fill('Pass@123');
  //Select user role
  await page.getByLabel('User Role').selectOption('3');
  //select canteen
  await page.getByLabel('Select Canteen').selectOption('Garlic_9626');
  //select campus
  await page.getByLabel('Select Campus').selectOption('1');
  //Click register button
  await page.getByRole('button', { name: 'Register' }).click();
  //Display the page
  await expect(page.getByRole('heading', { name: 'Manage User' })).toBeVisible();

  //create inventory admin
  await page.getByRole('link', { name: ' Add User' }).click();
  // Enter form first name
  await page.getByPlaceholder('First Name *').click();
  await page.getByPlaceholder('First Name *').fill('amruta');
    // Enter form last name
  await page.getByPlaceholder('Last Name *').click();
  await page.getByPlaceholder('Last Name *').fill('bhalerao');
    // Enter valid email,dont use existing email
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).click();
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).fill('amruta96@gmail.com');
   // Enter form phone number must be 10 digits
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9970045609');
   // Enter form password at least 6 characters
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).fill('Pass@123');
  // Enter form password confirmation
  await page.getByRole('textbox', { name: 'Retype password *' }).dblclick();
  await page.getByRole('textbox', { name: 'Retype password *' }).fill('Pass@123');
  //Select user role
  await page.getByLabel('User Role').selectOption('4');
  //select campus
  await page.getByLabel('Select Campus').selectOption('1');
  //Click register button
  await page.getByRole('button', { name: 'Register' }).click();
  //Display the page
  await expect(page.getByRole('heading', { name: 'Manage User' })).toBeVisible();
  
  //create canteen inventory admin
await page.getByRole('link', { name: ' Add User' }).click();
  // Enter form first name
  await page.getByPlaceholder('First Name *').click();
  await page.getByPlaceholder('First Name *').fill('amruta');
    // Enter form last name
  await page.getByPlaceholder('Last Name *').click();
  await page.getByPlaceholder('Last Name *').fill('bhalerao');
    // Enter valid email,dont use existing email
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).click();
  await page.getByRole('textbox', { name: 'Please enter a valid email' }).fill('amruta77@gmail.com');
   // Enter form phone number must be 10 digits
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9978945159');
   // Enter form password at least 6 characters
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).click();
  await page.getByRole('textbox', { name: 'Password must be at least 6' }).fill('Pass@123');
  // Enter form password confirmation
  await page.getByRole('textbox', { name: 'Retype password *' }).dblclick();
  await page.getByRole('textbox', { name: 'Retype password *' }).fill('Pass@123');
  //Select user role
  await page.getByLabel('User Role').selectOption('5');
  //select campus
  await page.getByLabel('Select Campus').selectOption('1');
  //Click register button
  await page.getByRole('button', { name: 'Register' }).click();
  //Display the page
  await expect(page.getByRole('heading', { name: 'Manage User' })).toBeVisible();
  
});
