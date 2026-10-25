import {test, expect,Locator} from '@playwright/test';
test("Verify the xpath axes", async ({ page }) => 
    {
//self
await page.goto("https://www.w3schools.com/html/html_tables.asp");
const germanycell=page.locator("//td[text()='Germany']/self::td");
await expect(germanycell).toHaveText("Germany");

//parent:Get parent <tr> from Germany cell
const parentrow= page.locator("//td[text()='Germany']/parent::tr");
await expect(parentrow).toContainText("Maria Anders");

//To capture child elements of parent row
const childcell=page.locator("//table[@id='customers']//tr[2]/child::td");
await expect(childcell).toHaveCount(3);
await expect(childcell.first()).toHaveText("Alfreds Futterkiste");
await expect(childcell.nth(1)).toHaveText("Maria Anders");
await expect(childcell.last()).toHaveText("Germany");
console.log("Child cells of parent row are: " + await childcell.allTextContents());


//ancestor: Get ancestor <table> from Germany cell
const ancestor=page.locator("//td[text()='Germany']/ancestor::table");
await expect(ancestor).toHaveAttribute("id","customers");

//descendant: Get descendant <td> from ancestor <table>
const descendant=page.locator("//table[@id='customers']/descendant::td");
expect(descendant).toHaveCount(18);
console.log("Descendant cells of ancestor table are: " + await descendant.allTextContents());

//Following: Get following <td> from Germany cell
const following=page.locator("//td[text()='Germany']/following::td");
await expect(following).toHaveCount(35);

//following-sibling: Get following-sibling <td> from Francisco Chang cell
const followingsibling=page.locator("//td[text()='Francisco Chang']/following-sibling::td");
await expect(followingsibling).toHaveCount(1);


//preceding: Get preceding <td> from Francisco Chang cell
const preceding=page.locator("//td[text()='Francisco Chang']/preceding::td");
await expect(preceding).toHaveCount(4);

//preceding-sibling: Get preceding-sibling <td> from Francisco Chang cell
const precedingsibling=page.locator("//td[text()='Francisco Chang']/preceding-sibling::td");
await expect(precedingsibling).toHaveCount(1);




    });