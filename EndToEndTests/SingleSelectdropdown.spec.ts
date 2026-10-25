import{test,expect,Locator} from '@playwright/test';

test("Verify Dropdown using select",async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
//Select single dropdown value ways
//await page.locator("select#country").selectOption( 'United States');//by visible text
//await page.locator("select#country").selectOption({value:'usa'}); // by value of element
//await page.locator("select#country").selectOption({label:'United States'}); //by label
//await page.locator("select#country").selectOption({index:4});
//await page.waitForTimeout(2000);

//to count no of options/values in dropdown
const elementcount:Locator =page.locator('select.form-control[id="country"]>option');
await expect(elementcount).toHaveCount(10);

//to check option is present in dropdown or not
const options:string[]=(await elementcount.allTextContents()).map(text=>text.trim());
console.log("All the options in dropdown:",options);
expect(options).toContain('Germany');

//printing all options from dropdown
for(const option of options)
{
    console.log(option);
}

});