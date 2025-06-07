# Backend - Sistema de Gestión de Especialistas Médicos

API para el módulo administrativo de la clínica "Salud Vital" desarrollada con AdonisJS y Vue 3

## Requisitos

- Node.js v16+
- npm v8+
- MySQL 5.7+
- AdonisJS v5+

## Instalación

1. Clonar el repositorio
   git clone https://github.com/ImNotDiEn/salud-vital-back.git
   
   cd hello-world

3. Instalar Dependencias
   npm install

4. Configurar entorno:
   Copiar el archivo .env.example a .env

5. Configurar las variables de conexión a MySQL:

   env
   DB_CONNECTION=mysql
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_USER=tu_usuario
   MYSQL_PASSWORD=tu_contraseña
   MYSQL_DB_NAME=salud_vital_db
   
6. Ejecutar migraciones:
   node ace migration:run

7. Iniciar el servidor: 
   node ace serve --watch
