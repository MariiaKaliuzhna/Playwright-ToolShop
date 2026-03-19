import { expect, Locator, Page } from "@playwright/test";

export class UpdateProfile {
    readonly page : Page;
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputEmail: Locator;
    readonly inputPhone: Locator;
    readonly btnUpdate : Locator;

    constructor (page : Page) {
        this.page = page;
        this.inputFirstName = page.locator('#first_name');
        this.inputLastName = page.locator('#last_name');
        this.inputEmail = page.locator('#email');
        this.inputPhone = page.locator('#phone');
        this.btnUpdate = page.locator('[data-test="update-profile-submit"]');
    }

    async fillPhone (number : string) {
        await this.inputPhone.fill(number);
        await expect (this.inputFirstName).toHaveValue("Jack");
        await this.btnUpdate.click();
    }
}