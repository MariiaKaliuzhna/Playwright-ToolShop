import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/auth/login');
    await page.getByPlaceholder('Your email').fill('customer@practicesoftwaretesting.com');
    await page.getByPlaceholder('Your password').fill('welcome01');
    page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByRole('heading', { name: 'My account' })).toHaveText('My account');
    
    await page.context().storageState({ path: authFile });
});