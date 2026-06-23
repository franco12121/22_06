# 🚀 Sistema de Gestión de Suscripciones y Pagos (Architecture & LLD)

Este repositorio contiene la resolución práctica y arquitectónica del sistema de suscripciones planteado para la actividad del 22-06-2026. El proyecto fue estructurado bajo el patrón **Model-View-Controller (MVC)** y desarrollado íntegramente en **TypeScript**, aplicando de forma estricta los principios SOLID y patrones de diseño para garantizar un código limpio, escalable y desacoplado.

---

## 🛠️ Tecnologías y Enfoque de Desarrollo

* **Lenguaje:** TypeScript (Tipado estricto, configurado bajo módulos modernos ECMAScript `NodeNext`).
* **Arquitectura:** Diseño de Bajo Nivel (LLD) orientado a componentes limpios, sin comentarios redundantes, donde el código se defiende solo por su estructura y semántica.
* **Declaración de Autoría:** La lógica de negocio, el control de invariantes y la división de capas fueron supervisados por mí. Utilicé Inteligencia Artificial como asistente técnico para la optimización de la sintaxis del compilador, la resolución de extensiones de módulos y la estructura base del entorno.

---

## 🏗️ Patrones de Diseño e Invariantes Implementados

### 1. Persistencia Centralizada (Patrón Singleton)
* **Archivo:** `src/Config/DatabaseConnection.ts`
* **Resolución:** Centraliza las colecciones de datos en memoria RAM (`users` y `subscriptions`). Al definir un constructor privado, garantizamos que exista una única instancia global del motor de datos interino, protegiendo el estado del sistema contra duplicaciones o corrupción de memoria.

### 2. Capa de Aislamiento de Datos (Patrón Repository)
* **Archivo:** `src/Repositories/UserRepository.ts`
* **Resolución:** Aplica el principio de **Inversión de Dependencias (SOLID D)**. Los controladores no acceden directamente a las colecciones globales, sino a través de métodos especializados de abstracción (`save`, `findById`), encapsulando las consultas y búsquedas mediante tipado estricto.

### 3. Extensibilidad del Dominio (Principio Open/Closed)
* **Archivos:** `src/Models/User.ts` y `src/Models/Subscription.ts`
* **Resolución:** Las entidades de negocio quedan cerradas a la modificación pero abiertas a la extensión (OCP). El tipado estricto de preferencias de notificación y tipos de planes permite escalar el sistema hacia nuevas reglas de negocio sin alterar el flujo principal de datos.

### 4. Arquitectura Reactiva Desacoplada (Patrón Observer)
* **Archivo:** `src/Services/PaymentService.ts`
* **Resolución:** El procesamiento de pagos actúa como el *Sujeto* central del evento transaccional. Múltiples *Observadores* independientes (como el `LoggerObserver` implementado en el punto de entrada) pueden suscribirse dinámicamente para reaccionar ante la activación de un usuario Premium sin acoplar rígidamente los módulos.

---

## 📂 Estructura Limpia del Repositorio (MVC)

```text
src/
├── Config/          # Configuración y Patrón Singleton (Base de datos)
├── Models/          # Entidades y Moldes puros de negocio (SOLID OCP)
├── Repositories/    # Capa de datos y Abstracción (SOLID DIP
