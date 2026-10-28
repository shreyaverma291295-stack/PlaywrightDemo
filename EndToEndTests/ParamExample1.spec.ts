import { test, expect } from "@playwright/test"

const searchproduct: string[] = ['Laptop', 'Smartphone', 'Camera', 'Monitor']

/* //Using for of loop
for (const item of searchproduct) {
    test.describe("Verifying the searched products", () => {
        test(`Verify the product ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/")
            await page.locator("#small-searchterms").fill(item)
            await page.locator("input[value='Search']").click()
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true })

        })
    })
} */

//using for each function,for each item in array, test will be executed
searchproduct.forEach((item) => {
    test.describe("Verifying the searched products", () => {
        test(`Verify the product ${item}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/")
            await page.locator("#small-searchterms").fill(item)
            await page.locator("input[value='Search']").click()
            await expect.soft(page.locator('h2 a').nth(0)).toContainText(item, { ignoreCase: true })

        })
    })

})




