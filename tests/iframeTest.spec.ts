import { test, expect } from '@playwright/test';

test('Frame Handling using page.frame()', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('[name="mytext1"]').fill('Vignesh');
});

test('Frame Handling using page.frameLocator()', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame1 = page.frameLocator('frame[src="frame_1.html"]');
    await frame1?.locator('[name="mytext1"]').fill('Vignesh');
});

test('Nested Frame Handling', async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
    const childFrames = frame3?.childFrames(); // childFrames will return in array
    await childFrames[0].locator('[data-value="Hi, I am the UI.Vision IDE"]').check();
    await page.pause();
});