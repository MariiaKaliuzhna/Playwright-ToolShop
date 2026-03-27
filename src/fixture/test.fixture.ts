import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { SecurePage } from "../pages/secure.page";
import { ProfilePage } from "../pages/profile.page";
import { HomePage } from "../pages/home.page";
import { ProductPage } from "../pages/product.page";

type Fixtures = {
    loginPage: LoginPage;
    securePage: SecurePage;
    profilePage: ProfilePage;
    homePage: HomePage;
    productPage: ProductPage;
};

export const test = base.extend<Fixtures>({
    loginPage : async ({ page }, use) => {
        await use(new LoginPage (page));
    },
    securePage : async ({ page }, use) => {
        await use(new SecurePage (page));
    },
    profilePage : async ({ page }, use) => {
        await use(new ProfilePage (page));
    },
    homePage : async ({ page }, use) => {
        await use(new HomePage (page));
    },
    productPage : async ({ page }, use) => {
        await use(new ProductPage (page));
    },
    
});