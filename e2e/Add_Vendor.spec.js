//Vendore-Add Vendor
// import { test, expect } from '@playwright/test';
// test('canteen_login', async ({ page }) => {
//    // No login needed — session already saved
//   await page.goto('http://127.0.0.1:8000/dashboard');
// //navigate to vendor page
// await page.getByRole('link', { name: ' Management ' }).click();
// await page.getByRole('link', { name: ' Vendor ' }).click();
// await page.getByRole('link', { name: ' Add Vendor' }).click();
// await page.locator('select[name="campus_id"]').selectOption('1');
// page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.dismiss().catch(() => {});
//   });
//   //select date of corporation
//   await page.getByRole('textbox', { name: 'Date of Corporation' }).fill('2026-05-15');
//   //fill all the details
//   await page.getByRole('textbox', { name: 'Name of Company*' }).click();
//   await page.getByRole('textbox', { name: 'Name of Company*' }).fill('xyz company');

//   await page.getByRole('textbox', { name: 'GST Number of Company' }).click();
//   await page.getByRole('textbox', { name: 'GST Number of Company' }).fill('GST123654789652');

//   await page.getByRole('textbox', { name: 'Cheque Name of Company' }).click();
//   await page.getByRole('textbox', { name: 'Cheque Name of Company' }).fill('abcd');

//   await page.getByRole('textbox', { name: 'Work Description' }).click();
//   await page.getByRole('textbox', { name: 'Work Description' }).fill('abcdef');

//   await page.locator('input[name="registered_address"]').click();
//   await page.locator('input[name="registered_address"]').fill('flat 202');

//   await page.locator('input[name="registered_city"]').click();
//   await page.locator('input[name="registered_city"]').fill('mumbai');

//   await page.locator('input[name="registered_district"]').click();
//   await page.locator('input[name="registered_district"]').fill('mumbai');

//   await page.locator('input[name="registered_state"]').click();
//   await page.locator('input[name="registered_state"]').fill('maharashra');

//   await page.locator('input[name="registered_fax"]').click();
//   await page.locator('input[name="registered_fax"]').fill('8596321478');

//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('amruta123@gmail.com');

//   await page.getByRole('textbox', { name: 'Website' }).click();
//   await page.getByRole('textbox', { name: 'Website' }).fill('xyzcompayn.in');

//   await page.locator('input[name="branch_address"]').click();
//   await page.locator('input[name="branch_address"]').fill('mulund');

// await page.locator('input[name="branch_city"]').click();
// await page.locator('input[name="branch_city"]').fill('mumbai');

// await page.locator('input[name="branch_district"]').click();
// await page.locator('input[name="branch_district"]').fill('maharashra');

// await page.locator('input[name="branch_state"]').click();
// await page.locator('input[name="branch_state"]').fill('maharashra');

// await page.locator('input[name="branch_fax"]').click();
// await page.locator('input[name="branch_fax"]').fill('7896541236');

// await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
// await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9985654521');

// await page.getByRole('textbox', { name: 'Name of Bank:' }).click();
// await page.getByRole('textbox', { name: 'Name of Bank:' }).fill('sbi bank');

// await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).click();
// await page.getByRole('textbox', { name: 'Name of Bank Branch:' }).fill('mulund');

// await page.getByRole('textbox', { name: 'City / Place:' }).click();
// await page.getByRole('textbox', { name: 'City / Place:' }).fill('mumbai');

// await page.getByRole('textbox', { name: 'Account No.:' }).click();
// await page.getByRole('textbox', { name: 'Account No.:' }).fill('123658965235');

// await page.getByLabel('Account Type:').selectOption('savings');

// await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).click();
// await page.getByRole('textbox', { name: 'IFSC code of the bank branch:' }).fill('IFCS12547896');

// await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).click();
// await page.getByRole('textbox', { name: 'MICR code of the bank branch:' }).fill('123654789');

// await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).click();
// await page.getByRole('textbox', { name: 'Details of Other bankers (For' }).fill('NA');

//   // STEP 1 — Set dialog handler JUST BEFORE button click
//   page.once('dialog', async dialog => {
//     console.log('Dialog message:', dialog.message()); // "Are you sure?"
//     await dialog.accept(); //  Click OK
//   });
//   await page.waitForTimeout(3000);

//   // STEP 2 — Click Add Vendor button (triggers the popup)
//   await page.getByRole('button', { name: 'Add Vendor' }).click();

//   // STEP 3 — Verify success after popup
//   await expect(page.locator('#swal2-title')).toContainText('Success', { timeout: 10000 });
//   await page.getByRole('button', { name: 'OK' }).click();
// await page.waitForTimeout(3000);
//   //  STEP 4 — Verify Manage Vendor page
//   await expect(page.getByRole('heading')).toContainText('Manage Vendor');

// });

// e2e/Add_Vendor.spec.js
import { test, expect } from '@playwright/test';
import fs from 'fs';

// Create bug-reports folder if not exists
if (!fs.existsSync('e2e/bug-reports')) {

  fs.mkdirSync('e2e/bug-reports', { recursive: true });
}

