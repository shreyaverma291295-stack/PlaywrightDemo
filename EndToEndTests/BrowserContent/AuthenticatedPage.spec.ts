import {test,expect} from "@playwright/test"
test("Authenticated popup windows handlings",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
  //await  page.goto("https://the-internet.herokuapp.com/basic_auth")
  // Approach 1: Directly pass login along with URL
    await page.goto(
        "http://admin:admin@the-internet.herokuapp.com/basic_auth"
    );

    await page.waitForLoadState();

    await expect(
        page.locator('text=Congratulations')
    ).toBeVisible();

    await page.waitForTimeout(5000);

});
 
