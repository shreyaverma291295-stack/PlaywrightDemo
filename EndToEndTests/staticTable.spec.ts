import { test, expect, Locator } from '@playwright/test';

test("Verify Static Table", async ({ page }) => {
await page.goto("https://testautomationpractice.blogspot.com/");
const table:Locator=page.locator("table[name='BookTable']>tbody");
await expect(table).toBeVisible();    

//count row
 const row:Locator=page.locator("table[name='BookTable']>tbody>tr");
 //const row:Locator=table.locator("tr");//chaining of Locator
await expect(row).toHaveCount(7); //approach 1
const rowcount:number=await row.count();
console.log("Row Count:",rowcount);//approach 2
expect(rowcount).toBe(7);

//column count
const column:Locator=page.locator("table[name='BookTable']>tbody>tr>th");
//const column:Locator=row.locator("th");//chaining of Locator
await expect(column).toHaveCount(4);//appraovh 1
const columncount:number=await column.count();//appproach 2
console.log("Column Count:",columncount);
expect(columncount).toBe(4);
//Read the data from 2nd row
const secondRowCell:Locator=row.nth(2).locator("td");
const secondrowdata:string[]=await secondRowCell.allInnerTexts();
console.log("Data from 2nd Row:",secondrowdata);
//await expect(secondRowCell).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ]);
//Read the data using loop
for(let text of secondrowdata)
{
    console.log(text);
}

//Read all the data from the table excluding header
const allrowdata:Locator[]=await row.all();
for(let row1 of allrowdata.slice(1)) //slice will exclude the header row
{
 const col=await row1.locator("td").allInnerTexts();
 console.log(col.join('\t'));
}

//books written by Mukesh
let Mukeshbook:string[]=[];
for(let row2 of allrowdata.slice(1))
{
 let cells=await row2.locator("td").allInnerTexts();
 let author=cells[1];
 let book=cells[0];
 if(author==="Mukesh")
 {
    console.log("Book written by Mukesh:",book);
    Mukeshbook.push(book);
 }

}
expect(Mukeshbook).toHaveLength(2);
//Calculate total price of all the books
let totalprice:number=0;
for(let row2 of allrowdata.slice(1))
{
 let cells=await row2.locator("td").allInnerTexts();
 let price=cells[3];
 totalprice=totalprice+parseInt(price);
}
console.log("Total Price of all the books:",totalprice);
await expect(totalprice).toBe(7100);

});