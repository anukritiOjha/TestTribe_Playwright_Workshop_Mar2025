import { test, expect } from '../fixtures/pomFixture';

test('Orange HRM Login test with valid Credentials', async ({ page,loginPage,dashboardPage,adminPage}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');
  await loginPage.enterUsername('Admin');
  await loginPage.enterPassword('admin123');
  await loginPage.clickLogin();

  await dashboardPage.clickAdminTab();
  await adminPage.enterUserName('Admin');
  await adminPage.clickSearchButton();

  await dashboardPage.clickProfileAccordion();
  await dashboardPage.clickLogoutButton();
});