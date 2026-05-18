//canteen inventory-> Revert Stock / History test 
import { test, expect } from '@playwright/test';

test('canteen_inventory_revert_stock_history', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/revertcstock');

  //Add canteen inventory-> material module test
await page.locator('a').filter({ hasText: 'Canteen Inventory' }).first().click();
  await expect(page.getByRole('heading', { name: 'Revert Stock / History' })).toBeVisible();

  await page.locator('select[name="campus_id"]').selectOption('1');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=1');
  await page.locator('select[name="campus_id"]').selectOption('2');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=2');
  await page.locator('select[name="campus_id"]').selectOption('');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=');
  await page.locator('select[name="campus_id"]').selectOption('1');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=1');
  //search material in inventory
  await page.getByRole('searchbox', { name: 'Search any Parameter' }).click();
  await page.getByRole('searchbox', { name: 'Search any Parameter' }).fill('');
  //search starting and ending date for revert stock history
  await page.locator('#startDate').fill('2025-05-01');
  await page.locator('#endDate').fill('2026-05-14');
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  //click on download by stock and schedule button
  await expect(page.getByRole('button', { name: 'Download By Stock' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Download By Stock' }).click();
  await expect(page.getByRole('button', { name: 'Download By Schedule' })).toBeVisible();
  await page.getByLabel('Show :').selectOption('100');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=1&limit=100&page=1');
  await page.getByLabel('Show :').selectOption('500');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=1&limit=500&page=1');
  await page.getByLabel('Show :').selectOption('1000');
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=1&limit=1000&page=1');
  await page.getByLabel('Show :').selectOption('all');
//  // ============================
//   // EXPORT BUTTON + DOWNLOAD
//   // ============================

//   // ✅ FIXED — Export is a BUTTON not a link
//   await expect(page.getByRole('button', { name: 'Export' })).toBeVisible();

//   // ✅ Listen for download BEFORE click
//   const exportPromise = page.waitForEvent('download');

//   // ✅ Click Export BUTTON
//   await page.getByRole('button', { name: 'Export' }).click();

//   const exportDownload = await exportPromise;
//   const exportFileName = exportDownload.suggestedFilename();
//   const exportFilePath = `e2e/downloads/${exportFileName}`;
//   await exportDownload.saveAs(exportFilePath);

//   const exportFileExists = fs.existsSync(exportFilePath);
//   const exportFileSize = fs.statSync(exportFilePath).size;
//   expect(exportFileExists).toBeTruthy();
//   expect(exportFileSize).toBeGreaterThan(0);

//   console.log(`
//   ==============================
//   📥 EXPORT DOWNLOAD REPORT
//   ==============================
//   File Name  : ${exportFileName}
//   File Size  : ${exportFileSize} bytes
//   Downloaded : ${exportFileExists ? '✅ YES' : '❌ NO'}
//   ==============================
//   `);

//   // ============================
//   // VERIFY FINAL PAGE
//   // ============================
//   await expect(page.getByRole('heading', { name: 'Revert Stock / History' })).toBeVisible();
 
  await page.goto('http://127.0.0.1:8000/revertcstock?campus_id=1&limit=1000&page=1#');
  await expect(page.getByRole('spinbutton', { name: 'Quantity to Revert*' })).toBeVisible();
  await page.getByRole('button', { name: 'Quantity to Revert' }).click();
   await page.getByRole('spinbutton', { name: 'Quantity to Revert*' }).fill('10');

  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();


  });

