

//canteen inventory-> Revert Stock / History test 

import { test, expect } from '@playwright/test';

test('canteen_inventory_revert_stock_history', async ({ page }) => {


  // Open page
  await page.goto('http://127.0.0.1:8000/revertcstock');

  // Click Canteen Inventory menu
  await page.locator('a').filter({ hasText: 'Canteen Inventory' }).first().click();

  // Verify page heading
  await expect(page.getByRole('heading', { name: 'Revert Stock / History' })).toBeVisible();

  // Select campus
  await page.locator('select[name="campus_id"]').selectOption('1');

  // Search
  await page.getByRole('searchbox', { name: 'Search any Parameter' }).fill('');

  // Date filter
  await page.locator('#startDate').fill('2025-05-01');
  await page.locator('#endDate').fill('2026-05-14');

  // Search button
  await page.getByRole('button', { name: 'Search' }).click();

  // Download buttons
  await expect(page.getByRole('button', { name: 'Download By Stock' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Download By Schedule' })).toBeVisible();

  // Handle dialog
  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
  });

  await page.getByRole('button', { name: 'Download By Stock' }).click();

  // Show entries
  await page.getByLabel('Show :').selectOption('100');

  // Wait for table load
  await page.waitForTimeout(2000);

 
  // Revert Stock Section
  
  // Click first Quantity to Revert button
  await expect(page.getByRole('button', { name: 'Quantity to Revert' }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Quantity to Revert' }).first().click();

  // Wait for popup input
  await expect(page.locator('input[name="revert_quantity"]')).toBeVisible();

  // Fill quantity
  await page.locator('input[name="revert_quantity"]').fill('10');

  // Submit dialog handling
  page.once('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  // Click submit
  await page.getByRole('button', { name: 'Submit' }).click();

  // Final verification
  await expect(page.getByRole('heading', { name: 'Revert Stock / History' })).toBeVisible();

});

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

  // EXPORT BUTTON + DOWNLOAD(remaining)
 
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

