import { test, expect } from '@playwright/test';

test('User can submit a bug report', async ({ page }) => {
  await page.goto('https://pwts.dev/examples/ui/po/report.html');

  // Wprowadzenie tytułu błędu
  await page.getByPlaceholder('Enter a short title for the bug').fill('Sample Bug Title');

  // Opis błędu
  await page.getByPlaceholder('Describe the bug in detail').fill('This is a detailed description of the bug.');

  // Kroki do odtworzenia
  await page.getByPlaceholder('List the steps to reproduce the bug').fill('1. Open the app\n2. Click the button\n3. Observe crash');

  // Załącznik (pomiń, jeśli nie testujesz uploadu – wymaga pliku lokalnie)
  // await page.getByLabel('Upload Screenshot').setInputFiles('tests/screenshots/sample.png');

  // Kliknięcie przycisku "Submit Bug"
  await page.getByRole('button', { name: 'Submit Bug' }).click();

  // Tu można dodać asercję np. na wiadomość potwierdzającą (jeśli się pojawia)
  await page.waitForLoadState('domcontentloaded')
  await expect(page.getByText('Bug submitted')).toBeVisible();
});
