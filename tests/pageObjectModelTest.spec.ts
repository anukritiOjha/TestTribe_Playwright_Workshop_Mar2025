import { test, expect } from '@playwright/test';
import { AdminPage } from './pages/adminPage';
import { LoginPage } from './pages/loginPage';
import {DashboardPage} from './pages/dashboardPage';

test('Orange HRM Login test with valid Credentials', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Syntax for object declaration
  // const objectName = new ClassName();

  const adminPage = new AdminPage(page);
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.enterUsername('Admin');
  await loginPage.enterPassword('admin123');
  await loginPage.clickLogin();

  await dashboardPage.clickAdminTab();
  await adminPage.enterUserName('Admin');
  await adminPage.clickSearchButton();

  await dashboardPage.clickProfileAccordion();
  await dashboardPage.clickLogoutButton();
});