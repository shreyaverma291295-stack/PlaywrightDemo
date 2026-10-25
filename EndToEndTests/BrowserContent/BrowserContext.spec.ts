import {test,expect, chromium} from "@playwright/test"
test("Checking browser content",async({})=>{

const browser=await chromium.launch() //launching chrome browser
const context=await browser.newContext() //creatingg context

const page1=await context.newPage() //creating page 1 from context
const page2=await context.newPage()//creating page 2 from context
console.log("No of pages within context are ",context.pages.length)

/* await page1.goto("https://playwright.dev/")
await page1.goto("https://www.selenium.dev/") */

await page1.goto("https://playwright.dev/")
await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")
await page2.goto("https://www.selenium.dev/")
await expect(page2).toHaveTitle("Selenium")
await page1.waitForTimeout(3000)
await page2.waitForTimeout(5000)



});