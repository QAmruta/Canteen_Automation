//university inventory-> manage inventory-> stock category module test 
import { test, expect } from '@playwright/test';

test('university_inventory_manage_stock_category', async ({ page }) => {

  // No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

  //stock category module test 

// tab navigation
await page.getByRole('link', { name: ' Inventory ' }).click();
await page.getByRole('link', { name: ' University Inventory ' }).click();
await page.locator('a').filter({ hasText: 'Manage Inventory' }).nth(2).click();
await page.getByRole('link', { name: ' Stock Category' }).click();
//stock category module page opened
await expect(page.getByRole('heading', { name: 'Stock Category' })).toBeVisible();
//Enter category name unique
await page.getByRole('textbox', { name: 'Category Name:*' }).click();
await page.getByRole('textbox', { name: 'Category Name:*' }).fill('clipss');
await page.getByRole('button', { name: 'Add Category' }).click();
//Success message verification
await expect(page.locator('#swal2-title')).toContainText('Success');
await expect(page.locator('#swal2-html-container')).toContainText('Category added successfully');
await page.getByRole('button', { name: 'OK' }).click();
//Existing Category visibality and search
await expect(page.getByRole('heading', { name: 'Existing Category' })).toBeVisible();
await page.getByRole('searchbox', { name: 'Search any Category' }).click();
await page.getByRole('searchbox', { name: 'Search any Category' }).fill('Hardware');
//click edit button and update category name
await page.getByRole('row', { name: '3 Hardware' }).locator('button').click();
await expect(page.getByRole('heading', { name: 'Edit Category' })).toBeVisible();
await page.locator('.modal-body').click();
//save chnges
await expect(page.getByRole('button', { name: 'Save changes' })).toBeVisible();
await page.getByRole('button', { name: 'Save changes' }).click();
await page.locator('.modal-body').click();
await page.getByRole('button', { name: 'Save changes' }).click();
//successfull edit message verification
await expect(page.locator('#swal2-title')).toContainText('Success');
await expect(page.locator('#swal2-html-container')).toContainText('Category name updated successfully');
await page.getByRole('button', { name: 'OK' }).click();


 });

