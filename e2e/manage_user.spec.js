//manage user module
import { test, expect } from '@playwright/test';
test('canteen_login', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/dashboard');
  await expect(page.getByRole('link', { name: 'More info ' }).first()).toBeVisible();

   //click User in tab
  await page.getByRole('link', { name: ' Users ' }).click();
  //click Manage User in tab
  await page.getByRole('link', { name: ' Manage User' }).click();
// manage user module test
await expect(page.getByRole('heading')).toContainText('Manage User');

//search for user by name
await expect(page.getByRole('searchbox', { name: 'Search Name' })).toBeVisible();
await page.getByRole('searchbox', { name: 'Search Name' }).click();
await page.getByRole('searchbox', { name: 'Search Name' }).fill('8956');

// click approved button there is already one user with this name and status is approved
await page.getByRole('button', { name: 'Approved' }).first().click();
await page.getByRole('link', { name: 'Approve' }).click();
//approval pop up should be visible
await expect(page.locator('#swal2-title')).toContainText('Action not needed');
await page.getByText('User is already approved.').click();
await expect(page.locator('#swal2-content')).toContainText('User is already approved.');
//click ok button
await expect(page.getByRole('button', { name: 'OK' })).toBeVisible();
await page.getByRole('button', { name: 'OK' }).click();

// click Approved button
await page.getByRole('button', { name: 'Approved' }).nth(1).click();
await page.getByRole('link', { name: 'Approve' }).click();
//text should be visible
await expect(page.locator('#swal2-title')).toContainText('Action not needed');
await expect(page.locator('#swal2-content')).toContainText('User is already approved.');
await page.getByRole('button', { name: 'OK' }).click();

// click block button
await page.getByRole('button', { name: 'Approved' }).nth(1).click();
await page.getByRole('link', { name: 'Block' }).click();
//block text pop up should be visible
await expect(page.locator('#swal2-title')).toContainText('Are you sure you want to block this user?');
await expect(page.getByRole('button', { name: 'Yes, block it!' })).toBeVisible();
// click yes block it button
await page.getByRole('button', { name: 'Yes, block it!' }).click();

// approved the block user
await page.getByRole('button', { name: 'Block' }).click();
await page.getByRole('link', { name: 'Approve' }).click();

//approval pop up should be visible
await expect(page.locator('#swal2-title')).toContainText('Are you sure you want to approve this user?');
await page.getByRole('button', { name: 'Yes, approve it!' }).click();

// Action Reset password
//password reset at least 6 characters and confirm password should match with new password
await page.getByRole('button', { name: 'Reset Password' }).nth(1).click();
await page.getByRole('textbox', { name: 'New Password' }).click();
await page.getByRole('textbox', { name: 'New Password' }).fill('1234');
await page.getByRole('textbox', { name: 'Confirm Password' }).click();
await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123');
await page.getByRole('button', { name: 'Reset' }).click();
await expect(page.locator('#swal2-validation-message')).toContainText('Password must be at least 6 characters');
//fill wrong confirm password
await page.getByRole('textbox', { name: 'New Password' }).click();
await page.getByRole('textbox', { name: 'New Password' }).fill('123456');
await page.getByRole('textbox', { name: 'Confirm Password' }).click();
await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123452');
await page.getByRole('button', { name: 'Reset' }).click();
//popup should be visible with text
await expect(page.locator('#swal2-validation-message')).toContainText('Passwords do not match');
//fill correct confirm password
await page.getByRole('textbox', { name: 'New Password' }).click();
await page.getByRole('textbox', { name: 'New Password' }).fill('123456');
await page.getByRole('textbox', { name: 'Confirm Password' }).click();
await page.getByRole('textbox', { name: 'Confirm Password' }).fill('123456');
await page.getByRole('button', { name: 'Reset' }).click();
//success pop up should be visible
await expect(page.locator('#swal2-title')).toContainText('Success!');
await expect(page.locator('#swal2-content')).toContainText('The password has been reset.');
await page.getByRole('button', { name: 'OK' }).click();

 });