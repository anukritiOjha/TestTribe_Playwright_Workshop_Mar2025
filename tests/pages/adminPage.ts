import { Page, Locator } from '@playwright/test';
import BasePage from './basePage';

export class AdminPage extends BasePage {
  private readonly employeeNameTextbox: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);
    this.employeeNameTextbox = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]');
    this.searchButton = page.locator('button[type="submit"]');
  }

  async enterUserName(userNameText: string) {
    await this.b_fillField(this.employeeNameTextbox, userNameText);
  }

  async clickSearchButton() {
    await this.b_clickElement(this.searchButton);
  }
}
