import { test, expect } from '@playwright/test';

test('Downalod a file', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/FileDownload.html#google_vignette');
  await page.locator('button[aria-label="Consent"]').click();
  await page.locator('#textbox').click();
  await page.locator('#textbox').pressSequentially('Welcome to the Playwright workshop');
  await page.locator('#createTxt').click();
  const download = await Promise.all([
    page.waitForEvent('download'),
    page.locator('#link-to-download').click()
  ])
  const path = await download[0].path();
  
  // Way 1 - Using hte default file name
//   const fileName = download[0].suggestedFilename();
// await download[0].saveAs(fileName);

  // Way 2 - Using customised name
  const fileName = "Playwright_Downloaded_File";
  await download[0].saveAs(`downloadedFiles/${fileName}.txt`);
});

// Assignment - To download pdf from the same website