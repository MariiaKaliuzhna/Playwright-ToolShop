import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { ManagingList } from "../components/managingList.component";


export class SecurePage extends BasePage {
    readonly title : Locator;
    readonly managingList : ManagingList;

    constructor (page : Page) {
        super(page);
        this.managingList = new ManagingList (page);
        this.title = page.locator('[data-test="page-title"]');
    }

    async validateTitle (title : string) {
        await expect(this.title).toHaveText(title);
    }
}