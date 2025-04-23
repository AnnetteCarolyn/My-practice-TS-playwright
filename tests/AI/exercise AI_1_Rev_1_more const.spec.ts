import { test, expect } from '@playwright/test';

test('User can submit a bug report', async ({ page }) => {
  await page.goto('https://pwts.dev/examples/ui/po/report.html');

  // Define constants for selectors
  const titleInput = page.getByPlaceholder('Enter a short title for the bug');
  const descriptionInput = page.getByPlaceholder('Describe the bug in detail');
  const stepsInput = page.getByPlaceholder('List the steps to reproduce the bug');
  const screenshotInput = page.getByLabel('Upload Screenshot');
  const submitButton = page.getByRole('button', { name: 'Submit Bug' });
  const confirmationDialog = page.locator('div[aria-labelledby="swal2-title"]');
  const confirmationText = page.getByText('Bug submitted');
  const okButton = page.getByRole('button', { name: 'OK' });

  // Fill out the bug report form
  await titleInput.fill('Sample Bug Title');
  await descriptionInput.fill('This is a detailed description of the bug.');
  await stepsInput.fill('1. Open the app\n2. Click the button\n3. Observe crash');
  await screenshotInput.setInputFiles('tests/screenshots/sample.png');

  // Submit the bug report
  await submitButton.click();

  // Verify confirmation message
  await expect(confirmationDialog).toBeVisible();
  await expect(confirmationText).toBeVisible();

  // Close the confirmation dialog
  await okButton.click();
  await expect(confirmationDialog).toBeHidden();
});