import{test,expect,Locator} from '@playwright/test';

test("Verify Dropdown using select",async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/");
//select option from dropdown(4 ways)
//await page.locator("select#colors").selectOption(['Red','Blue','Green']);//using visible Text
//await page.locator("select#colors").selectOption(['white','green']);//using value
//await page.locator("select#colors").selectOption([{label:'Red'},{label:'Green'}]);//using label
//await page.locator("select#colors").selectOption([{index:1},{index:4}]);//using index
await page.waitForTimeout(5000);

//to count no of options/values in dropdown
const ddcount:Locator= page.locator("select#colors>option");
await expect(ddcount).toHaveCount(7);

//to check option is present in dropdown or not
const optionsname:string[]=(await ddcount.allTextContents()).map(text=>text.trim());
console.log("All options name:",optionsname);

//printing all options from dropdown
for(const options of optionsname)
{
console.log(options);
}


});