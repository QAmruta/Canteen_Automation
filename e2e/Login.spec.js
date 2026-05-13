// // @ts-check
// // login page test
// import { test, expect } from '@playwright/test';
// test('canteen_login', async ({ page }) => {
//   //url to the login page
//   await page.goto('http://127.0.0.1:8000');
//   // credentials for login
// await page.getByRole('textbox', { name: 'Email' }).click();
// await page.getByRole('textbox', { name: 'Email' }).fill('niketanbothe@sandipuniversity.edu.in');
// await page.getByRole('textbox', { name: 'Password' }).click();
// await page.getByRole('textbox', { name: 'Password' }).fill('123456');
// await page.getByRole('button', { name: 'Sign In' }).click();
// await page.getByRole('button', { name: 'OK' }).click();
// //Dashboard page should be visible after login(wait)
// await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

//  });
// e2e/auth.setup.js
import { test as setup, expect } from '@playwright/test';

const authFile = 'e2e/user.json';

setup('login', async ({ page }) => {

  // Navigate to login page
  await page.goto('http://127.0.0.1:8000');

  // Fill in credentials
  await page.getByRole('textbox', { name: 'Email' }).fill('niketanbothe@sandipuniversity.edu.in');
  await page.getByRole('textbox', { name: 'Password' }).fill('123456');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Verify login success
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // Save the session (cookies, localStorage) to a file
  await page.context().storageState({ path: authFile });

  
});