# TypeScript Object-Oriented Programming Project

This project demonstrates the implementation of Object-Oriented Programming (OOP) principles using TypeScript. It includes classes for `User`, `Admin`, and `Teacher`, showcasing concepts such as inheritance, encapsulation, and type safety.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Status](#status)
- [Description](#description)
- [Features](#features)
- [Setup and Usage](#setup-and-usage)
- [Testing](#testing)
- [Author](#author)

---

## Technologies Used

<div style="display: flex; flex-direction: row;">
  <img src="images/ts.png" alt="TypeScript Logo" width="100" style="margin-right: 20px;"/>
  <img src="images/node.png" alt="Node.js Logo" width="100" style="margin-right: 20px;"/>
</div>

- **TypeScript**: For type-safe and modern JavaScript development.
- **Node.js**: Runtime environment for executing TypeScript code.
- **Jest**: Testing framework for writing and running unit tests.
- **ESLint**: For code linting and enforcing coding standards.
- **Prettier**: For code formatting.

---

## Status

![In Progress](http://img.shields.io/static/v1?label=STATUS&message=IN%20PROGRESS&color=YELLOW&style=for-the-badge)

---

## Description

This project is designed to explore OOP concepts using TypeScript. It includes:
- A base `User` class with private fields and validation.
- Extended classes `Admin` and `Teacher` that inherit from `User`.
- Comprehensive validation for attributes like `email` and `birthDate`.
- Encapsulation of private fields using TypeScript's `#` syntax.

The project is organized with a focus on maintainability and scalability, adhering to best practices in TypeScript development.

---

## Features

- **User Management**:
  - Create and manage user profiles with attributes like name, email, birth date, role, and status.
- **Admin-Specific Features**:
  - Ability to create courses with defined slots.
- **Teacher-Specific Features**:
  - Approve students for courses.
- **Validation**:
  - Input validation for fields such as `email` and `birthDate`.
- **Encapsulation**:
  - Private fields for enhanced data integrity.

---

## Setup and Usage

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- TypeScript (installed globally)

### Project Structure

  ```
  TypeScript_Object_Oriented_Project
  │
  ├── POO
  │   ├── Admin.ts
  │   ├── Teacher.ts
  │   ├── User.ts
  │   ├── main.ts
  │
  ├── test
  │   ├── Admin.test.ts
  │   ├── Teacher.test.ts
  │   ├── User.test.ts
  │
  ├── img
  │   ├── ts.png
  │   ├── node.png
  │
  ├── dist
  │   ├── (Compiled TypeScript files)
  │
  ├── jest.config.ts
  ├── tsconfig.json
  ├── .eslintrc.js
  ├── .prettierrc
  ├── package.json
  ├── README.md
  └── LICENSE.md
  ```

## Author
Developed by Diego Franco.