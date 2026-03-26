import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";
import { ProfilePage } from "../pages/profile.page";
import { HomePage } from "../pages/home.page";
import { ProductPage } from "../pages/product.page";


export const test = base.extend<{
    loginPage : LoginPage;
    securePage : SecurePage;
    profilePage : ProfilePage;
    homePage : HomePage;
    productPage : ProductPage;
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
    homePage : async ({ page }, use) => {
        const homePage = new HomePage (page);
        await use(homePage);
    },
    productPage : async ({ page }, use) => {
        const productPage = new ProductPage (page);
        await use(productPage);
    },
    
});