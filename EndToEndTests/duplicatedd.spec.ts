import { test, expect, Locator } from '@playwright/test';

test("Verify Dropdown has duplicate value", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    //const ddcount: Locator = page.locator("select#colors>option");//duplicate
    const ddcount: Locator = page.locator("select#animals>option");//no duplicate
   const ddvalue:string[]= (await ddcount.allTextContents()).map(text=>text.trim());
   console.log(ddvalue);
   const myset=new Set <string>();
   const duplicate:string[]=[];
    
   for(const text of ddvalue)
   {
     if(myset.has(text))
     {
        duplicate.push(text);

     }else
        {
         myset.add(text);
        }
   }
   
   console.log("Duplicate slements in dropdown are:",duplicate);
   //await expect(duplicate.length).toBe(0);
   if(duplicate.length>0)
   {
    console.log("Duplicate elemets in dropdown are found",duplicate);
   }
   else{
    console.log("Duplicate elements are not found");
   }
});