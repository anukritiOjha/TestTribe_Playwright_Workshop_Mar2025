import { test, expect } from '@playwright/test';

test('Simple Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Alert");
    await alert.accept();
   })
    await page.locator('button[onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test('Confirmation - Ok Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Confirm");
    await alert.accept();
   })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

test('Confirmation - Cancel Alert Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS Confirm");
    await alert.dismiss();
   })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});

test('Prompt Alert - Ok button Test', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
   page.on('dialog',async(alert)=>{
    const alertMessage = alert.message();
    expect(alertMessage).toEqual("I am a JS prompt");
    await alert.accept('Vignesh');
   })
   await page.pause();
    await page.locator('button[onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: Vignesh');
});

// Assignemt - Prompt Alert Test with Cancel button