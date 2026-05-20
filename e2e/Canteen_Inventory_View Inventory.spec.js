//canteen inventory-> view inventory test 
import { test, expect } from '@playwright/test';
import fs from 'fs';

//  Create downloads folder if not exists
if (!fs.existsSync('e2e/downloads')) {
  fs.mkdirSync('e2e/downloads', { recursive: true });
}

test('canteen_inventory_material', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

//Add canteen inventory-> material module test
await page.locator('a').filter({ hasText: 'Canteen Inventory' }).first().click();
 //material tab click
await page.getByRole('link', { name: ' View Inventory' }).click();
await expect(page.getByRole('heading', { name: 'View Inventory', exact: true })).toBeVisible();
// select campus for view inventory
  await page.locator('select[name="campus_id"]').selectOption('2');
  await page.goto('http://127.0.0.1:8000/cinventory?campus_id=2');

  await page.locator('select[name="campus_id"]').selectOption('1');
  await page.goto('http://127.0.0.1:8000/cinventory?campus_id=1');
  //search parameter in inventory
  await page.getByRole('searchbox', { name: 'Search any Parameter' }).click();
  await page.getByRole('searchbox', { name: 'Search any Parameter' }).fill('');
  //fill the date for view inventory
  await page.locator('#startDate').fill('2025-01-01');
  await page.locator('#endDate').fill('2026-05-14');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
   //await page.getByRole('button', { name: 'Download' }).click();
  await expect(page.getByRole('link', { name: 'Download' })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Reset...' })).toBeVisible();

// ============================
  // DELETE INVENTORY ENTRY
  // ============================

  // Search for the specific entry first
  await page.getByRole('searchbox', { name: 'Search any Parameter' }).fill('SHANKAR SABJI');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);

  // Check if row exists before clicking
  const rowExists = await page.getByRole('row', { name: /SHANKAR SABJI/i }).isVisible();

  if (rowExists) {

    // Handle "Are you sure?" dialog
    page.once('dialog', async dialog => {
      console.log('Dialog:', dialog.message());
      await dialog.accept(); // Click OK to delete
    });

    // Click delete button in that row
    await page.getByRole('row', { name: /SHANKAR SABJI/i })
      .locator('button')
      .click();

    await page.waitForLoadState('networkidle');
    console.log(' Inventory entry deleted successfully');

  } else {
    console.log(' Row not found — may already be deleted or name is different');
  }
   
  //select show entry for view inventory
  await page.getByLabel('Show :').selectOption('100');
  await page.goto('http://127.0.0.1:8000/cinventory?campus_id=&start_date=2026-05-01&end_date=2026-05-14&limit=100&page=1');
  await page.getByLabel('Show :').selectOption('500');
  await page.goto('http://127.0.0.1:8000/cinventory?campus_id=&start_date=2026-05-01&end_date=2026-05-14&limit=500&page=1');
  await page.getByLabel('Show :').selectOption('1000');
  await page.goto('http://127.0.0.1:8000/cinventory?campus_id=&start_date=2026-05-01&end_date=2026-05-14&limit=1000&page=1');
  await page.getByLabel('Show :').selectOption('all');
  await page.goto('http://127.0.0.1:8000/cinventory?campus_id=&start_date=2026-05-01&end_date=2026-05-14&limit=all&page=1');
  
  
 // ============================
  // EXPORT BUTTON + DOWNLOAD
  // ============================

  //  Verify Export button visible
  await expect(page.getByRole('link', { name: 'Export' })).toBeVisible();

  //  STEP 1 — Listen for download BEFORE click
  const downloadPromise = page.waitForEvent('download');

  // STEP 2 — Click Export button
  await page.getByRole('link', { name: 'Export' }).click();

  //  STEP 3 — Wait for download
  const download = await downloadPromise;

  //  STEP 4 — Get file name
  const fileName = download.suggestedFilename();

  //  STEP 5 — Save file
  const filePath = `e2e/downloads/${fileName}`;
  await download.saveAs(filePath);

  //  STEP 6 — Check file exists
  const fileExists = fs.existsSync(filePath);

  //  STEP 7 — Check file size
  const fileSize = fs.statSync(filePath).size;

  //  STEP 8 — Assert download success
  expect(fileExists).toBeTruthy();
  expect(fileSize).toBeGreaterThan(0);

  //  STEP 9 — Print download report
  console.log(`
  ==============================
  📥 DOWNLOAD REPORT
  ==============================
  File Name  : ${fileName}
  File Path  : ${filePath}
  File Size  : ${fileSize} bytes
  Downloaded : ${fileExists ? '✅ YES' : '❌ NO'}
  ==============================
  `);

  // ============================
  // VERIFY PAGE
  // ============================
  await expect(page.getByRole('heading', { name: 'View Inventory' })).toBeVisible();

});
 