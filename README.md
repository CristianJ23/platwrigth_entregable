## Descripción del código
El siguiente código automatiza el llenado y envío del formulario de prueba disponible en https://demoqa.com/automation-practice-form usando Playwright.

## ¿Qué hace el script?
Navega a la página del formulario de práctica.

Llena datos básicos como nombre, apellido, email, teléfono, género y dirección.

Selecciona una fecha de nacimiento personalizada.

Escribe una materia y la confirma con Enter.

Marca una opción de hobbies.

Selecciona un estado y ciudad desde menús desplegables dinámicos.

Envía el formulario.

Cierra el modal de confirmación.

##  Pasos para ejecutar el script
### clonar eel repositorio
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo

### instalar dependencias
npm install

### instalar navegadores de playwrith
npx playwright install

### ejecutar el codigo
npx playwright test tests/test_entregable.spec.ts --headed 
