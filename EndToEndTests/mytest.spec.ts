import {test,expect} from '@playwright/test';
test("Verify the title",async({page})=>
{
await page.goto("https://practice.expandtesting.com/");
await expect(page).toHaveTitle("Automation Testing Practice Website for QA and Developers | UI and API");
let titlepage:string=await page.title();
console.log("Title of page is:",titlepage);


});