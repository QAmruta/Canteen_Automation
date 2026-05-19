// login page test
import { test, expect } from '@playwright/test';
test('canteen_login', async ({ page }) => {
   // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

await page.getByRole('link', { name: ' Management ' }).click();
await page.getByRole('link', { name: ' Canteen ' }).click();
await page.getByRole('link', { name: ' Manage Canteen' }).click();
await expect(page.getByRole('heading', { name: 'Manage Canteen' })).toBeVisible();
//select campus 1
await page.getByRole('combobox').selectOption('2');
await page.goto('http://127.0.0.1:8000/canteen?campus_id=1');
//select campus 2
await page.getByRole('combobox').selectOption('1');
await page.goto('http://127.0.0.1:8000/canteen?campus_id=2');
//search for canteen
await page.getByRole('searchbox', { name: 'Search any Canteen' }).click();
await page.getByRole('searchbox', { name: 'Search any Canteen' }).fill('GARLIC');

//edit canteen
await page.getByRole('link', { name: ' Edit' }).first().click();
await expect(page.getByRole('listitem')).toContainText('1 Edit Canteen');
await page.getByRole('textbox', { name: 'Only letters are allowed' }).click();

await page.getByRole('textbox', { name: 'Only letters are allowed' }).fill('GARLICs');
//edit canteen address
await page.getByRole('textbox', { name: 'Canteen Address*' }).click();
await page.getByRole('textbox', { name: 'Canteen Address*' }).fill('SIEMe');
//edit phone number
await page.getByRole('textbox', { name: 'Canteen Phone*' }).click();
await page.getByRole('textbox', { name: 'Canteen Phone*' }).fill('8123456741');
//button update visibile and click
await expect(page.getByRole('button', { name: 'Update Canteen' })).toBeVisible();
await page.getByRole('button', { name: 'Update Canteen' }).click();
//success message visible and click ok
// await expect(page.locator('#swal2-title')).toContainText('Success');
// await page.getByRole('button', { name: 'OK' }).click();
//delete canteen


 });