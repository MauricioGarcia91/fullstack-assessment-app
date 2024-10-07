# Fullstack Assessment APP

## Description

`fullstack_assessment_app` is a project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This application allows to users managing employees.

**This applicacition is available for desktop devices now. Next version will be provide for small devices with responsive design.**

## Features

- **Create an employee**
- **Get a list of employees**
- **View the employee's detail**
- **Update the employee's detail or department**
- **Delete the employee**

## Prerequisites

- [Node.js v20](https://nodejs.org/)

## Technologies

- Next.js 14

## Installation

1. Clone this repository:

   ```bash
   git clone https://git.number8.com/mauricio.garcia/fullstack.assessment.app.git
   cd fullstack_assessment_app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Check Port Usage

By default, this application runs on port 3000 and is configured to connect to the `fullstack_assessment_api` on port 4001.

1. To start the APP in development mode:

   ```bash
   npm run dev
   ```

   This will connect to battle `fullstack_assessment_api`. You must run battle `fullstack_assessment_api` before start this aplication

## Architecture

### The application follows Next.js standards for page and route definitions. The folder structure is as follows:

- `app/`: Pages
- `ui/`: User interface components
- `hooks/`: Custom React hooks
- `modules/`: It follows a hexagonal architecture composed of:
  - **Domain**: The core of the application where the business logic and main entities are defined.
  - **Adapters**: This layer handles the input and output of the application, including actions, api services, and validation schemas for inputs.
  - **Use-Cases**: This layer defines the application logic that orchestrates the domain operations, using the entities and services defined in the domain.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
