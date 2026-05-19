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

  // ==========================
  // Revert Stock Section
  // ==========================

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