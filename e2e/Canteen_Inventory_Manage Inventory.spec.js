//canteen inventory-> manage inventory test 
// ✅ ADD THESE AT THE VERY TOP OF YOUR FILE
import { test, expect } from '@playwright/test';
import fs from 'fs'; // ← ADD THIS LINE

// ✅ Create downloads folder
if (!fs.existsSync('e2e/downloads')) {
  fs.mkdirSync('e2e/downloads', { recursive: true });
}

test('canteen_inventory_manage_inventory', async ({ page }) => {
  // ... rest of your code


  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');


//Add canteen inventory-> manage inventory module test
await page.locator('a').filter({ hasText: 'Canteen Inventory' }).first().click();
 //manage inventory tab click
await page.getByRole('link', { name: ' manage inventory' }).click();
await expect(page.getByRole('heading', { name: 'Manage Inventory', exact: true })).toBeVisible();
  
//add manage inventory details
  await page.locator('select[name="campus_id"]').selectOption('1');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=1');
  await page.locator('select[name="campus_id"]').selectOption('2');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=2');
  //search with different parameters
  await page.getByRole('searchbox', { name: 'Search Any Parameter' }).click();
  await page.getByRole('searchbox', { name: 'Search Any Parameter' }).fill('12');
  //select different pagination options
  await page.getByLabel('Show :').selectOption('100');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=2&limit=100&page=1');
  await page.getByLabel('Show :').selectOption('500');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=2&limit=500&page=1');
  await page.getByLabel('Show :').selectOption('1000');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=2&limit=1000&page=1');
  await page.getByLabel('Show :').selectOption('all');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=2&limit=all&page=1');
  
 //select All campuse
  await page.locator('select[name="campus_id"]').selectOption('');
  await page.goto('http://127.0.0.1:8000/managecinventory?campus_id=');

  // ============================
  // DOWNLOAD CSV
  // ============================

  // ✅ Verify Download CSV button visible
  await expect(page.getByRole('button', { name: 'Download as CSV' })).toBeVisible();

  // ✅ STEP 1 — Listen for download BEFORE click
  const downloadPromise = page.waitForEvent('download');

  // ✅ STEP 2 — Click Download as CSV button
  await page.getByRole('button', { name: 'Download as CSV' }).click();

  // ✅ STEP 3 — Wait for download
  const download = await downloadPromise;

  // ✅ STEP 4 — Get file name
  const fileName = download.suggestedFilename();

  // ✅ STEP 5 — Save file to downloads folder
  const filePath = `e2e/downloads/${fileName}`;
  await download.saveAs(filePath);

  // ✅ STEP 6 — Check file exists
  const fileExists = fs.existsSync(filePath);

  // ✅ STEP 7 — Check file size
  const fileSize = fs.statSync(filePath).size;

  // ✅ STEP 8 — Assert download success
  expect(fileExists).toBeTruthy();
  expect(fileSize).toBeGreaterThan(0);
  expect(fileName).toContain('.csv'); // ✅ must be CSV file

  // ✅ STEP 9 — Print download report
  console.log(`
  ==============================
  📥 CSV DOWNLOAD REPORT
  ==============================
  File Name  : ${fileName}
  File Path  : ${filePath}
  File Size  : ${fileSize} bytes
  File Type  : CSV ✅
  Downloaded : ${fileExists ? '✅ YES' : '❌ NO'}
  ==============================
  `);

  // //send stock
  // await page.getByRole('link', { name: 'Send Stock' }).first().click();
  // await expect(page.getByRole('heading', { name: 'Send Stock' })).toBeVisible();
  // await page.getByRole('spinbutton', { name: 'Quantity to Use (Kg/Ltr)*' }).click();
  // await page.getByRole('spinbutton', { name: 'Quantity to Use (Kg/Ltr)*' }).fill('0');
  // await page.getByRole('textbox', { name: 'Scheduled Date*' }).fill('2026-05-13');
  
  // page.once('dialog', dialog => {
  //   console.log(`Dialog message: ${dialog.message()}`);
  //   dialog.dismiss().catch(() => {});
  // });
  // await page.getByRole('button', { name: 'Save changes' }).click();
 
// ============================
  // SEND STOCK
  // ============================

  // Click Send Stock
  await page.getByRole('link', { name: 'Send Stock' }).first().click();
  await expect(page.getByRole('heading', { name: 'Send Stock' })).toBeVisible();

  // Fill send stock details
  await page.getByRole('spinbutton', { name: 'Quantity to Use (Kg/Ltr)*' }).fill('0');
  await page.getByRole('textbox', { name: 'Scheduled Date*' }).fill('2026-05-13');

  // ✅ Handle dialog BEFORE click
  page.once('dialog', async dialog => {
    console.log('✅ Dialog:', dialog.message());
    await dialog.accept(); // Click OK
  });

  // Click Save changes
  await page.getByRole('button', { name: 'Save changes' }).click();
  await page.waitForLoadState('networkidle');

  // ============================
  // VERIFY PAGE
  // ============================
  await expect(page.getByRole('heading', { name: 'Manage Inventory' })).toBeVisible();

  
});
 