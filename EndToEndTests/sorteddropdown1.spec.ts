import { test, expect, Locator } from '@playwright/test';

test("Verify Dropdown is sorted", async ({ page }) => {
   await page.goto("https://testautomationpractice.blogspot.com/");

    const ddcount: Locator = page.locator("select#animals>option");

    const ddvalue: string[] = (await ddcount.allTextContents()).map(text => text.trim());

    const sortedstring:string[] = ddvalue.sort();

    console.log("Original:",ddvalue);
    console.log("Sorted:", sortedstring);

    expect(ddvalue).toEqual(sortedstring);
    console.log("The dropdown is already in sorted order");
});