import {test,expect} from "@playwright/test"

 /* test("Handling frames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
  const frame=  page.frames()//Frame[]-An array of all frames attached to the page.
  console.log("No of frames",frame.length)

  //interacting with element inside frame
  //Approaches--1--url or name only
  //Using page.frame
  const f1=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1"})//Frame | null,const frame = page.frame('frame-name');const frame = page.frame({ url: /.*domain.*\/ });
  //f1?.locator("[name='mytext1']").fill("Playwright")
  if(f1)
  {
    f1.locator("[name='mytext1']").fill("Playwright")//Approach1
    //f1.fill("[name='mytext1']","Playwright")//Approach2
  }
  else
  {
    console.log("No frame is available")
  }
  await  page.waitForTimeout(3000)

})  */


/* test("Handling frames using aproach 2",async({page})=>{
  await page.goto("https://ui.vision/demo/webtest/frames/")
  //interacting with element inside frame
  //Approaches--2
  //Using framelocator--Adv--we can locate frame by any attribute--id,css etc
 const frame2= page.frameLocator("[src='frame_3.html']")//FrameLocator--return type
 frame2.locator("[name='mytext3']").fill("Playwright")
 await  page.waitForTimeout(3000)

}) */

//How to handle child frames
 test("Handling child frames from frame 3",async({page})=>{
  await page.goto("https://ui.vision/demo/webtest/frames/")
  //interacting with element inside frame
  //Approaches--2
  //Using framelocator--Adv--we can locate frame by any attribute--id,css etc
 /* const frame3= page.frameLocator("[src='frame_3.html']")//FrameLocator--return type
 frame3.locator("[name='mytext3']").fill("Playwright")
 await  page.waitForTimeout(3000) */

 const frames3=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3"});
 if(frames3)
 {
   await frames3.locator("[name='mytext3']").fill("Playwright")
    const framecount=frames3?.childFrames()//Frame[]
    console.log("No of child frames",framecount.length)
    const radio=framecount[0].getByLabel("I am a human")
    await radio.check()
    await expect(radio).toBeChecked();
    const checkbox=framecount[0].getByLabel("Form Autofilling")
    await checkbox.check()
    await expect(checkbox).toBeChecked();
   // const btn=framecount[0].getByLabel("Next")
    //await btn.click()

 }
 
 else
    {
        console.log("No frame is available")
    }
 await  page.waitForTimeout(3000)

 });
