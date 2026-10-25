import { test, expect, Locator } from '@playwright/test';

test("Verify the xpath", async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");

    // Absolute XPath
    const absxpath:Locator = page.locator("//html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    await expect(absxpath).toBeVisible();
    console.log("Absolute xpath is visible on the page.");

    // Relative XPath
    const relxpath:Locator = page.locator("//img[@alt='Tricentis Demo Web Shop']");
    await expect(relxpath).toBeVisible();
    console.log("Relative xpath is visible on the page.");

//3-contains():
const products:Locator=page.locator("//h2/a[contains(@href,'computer')]");
const productcounts:number=await products.count();
expect(productcounts).toBeGreaterThan(0);
console.log("Total products with 'computer' in href: " + productcounts);

//console.log("Product names: " + await products.textContent());//give error s Strick Mode Violation
console.log("First product name: " + await products.first().textContent());
console.log("Last product name: " + await products.last().textContent());
console.log("Random Product name:"+await products.nth(2).textContent());

//to extract all product names using for loop
let producttitle:string[] = await products.allTextContents();
for (let pt of producttitle)
     {
        console.log("Product name: " + pt);
     }



//starts-with()
const buildproduct:Locator=page.locator("//h2/a[starts-with(@href,'/build')]");
const buildproductcount = await buildproduct.count();
console.log("Number of build products: " + buildproductcount);
expect(buildproductcount).toBeGreaterThan(0);


//text()
const reglink:Locator=page.locator("//a[text()='Register']");
await expect(reglink).toBeVisible();
console.log("Register link is visible on the page.");

//last()
const lastproduct:Locator=page.locator("//div[@class='column follow-us']/ul/li[last()]");//using last ()
//const lastproduct:Locator=page.locator("//div[@class='column follow-us']/ul/li[3]");//using index
await expect(lastproduct).toBeVisible();
console.log("Last product is visible on the page.");

//postion()
const firstproduct:Locator=page.locator("//div[@class='column follow-us']/ul/li[position()=2]");//using position()
await expect(firstproduct).toBeVisible();
console.log("First product is visible on the page.");

});