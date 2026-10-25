import {test,expect} from "@playwright/test"

test("Handling screenshot by default from config file",async({page})=>{
    await page.goto("https://www.demoblaze.com/")
    await page.locator("a[id='login2']").click()
    await page.locator("input[id='loginusername']").fill("admin")
    await page.locator("input[id='loginpassword']").fill("admin")
    await page.getByRole("button",{name:'Log in',exact:true}).click()
    await expect(page).toHaveTitle("Store STORE")
    
});