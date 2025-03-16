import { test, expect } from '@playwright/test';

test('Single Tab Handling Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('button[aria-label="Consent"]').click();
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ]);
    await newTab.waitForLoadState('networkidle');
    await newTab.locator('a[href="/downloads"]').click();
    await newTab.locator('a[href="/documentation"]').click();
    await newTab.close();
});

test('Single Window Handling Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('button[aria-label="Consent"]').click();
    await page.locator('a[href="#Seperate"]').click();

    await page.pause();
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ]);
    await newWindow.waitForLoadState('networkidle');
    await newWindow.locator('a[href="/downloads"]').click();
    await newWindow.locator('a[href="/documentation"]').click();
    await newWindow.close();
});

test('Multi Tab Handling Test', async ({ page }) => {
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    await page.locator('[aria-label="Consent"]').click();
    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('#newTabsBtn')
    ]);
    await page.pause();
    await multipleTab.waitForLoadState('networkidle');
    const pages = multipleTab.context().pages();
    await pages[1].bringToFront();
    await pages[1].locator('#firstName').fill('Vignesh');
    await pages[2].bringToFront();
    await pages[2].locator('#alertBox').click();
    await page.pause();
});

// Assignment Multi Window handling