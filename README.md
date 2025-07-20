# CRUD Fullstack - Angular + Java Spring

Este es un proyecto de práctica que realicé como parte de mi proceso de aprendizaje en desarrollo **fullstack**. Consiste en una aplicación básica tipo **CRUD (Create, Read, Update, Delete)** para la gestión de usuarios, con:

- 🧩 **Frontend** desarrollado en **Angular 13**, utilizando la plantilla de administración **ngx-admin**.
- ⚙️ **Backend** construido con **Java 8** y **Spring Boot**, exponiendo una API REST.

---

## 🚀 Objetivos del proyecto

- Practicar la integración entre frontend y backend.
- Familiarizarme con el uso de **plantillas de interfaz (ngx-admin)** en Angular.
- Implementar un backend con Java usando buenas prácticas básicas de REST.
- Aprender a estructurar y consumir una API desde el cliente.

---

## 🛠️ Tecnologías utilizadas

### Frontend:
- Angular 13
- ngx-admin (tema de Nebular)
- TypeScript
- SCSS

### Backend:
- Java 1.8
- Spring Boot
- Maven

---

## 🗂️ Estructura del proyecto

```bash
/
├── frontend/      # Proyecto Angular con ngx-admin
│   └── ngx-admin/ ...
├── backend/       # Proyecto Java Spring Boot
│   └── usuarios/  ...
└── README.md
```
### ⚙️ Cómo ejecutar
1. Clonar el repositorio
```bash
git clone https://github.com/dgonzalez-17/student-crud-angular-java.git
```
2. Levantar el backend (Java)
```bash
cd backend/usuarios
# Asegúrate de tener Maven y Java 8 instalados
mvn spring-boot:run
```
La API correrá en http://localhost:8080

3. Levantar el frontend (Angular)
```bash
cd frontend/ngx-admin
npm install
ng serve
```
La app se ejecutará en http://localhost:4200
