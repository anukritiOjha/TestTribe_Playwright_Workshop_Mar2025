import { test, expect } from '@playwright/test';

test('Handling webtable test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('[name="BookTable"]');

    // total rows and columns
    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(rowCount);

    const columns = table.locator('tbody th');
    const columnCount = await columns.count();
    console.log(columnCount);
});


test('Select single checkbox', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('#productTable');
    const rows = table.locator('tbody tr');
    const columns = table.locator('thead tr th');

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Gaming Console'
    });
    await matchedRows.locator('[type="checkbox"]').check();
});

// Assignment --> Write a test for pagination table handling