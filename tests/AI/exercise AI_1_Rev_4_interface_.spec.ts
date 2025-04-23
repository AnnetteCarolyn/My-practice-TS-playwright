import { test, expect } from '@playwright/test';

// Define an interface for the bug report
interface BugReport {
  title: string;
  description: string;
  steps: string;
  screenshotPath: string;
}

test.describe('Bug Report Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the bug report page before each test
    await page.goto('https://pwts.dev/examples/ui/po/report.html');
  });

  test('User can submit a bug report', async ({ page }) => {
    // Test data
    const bugReport: BugReport = {
      title: 'Sample Bug Title',
      description: 'This is a detailed description of the bug.',
      steps: '1. Open the app\n2. Click the button\n3. Observe crash',
      screenshotPath: 'tests/screenshots/sample.png',
    };

    // Define constants for selectors
    const titleInput = page.getByPlaceholder('Enter a short title for the bug');
    const descriptionInput = page.getByPlaceholder('Describe the bug in detail');
    const stepsInput = page.getByPlaceholder('List the steps to reproduce the bug');
    const screenshotInput = page.getByLabel('Upload Screenshot');
    const submitButton = page.getByRole('button', { name: 'Submit Bug' });
    const confirmationDialog = page.locator('div[aria-labelledby="swal2-title"]');
    const confirmationText = page.getByText('Bug submitted');
    const okButton = page.getByRole('button', { name: 'OK' });

    // Verify form elements are visible before interacting
    await expect(titleInput).toBeVisible();
    await expect(descriptionInput).toBeVisible();
    await expect(stepsInput).toBeVisible();
    await expect(screenshotInput).toBeVisible();

    // Fill out the bug report form
    await titleInput.fill(bugReport.title);
    await descriptionInput.fill(bugReport.description);
    await stepsInput.fill(bugReport.steps);
    await screenshotInput.setInputFiles(bugReport.screenshotPath);

    // Submit the bug report
    await submitButton.click();

    // Verify confirmation message
    await expect(confirmationDialog).toBeVisible();
    await expect(confirmationText).toBeVisible();

    // Close the confirmation dialog
    await okButton.click();
    await expect(confirmationDialog).toBeHidden();
  });
});