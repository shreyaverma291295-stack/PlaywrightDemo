import { test, expect } from '@playwright/test';
import fs from 'fs';
import * as XLSX from 'xlsx';

// Loaded Excel file
// file --> workbook --> sheets --> rows & columns

const excelPath = "testdata/logindata.xlsx";
const workbook = XLSX.readFile(excelPath);
const sheetNames = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetNames];

// Convert sheet into JSON
const logindata = XLSX.utils.sheet_to_json(worksheet);


test.describe("Checking loggin with multiple test data", () => {
    for (const { email, psw, validity } of logindata) {

        test(`login with ${email} and ${psw}`, async ({ page }) => {
            await page.goto("https://demowebshop.tricentis.com/")
            await page.locator(".ico-login").click()
            await page.locator("input[id='Email']").fill(email)
            await page.locator("input[id='Password']").fill(psw)
            await page.locator("input[value='Log in']").click()

            if (validity.toLowerCase() === 'valid') {
                const logout = page.locator(".ico-logout")
                await expect(logout).toBeVisible({ timeout: 10000 })
            }
            else {
                const msg = page.locator(".validation-summary-errors")
                await expect(msg).toBeVisible({ timeout: 10000 })
                await expect(page).toHaveURL("https://demowebshop.tricentis.com/login")
            }

        })






    }
})

