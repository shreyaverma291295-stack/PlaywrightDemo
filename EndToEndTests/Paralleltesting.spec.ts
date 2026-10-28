import { test } from '@playwright/test';
//Pw config file---fullParallel---true,it is executing parallely ,n no of workers for n no of tests.No fo workers mentioned in config file will not be considered.
test.describe.configure({mode:'parallel'})
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

