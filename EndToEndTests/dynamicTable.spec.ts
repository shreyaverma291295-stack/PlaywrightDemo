import { test, expect, Locator } from '@playwright/test';

test("Verify Chrome CPU % and compare", async ({ page }) => {
await page.goto("https://practice.expandtesting.com/dynamic-table");
const table= page.locator(".table>tbody");
expect(table).toBeVisible();
//read each row to read chrome
const rows=table.locator("tr");
const rowsArray:Locator[]=await rows.all();
//const row=page.locator(".table>tbody>tr");
//const rowcount=await row.count();
console.log("Total rows in table: ",rowsArray.length);
expect(rowsArray).toHaveLength(4);
//to find chrome from the table
let cpuload='';
for(const row of rowsArray)
{
const processname=await row.locator("td").nth(0).innerText();
if(processname==="Chrome")
{
   cpuload=await row.locator("td:has-text('%')").innerText();//CSS syntax
   //cpuload=await row.locator("td",{hasText:'%'}).innerText();//playwright syntax
   console.log("CPU load of Chrome is: ",cpuload);
   break;
}
await page.waitForTimeout(2000);

const yellowboxtext=await page.locator("p#chrome-cpu").innerText();
console.log("Yellow box text is: ",yellowboxtext);
if(yellowboxtext.includes(cpuload))
{
    console.log("CPU load of Chrome is matching with yellow box text");
}
else
{
    console.log("CPU load of Chrome is NOT matching with yellow box text");
}
expect(yellowboxtext).toContain(cpuload);

}
});