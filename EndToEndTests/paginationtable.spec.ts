import { test, expect } from '@playwright/test';

/* test("Read data from every pages", async ({ page }) => {

await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
let hasmorepage=true;
while(hasmorepage)
{
const rows = await page.locator("table#example tbody tr").all();
for(const row of rows)
{
console.log(await row.innerText());
}

await page.waitForTimeout(1000);

const nextbutton=page.locator("button[aria-label='Next']");
const isdisabled=await nextbutton.getAttribute("class");
if(isdisabled?.includes("disabled"))
{
 hasmorepage=false;
}
else
{
  await nextbutton.click();

}

}

}); */

 //2-----------------------------------------------------------------------------

/* test("filter the row and count the row", async ({ page }) => {

await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
const dropdown=page.locator("select#dt-length-0");
await dropdown.selectOption({label:'25'});
const row1=await page.locator("table#example tbody tr").all();//approach1
expect(row1.length).toBe(25);////approach1
const row2=await page.locator("table#example tbody tr");//approach2
expect(row2).toHaveCount(25);//approach2

});   */

 //3--------------------------------------------------------------------------------------
test("Verify search functionality", async ({ page }) => {

await page.goto("https://datatables.net/examples/core/basic_init/zero_configuration.html");
const searchbox=page.locator("input.dt-input");
await searchbox.fill("Ashton Cox");
const rows=await page.locator("table#example tbody tr").all();

if(rows.length>=1)
{
    let matchfound=false;
    for(let row of rows)
    {
      const text=await row.innerText();
      if(text.includes("Ashton Cox"))
      {
        console.log("record found ");
        matchfound=true;
        break;
      }
     
    }
    expect(matchfound).toBeTruthy();
}
 
else
      {
        console.log("No record found with the search");
      }

}); 


