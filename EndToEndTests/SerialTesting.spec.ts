import { test } from '@playwright/test';
//Pw config file---fullParallel---false,it is executing serially ,only one worker for multiple tests.If fullyparalel is commented then by default it will run in serial mode
test.describe.configure({mode:'serial'})//can also configure into test instead of configuring in Config file
test.describe('group1', () => {

    test('Test1', async ({ page }) => {
        console.log(" this is Test1 .......");
    });

    test('Test2', async ({ page }) => {
        console.log(" this is Test2 .......");
    });

    test('Test3', async ({ page }) => {
        console.log(" this is Test3 .......");
    });

    test('Test4', async ({ page }) => {
        console.log(" this is Test4 .......");
    });

    test('Test5', async ({ page }) => {
        console.log(" this is Test5 .......");
    });

});
