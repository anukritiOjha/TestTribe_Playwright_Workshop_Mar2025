import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';

export class DashboardPage extends BasePage {
  private readonly adminTab: Locator;
  private readonly profileAccordion: Locator;
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);
    this.adminTab = page.locator('//span[text()="Admin"]');
    this.profileAccordion = page.locator('.oxd-userdropdown-name');
    this.logoutLink = page.locator('//a[text()="Logout"]');
  }

  async clickAdminTab() {
    await this.b_clickElement(this.adminTab);
  }

  async clickProfileAccordion() {
    await this.b_clickElement(this.profileAccordion);
  }

  async clickLogoutButton() {
    await this.b_clickElement(this.logoutLink);
  }
}
