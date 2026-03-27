import { Locator, Page } from "@playwright/test";

export class UpdateProfile {
    readonly inputFirstName: Locator;
    readonly inputLastName: Locator;
    readonly inputEmail: Locator;
    readonly inputPhone: Locator;
    readonly btnUpdate : Locator;

    constructor (readonly page : Page) {
        this.inputFirstName = page.getByRole('textbox', {name: 'First name'});
        this.inputLastName = page.getByRole('textbox', {name: 'Last name'});
        this.inputEmail = page.getByRole('textbox', {name: 'Email address'});
        this.inputPhone = page.getByRole('textbox', {name: 'Phone'});
        this.btnUpdate = page.getByRole('button', {name: 'Update Profile'});
    }

    async fillPhone (number : string) : Promise<void> {
        await this.inputPhone.fill(number);
        await this.btnUpdate.click();
    }
}