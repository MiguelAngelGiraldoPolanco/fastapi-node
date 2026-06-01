# FastAPI-Node (Backend API)

Este repositorio contiene una API RESTful desarrollada con Node.js, diseñada para implementar patrones de autenticación y gestión de bases de datos.

## 🚀 Características Técnicas

* **Autenticación**: Implementación de flujo de login seguro mediante Passport.js y JWT (JSON Web Tokens).
* **Seguridad**: Gestión de hashing y verificación de contraseñas.
* **Base de Datos**: Integración de Sequelize como ORM para la administración de datos.
* **Funcionalidades**:
    * Operaciones CRUD para productos y categorías.
    * Lógica de recuperación de contraseñas integrada.
    * Gestión de perfiles de usuario y órdenes de compra.

## 🛠 Tech Stack

* **Runtime**: Node.js
* **Framework**: Express.js
* **ORM**: Sequelize
* **Seguridad**: Passport.js, JWT, bcrypt
* **Infraestructura**: Docker Compose

## 📁 Estructura del Proyecto

El proyecto está organizado siguiendo el principio de separación de responsabilidades:

* **routes/**: Definición de endpoints de la API.
* **services/**: Lógica de negocio y procesos.
* **db/**: Modelos y configuración de persistencia.
* **utils/**: Utilidades para autenticación y envío de correos.
