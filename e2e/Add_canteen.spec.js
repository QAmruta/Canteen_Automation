//management-canteen- Add canteen module test
// e2e/Add_canteen.spec.js
import { test, expect } from '@playwright/test';

test('add canteen', async ({ page }) => {

  // ✅ No login needed — session already saved
  await page.goto('http://127.0.0.1:8000/dashboard');

//Add canteen module test
await page.getByRole('link', { name: ' Management ' }).click();
await page.getByRole('link', { name: ' Canteen ' }).click();
await page.getByRole('link', { name: ' Add Canteen' }).click();
await page.getByRole('combobox').selectOption('1');
// add name of canteen
await page.getByRole('textbox', { name: 'Canteen Name*' }).click();
await page.getByRole('textbox', { name: 'Canteen Name*' }).fill('xyz canteen');
//add phone number of canteen
await page.getByRole('textbox', { name: 'Phone number must be 10' }).click();
await page.getByRole('textbox', { name: 'Phone number must be 10' }).fill('9496500578');
//add address of canteen
await page.getByRole('textbox', { name: 'Canteen Address*' }).click();
await page.getByRole('textbox', { name: 'Canteen Address*' }).fill('Nashik-100012');
//add file for canteen
// STEP 1: Define the file input locator
  const fileInput = page.locator('input[type="file"]');

  // STEP 2: Wait for file input to be attached to DOM
  await fileInput.waitFor({ state: 'attached' });

  // STEP 3: Upload the image file
  await fileInput.setInputFiles('C:\\Amruta bhalerao\\Automation_Canteen\\Canteen\\Canteen_Automation\\test_data\\image12345.jpg');
  await page.getByRole('button', { name: 'Add Canteen' }).click();

  // success popup should be visible
await expect(page.locator('#swal2-title')).toContainText('Success');
await page.getByRole('button', { name: 'OK' }).click();

// visibal heading of manage canteen page
await expect(page.getByRole('heading')).toContainText('Manage Canteen');

});


