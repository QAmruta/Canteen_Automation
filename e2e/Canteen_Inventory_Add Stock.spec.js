//canteen inventory-> add stock module test 
import { test, expect } from '@playwright/test';

test('canteen_inventory_add_stock', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

 //canteen inventory-> Add Stock module test
await page.locator('a').filter({ hasText: 'Canteen Inventory' }).first().click();
 //material tab click
  await page.getByRole('link', { name: ' Add Stock' }).click();
  await expect(page.getByRole('heading', { name: 'Add Stock' })).toBeVisible();
  //Add Stock details
  //campus select
  await page.locator('select[name="campus_id"]').selectOption('1');
  await page.locator('select[name="campus_id"]').selectOption('2');
  //select universal
  await page.getByRole('textbox', { name: 'Universal' }).click();
  await page.getByRole('option', { name: 'Universal' }).click();
  //select vendor
  await page.getByRole('textbox', { name: 'Select Vendor' }).click();
  await page.getByRole('option', { name: 'kissan' }).click();
  //enter po number
  await page.getByRole('textbox', { name: 'PO Number' }).click();
  await page.getByRole('textbox', { name: 'PO Number' }).fill('124');
  //click get material button
  await expect(page.getByRole('button', { name: 'Get Material' })).toBeVisible();
  await page.getByRole('button', { name: 'Get Material' }).click();

  //add material details
  await expect(page.getByRole('button', { name: 'Add Material' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Material' }).click();
  //select material
  await page.getByRole('textbox', { name: 'Select Material' }).click();
  await page.getByRole('option', { name: '14 Kg LPG Cylinder' }).click();
  //select quantity
  await page.getByPlaceholder('Quantity').click();
  await page.getByPlaceholder('Quantity').fill('12');
  //select rate
  await page.getByPlaceholder('Rate').click();
  await page.getByPlaceholder('Rate').fill('200');
  //click total price
  await page.getByPlaceholder('Total Price').click();
  //select canteen
  await page.locator('select[name="canteens[]"]').selectOption('garlics_9626');
  //fill schedule date
  await page.locator('input[name="scheduled_on[]"]').fill('2026-05-15');
  //click add material
  await page.getByRole('button', { name: 'Add Material' }).click();
  //click delete material button
  await page.getByRole('button', { name: 'Delete' }).nth(1).click();
  //add stock extra details
  await page.getByRole('textbox', { name: 'keep blank if not applicable' }).click();
  await page.getByRole('textbox', { name: 'keep blank if not applicable' }).fill('14526');
  await page.getByRole('textbox', { name: 'Challan / Bill No.' }).click();
  await page.getByRole('textbox', { name: 'Challan / Bill No.' }).fill('10001');
  await page.locator('#startDate').fill('2026-05-05');
  await page.getByRole('textbox', { name: 'Only letters, numbers, and spaces are allowed' }).click();
  await page.getByRole('textbox', { name: 'Only letters, numbers, and spaces are allowed' }).fill('S1');
  await page.getByRole('textbox', { name: 'Only letters, numbers, and hyphens are allowed.' }).click();
  await page.getByRole('textbox', { name: 'Only letters, numbers, and hyphens are allowed.' }).fill('MH20123654');
  await page.getByRole('textbox', { name: 'Only letters, dots and spaces' }).click();
  await page.getByRole('textbox', { name: 'Only letters, dots and spaces' }).fill('paneer');
  await page.getByRole('textbox', { name: 'Remark' }).click();
  await page.getByRole('textbox', { name: 'Remark' }).fill('NA');
  await page.getByRole('textbox', { name: 'Gate Inward Date' }).fill('2026-05-14');
  await page.getByRole('textbox', { name: 'Gate Inward Code' }).click();
  await page.getByRole('textbox', { name: 'Gate Inward Code' }).fill('4001');
  await page.getByRole('textbox', { name: 'ex., PhoneNo, email, Any' }).click();
  await page.getByRole('textbox', { name: 'ex., PhoneNo, email, Any' }).fill('NA');
  await page.getByRole('spinbutton', { name: 'Debited Amount' }).click();
  await page.getByRole('spinbutton', { name: 'Debited Amount' }).fill('600');
  await page.getByRole('textbox', { name: 'Reason For Debiting Amount' }).click();
  await page.getByRole('textbox', { name: 'Reason For Debiting Amount' }).fill('NA');
  //add stock button click
  await expect(page.getByRole('button', { name: 'Add Stock' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Stock' }).click();
// in this module the success message is missing.

  });