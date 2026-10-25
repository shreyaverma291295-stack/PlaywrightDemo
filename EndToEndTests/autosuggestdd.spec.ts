import{test,expect,Locator} from '@playwright/test';

test("Verify auto suggest dropdown feature ", async ({ page }) =>
{
await page.goto("https://www.flipkart.com/food-products/pulses/dal/~cs-c5e523e57f72ef3f0869f4df059f5f78/pr?sid=eat,anl,ovb&marketplace=FLIPKART&restrictLocale=true&BU=Mixed");
page.locator("input[name='q']").fill("dal");
await page.waitForTimeout(5000);

const ddcount:Locator=page.locator("ul>li");
console.log("Dropdownn value count is:",await ddcount.count());

//print specific option from auto suggeest
console.log("2nd option from autosuggest is:",await ddcount.nth(2).innerText());

/* //printing all suggestions options from dropdown
const ddvalues=await ddcount.allTextContents();
for(const text of ddvalues)
{
console.log(text);
}
}); */

//printing all suggestions options from dropdown
for(let i=0;i<await ddcount.count();i++)
{
console.log("Option",i+1,":",await ddcount.nth(i).innerText());
}

//select specific option from auto suggest dropdown
for(let i=0;i<await ddcount.count();i++)
{
let text =await ddcount.nth(i).innerText();
if(text==="dal arhar")
{
ddcount.nth(i).click();
break;
}
}



});