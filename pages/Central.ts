import { Page } from "@playwright/test";
import { About } from "./About";
import { Store } from "./Store";

export class Central{

    constructor(private page:Page){
        this.page=page
    }
    getAbout(){
        return new About(this.page)
    }
    getStore(){
        return new Store(this.page)
    }
    
}