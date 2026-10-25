import {expect, test} from "@playwright/test";

/* test("Simple Alert", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog) => {
    dialog.accept()
    console.log("Alert msg",dialog.message());
    expect(dialog.message()).toBe("I am an alert box!");
    console.log("Alert type",dialog.type());
    expect(dialog.type()).toBe("alert");
    });
    
    await page.locator("#alertBtn").click();
    await page.waitForTimeout(3000);
}); */


/* test("Confirm Alert", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog) => {
    console.log("Alert msg",dialog.message());
    expect(dialog.message()).toBe("Press a button!");
    console.log("Alert type",dialog.type());
    expect(dialog.type()).toBe("confirm");
    dialog.accept()
    //dialog.dismiss()
    });
    
    await page.locator("#confirmBtn").click();
    const text:string=await page.locator("#demo").innerText();
    console.log("Text after alert",text);
    expect(text).toBe("You pressed OK!");
    await page.waitForTimeout(3000);

    /* const textdismissed:string=await page.locator("#demo").innerText();
    console.log("Text after dismissed alert",textdismissed);
    expect(textdismissed).toBe("You pressed Cancel!"); 
}); */

test("Prompt Alert", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',(dialog)=>{
        console.log("Prompt type",dialog.type());
        expect(dialog.type()).toBe("prompt");
        console.log("Prompt Msg",dialog.message());
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter");
        dialog.accept("Selenium");
    })
    
    await page.locator("#promptBtn").click();
    const text:string=await page.locator("#demo").innerText();
    expect(text).toBe("Hello Selenium! How are you today?");

});