import { test, expect } from '@playwright/test';

// Test 1: Sanity test
test('Check title of the home page', { tag: '@sanity' }, async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

// Test 2: Regression test
test('Check navigation to Store page', { tag: '@regression' }, async ({ page }) => {
    await page.goto('https://www.google.com/');

    await page.locator('text=Store').click();

    await expect(page).toHaveTitle('Google Store for Google Made Devices & Accessories');
});

// Test 3: Sanity and Regression test
test('Check top recommendations', { tag: ['@sanity', '@regression'] }, async ({ page }) => {
    await page.goto('https://store.google.com/');

    await expect(page.locator('text=Our Top Recommendations.')).toBeVisible();
});
