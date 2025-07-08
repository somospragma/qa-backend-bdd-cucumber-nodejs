## ▶️ Scripts Disponibles

El archivo `package.json` contiene varios scripts útiles:

```json
"scripts": {
  "clean-dist": "rimraf dist/tests/features",
  "create-dist": "mkdir dist\\tests\\features",
  "copy-features": "copyfiles tests/features/*.feature dist",
  "test": "npm run clean-dist && npm run create-dist && npm run copy-features && tsc && cucumber-js dist/tests/features --publish-quiet"
}
```

### Cómo ejecutar las pruebas

1. Compila el proyecto y ejecuta las pruebas con:

```bash
npm test
```

Este comando realiza:

- Limpieza de la carpeta `dist`
- Creación de estructura para los archivos `.feature`
- Copia de archivos `.feature` al `dist`
- Transpilación de TypeScript
- Ejecución de las pruebas con Cucumber.js

---