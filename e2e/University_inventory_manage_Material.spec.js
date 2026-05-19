//university inventory-> manage inventory-> Material module test 
import { test, expect } from '@playwright/test';

test('university_inventory_manage_material', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

  //Material module test 

// tab navigation
await page.getByRole('link', { name: ' Inventory ' }).click();
await page.getByRole('link', { name: ' University Inventory ' }).click();
await page.locator('a').filter({ hasText: 'Manage Inventory' }).nth(2).click();
await page.getByRole('link', { name: ' Material' }).click();
//Material category module page opened 
await expect(page.getByRole('heading', { name: 'Material', exact: true })).toBeVisible();
await page.getByLabel('Category Name*').selectOption('1');
//Add material with unique name and code
await page.getByRole('textbox', { name: 'Material Name*' }).click();
await page.getByRole('textbox', { name: 'Material Name*' }).fill('Electric Geyser 78 Ltr');
await page.getByRole('textbox', { name: 'Material Code*' }).click();
await page.getByRole('textbox', { name: 'Material Code*' }).fill('1097');

await page.getByLabel('Type KG/Ltr*').selectOption('BUN');
await page.getByRole('button', { name: 'Add Material' }).click();
//success message verification
await expect(page.locator('#swal2-title')).toContainText('Material Added successfully');
await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();
//Search filed
await page.getByRole('searchbox', { name: 'Search any Material' }).click();
await page.getByRole('searchbox', { name: 'Search any Material' }).fill('BELT B-57');
//click search result and open edit material form
await expect(page.getByRole('heading', { name: 'Existing Materials' })).toBeVisible();
await page.getByRole('row', { name: 'Hardware BELT B-57 NOS Edit' }).locator('button').click();
await expect(page.getByRole('heading', { name: 'Edit Material' })).toBeVisible();
//update material name and code
await page.getByRole('textbox', { name: 'Material Name:*' }).click();
await page.getByRole('textbox', { name: 'Material Name:*' }).fill('BELT B-100');

await page.getByRole('textbox', { name: 'Material Code:*' }).dblclick();
await page.getByRole('textbox', { name: 'Material Code:*' }).fill('1015');

await page.getByLabel('Type:*').selectOption('KG');
await expect(page.getByRole('button', { name: 'Save changes' })).toBeVisible();
await page.getByRole('button', { name: 'Save changes' }).click();
await page.waitForTimeout(3000);
//success edit message verification
await expect(page.locator('#swal2-title')).toContainText('Success');
await expect(page.locator('#swal2-html-container')).toContainText('Material name updated successfully');
await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();

});