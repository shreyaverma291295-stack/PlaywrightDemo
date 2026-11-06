import { test } from "../fixtures/fixtures";


test("Hello",async({page,center})=>{

  await page.goto("https://www.google.com")
  await center.getAbout().clickAbout()
  await page.pause()
  
  
})