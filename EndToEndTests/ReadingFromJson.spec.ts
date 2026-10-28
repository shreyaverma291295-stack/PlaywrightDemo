import { test, expect } from "@playwright/test"
import fs from 'fs'
//reading data from Json
const jsonpath = "testdata/logindata.json"
const logindata = JSON.parse(fs.readFileSync(jsonpath, 'utf-8'))


test.describe("Checking loggin with multiple test data", () => {
for (const { email, psw, validity } of logindata) {
    
        test(`login with ${email} and ${psw}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/")
            await page.locator(".ico-login").click()
            await page.locator("input[id='Email']").fill(email)
            await page.locator("input[id='Password']").fill(psw)
            await page.locator("input[value='Log in']").click()

            if (validity.toLowerCase() === 'valid') {
                const logout = page.locator(".ico-logout")
                await expect(logout).toBeVisible({ timeout: 10000 })
            }
            else {
                const msg = page.locator(".validation-summary-errors")
                await expect(msg).toBeVisible({ timeout: 10000 })
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
            }

        })



    


}
})

