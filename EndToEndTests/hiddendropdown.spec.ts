
import{test,Locator} from '@playwright/test';

test.setTimeout(60000);

test("Verify hidden dropdown feature ", async ({ page }) =>
{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.locator("input[placeholder='Username']").fill("Admin");
await page.locator("input[placeholder='Password']").fill("admin123");
await page.locator("button[type='submit']").click();

//page.locator("a.oxd-main-menu-item.active").click();
await page.getByText("PIM").click();
//click on Job title
await page.locator("form i").nth(2).click();
await page.waitForTimeout(5000);

//capture all the dropdown counts
const ddcount:Locator=page.locator("div[role='listbox']>div>span");
console.log("Total dropdown options are: "+await ddcount.count());

//capture all the dropdown options
for(let i=0;i<await ddcount.count();i++)
{
  console.log("Dropdown options are: "+await ddcount.nth(i).innerText());
  //await ddcount.nth(i).textContent();
  const ddvalue=await ddcount.nth(i).innerText();
  if(ddvalue==="Software Engineer")
  {
    await ddcount.nth(i).click();
    break;
}

}
});