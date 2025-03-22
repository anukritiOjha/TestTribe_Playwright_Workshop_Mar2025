import { test, expect } from '@playwright/test';
import { DateTime } from 'luxon';

test('Using Fill Method', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  let date = "1993-10-18";
  await page.locator('#birthday').fill(date);
  // To Find the value format write in console - document.getElementById("birthday").value

});

test.only('Using Luxon', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  await page.locator('input[placeholder="Start date"]').click();
  const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
  const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
  const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');

  let dateToSelect = "October 2024";
  const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy");
  
  /*
  MMM - month in short form -- oct, jan, feb
  MMMM - month in full forom -- october,january
  yyy - year in short form - 20
  yyyy - year in full form - 2020
  */

  while(await monthYear.textContent()!==dateToSelect){
    if(formattedMonth< DateTime.fromJSDate(new Date())){
      await prevButton.click();
    }
    else{
      await nextButton.click();
    }
  }

  await page.locator('//td[@class="day"] [text()="18"]').click();
});

// Assignment is to wrap the luxon test in to a function() with 2 parameters date:Number,dateToSelect:string
