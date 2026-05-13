//management-vender-manage vender module test
import { test, expect } from '@playwright/test';
import fs from 'fs';
// Create bug-reports folder if not exists
if (!fs.existsSync('e2e/bug-reports')) {
  fs.mkdirSync('e2e/bug-reports', { recursive: true });
}

test('add_vendor', async ({ page }) => {

  // ============================
  // STEP 1 — Go to dashboard
  // ============================
  await page.goto('http://127.0.0.1:8000/dashboard');

  await page.getByRole('link', { name: ' Management ' }).click();
await page.getByRole('link', { name: ' Vendor ' }).click();
await page.getByRole('link', { name: ' Manage Vendor' }).click();
await expect(page.getByRole('heading', { name: 'Manage Vendor' })).toBeVisible();
await page.getByLabel('Show :').selectOption('100');
await page.goto('http://127.0.0.1:8000/managevendor?limit=100&page=1');
await page.getByLabel('Show :').selectOption('500');
await page.goto('http://127.0.0.1:8000/managevendor?limit=500&page=1');
await page.getByLabel('Show :').selectOption('1000');
await page.goto('http://127.0.0.1:8000/managevendor?limit=1000&page=1');
await page.getByLabel('Show :').selectOption('all');
await page.goto('http://127.0.0.1:8000/managevendor?limit=all&page=1');
await page.locator('select[name="campus_id"]').selectOption('1');
await page.goto('http://127.0.0.1:8000/managevendor?campus_id=1');
await page.locator('select[name="campus_id"]').selectOption('2');
await page.goto('http://127.0.0.1:8000/managevendor?campus_id=2');
await page.getByRole('searchbox', { name: 'Search Name of vendor' }).click();
await page.getByRole('searchbox', { name: 'Search Name of vendor' }).fill('');
await page.getByRole('link', { name: 'Update Vendor' }).first().click();
await expect(page.getByRole('heading', { name: 'Edit Vendor' })).toBeVisible();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('textbox', { name: 'Date of Establishment:' }).fill('2026-05-15');
await page.getByRole('textbox', { name: 'Name of Company*:' }).click();
await page.getByRole('textbox', { name: 'Name of Company*:' }).press('ArrowRight');

await page.getByRole('textbox', { name: 'Name of Company*:' }).fill('JAI HANUMAN HP GAS GRAMIN VITRAK 123');
await page.getByRole('textbox', { name: 'GST Number:' }).dblclick();
await page.getByRole('textbox', { name: 'GST Number:' }).fill('1452585655555');
await page.getByRole('textbox', { name: 'Cheque Name of Company' }).click();
await page.getByRole('textbox', { name: 'Cheque Name of Company' }).fill('ASE');
await page.getByRole('textbox', { name: 'Work Description:' }).dblclick();
await page.getByRole('textbox', { name: 'Work Description:' }).fill('NA');
await page.getByRole('textbox', { name: 'Registered Office Address:' }).click();

await page.getByRole('textbox', { name: 'Registered Office Address:' }).press('ArrowRight');

await page.getByRole('textbox', { name: 'Registered Office Address:' }).fill('VILL+PO-PASTAN, PS-ANDHARATHADI 123');
await page.locator('#registeredCity').click();
await page.locator('#registeredCity').fill('MADHUBANI 123');
await page.locator('#registeredDistrict').click();
await page.locator('#registeredDistrict').fill('MADHUBANI 123');
await page.locator('#registeredState').click();
await page.locator('#registeredState').fill('BIHARr');
await page.locator('#editForm div').filter({ hasText: 'Registered Office Address:' }).click();

await page.locator('#registeredState').press('Enter');
await page.locator('#editForm div').filter({ hasText: 'Registered Office Address:' }).click();

await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('amruta@gmail.com');
await page.getByRole('textbox', { name: 'Website' }).click();
await page.getByRole('textbox', { name: 'Website' }).fill('xyz@company.in');
await page.getByRole('textbox', { name: 'Branch Office Address:' }).click();
await page.getByRole('textbox', { name: 'Branch Office Address:' }).fill('flat 123');
await page.locator('#branchCity').click();
await page.locator('#branchCity').fill('mumbai');
await page.locator('#branchDistrict').click();
await page.locator('#branchDistrict').fill('mumbai');
await page.locator('#branchState').click();
await page.locator('#branchState').fill('maharashra');
await page.locator('#branchFax').click();
await page.locator('#branchFax').fill('1452487545658');
await page.getByRole('textbox', { name: 'Contact No.' }).click();
await page.getByRole('textbox', { name: 'Contact No.' }).fill('9658965896');
await page.getByRole('textbox', { name: 'Name of Bank:' }).click();
await page.getByRole('textbox', { name: 'Name of Bank:' }).fill('SBI bank');
await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).click();
await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).fill('mulund');
await page.getByRole('textbox', { name: 'City / Place:' }).click();
await page.getByRole('textbox', { name: 'City / Place:' }).fill('mulund');
await page.getByRole('textbox', { name: 'Account No.:' }).click();
await page.getByRole('textbox', { name: 'Account No.:' }).fill('124587896589');
await page.getByLabel('Account Type:').selectOption('current');
await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).click();
await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).fill('4875845555485');
await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).click();
await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).fill('48578885458545');
await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).click();
await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).fill('NA');
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Save changes' }).click();
await expect(page.getByRole('button', { name: 'Save changes' })).toBeVisible();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Save changes' }).click();

});
