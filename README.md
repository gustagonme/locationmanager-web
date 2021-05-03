# Locationmanager Web Angular Front end

Este repositorio está destinado para el Front-end de la solución Location manager.

## Instalación en ambiente local

Prerrequisitos:

- Nodejs versión 10 o superior.
- IDE para el manejo de código Typescript, preferiblemente VisualStudio code.

1. Posterior a la instalación de Nodejs, es necesario instalar el CLI de angular para correr nuestro proyecto.
Este se instala de manera global con el siguiente comando: npm install -g @angular/cli.

2. Una vez instalado, abrimos nuestro proyecto con el editor de preferencia y modificamos el archivo endpoint.ts, ubicado en src/_utils. 
Este contiene la url de los servicios Rest que consume el proyecto, para fines practicos debe proporcionar la URL local que tenga el proyecto 
Backend.

3. Realizados estos cambios, ejecutar el comando npm install.

4. Finalizado este procesos, procedemos a ejecutar el comando ng serve --open para que el proyecto se despliegue de manera local en su navegador. 
