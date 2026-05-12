//management-canteen- Add canteen module test
import { test, expect } from '@playwright/test';
test('canteen_login', async ({ page }) => {
  //url to the login page
  await page.goto('http://127.0.0.1:8000');
  // credentials for login
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('niketanbothe@sandipuniversity.edu.in');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('123456');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.getByRole('button', { name: 'OK' }).click();

//Dashboard page should be visible after login(wait)
await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

//Add canteen module test
await page.getByRole('link', { name: ' Management ' }).click();
await page.getByRole('link', { name: ' Canteen ' }).click();
await page.getByRole('link', { name: ' Add Canteen' }).click();
await page.getByRole('combobox').selectOption('1');
// add name of canteen
await page.getByRole('textbox', { name: 'Canteen Name*' }).click();
await page.getByRole('textbox', { name: 'Canteen Name*' }).fill('abcd');
//add phone number of canteen
await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('8596565554');
//add address of canteen
await page.getByRole('textbox', { name: 'Canteen Address*' }).click();
await page.getByRole('textbox', { name: 'Canteen Address*' }).fill('nashik');
//add file for canteen


await page.locator('input[type="file"]').setInputFiles('C:/Amruta bhalerao/Automation_Canteen/Canteen/Canteen_Automation/testData/image12345.jpg');
await page.getByRole('button', { name: 'Add Canteen' }).click();

//success pop up should be visible
//await expect(page.locator('#swal2-title')).toContainText('Success!');

});