import { test, expect, Locator } from '@playwright/test';

test("Verify Dropdown has duplicate value", async ({ page }) => {
    await page.goto("https://bstackdemo.com/");
    page.locator("select").selectOption("Lowest to highest");
    await page.waitForTimeout(2000);
    const displaycount:Locator=page.locator(".shelf-item__price .val b");
    await expect(displaycount).toHaveCount(25);
    const ddvalue:string[]= await displaycount.allTextContents();
    console.log(ddvalue);
   for(const text of ddvalue)
    {
  
    }
    });