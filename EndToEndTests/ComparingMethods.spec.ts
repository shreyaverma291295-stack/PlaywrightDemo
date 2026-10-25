import{test,Locator} from '@playwright/test';

test("Comparing Methods ", async ({ page }) =>
{
    await page.goto("https://demowebshop.tricentis.com/");
    const producttitle:Locator=page.locator(".product-title");
//Locator is an interface which is used to find the elements on the page and perform actions on them. It is a wrapper around the element handle and provides additional methods for interacting with the element.

    //1-innerText() vs textContent() 
    console.log(await producttitle.nth(1).innerText());
    console.log(await producttitle.nth(1).textContent());

    //count the producttitle
    const count=await producttitle.count();
    
    for(let i=0;i<count;i++)
    {
          /* const productname1:string=await producttitle.nth(i).innerText();//will extract actual text from the element
          console.log(productname1); */

          /* const productname2:string |null=await producttitle.nth(i).textContent();
          console.log(productname2);  */

          /* const productname3:string |null=await producttitle.nth(i).textContent();
          console.log(productname3?.trim());  */
    }


    //2-allinnerText() vs allTextContents()
    /*  const productnames:string[]=await producttitle.allInnerTexts();
    console.log("Product Names using allInnerTexts() method:",productnames);  */

   /* const productnames:string[]=await producttitle.allTextContents();
   console.log("Product Names using allTextContents() method:",productnames); 
   //need to trim the extra spcaes so we use map function
   const trimmedproductnames:string[]=productnames.map(text=>text.trim());
   console.log("Trimmed Product Names using allTextContents() method:",trimmedproductnames);  */

   //all()
    const producttitles:Locator[] =  await producttitle.all();
    console.log("Product Names using all() method:",producttitles);

    console.log(await producttitles[1].innerText());
    //for of loop:
    for(let text of producttitles)
    {
        console.log(await text.innerText());
    }

    /* //for in loop:
    for(let i in producttitles)
    {
        console.log(await producttitles[i].innerText());
    } */

    }
);