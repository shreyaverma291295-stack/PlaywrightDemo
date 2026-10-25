import {test,expect} from "@playwright/test"
test("Handling Tabs",async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
  await  page.goto("https://testautomationpractice.blogspot.com/")
  /* How it works
1. page.waitForEvent('popup') waits for the parent page to open a popup.
2. click() clicks the Popup Windows button.
3. Promise.all() waits for both operations to complete.
4. popup stores the newly opened page. */
  await Promise.all([page.waitForEvent('popup'),page.locator("#PopUp").click()])
   //context.waitForEvent('popup')
   //page.getByRole("button",{name:'Popup Windows',exact:true}).click()

   const allPopupWindows =context.pages()
   console.log("No of pop up are",allPopupWindows .length)
   /* console.log("Title of first popup",await pages[0].title())
   console.log("Title of second popup",await pages[1].title())
   console.log("Title of third popup",await pages[2].title()) */

   console.log(allPopupWindows [0].url())
   console.log(allPopupWindows [1].url())
   
   for(const pw of allPopupWindows )
   {
           const title=await pw.title()
           if(title.includes("Selenium"))
           {
            await pw.getByText('Downloads', { exact: true }).click()
            await pw.close() //close only selenium window
           }
   }
   await page.waitForTimeout(5000)
})