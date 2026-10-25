import {test,expect} from "@playwright/test";
test.describe("Sign up flow of Eventhub",()=>{});
test("Sign up flow of Eventhub",async({page})=>{
    await page.goto("https://eventhub.rahulshettyacademy.com/login")

    //Register flow
    await page.getByRole("link",{name:"Register"}).click();//click on register link
    await page.getByRole("textbox",{name:"you@email.com"}).fill("shreya18@gmail.com");//input in email
    await page.getByRole("textbox",{name:"Min 8 chars, uppercase, number & symbol"}).fill("Anshu@123");//input in password
    await page.getByRole("textbox",{name:"Repeat your password"}).fill("Anshu@123");
    await page.getByRole("button",{name:"Create Account"}).click();//click on register button
    //await page.getByRole("link",{name:"Events"}).click();//click on event link 
    await page.locator("a[id='nav-events']").click();//click on event link
    await page.getByRole("button",{name:"Add New Event"}).click();//click on Add New Event
    await page.getByRole("textbox",{name:"Title"}).fill("Seminar");//input in Title
    await page.getByRole("textbox",{name:"Describe the event…"}).fill("Seminar");//input in Description
    await page.getByRole("textbox",{name:"City"}).fill("Seminar");//input in City
    await page.getByRole("textbox",{name:"Venue"}).fill("Seminar");//input in Venue
   // await page.getByRole("DateTime",{name:"Event Date & Time*"}).fill("2023-10-10T10:00");//input in Event Date & Time
    await page.locator("input[type='datetime-local']").fill("2026-12-12T10:00");//input in Event Date & Time
    await page.getByRole("spinbutton",{name:"Price ($)*"}).fill("100");//input in Price
    await page.getByRole("spinbutton",{name:"Total Seats"}).fill("100");//input in Total Seats //
    await page.waitForTimeout(3000);
    await page.getByRole("button",{name:"+ Add Event"}).click();//click on Add Event button
    await page.getByRole("button",{name:"Delete"}).click();//
    await page.getByRole("button",{name:"Delete event"}).click();
    await page.waitForTimeout(3000);

    //logout
    await page.getByRole("button",{name:"Logout"}).click();//click on Add Event button
    await page.waitForTimeout(3000);
 
    //Sign in flow
    await page.getByRole('textbox',{name:"Email"}).fill("shreya18@gmail.com");//input in email
    await page.getByRole("textbox",{name:"Password"}).fill("Anshu@123");//input in password
    await page.getByRole('button',{name:"Sign In"}).click();//click on sign in button
    await page.waitForTimeout(3000);
 

});