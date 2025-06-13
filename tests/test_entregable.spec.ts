import { test, expect } from '@playwright/test';

test('llenar formulario de demoqa', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.waitForTimeout(1000);

  // Llenar datos básicos
  await page.fill('#firstName', 'Kriss');
  await page.waitForTimeout(500);
  await page.fill('#lastName', 'Jimenez');
  await page.waitForTimeout(500);
  await page.fill('#userEmail', 'kriss@example.com');
  await page.waitForTimeout(500);
  await page.click('label[for="gender-radio-1"]'); // Hombre
  await page.waitForTimeout(500);
  await page.fill('#userNumber', '0999999999');
  await page.waitForTimeout(700);

  // Fecha de nacimiento
  await page.click('#dateOfBirthInput');
  await page.waitForTimeout(500);
  await page.selectOption('.react-datepicker__month-select', '2'); // Marzo
  await page.waitForTimeout(300);
  await page.selectOption('.react-datepicker__year-select', '2000');
  await page.waitForTimeout(300);
  await page.click('.react-datepicker__day--002'); 
  await page.waitForTimeout(800);

  // Materias
  await page.fill('#subjectsInput', 'Math');
  await page.waitForTimeout(300);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(700);

  // Hobbies
  await page.click('label[for="hobbies-checkbox-1"]');
  await page.waitForTimeout(500);

  // Dirección
  await page.fill('#currentAddress', 'norte de loja');
  await page.waitForTimeout(700);

  // Seleccionar estado y ciudad
  await page.click('#state');
  await page.waitForTimeout(500);
  await page.click('div[id^=react-select-3-option-0]'); // NCR
  await page.waitForTimeout(500);
  await page.click('#city');
  await page.waitForTimeout(400);
  await page.click('div[id^=react-select-4-option-0]'); // Delhi
  await page.waitForTimeout(300);

  // Enviar formulario
  await page.click('#submit');
  await page.waitForTimeout(1000);
  await page.click('#closeLargeModal');
  await page.waitForTimeout(500);
});

