import { test, expect } from '@playwright/test';

test('Fill Method Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    // await page.locator('[type="submit"]').click();
    await page.locator('//input[@placeholder="Password"]').press('Enter');
    await page.pause();
});

test('Press Sequential Method Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.pause();
    await page.locator('[name="username"]').pressSequentially('Admin');
    await page.locator('//input[@placeholder="Password"]').pressSequentially('admin123');
    await page.pause();
});

test('Press Sequential Method with Delay Test', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.pause();
    await page.locator('[name="username"]').pressSequentially('Admin',{delay:1000});
    await page.locator('//input[@placeholder="Password"]').pressSequentially('admin123');
    await page.pause();
});