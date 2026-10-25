import {test,expect} from '@playwright/test'


test("Verify page URL",async({page})=>
{
await page.goto("https://demo.nopcommerce.com/");
await expect(page).toHaveURL(/commerce/);
let pageurl:string=page.url();
console.log("URL of page is:",pageurl);

});