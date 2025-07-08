# Proyecto: BDD con Cucumber y Node.js

Este proyecto tiene como objetivo implementar pruebas de comportamiento (BDD - Behavior Driven Development) usando **Cucumber.js** junto con **TypeScript** y **Chai** como herramienta de aserción.

## 🎯 Objetivo del Proyecto

El propósito es probar funcionalidades de login y un CRUD de usuarios utilizando un enfoque de desarrollo guiado por comportamiento, lo cual permite:

- Validar el comportamiento esperado de la aplicación de forma legible.
- Generar documentación ejecutable.
- Facilitar la colaboración entre equipos técnicos y no técnicos.

## 🧠 Buenas prácticas aplicadas

- **Separación de responsabilidades**: lógica del servicio (`src`) y pruebas (`tests`).
- **Transpilación segura**: uso de TypeScript y control de tipado.
- **Independencia de pruebas**: pruebas corren desde `dist` para evitar dependencias del entorno fuente.
- **Automatización del flujo de pruebas** con scripts de NPM.

---