test('add_vendor', async ({ page }) => {

  
  // Go to dashboard-
  
  await page.goto('http://127.0.0.1:8000/dashboard');

  // Navigate to Add Vendor-
 
  await page.getByRole('link', { name: ' Management ' }).click();
  await page.getByRole('link', { name: ' Vendor ' }).click();
  await page.getByRole('link', { name: ' Add Vendor' }).click();
  
  // Fill all form fields-
  
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

  
  // Handle dialog & Submit-
  
  // Handle "Are you sure?" dialog
  page.once('dialog', async dialog => {
    console.log('Dialog appeared:', dialog.message());
    await dialog.accept(); // Click OK
  });

  //  Click Add Vendor button
  await page.getByRole('button', { name: 'Add Vendor' }).click();

  //  Wait for page to respond
  await page.waitForLoadState('networkidle');

 //  Check for Bug or Success

  // Check if PHP error appeared
  const isBugVisible = await page.locator('text=ErrorException').isVisible();

  // Check if validation error appeared
  const isValidationError = await page.locator('.alert-danger').isVisible();

  // Check if success popup appeared
  const isSuccess = await page.locator('#swal2-title').isVisible();

 
  // Handle Each Scenario-
 
  if (isBugVisible) {

    // SCENARIO 1 — Backend Bug Found
    // Take full page screenshot
    if (isBugVisible) {

    // Take full page screenshot
    await page.screenshot({
      path: 'e2e/bug-reports/bug_add_vendor.png',
      fullPage: true
    });

    // FIXED — Try all possible Laravel error page selectors
    let errorMessage = 'Unknown Error';

    // Try each selector one by one
    const selectors = [
      'h2.text-red-600',
      '.exception-message',
      '.ignition-exception-message',
      'h2[class*="text"]',
      'p.text-lg',
      'h2',
    ];

    for (const selector of selectors) {
      try {
        const elements = page.locator(selector);
        const count = await elements.count();
        for (let i = 0; i < count; i++) {
          const text = await elements.nth(i).textContent();
          // Skip short/irrelevant text
          if (text && text.trim().length > 5 && text.trim() !== 'Browser') {
            errorMessage = text.trim();
            console.log(` Found error message with selector: ${selector}`);
            break;
          }
        }
        if (errorMessage !== 'Unknown Error') break;
      } catch (e) {
        continue;
      }
    }

    const currentUrl = page.url();

    console.log(`
    ==============================
    BUG REPORT
    ==============================
    Module     : Add Vendor
    URL        : ${currentUrl}
    Error      : ErrorException
    Message    : ${errorMessage}
    Expected   : Success popup should appear
    Actual     : PHP Backend error page appeared
    Screenshot : e2e/bug-reports/bug_add_vendor.png
    Status     : ❌ FAILED — Backend Bug
    ==============================
    `);

    throw new Error(` Backend Bug Found — ${errorMessage}`);

  }

    // SCENARIO 2 — Validation Error Found
    await page.screenshot({
      path: 'e2e/bug-reports/validation_error_add_vendor.png',
      fullPage: true
    });

    // FIXED — Use .first() to avoid multiple elements
    const validationMessage = await page.locator('.alert-danger').first().textContent().catch(() => 'Unknown Validation Error');

    console.log(`
    ==============================
     VALIDATION ERROR REPORT
    ==============================
    Module     : Add Vendor
    URL        : ${page.url()}
    Error      : Form Validation Failed
    Message    : ${validationMessage?.trim()}
    Expected   : Success popup should appear
    Actual     : Validation error appeared
    Screenshot : e2e/bug-reports/validation_error_add_vendor.png
    Status     : ❌ FAILED — Validation Error
    ==============================
    `);

    throw new Error(` Validation Error Found — ${validationMessage?.trim()}`);

  } else if (isSuccess) {

    // SCENARIO 3 — Success
    console.log(`
    ==============================
    TEST PASSED
    ==============================
    Module     : Add Vendor
    URL        : ${page.url()}
    Status     : PASSED — Vendor added successfully
    ==============================
    `);

    // Verify success popup
    await expect(page.locator('#swal2-title')).toContainText('Success', { timeout: 10000 });
    await page.getByRole('button', { name: 'OK' }).click();

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Verify Manage Vendor page
    await expect(page.getByRole('heading')).toContainText('Manage Vendor');

    // Take success screenshot
    await page.screenshot({
      path: 'e2e/bug-reports/success_add_vendor.png',
      fullPage: true
    });

  } else {

    // SCENARIO 4 — Unknown Error
    await page.screenshot({
      path: 'e2e/bug-reports/unknown_error_add_vendor.png',
      fullPage: true
    });

    // Get current page title and url for more info
    const pageTitle = await page.title();
    const currentUrl = page.url();

    console.log(`
    ==============================
    ❓ UNKNOWN ERROR REPORT
    ==============================
    Module     : Add Vendor
    URL        : ${currentUrl}
    Page Title : ${pageTitle}
    Error      : Unknown error occurred
    Expected   : Success popup
    Actual     : Unknown response
    Screenshot : e2e/bug-reports/unknown_error_add_vendor.png
    Status     : ❌ FAILED — Unknown Error
    ==============================
    `);

    throw new Error(`❓ Unknown error on page: ${pageTitle} — check screenshot`);

  }

});