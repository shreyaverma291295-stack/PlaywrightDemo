import {test,expect,Locator} from '@playwright/test';
test("Verify the css locator ", async ({ page }) =>
{
    await page.goto("https://demowebshop.tricentis.com/");

    //tag with id ortag#id or #id
    /* const searchBox = page.locator("css=input#small-searchterms");
    await expect(searchBox).toBeVisible();
   await searchBox.fill("laptop");
   await page.waitForTimeout(5000); */

  /*  //tag with class ortag.class or .class
   const searchBox2 = page.locator("css=input.search-box-text");
   await expect(searchBox2).toBeVisible();
   await searchBox2.fill("Tshirt");

   //tag with class and attribute
    const searchBox3 = page.locator("input.button-1[value='Search']");
    await expect(searchBox3).toBeVisible();
    await searchBox3.click(); */

    //tag with any other attribute
    const newsletterEmail = page.locator("input[name='NewsletterEmail']");//used tag with attribute name
    await expect(newsletterEmail).toBeVisible();
    await newsletterEmail.fill("vermashreya665@gmail.com");

    page.locator("input.button-1[value='Subscribe']").click();//used tag withh class and attribute value
    await page.waitForTimeout(5000);

});
