import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/LoginPage'

// describe: tạo cụm test case
test.describe("Mobile Login Test", () => {
    test("Test login thành công", async ({page}) => {
        await page.setViewportSize({width: 375, height: 667}); //Iphone 6/7/8 dimension
        const loginPage = new LoginPage(page)

        await loginPage.login('Admin', 'admin123')

        await loginPage.isLoginSuccessfull()
    })

    test("Test login thất bại", async ({page}) => {
        await page.setViewportSize({width: 375, height: 667}); //Iphone 6/7/8 dimension
        const loginPage = new LoginPage(page)

        await loginPage.login('wronguser', 'wrongpass')

        await loginPage.isLoginSuccessfull()==false
    })
})