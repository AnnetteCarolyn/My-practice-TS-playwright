import { test, expect } from '@playwright/test';

test('User can submit a bug report', async ({ page }) => {
  await page.goto('https://pwts.dev/examples/ui/po/report.html');

  // Fill out the bug report form
  await page
    .getByPlaceholder('Enter a short title for the bug')
    .fill('Sample Bug Title');
  await page
    .getByPlaceholder('Describe the bug in detail')
    .fill('This is a detailed description of the bug.');
  await page
    .getByPlaceholder('List the steps to reproduce the bug')
    .fill('1. Open the app\n2. Click the button\n3. Observe crash');
  await page
    .getByLabel('Upload Screenshot')
    .setInputFiles('tests/screenshots/sample.png');

  // Submit the bug report
  await page.getByRole('button', { name: 'Submit Bug' }).click();

  // Verify confirmation message
  const confirmationDialog = page.locator('div[aria-labelledby="swal2-title"]');
  await expect(confirmationDialog).toBeVisible();
  await expect(page.getByText('Bug submitted')).toBeVisible();

  // Close the confirmation dialog
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(confirmationDialog).toBeHidden();
});
