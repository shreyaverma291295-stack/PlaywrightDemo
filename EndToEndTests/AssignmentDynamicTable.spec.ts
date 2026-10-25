import { test, expect, Locator } from '@playwright/test';
/* Memory Size of Firefox process: 66.4 MB

Network speed of Chrome process: 4.5 Mbps

Disk space of Firefox process: 0.60 MB/s */

test("Verify Memory Size of Firefox process", async ({ page }) => 
    {
        page.goto("https://testautomationpractice.blogspot.com/");
    });