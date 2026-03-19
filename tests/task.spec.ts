import { expect } from "@playwright/test";
import { test } from "../src/fixture/test.fixture";

test.describe('Profile tests', () => {
    test.beforeEach(async ({ loginPage, page }) => {
        await loginPage.goToURL();
        await loginPage.loginForm.login('customer@practicesoftwaretesting.com', 'welcome01');
        await expect(page).toHaveURL(/.*account/, { timeout: 10000 });
    });

    test ('TC1 - should login with valid credentials', async ({ securePage }) => {
        await securePage.validateTitle('My account');
    });

    test ('TC2 - should successfully add number to profile', async ({ securePage, profilePage }) => {
        await securePage.managingList.lnkProfile.waitFor();
        await securePage.managingList.lnkProfile.click();
        await profilePage.updateProfile.fillPhone('0101111111');
        await profilePage.validateMessage('Your profile is successfully updated!');
    });

    test ('TC4 - should add product to favourites', async ({ homePage, productPage, securePage }) => {
        await securePage.validateTitle('My account');
        await homePage.goToURL();
        await homePage.sideBar.lookForProduct('cross-head screws');
        await homePage.productCardContainer.productCard.choseProduct(0);

        await productPage.productDetails.addToFavorites();
        await productPage.toast.validateAddingToFavorite('Product added to your favorites list.');
        
    });
});

test.describe('Guest test', () => {
        test ('TC3 - should find exact product', async ({ homePage }) => {
        await homePage.goToURL();
        await homePage.sideBar.lookForProduct('cross-head screws');
        await homePage.productCardContainer.productCard.validateCardName(' Cross-head screws ', 0);
    });
});





