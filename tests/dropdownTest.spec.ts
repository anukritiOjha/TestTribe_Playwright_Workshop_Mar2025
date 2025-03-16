import { test, expect } from '@playwright/test';

test('Single Static Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('button[aria-label="Consent"]').click();
    await page.selectOption('#Skills',{value:'Analytics'});
    await page.selectOption('#Skills',{label:'Engineering'});
    await page.selectOption('#Skills',{index:4});
});

test('Multi Static Dropdown Test', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption('#multi-select',[
        {value:'Florida'},
        {label:'Texas'},
        {index:2}
    ]);
});

test('Searchable Dynamic Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('button[aria-label="Consent"]').click();
    await page.locator('[role="combobox"]').click();
    await page.locator('input[type="search"]').fill('India');
    await page.locator('#select2-country-results>li').click();
});

test('Non-Searchable Dynamic Dropdown Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.locator('button[aria-label="Consent"]').click();
    await page.locator('[role="combobox"]').click();
    await page.locator('#select2-country-results').locator('li',{hasText:'India'}).click();
});