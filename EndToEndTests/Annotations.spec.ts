
import { test, expect } from '@playwright/test';

/*
Annotations:
1. only
2. skip
3. fail
4. fixme
5. slow
6. annotations
*/

// 1. test.only() - Execute only this test
test.only('test1 - Only', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

// 2. test.skip() - Skip this test
test.skip('test2 - Skip', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

// 3. test.fail() - Expect this test to fail
test.fail('test3 - Fail', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Microsoft');
});

// 4. test.fixme() - Mark this test as needing a fix
test.fixme('test4 - Fixme', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});

// 5. test.slow() - Give this test a longer timeout
test('test5 - Slow', async ({ page }) => {
    test.slow();

    await page.goto('https://www.google.com/');
    await expect(page).toHaveTitle('Google');
});


