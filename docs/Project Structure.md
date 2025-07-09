## 📁 Estructura de Carpetas

```
bdd-cucumber-node/
│
├── package.json             # Configuración de dependencias y scripts
├── tsconfig.json            # Configuración de TypeScript
├── .gitignore
├── README.md
│
├── src/                     # Código fuente de la aplicación
│   └── app/
│         └── models/
│             └── user.model.ts #Modelo de un usuario
│         └── services/
│              └── login.service.ts  # Servicio de login simulado
│              └── user.service.ts  # Servicio de Usuarios simulado 
│
├── tests/                   # Pruebas
│   └── features/
│       ├── auth.feature     # Archivo con el escenario en lenguaje Gherkin
│       ├── user.feature     # Archivo con el escenario en lenguaje Gherkin
│       └── steps/
│           └── auth.steps.ts # Definición de los pasos en TypeScript
│           └── create-multiple-users.steps.ts # Definición de los pasos en TypeScript
│           └── create-user.steps.ts # Definición de los pasos en TypeScript
│           └── get-all-users.steps.ts # Definición de los pasos en TypeScript
```