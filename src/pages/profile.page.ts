import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { UpdateProfile } from "../components/updateProfile.component";


export class ProfilePage extends BasePage {
    readonly updateProfile : UpdateProfile;
    readonly msgConfirmation : Locator;

    constructor (page : Page) {
        super(page);
        this.updateProfile = new UpdateProfile (page);
        this.msgConfirmation = page.locator('.alert-success');
    }

    async validateMessage(message : string) {
        await expect (this.msgConfirmation).toHaveText(message);
    }
}