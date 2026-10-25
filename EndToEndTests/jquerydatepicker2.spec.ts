/* import {test,expect} from "@playwright/test";
 
    test("jquery date picker",async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/");
       const dateinput= await page.locator("input#txtDate")
       dateinput.click();
        let month=await page.locator(".ui-datepicker-month");//month selection
       await month.selectOption("May");
        let year=await page.locator(".ui-datepicker-year");//year selection
        await year.selectOption("2026");
        await page.waitForTimeout(3000);
        const datetext=await page.locator(".ui-datepicker-calendar td").all();
        for(let dt of datetext)
        {
            const text=await dt.innerText();
            if(text==="10")
            {
                await dt.click();
                break;
            }
            
        }
        await page.waitForTimeout(3000);
        const expecteddate="05/10/2026";
        await expect(dateinput).toHaveValue(expecteddate);



    }); */

import { test, expect, Page } from "@playwright/test";

test("Generalized jQuery Date Picker", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Desired date: DD, Month, Year
    const day = "10";
    const month = "May";
    const year = "2026";

    const dateinput = page.locator("input#txtDate");

    // Open date picker
    await dateinput.click();

    // Select month and year
    await page.locator(".ui-datepicker-month").selectOption({label: month});
    await page.locator(".ui-datepicker-year").selectOption({label: year});

    
// Find and select the requested day
const dates = await page.locator(".ui-datepicker-calendar td a").all();

for (const date of dates) {
    if (await date.innerText() === day) {
        await date.click();
        break;
    }
}

// Verify the selected date
const expectedDate = "10/05/2026";

await expect(dateinput).toHaveValue(expectedDate);
});