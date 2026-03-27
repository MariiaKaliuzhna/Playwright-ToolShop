import { expect } from "@playwright/test";
import { test } from "../src/fixture/test.fixture";

test.describe('Profile tests', () => {
    test ('TC2 - should successfully add number to profile', async ({ securePage, profilePage }) => {
        await securePage.goToURL('/account');
        await securePage.managingList.clickToProfile();
        await expect(profilePage.updateProfile.inputFirstName).toHaveValue("Jane");;
        await profilePage.updateProfile.fillPhone('0101111111');
        await expect(profilePage.msgConfirmation).toHaveText('Your profile is successfully updated!');
    });

    test ('TC4 - should add product to favourites', async ({ homePage, productPage }) => {
        await homePage.goToURL('');
        await homePage.sideBar.lookForProduct('cross-head screws');
        await homePage.productCard.choseProduct(0);

        await productPage.productDetails.addToFavorites();
        await expect(productPage.toast.msgToast).toHaveText('Product added to your favorites list.');
    });
});

test.describe('Guest test', () => {
    test.use({ storageState: { cookies: [], origins: [] } });
    test ('TC1 - should login with valid credentials', async ({ loginPage, securePage }) => {
        await loginPage.goToURL('/auth/login');
        await loginPage.loginForm.login('customer@practicesoftwaretesting.com', 'welcome01');
        await expect(securePage.title).toHaveText('My account');
    });

    test ('TC3 - should find exact product', async ({ homePage }) => {
        await homePage.goToURL("");
        await homePage.sideBar.lookForProduct('cross-head screws');
        await expect(homePage.productCard.cardTitle.first()).toContainText('Cross-head screws')
    });
});