import { Page } from "@playwright/test";

export class About{

    constructor(private page:Page){
        this.page=page
    }
    async clickAbout(){
        await this.page.getByRole("link",{name:'About',exact:true}).click()
    }
}