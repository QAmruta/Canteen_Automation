//university inventory-> vendor-> Add vendor module test 
import { test, expect } from '@playwright/test';

test('university_inventory_vendor_Add_Vendor', async ({ page }) => {

 //Add vendor module test 
 await page.goto('http://127.0.0.1:8000/dashboard');
// tab navigation

await page.getByRole('link', { name: ' Inventory ' }).click();
await page.getByRole('link', { name: ' University Inventory ' }).click();
await page.locator('a').filter({ hasText: 'Vendor' }).nth(4).click();
await page.getByRole('link', { name: ' Add Vendor' }).click();
//Add vender details filled
await expect(page.getByRole('heading', { name: 'Add Vendor' })).toBeVisible();
await page.getByRole('textbox', { name: 'Date of Corporation' }).fill('2026-05-12');
//Add name of company do not duplicate
await page.getByRole('textbox', { name: 'Name of Company*' }).click();
await page.getByRole('textbox', { name: 'Name of Company*' }).fill('DDQ Company');
//Add GST Number of Company
await page.getByRole('textbox', { name: 'GST Number of Company' }).click();
await page.getByRole('textbox', { name: 'GST Number of Company' }).fill('145211112111212');
//Add Work Description
await page.getByRole('textbox', { name: 'Work Description' }).click();
await page.getByRole('textbox', { name: 'Work Description' }).fill('NA');
//Add registered_address
await page.locator('input[name="registered_address"]').click();
await page.locator('input[name="registered_address"]').fill('Building No-123');
//Add registered_city
await page.locator('input[name="registered_city"]').click();
await page.locator('input[name="registered_city"]').fill('mulund');
//Add registered_district
await page.locator('input[name="registered_district"]').click();
await page.locator('input[name="registered_district"]').fill('Mumbai');
//Add registered_state
await page.locator('input[name="registered_state"]').click();
await page.locator('input[name="registered_state"]').fill('maharashtra');
//Add registered_fax
await page.locator('input[name="registered_fax"]').click();
await page.locator('input[name="registered_fax"]').fill('5466985558');
//Add email
await page.getByRole('textbox', { name: 'Email' }).click();
await page.getByRole('textbox', { name: 'Email' }).fill('alphaa@gmail.com');
//Add official website
await page.getByRole('textbox', { name: 'Website' }).press('ArrowLeft');
await page.getByRole('textbox', { name: 'Website' }).fill('alphaaofficial@gmail.com');
//Add branch_address
await page.locator('input[name="branch_address"]').dblclick();
await page.locator('input[name="branch_address"]').fill('Building No-123');
//Add branch_city
await page.locator('input[name="branch_city"]').click();
await page.locator('input[name="branch_city"]').fill('mulund');
//Add branch_district
await page.locator('input[name="branch_district"]').click();
await page.locator('input[name="branch_district"]').fill('mumbai');
//Add branch_state
await page.locator('input[name="branch_state"]').click();
await page.locator('input[name="branch_state"]').fill('maharashra');
//Add branch_fax
await page.locator('input[name="branch_fax"]').click();
await page.locator('input[name="branch_fax"]').fill('9586666555');
//Add phone number
await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9689650966');
// Add name of bank
await page.getByRole('textbox', { name: 'Name of Bank:' }).click();
await page.getByRole('textbox', { name: 'Name of Bank:' }).fill('ICICI bank');
// Add name of bank branch
await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).click();
await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).fill('Mulund');
//Add City / Place
await page.getByRole('textbox', { name: 'City / Place:' }).click();
await page.getByRole('textbox', { name: 'City / Place:' }).fill('mulund');
//Add Account No.
await page.getByRole('textbox', { name: 'Account No.:' }).click();
await page.getByRole('textbox', { name: 'Account No.:' }).fill('18965896658');
//Select Account Type
await page.getByLabel('Account Type:').selectOption('savings');
//Add IFSC code of the bank branch
await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).click();
await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).fill('89655523337');
//Add MICR code of the bank branch
await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).click();
await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).fill('885955560');
// Add details of other bankers
await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).click();
await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).fill('NA');

  //  Handle "Are you sure?" dialog BEFORE clicking 
  page.once('dialog', async dialog => {
    console.log('Dialog message:', dialog.message());
    await dialog.accept();
  });

  //  Click Add Vendor 
  await expect(page.getByRole('button', { name: 'Add Vendor' })).toBeVisible();
  await page.getByRole('button', { name: 'Add Vendor' }).click();
  await page.waitForLoadState('networkidle');

  //  Check Result 
  const isDuplicateError = await page.locator('text=This company already exists.').isVisible();

  if (isDuplicateError) {

    // DUPLICATE NAME — Validation Working
    console.log(`
    ==============================
    VALIDATION WORKING
    ==============================
    Module   : Add Vendor
    Field    : Name of Company
    Message  : This company already exists.
    Expected : Duplicate company blocked
    Actual   : Validation message appeared
    Status   : ✅ PASSED
    ==============================
    `);

    // Verify message is visible on screen
    await expect(
      page.locator('text=This company already exists.')
    ).toBeVisible();

  } else {

    // NEW COMPANY — Success 
    console.log(`
    ==============================
    TEST PASSED
    ==============================
    Module   : Add Vendor
    Status   : Vendor added successfully
    ==============================
    `);

    await expect(page.locator('#swal2-title')).toContainText('Success');
    await expect(page.locator('#swal2-html-container')).toContainText('Vendor added successfully');
    await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForLoadState('networkidle');

    // Verify Manage Vendor page opened
    await expect(page.getByRole('heading', { name: 'Manage Vendor' })).toBeVisible();
    console.log(' Navigated to Manage Vendor page');
  }

});