import {test,expect} from "@playwright/test";
test("bootstrap date picker",async({page})=>{
    await page.goto("https://www.booking.com/");
    const dateinput= await page.locator("button[data-testid='searchbox-dates-container']");
    dateinput.click();
    let checkInDate:string="12"
    let checkInMonth:string="November"
    let checkInYear:string="2026"
    while(true)
    {
    const CheckInMonthAndYear=await page.locator("h3[class='e7addce19e af236b7586']").nth(0).innerText();
    const Month=CheckInMonthAndYear.split(" ")[0];
    const Year=CheckInMonthAndYear.split(" ")[1];
    if(Month===checkInMonth && Year===checkInYear)
    {
        break;
    }
    else
    {
        await page.locator("button[aria-label='Next Month']").click();
    }
    }

    //check specific date
    let alldates=await page.locator("table.b8fcb0c66a").nth(0).locator("td").all();
    let checkInDateFound=false;
    for(let dt of alldates)
    {
        const datetext=await dt.innerText();
        if(datetext===checkInDate)
        {
            await dt.click();
            checkInDateFound=true;
            break;
        }
    }

    if(!checkInDateFound)
    {
        console.error("Check-in date not found");
    }
    await page.waitForTimeout(3000);

    //select check-out date
    let checkOutDate:string="19"
    let checkOutMonth:string="November"
    let checkOutYear:string="2026"
    while(true)
    {
    const CheckOutMonthAndYear=await page.locator("h3[class='e7addce19e af236b7586']").nth(1).innerText();
    const Month=CheckOutMonthAndYear.split(" ")[0];
    const Year=CheckOutMonthAndYear.split(" ")[1];
    if(Month===checkOutMonth && Year===checkOutYear)
    {
        break;
    }
    else
    {
        await page.locator("button[aria-label='Next Month']").click();
    }
    }

    //check specific date
    let alloutdates=await page.locator("table.b8fcb0c66a").nth(0).locator("td").all();
    let checkOutDateFound=false;
    for(let dt of alloutdates)
    {
        const datetext=await dt.innerText();
        if(datetext===checkOutDate)
        {
            await dt.click();
            checkOutDateFound=true;
            break;
        }
    }

    if(!checkOutDateFound)
    {
        console.error("Check-out date not found");
    }
    await page.waitForTimeout(3000);


});
