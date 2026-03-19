import { test } from "../src/fixture/test.fixture";

test ('TC1 - should login with valid credentials', async ({ page, loginPage, securePage }) => {
    await loginPage.goToURL();
    await loginPage.loginForm.login('customer2@practicesoftwaretesting.com', 'welcome01');
    await securePage.validateTitle('My account');
});

test ('TC2 - should successfully add number to profile', async ({ loginPage, securePage, profilePage }) => {
    await loginPage.goToURL();
    await loginPage.loginForm.login('customer2@practicesoftwaretesting.com', 'welcome01');

    await securePage.managingList.lnkProfile.click();
    await profilePage.updateProfile.fillPhone('0101111111');
    await profilePage.validateMessage('Your profile is successfully updated!');
});