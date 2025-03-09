import { test, expect } from '@playwright/test';

test('code gen Test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Usernames' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByLabel('Sidepanel').locator('div').filter({ hasText: 'AdminPIMLeaveTimeRecruitmentMy' }).locator('div').nth(1).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('Claim');
  await page.getByRole('link', { name: 'Claim' }).click();
});