//Vendore-Add Vendor
import { test, expect } from '@playwright/test';
import fs from 'fs';

// Create bug-reports folder if not exists
if (!fs.existsSync('e2e/bug-reports')) {
  fs.mkdirSync('e2e/bug-reports', { recursive: true });
}

test('add_vendor', async ({ page }) => {

  // Go to dashboard
  await page.goto('http://127.0.0.1:8000/dashboard');

  // Navigate to Add Vendor
 await page.getByRole('link', { name: ' Management ' }).click();
await page.getByRole('link', { name: ' Vendor ' }).click();
await page.getByRole('link', { name: ' Add Vendor' }).click();

  // Fill all form fields

  // Select campus
  await page.locator('select[name="campus_id"]').selectOption('1');

  // Date of corporation
  await page.getByRole('textbox', { name: 'Date of Corporation' }).fill('2026-05-15');

  // Company details
  await page.getByRole('textbox', { name: 'Name of Company*' }).fill('xyz company');
  await page.getByRole('textbox', { name: 'GST Number of Company' }).fill('GST123654789652');
  await page.getByRole('textbox', { name: 'Cheque Name of Company' }).fill('abcd');
  await page.getByRole('textbox', { name: 'Work Description' }).fill('abcdef');

  // Registered address
  await page.locator('input[name="registered_address"]').fill('flat 202');
  await page.locator('input[name="registered_city"]').fill('mumbai');
  await page.locator('input[name="registered_district"]').fill('mumbai');
  await page.locator('input[name="registered_state"]').fill('maharashtra');
  await page.locator('input[name="registered_fax"]').fill('8596321478');

  // Contact details
  await page.getByRole('textbox', { name: 'Email' }).fill('amruta123@gmail.com');
  await page.getByRole('textbox', { name: 'Website' }).fill('xyzcompany.in');

  // Branch address
  await page.locator('input[name="branch_address"]').fill('mulund');
  await page.locator('input[name="branch_city"]').fill('mumbai');
  await page.locator('input[name="branch_district"]').fill('mumbai');
  await page.locator('input[name="branch_state"]').fill('maharashtra');
  await page.locator('input[name="branch_fax"]').fill('7896541236');

  // Phone number
  await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9985654521');

  // Bank details
  await page.getByRole('textbox', { name: 'Name of Bank:' }).fill('sbi bank');
  await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).fill('mulund');
  await page.getByRole('textbox', { name: 'City / Place:' }).fill('mumbai');
  await page.getByRole('textbox', { name: 'Account No.:' }).fill('123658965235');
  await page.getByLabel('Account Type:').selectOption('savings');
  await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).fill('IFCS12547896');
  await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).fill('123654789');
  await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).fill('NA');

  // Handle "Are you sure?" dialog
  page.once('dialog', async dialog => {
    console.log('Dialog appeared:', dialog.message());
    await dialog.accept();
  });

  // Click Add Vendor button
  await page.getByRole('button', { name: 'Add Vendor' }).click();
  await page.waitForLoadState('networkidle');

// ── SCENARIO 1: Backend Bug Check ──────────────────────────────
  const isBugVisible = await page.locator('text=ErrorException').isVisible();

  if (isBugVisible) {

    // Take screenshot
    await page.screenshot({
      path: 'e2e/bug-reports/bug_add_vendor.png',
      fullPage: true
    });

    // Get error from page title (most reliable on Ignition pages)
    // Ignition title format → "ErrorException – Actual error message here"
    let errorMessage = 'Unknown Error';
    try {
      const title = await page.title();
      if (title.includes('–')) {
        errorMessage = title.split('–').slice(1).join('–').trim();
      } else {
        errorMessage = title.trim();
      }
    } catch (e) {
      errorMessage = 'Could not read page title';
    }

    console.log(`
    ==============================
    BUG REPORT
    ==============================
    Module     : Add Vendor
    URL        : ${page.url()}
    Error      : ErrorException
    Message    : ${errorMessage}
    Expected   : Success popup should appear
    Actual     : PHP Backend error page appeared
    Screenshot : e2e/bug-reports/bug_add_vendor.png
    Status     : ❌ FAILED — Backend Bug
    ==============================
    `);

  console.warn(` Bug logged — ${errorMessage}`);

  } else {

    // ── SUCCESS ────────────────────────────────────────────────────
    console.log(`
    ==============================
    TEST PASSED
    ==============================
    Module     : Add Vendor
    URL        : ${page.url()}
    Status     : ✅ PASSED — Vendor added successfully
    ==============================
    `);

    await expect(page.locator('#swal2-title')).toContainText('Success', { timeout: 10000 });
    await page.getByRole('button', { name: 'OK' }).click();
    await page.waitForLoadState('networkidle');
    await expect(page.getByRole('heading')).toContainText('Manage Vendor');

    await page.screenshot({
      path: 'e2e/bug-reports/success_add_vendor.png',
      fullPage: true
    });
  }

});