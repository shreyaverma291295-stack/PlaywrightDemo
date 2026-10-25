/* 
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
 */

//page.getByAltText() to locate an element, usually image, by its text alternative. 
import { test, expect, Locator } from '@playwright/test';

/* test('Verify the image', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com');
    const image:Locator = page.getByAltText('Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman.');
    await expect(image).toBeVisible();
    console.log('Image is visible on the page.');
}); */


/* // 2-page.getByText() to locate by text content.
test("verify the Text",async({page})=>
{
    await page.goto("https://practice.expandtesting.com/");
    //const text:Locator=page.getByText("Do you enjoy this platform? ❤️");//full string
    //const text:Locator=page.getByText("Do you enjoy ");//provided the text partially to avoid the special character issue in the text.
   const text:Locator=page.getByText(/Do\s+You\s+Enjoy/i);//ignore the case sensitivity issue in the text.
    await expect(text).toBeVisible();
   console.log("Text is visible on the page.");

}); */

/* //3-page.getByRole() to locate by explicit and implicit accessibility attributes.
test("Verify the link role",async ({page})=>
    {
   await page .goto("https://testrigor.com/");
  const demobutton:Locator= page.getByRole('link',{name:'Sign Up'});
  await expect(demobutton).toBeVisible();
  console.log("Demo button is visible on the page.");
    }); */

//4-page.getByLabel():to locate a form control by associated label's text. and page.getByPlaceholder(): to locate an input by placeholder. 
test("Verify the label",async({page})=>
{
  await page .goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button',{name:' Login '}).click(); 
  
/*await page .goto("https://testrigor.com/");
  await page.getByRole('link',{name:'Sign Up'}).click();
  await page.getByLabel('First Name').fill('Shreya');
  await page.getByLabel('Last Name').fill('Patil');
  await page.getByLabel('Email').fill('vermashreya@gmail.com');
  await page.getByLabel('Company name').fill('Expand Testing');
  await page.getByLabel('Password').fill('Anshu@123');
  await page.getByLabel('Password Confirmation').fill('Anshu@123');

  await page.getByRole('button',{name:'Register Now'}).click();  */




  console.log("User is registered successfully.");
 
 
});
