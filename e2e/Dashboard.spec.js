// dashboard page tests
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
// dashboard page tests
await page.goto('http://127.0.0.1:8000/dashboard');
  await expect(page.getByRole('link', { name: 'More info ' }).first()).toBeVisible();

  // New Orders test
  //searching box
  await page.getByRole('link', { name: 'More info ' }).first().click();
  //add value to search box
  await page.getByRole('searchbox', { name: 'Order No. or Name' }).click();
  // add value to search box
  await page.getByRole('searchbox', { name: 'Order No. or Name' }).fill('44');
  //select dropdown value
  await page.locator('select[name="filter"]').selectOption(['All','new','completed']);
  //Selecting per page value
  await page.locator('select[name="filter"]').selectOption(['new','50', '100']);
    // open dashboard
  await page.getByRole('link', { name: 'Home' }).click();

 //Total Orders test
  await page.getByRole('link', { name: 'More info ' }).nth(1).click();
  //add value to search box
  await page.getByRole('searchbox', { name: 'Order No. or Name' }).click();
  await page.getByRole('searchbox', { name: 'Order No. or Name' }).fill('122');

  await page.locator('section').filter({ hasText: 'Orders All New Completed 10 50' }).getByRole('button').click();
   //select dropdown value
  await page.locator('select[name="filter"]').selectOption(['All','new','completed']);
    //Selecting per page value
  await page.locator('select[name="per_page"]').selectOption(['50','100']);
  // open dashboard
  await page.getByRole('link', { name: 'Home' }).click();
  
  });