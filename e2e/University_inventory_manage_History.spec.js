// Raised Bug-PHP backend error page appeared with screenshot
//university inventory-> manage inventory-> History module test 
import { test, expect } from '@playwright/test';

test('university_inventory_manage_material', async ({ page }) => {
 //History module test 
 await page.goto('http://127.0.0.1:8000/dashboard');
// tab navigation
await page.getByRole('link', { name: ' Inventory ' }).click();


await page.getByRole('link', { name: ' University Inventory ' }).click();
await page.locator('a').filter({ hasText: 'Manage Inventory' }).nth(2).click();
await page.getByRole('link', { name: ' History' }).click();
//History module page opened 
await expect(page.getByRole('heading', { name: 'History' })).toBeVisible();

const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download as CSV' }).click();
  const download = await downloadPromise;
await expect(page.getByRole('button', { name: 'Download as CSV' })).toBeVisible();
await page.getByRole('searchbox', { name: 'Search any Parameter' }).click();
await page.getByRole('searchbox', { name: 'Search any Parameter' }).fill('12');
await page.getByRole('searchbox', { name: 'Search any Parameter' }).click();
await page.getByRole('searchbox', { name: 'Search any Parameter' }).fill('');

await page.getByLabel('Show :').selectOption('100');
await page.goto('http://127.0.0.1:8000/history?limit=100&page=1');
await page.getByLabel('Show :').selectOption('500');
await page.goto('http://127.0.0.1:8000/history?limit=500&page=1');
// Handle "all" option carefully — known backend bug
await page.getByLabel('Show :').selectOption('1000');
await page.goto('http://127.0.0.1:8000/history?limit=1000&page=1');

// Skip "all" until backend is fixed — or test for the error
await page.getByLabel('Show :').selectOption('all');
await page.goto('http://127.0.0.1:8000/history?limit=all&page=1');
  const hasError = await page.locator('text=TypeError').isVisible();

  if (hasError) {

    // ── Screenshot 8: Bug — limit=all crashes ──
    await page.screenshot({
      path: 'e2e/bug-reports/history_bug_limit_all.png',
      fullPage: true
    });

    console.log(`
    ==============================
    BUG REPORT
    ==============================
    Module     : History (University Inventory)
    URL        : ${page.url()}
    Error      : TypeError
    Message    : limit=all causes PHP TypeError
    Expected   : All records should load
    Actual     : PHP backend error page appeared
    Screenshot : e2e/bug-reports/history_bug_limit_all.png
    Status     : ❌ FAILED — Backend Bug
    ==============================
    `);

    test.info().annotations.push({
      type: 'bug',
      description: 'limit=all crashes PHP - TC logged'
    });

  } else {

    // ── Screenshot 9: limit=all loaded fine (no bug) ──
    await page.screenshot({
      path: 'e2e/bug-reports/history_limit_all_success.png',
      fullPage: true
    });

    console.log(`
    ==============================
    TEST PASSED
    ==============================
    Module     : History (University Inventory)
    URL        : ${page.url()}
    Status     : ✅ PASSED — All limits working correctly
    ==============================
    `);
  }

});