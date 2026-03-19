import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";
import { ProfilePage } from "../pages/profile.page";


export const test = base.extend<{
    loginPage : LoginPage;
    securePage : SecurePage;
    profilePage : ProfilePage;
}>({
    loginPage : async ({ page }, use) => {
        const loginPage = new LoginPage (page);
        await use(loginPage);
    },
    securePage : async ({ page }, use) => {
        const securePage = new SecurePage (page);
        await use(securePage);
    },
    profilePage : async ({ page }, use) => {
        const profilePage = new ProfilePage (page);
        await use(profilePage);
    },
    
});