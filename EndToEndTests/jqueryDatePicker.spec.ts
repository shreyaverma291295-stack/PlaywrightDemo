import {test,expect,Locator,Page} from '@playwright/test';
async function selectdates(targetmonth:string,targetyear:string,targetdate:string,page:Page,IsFuture:boolean)
{
//this will select month and year from date picker
    while(true)
    {
        const displayedmonth=await page.locator(".ui-datepicker-month").textContent();
        const displayedyear=await page.locator(".ui-datepicker-year").textContent();
        if( displayedmonth===targetmonth && displayedyear===targetyear)
        {
            break;
        }
if(IsFuture)
{
//click future btn
        await page.locator(".ui-datepicker-next").click();
        await page.waitForTimeout(1000);
}
else
{
//click previous btn
        await page.locator(".ui-datepicker-prev").click(); 
        page.pause()   
        
}
     

        
    }

    //Now selecting date from date picker
   const dates=await page.locator(".ui-datepicker-calendar tr td").all();
   for(let dt of dates)
   {
   const datetext=await dt.textContent();
   if(datetext===targetdate)
   {
       await dt.click();
       break;
   }
   
   }
   await page.waitForTimeout(3000);
}


test("jquery date picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Approach 1
    let dateinput:Locator=page.locator("#datepicker");
    /* await expect(dateinput).toBeVisible();
    await dateinput.fill("10/12/2026");
    await page.waitForTimeout(3000); */

    //Approach 2--Using Date Picker
   await dateinput.click();
   //Fututre date selection
    const Year="2027";
    const Month="May";
    const Date="10";
    //Back date selection
    //const Year="2026";
    //const Month="May";
    //const Date="10";
    await selectdates(Month,Year,Date,page,true);
    const Expecteddate="05/10/2027"
    await expect(dateinput).toHaveValue(Expecteddate);

    
await page.waitForTimeout(3000);

});






















  /* test("jquery date picker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    //Approach 1
    let dateinput:Locator=page.locator("#datepicker");
    await expect(dateinput).toBeVisible();
    await dateinput.fill("10/12/2026");
    await page.waitForTimeout(3000); 

    //Approach 2--Using Date Picker
    dateinput.click();
    const Year="2026";
    const Month="May";
    const Date="10";

    //this will select month and year from date picker
    while(true)
    {
        const displayedmonth=await page.locator(".ui-datepicker-month").textContent();
        const displayedyear=await page.locator(".ui-datepicker-year").textContent();
        if( displayedmonth===Month && displayedyear===Year)
        {
            break;
        }

        /* //click future btn
        await page.locator(".ui-datepicker-next").click();
        await page.waitForTimeout(1000); */

        /* //click previous btn
        await page.locator(".ui-datepicker-prev").click(); 
        await page.waitForTimeout(1000);
    }

    //Now selecting date from date picker
   const dates=await page.locator(".ui-datepicker-calendar tr td").all();
   for(let dt of dates)
   {
   const datetext=await dt.textContent();
   if(datetext===Date)
   {
       await dt.click();
       break;
   }
   
   }
await page.waitForTimeout(3000);

}); */ 