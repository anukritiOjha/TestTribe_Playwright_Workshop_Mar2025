import { test, expect } from '@playwright/test'

test('Visble/Hidden Assertion', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await page.pause();
    await expect(page.locator('[name="show-hide"]')).toBeVisible();
    await page.locator('[name="show-hide"]').fill('Vignesh');
    await page.locator('#hide-textbox').click();
    // await expect(page.locator('[name="show-hide"]')).not.toBeVisible();
    await expect(page.locator('[name="show-hide"]')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('[name="show-hide"]')).toBeVisible();
    await expect(page.locator('[name="show-hide"]')).toHaveText('Vignesh');
})

test('Present/NotPresent Assertion', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.pause();
    await expect(page.locator('[onclick="deleteElement()"]')).not.toHaveCount(1);
    await page.locator('[onclick="addElement()"]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('[onclick="addElement()"]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(2);

    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(0);
})

test('Text match/mismatch assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('//input[@placeholder="Password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
    await page.locator('a[href="/web/index.php/performance/viewPerformanceModule"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).not.toHaveText('Dashboard');
})

test('Element Attribute assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await expect(page.locator('name="username"')).toHaveAttribute('placeholder','Username');
})

test('URL assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    
    // Full URL Assertion
    // expect(page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Partial URL Assertion
    await expect(page).toHaveURL(/demo.orangehrmlive.com/);
})

test('Title assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    
    // Full title Assertion
    // expect(page.title()).toEqual('OrangeHRM');
    await expect(page).toHaveTitle("OrangeHRM");

    // Partial title Assertion
    await expect(page).toHaveTitle(/Orange/);
})

test('Screenshot assertion', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/");
    await page.locator('[name="username"]').fill('Admin');
    await expect(page).toHaveScreenshot();
    await page.locator('[name="password"]').fill('admin123');
    await expect(page).toHaveScreenshot();
})

test('Enabled/disabled assertion', async ({ page }) => {
    await page.goto("https://letcode.in/button");
    await expect(page.locator('#home')).toBeEnabled();
    // await expect(page.locator('[title="Disabled button"]')).not.toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
})