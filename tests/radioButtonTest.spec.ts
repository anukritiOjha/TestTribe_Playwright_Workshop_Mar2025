import { test, expect } from '@playwright/test';

test('Radio Button Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('button[aria-label="Consent"]').click();
    const maleRadioButton = page.locator('[value="Male"]');
    const femaleRadioButton = page.locator('[value="FeMale"]');

    // Default State
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    await maleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBeTruthy()
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await femaleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();
});