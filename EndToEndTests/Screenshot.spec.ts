import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
 const date= Date.now()
 //page Screenshot
 //await page.screenshot({path:'Screenshots/'+'Homepage+'+date+'.png'})

 //Full page screenshot
 //await page.screenshot({path:'Screenshots/'+'Homepage+'+date+'.png',fullPage:true})

 //Element Screenshot
 const giftcard=page.locator("img[alt='Picture of $25 Virtual Gift Card']")
 await giftcard.screenshot({path:'Screenshots/'+'Homepage+'+date+'.png'})

 //section screenshot
//await page.locator(".poll").screenshot({path:'Screenshots/'+'Homepage+'+date+'.png'})
 
});