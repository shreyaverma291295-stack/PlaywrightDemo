import{test,expect,Locator} from '@playwright/test';
import { only } from 'node:test';


 test("Verify the pwactions ", async ({ page }) =>
{
await page.goto("https://testautomationpractice.blogspot.com/");
//name
const inputname:Locator= page.locator("input#name");
await expect(inputname).toBeVisible();
await expect(inputname).toBeEnabled();
const maxlength=await inputname.getAttribute("maxlength");
console.log("The max length of the name field is: "+maxlength);
expect(maxlength).toBe("15");//tobe means equal to
await inputname.fill("Shreya Verma");
//const namevalue:string | null=await inputname.textContent();//returns the text content of the element but it would be empty
const namevalue=await inputname.inputValue();
//console.log("The value of the name field is: "+namevalue);//returns input value of the element/text box
expect(namevalue).toBe("Shreya Verma");//tobe means equal to


await page.waitForTimeout(5000);


//email
const inputemail:Locator= page.locator("input#email");
await expect(inputemail).toBeVisible();
await expect(inputemail).toBeEnabled();
await inputemail.fill("vermashreya665@gmail.com");

//address
const address:Locator=page.locator("textarea#textarea");
await expect(address).toBeVisible();
await address.fill("B-1/2, Sector 62, Noida, UP");

});
 
test("Verify the radio button ", async ({ page }) =>
{
await page.goto("https://testautomationpractice.blogspot.com/");
const femaleradio:Locator=page.locator("input#female");
await expect(femaleradio).toBeVisible();
await expect(femaleradio).toBeEnabled();
expect(await femaleradio.isChecked()).toBe(false);//returns true or false
//or use --await expect(femaleradio).toBeChecked()//returns true or false
//to check the radio button we can use check method
await femaleradio.check();
expect(await femaleradio.isChecked()).toBe(true);
await page.waitForTimeout(5000);

});

test.only("Verify the checkbox ", async ({ page }) =>
{
 await page.goto("https://testautomationpractice.blogspot.com/");
/*/select specific checkbox
const sundayCheckbox:Locator=page.locator("input#sunday");
await expect(sundayCheckbox).toBeVisible();
await sundayCheckbox.check();
expect(sundayCheckbox).toBeChecked(); */

 //select all checkbox
const days:string[]=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const checkboxes:Locator[]=days.map(day => page.getByLabel(day));
/* expect(checkboxes.length).toBe(7);
for(const checkbox of checkboxes)
{
   await checkbox.check();
   await expect(checkbox).toBeChecked();
}     */

//unselct last 3 checkbox
/* for(const checkbox of checkboxes.slice(-3))
{
   await checkbox.uncheck();
   await expect(checkbox).not.toBeChecked();
}   
page.waitForTimeout(5000);
 */
//select the checkboxes which are not selected and unselect the checkbox which are selected
/* for(const checkbox of checkboxes)
{
  if(await checkbox.isChecked())
  {
   await checkbox.uncheck();
   await expect(checkbox).not.toBeChecked();
   await page.waitForTimeout(2000);
  }
  
  else
    {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
    }
   
} */

//select random checkbox
/* const indexes:number[]=[1,3,5];
for(const i of indexes)
{
  await checkboxes[i].check();
  expect(checkboxes[i]).toBeChecked();
}
await page.waitForTimeout(2000); */

//based on label ,checkboxes must be checked
const weekname:string="Friday";
for(const label of days)
{
  if(label===weekname)
  {
    const cb=page.getByLabel(label);
    await cb.check();
    await expect(cb).toBeChecked();
  }
  await page.waitForTimeout(2000);

}

   

});