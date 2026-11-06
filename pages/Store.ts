import { Page } from "@playwright/test";

export class Store{
    constructor(private page:Page){
        this.page=page
    }
    async clickStore(){
        await this.page.getByRole("link",{name:'Store',exact:true}).click()
    }
}