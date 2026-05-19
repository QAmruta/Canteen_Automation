//university inventory-> manage inventory-> Sites module test 
import { test, expect } from '@playwright/test';

test('university_inventory_manage_sites', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

  //Material module test 

// tab navigation
await page.getByRole('link', { name: ' Inventory ' }).click();
await page.getByRole('link', { name: ' University Inventory ' }).click();
await page.locator('a').filter({ hasText: 'Manage Inventory' }).nth(2).click();
await page.getByRole('link', { name: ' Sites' }).click();
//Material category module page opened 
await expect(page.getByRole('heading', { name: 'Sites' })).toBeVisible();
await page.getByRole('textbox', { name: 'Only letters, numbers, spaces' }).click();
// Add site with unique name
await page.getByRole('textbox', { name: 'Only letters, numbers, spaces' }).fill('yoyoo Site');
await expect(page.getByRole('button', { name: 'Add Site' })).toBeVisible();
await page.getByRole('button', { name: 'Add Site' }).click();
//success message verification
await expect(page.locator('#swal2-title')).toContainText('Success');
await expect(page.locator('#swal2-html-container')).toContainText('Site Name added successfully');
await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();
//Search field
await expect(page.getByRole('heading', { name: 'Existing Site' })).toBeVisible();
await page.getByRole('searchbox', { name: 'Search any Site' }).click();
await page.getByRole('searchbox', { name: 'Search any Site' }).fill('bajaj site');
//click edit button and open edit site form-> when run script then change the edit value according to search result
await expect(page.getByRole('heading', { name: 'Existing Site' })).toBeVisible();
await page.getByRole('row', { name: '148 bajaj site' }).locator('button').click();

await page.getByRole('textbox', { name: 'Site Name:*' }).click();
await page.getByRole('textbox', { name: 'Site Name:*' }).fill('bajaj site');
await expect(page.getByRole('button', { name: 'Save changes' })).toBeVisible();
await page.getByRole('button', { name: 'Save changes' }).click();
//success edit message verification
await expect(page.locator('#swal2-title')).toContainText('Success');
await expect(page.locator('#swal2-html-container')).toContainText('Site name updated successfully');
await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();
//View stock page verification
await expect(page.getByRole('link', { name: 'View Stock' }).first()).toBeVisible();
await page.getByRole('link', { name: 'View Stock' }).first().click();
await expect(page.getByRole('heading', { name: 'Site Inventory' })).toBeVisible();
//search field in view stock page
await page.getByRole('searchbox', { name: 'Search Any Parameter' }).click();
await page.getByRole('searchbox', { name: 'Search Any Parameter' }).fill('kharch');
//download as csv file
await expect(page.getByRole('button', { name: 'Download as CSV' })).toBeVisible();
const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download as CSV' }).click();
  const download = await downloadPromise;


});