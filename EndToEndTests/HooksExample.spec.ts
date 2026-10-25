/* Open app --BeforeAll
Login --Before each
Count no of products--test
logout--afterEach
Login --Before each
Add to cart--test
Logout--afterEach
Close the app --afterAll*/

import { test, expect, Page } from "@playwright/test"
let page: Page

test.beforeAll("Open Url before all test", async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("https://www.demoblaze.com/index.html")
})

test.afterAll("Close Url after all test", async () => {
    await page.close()
})

test.beforeEach("login to the app", async () => {
    await page.locator("a[id='login2']").click()
    await page.locator("input[id='loginusername']").fill("admin")
    await page.locator("input[id='loginpassword']").fill("admin")
    await page.locator("button[onclick='logIn()']").click()

})

test.afterEach("logout from the app", async () => {
    await page.getByRole('link', { name: 'Log out' }).click()

})


//Test case 1
test.describe("Group1",async()=>{
test("Counting product", async () => {
    const product = page.locator("#tbodyid .hrefch")
    const count= await product.count()
    expect(product).toHaveCount(9)
     console.log("Total number of products are", count);
})

})