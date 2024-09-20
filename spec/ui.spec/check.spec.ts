import { test, expect, type Page } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
});