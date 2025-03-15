import { test, expect } from '@playwright/test'

test('OrangeHRM Login Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
})