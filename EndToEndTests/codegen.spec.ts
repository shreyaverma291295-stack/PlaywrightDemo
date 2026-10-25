import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://kirti.logixflow.app/login');
  await page.getByRole('textbox', { name: '* Username :' }).fill('kirti@mailinator.com');
  await page.getByRole('textbox', { name: '* Password :' }).fill('Anshu@12');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  //await page.goto('https://kirti.logixflow.app/dashboard');
  
  //Create Lead
  await page.getByRole('img', { name: 'CRM' }).click();
  await page.getByText('Leads', { exact: true }).click();
 /*  await page.getByRole('button', { name: 'plus Lead' }).nth(2).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('Sima');
  await page.getByRole('textbox', { name: 'Contact' }).fill('Sima');
  await page.getByRole('textbox', { name: 'Company' }).fill('Sima');
  await page.getByRole('textbox', { name: 'Email' }).fill('shreya.verma@clobz.com');
  await page.getByRole('textbox', { name: 'Phone' }).fill('85300247745');
  await page.getByRole('button', { name: 'save', exact: true }).click() */

  //Create Lead to opportunity
  //await page.getByText('Leads', { exact: true }).click();
  await page.getByRole('button', { name: 'Create Opportunity' }).nth(1).click();
  await page.locator('#rc_select_4').click();
  await page.getByText('Freight Forwarding').nth(3).click();
  await page.getByRole('button', { name: 'Create', exact: true }).click();
  //await expect(page.getByText('The lead has been converted')).toBeVisible({timeout:15000});
  await page.locator('div:nth-child(10) > .ant-form-item > .ant-row > .ant-col.ant-form-item-control > .ant-form-item-control-input').click();
  await page.getByRole('button', { name: 'edit Edit' }).click();
  await page.locator('#rc_select_8').click();
  await page.getByText('KM').click();
  await page.locator('#shipmentType').click();
  await page.getByText('Domestic', { exact: true }).click();
  await page.locator('div').filter({ hasText: 'DOMESTICINTERNATIONALDomesticInternational' }).nth(1).click();
  await page.locator('#fromAirport').fill('kemp');
  await page.locator('#toAirport').fill('ambed');
  await page.locator('#invoiceCurrency').fill('indi');
  await page.locator('#shipperAddress').fill('MJR');
  await page.locator('#shipperCountry').fill('indi');
  await page.locator('#shipperState').fill('kar');
  await page.locator('#shipperCity').fill('Benga');
  await expect(page.getByText('Route distance has been')).toBeVisible();
  await page.locator('#receiverName').fill('Shreya');
  await page.locator('#receiverAddress').fill('Narendra');
  await page.locator('#receiverCountry').fill('indi');
  await page.locator('#receiverState').fill('maha');
  await page.locator('#receiverCity').fill('Nagp');
  await page.getByRole('spinbutton', { name: 'Quantity' }).fill('23');
  await page.getByRole('spinbutton', { name: 'Length' }).fill('2');
  await page.getByRole('spinbutton', { name: 'Breadth' }).fill('3');
  await page.getByRole('spinbutton', { name: 'Height' }).fill('3');
  await page.getByRole('spinbutton', { name: 'Actual Weight' }).fill('34');
  await page.getByRole('spinbutton', { name: 'Charge Weight' }).fill('54');
  await expect(page.getByText('The opportunity details have')).toBeVisible();
});
