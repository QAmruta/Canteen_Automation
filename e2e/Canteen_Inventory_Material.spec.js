//canteen inventory-> material add and search 
import { test, expect } from '@playwright/test';

test('canteen_inventory_material', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

//Add canteen inventory-> material module test
await page.locator('a').filter({ hasText: 'Canteen Inventory' }).first().click();
 //material tab click
await page.getByRole('link', { name: ' Material' }).click();
await expect(page.getByRole('heading', { name: 'Material', exact: true })).toBeVisible();
  //add material details
  //add campus
  await page.locator('#addMaterialForm select[name="campus_id"]').selectOption('1');
  await page.locator('#addMaterialForm select[name="campus_id"]').selectOption('2');
  //material name do not add duplicate material name for same campus because material are common for both campus and it will be reused. if you want to add new material then select other category and add new category name.
  await page.getByRole('textbox', { name: 'Material Name*' }).click();
  await page.getByRole('textbox', { name: 'Material Name*' }).fill('bottal water');
  //select type
  await page.getByLabel('Type KG/Ltr*').selectOption('NO');
  //enter hsm code
  await page.getByRole('textbox', { name: 'HSM Code' }).click();
  await page.getByRole('textbox', { name: 'HSM Code' }).fill('12006');
  //select new category
  await page.getByLabel('Category*', { exact: true }).selectOption('other');
  await page.getByRole('textbox', { name: 'New Category*' }).click();
  await page.getByRole('textbox', { name: 'New Category*' }).fill('water');
  //add material button visibale and click
  await expect(page.getByRole('button', { name: 'Add Material' })).toBeVisible();
  // visibal note for material
  await expect(page.locator('body')).toContainText('Materials are common for Nashik & Sijoul campuses. Please do not add duplicate materials. Existing materials will be reused.');
  await page.getByRole('button', { name: 'Add Material' }).click();
    //success popup should be visible
  await expect(page.getByRole('heading', { name: 'Material added successfully' })).toBeVisible(); 
  //select filter for material
  await page.locator('#campusFilter').selectOption('1');
  await page.goto('http://127.0.0.1:8000/material?campus_id=1');
  //select filter for material
  await page.locator('#campusFilter').selectOption('2');
  await page.goto('http://127.0.0.1:8000/material?campus_id=2');

  //search material in inventory
  await page.getByRole('searchbox', { name: 'Search any Material' }).click();
  await page.getByRole('searchbox', { name: 'Search any Material' }).fill('10');

});

// Add material in inventory


