import { test as Base } from "@playwright/test";
import { Central } from "../pages/Central";

type myFixtures={

    center:Central
}

export const test = Base.extend<myFixtures>({

    center:async({page},use)=>{
        await use(new Central(page))
    }
})


export{expect}from '@playwright/test'