import {test,expect} from "@playwright/test"

test.beforeEach("Launching an app",async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
});



test("logoverify",async({page})=>{
   await expect(page.locator("img[alt='Tricentis Demo Web Shop']")).toBeVisible();
});

test("TitleToVerify",async({page})=>{
    expect(await page.title()).toContain("Demo Web Shop")
});

test('search test', async ({ page }) => {
    await page.locator('#small-searchterms').fill('laptop');
    await page.locator('input[value="Search"]').click();

    await expect.soft(page.locator('h2 a').nth(0))
        .toContainText('laptop', { ignoreCase: true });
});
