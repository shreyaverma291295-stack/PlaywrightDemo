import { test, expect } from '@playwright/test';

test('Playwright Assertions Demo', async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/')

    //Hard assertion
    await expect(page).toHaveTitle("Demo Web Shop1") //failed
    await expect(page).toHaveURL("https://demowebshop.tricentis.com/")//failed
    const logo= page.locator("img[alt='Tricentis Demo Web Shop']")//failed even though verthing is fine
    await expect(logo).toBeVisible()

     //Soft assertion
    await expect.soft(page).toHaveTitle("Demo Web Shop1")//failed
    await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/")//rest of the assertions will be passed even though first assertion got fail
    const logo1= page.locator("img[alt='Tricentis Demo Web Shop']")
    expect.soft(logo).toBeVisible()
    

});
