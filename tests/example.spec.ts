import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('test youtube', async ({ page }) => {

  await page.goto('https://www.mercadolibre.com.ec/');

  await page.locator('input[id=\'cb1-edit\']').fill('gamer pc');
  await page.keyboard.press('Enter');
  // espera que la página cargue los resultados
  await page.waitForTimeout(3000);
  await expect(page.locator('//ol[contains(@class, \'ui-search-layout\')]')).toBeVisible();
  //
  //toma una captura de pantalla de la página completa
  await page.screenshot({ path: 'pagina_completa.png', fullPage: true });

  await page.pause();

});


test('test clinica', async ({ page }) => {

    // Abre la app en desarrollo
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000); // espera que la app cargue

  // Llena el campo de email (usando el placeholder como selector)
  await page.getByPlaceholder('Ingrese su correo aquí').fill('kriss@utpl.com');
  await page.waitForTimeout(2000); // espera la redirección

  // Llena el campo de contraseña
  await page.getByPlaceholder('Ingrese su contraseña').fill('123');
  await page.waitForTimeout(2000); // espera la redirección

  // Click en el botón de iniciar sesión
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.waitForTimeout(2000); // espera la redirección

  // Verifica que la URL cambió a la página de inicio
  await expect(page).toHaveURL(/.*\/inicio/);
  await page.waitForTimeout(1000);

  // Verifica que el título de la página sea "Inicio"
  await page.getByText('Vista Médico').first().click();
  await page.waitForTimeout(2000); // espera la nueva vista
  
  // Verifica que la URL cambió a la página de vista médico
  await expect(page).toHaveURL(/\/vista-medico$/);
  await page.waitForTimeout(1000);

  await page.getByText('Crear Paciente').first().click();
  await page.waitForTimeout(1000); // espera la nueva vista

    // await expect(page).toHaveURL(/.*\/crear-pacient$/);
    await expect(page).toHaveURL(/\/crear-paciente$/);
  await page.waitForTimeout(1000);

    // Rellenar campos con datos 
  await page.fill('input[name="fecha_admision"]', '2025-06-09');
  await page.fill('input[name="admisionista"]', 'cristian jimenez');
  await page.fill('input[name="primer_apellido"]', 'González');
  await page.fill('input[name="segundo_apellido"]', 'Ramírez');
  await page.fill('input[name="primer_nombre"]', 'Carlos');
  await page.fill('input[name="segundo_nombre"]', 'Andrés');
    await page.waitForTimeout(2000);

  await page.selectOption('select[name="tipo_documento"]', 'cc');
  await page.fill('input[name="numero_documento"]', '1723456789');
  await page.fill('input[name="estado_civil"]', 'Soltero');
    await page.waitForTimeout(2000);

  await page.selectOption('select[name="sexo"]', 'masculino');
  await page.fill('input[name="telefono_fijo"]', '022345678');
  await page.fill('input[name="celular"]', '0998765432');
  await page.fill('input[name="correo_electronico"]', 'carlos.gonzalez@email.com');
  await page.fill('input[name="fecha_nacimiento"]', '1990-01-15');
  await page.fill('input[name="lugar_nacimiento"]', 'Quito');
  await page.selectOption('select[name="nacionalidad"]', 'Ecuatoriana');
  await page.fill('input[name="condicion_edad"]', 'Adulto');
  await page.fill('input[name="autoidentificacion_etnica"]', 'Mestizo');
  await page.fill('input[name="nacionalidad_etnica"]', 'Ecuatoriana');
  await page.fill('input[name="pueblos"]', 'Ninguno');
  await page.fill('input[name="nivel_educacion"]', 'Universitaria');
  await page.fill('input[name="estado_nivel_educacion"]', 'Completo');
  await page.fill('input[name="ocupacion"]', 'Ingeniero');
  await page.fill('input[name="tipo_empresa"]', 'Privada');
  await page.fill('input[name="seguro_salud"]', 'IESS');
  await page.fill('input[name="tipo_bono"]', 'Regular');

  // Datos de residencia
  await page.selectOption('select[name="provincia"]', 'Pichincha');
  await page.waitForTimeout(500); // espera a que se carguen cantones si aplica
  await page.selectOption('select[name="canton"]', 'Quito');
  await page.waitForTimeout(500); // espera a que se carguen parroquias
  await page.selectOption('select[name="parroquia"]', 'Centro Histórico');
  await page.fill('input[name="barrio"]', 'La Floresta');
  await page.fill('input[name="calle_principal"]', 'Av. Amazonas');
  await page.fill('input[name="calle_secundaria"]', 'José María Egas');
  await page.fill('input[name="referencia"]', 'Frente al parque');

  // Datos contacto emergencia
  await page.fill('input[name="contacto_emergencia_cedula"]', '1712345678');
  await page.fill('input[name="contacto_emergencia_nombre"]', 'Ana María');
  await page.fill('input[name="contacto_emergencia_apellido"]', 'Lopez');
  await page.fill('input[name="contacto_emergencia_telefono"]', '0991122334');
  await page.fill('input[name="contacto_emergencia_direccion"]', 'Av. Naciones Unidas');
  await page.fill('input[name="contacto_emergencia_relacion"]', 'Hermana');

  // Opcional: enviar formulario
  // await page.click('button[type="submit"]');

  // Esperar unos segundos para revisar
  await page.waitForTimeout(5000);



});
