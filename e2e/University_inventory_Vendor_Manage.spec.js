// university inventory -> vendor -> Manage Vendor module test
import { test, expect } from '@playwright/test';
test('university_inventory_vendor_Manage_Vendor', async ({ page }) => {

  // ── Navigate to Manage Vendor ──
  await page.goto('http://127.0.0.1:8000/dashboard');
  await page.getByRole('link', { name: ' Inventory ' }).click();
  await page.getByRole('link', { name: ' University Inventory ' }).click();
  await page.locator('a').filter({ hasText: 'Vendor' }).nth(4).click();
  await page.getByRole('link', { name: ' Manage Vendor' }).click();

  // ── Verify Manage Vendor page opened ──
  await expect(page.getByRole('heading', { name: 'Manage Vendor' })).toBeVisible();
  console.log('✅ Manage Vendor page opened');

  // ── STEP 1: Search DDA ──
  await page.getByRole('searchbox', { name: 'Search Name of vendor' }).click();
  await page.getByRole('searchbox', { name: 'Search Name of vendor' }).type('DDA', { delay: 200 });
  await page.waitForTimeout(2000);
  console.log('✅ Search done');

  // ── STEP 2: Wait for DDA Company row ──
  await expect(
    page.locator('tr').filter({ hasText: 'DDA Company' })
  ).toBeVisible({ timeout: 10000 });
  console.log('✅ DDA Company row found');

  // ── STEP 3: Click Update Vendor LINK in the row ──
  // console output showed it is a LINK not a button
  await page.locator('tr')
    .filter({ hasText: 'DDA Company' })
    .getByRole('link', { name: 'Update Vendor' })
    .click();
  console.log('✅ Update Vendor link clicked');

  // ── STEP 4: Wait for popup to open ──
  await page.waitForTimeout(1000);

  // ── STEP 5: Verify Edit Vendor popup opened ──
  await expect(
    page.getByRole('heading', { name: 'Edit Vendor' })
  ).toBeVisible({ timeout: 10000 });
  console.log('✅ Edit Vendor popup opened');

  // ── STEP 6: Fill the form inside popup ──

  // Company name
  await page.getByRole('textbox', { name: 'Name of Company:*' }).fill('DDA Company');

  // Date
  await page.getByRole('textbox', { name: 'Date of Establishment:' }).fill('2026-05-04');

  // Bank name
  await page.getByRole('textbox', { name: 'Name of Bank: Name of Bank:' }).fill('ICICI');

  // GST number
  await page.getByRole('textbox', { name: 'GST Number:' }).fill('896585214521455');

  // Registered office address
  await page.getByRole('textbox', { name: 'Registered Office Address:' }).fill('Building No-122');

  // Branch office address
  await page.getByRole('textbox', { name: 'Branch Office Address:' }).fill('Building No-123');

  // Branch city, district, state
  await page.locator('#branchCity').fill('Thane');
  await page.locator('#branchDistrict').fill('Mumbai');
  await page.locator('#branchState').fill('MAHARASHTRA');

  // Branch fax
  await page.locator('#branchFax').fill('7859656523');

  // Phone number
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9658999995');

  // Bank details
  await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).fill('THANE');
  await page.getByRole('textbox', { name: 'City / Place:' }).fill('THANE');
  await page.getByRole('textbox', { name: 'Account No.:' }).fill('142563256258');
  await page.getByLabel('Account Type:').selectOption('current');
  await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).fill('6589666965');
  await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).fill('9685969695');

  // Other bankers
  await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).fill('Details of other bankers is not available.');

  console.log('✅ Form filled');

  // ── STEP 7: Click Save Changes ──
  await expect(
    page.getByRole('button', { name: 'Save changes' })
  ).toBeVisible({ timeout: 10000 });
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.waitForLoadState('networkidle');
  console.log('✅ Save changes clicked');

  // ── STEP 8: Verify success popup ──
  await expect(page.locator('#swal2-title')).toContainText('Success');
  await expect(page.locator('#swal2-html-container')).toContainText('Vendor updated successfully.');
  await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForLoadState('networkidle');
  console.log('✅ Success popup closed');

  // ── STEP 9: Verify back on Manage Vendor page ──
  await expect(
    page.getByRole('heading', { name: 'Manage Vendor' })
  ).toBeVisible();
  console.log('✅ Vendor updated successfully');

});