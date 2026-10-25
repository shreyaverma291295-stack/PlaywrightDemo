import { test, expect, Locator } from '@playwright/test';

test("Verify Dropdown is sorted", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    const ddcount: Locator = page.locator("select#colors>option");//not sorted
    //const ddcount: Locator = page.locator("select#animals>option");//sorted
    //console.log(await ddcount.allTextContents());
    const ddvalue: string[] = (await ddcount.allTextContents()).map(text => text.trim());
    //const OriginalString =ddvalue;
    const OriginalString:string[] =[...ddvalue];
    //const sortedstring =ddvalue.sort();
    const sortedstring:string[] =[...ddvalue].sort();

    console.log("Original:", OriginalString);
    console.log("Sorted:", sortedstring);
    await expect(OriginalString).toEqual(sortedstring);

    //sorted method is mutatble so it chagnges the original value of string so we use ... along with string which is called spread operator
});