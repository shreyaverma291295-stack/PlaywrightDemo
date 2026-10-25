import {test,expect,chromium}from "@playwright/test"
test("Managing tabs using browser Content",async({})=>{
   const browser=await chromium.launch() 
   const context=await browser.newContext()
   const parenttab=await context.newPage()
   await parenttab.goto("https://testautomationpractice.blogspot.com/")
   //both the statements should go parallely
   const [childtab]=await Promise.all([context.waitForEvent('page'),parenttab.getByRole("button",{name:'New Tab',exact:true}).click()])
   //await context.waitForEvent('page')//capture event properly before performing the action,we trigger page event 
   //await page.getByRole('button',{name:'New Tab',exact:true}).click()

   //Approach 1
   //switch between pages and get the title
   /* console.log("Title of parent tab is",await parenttab.title())
   await expect(parenttab).toHaveTitle("Automation Testing Practice")
   console.log("Title of parent tab is",await childtab.title())
   await expect(parenttab).toHaveTitle("SDET-QA Blog") */

   //Approach 2
  const pages=context.pages()
  console.log("No of pages under context are",pages.length)
  console.log("Title of parent page is ",await pages[0].title())
  console.log("Title of child page is ",await pages[1].title())
});