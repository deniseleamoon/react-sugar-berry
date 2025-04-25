# Sugar Berry Recipe Sharing Platform 🍓

[![Production Status](https://img.shields.io/badge/Production-Secure-brightgreen)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Introduction

## Introduction

**Sugar Berry** is a modern front-end web application designed for food enthusiasts to share and explore delicious recipes. Built with React and Vite, Sugar Berry offers an intuitive interface and dynamic user experience for recipe discovery and interaction.

## Features

### 1. Recipe Submission Form

- **Input Fields**: Users can submit recipes including the recipe name, ingredients, instructions, and an image URL.
- **Form Validation**: Ensures all fields are filled and the image URL is valid before submission.

### 2. Dynamic Recipe Display

- **Recipe Cards**: Recipes are dynamically displayed in a grid format with visually appealing cards.
- **Styling**: Cards are styled with CSS to ensure a consistent and attractive layout.

### 3. Recipe Interaction

- **Like Functionality**: Users can express their appreciation by liking recipes, with the count of likes shown on each card.

## Installation

To set up Sugar Berry on your local machine, follow these steps:

### 1. Clone the Repository

git clone https://github.com/your-username/sugar-berry-app.git

### 2. Navigate to the Project Directory

cd sugar-berry-app

### 3. Install Dependencies

npm install

### 4. Start the Development Server

npm run dev

## Technologies Used

### 1. React

- JavaScript library for building user interfaces.

### 2. Vite

- Fast build tool and development server.

### 3. ESLint

- Linting utility for identifying and fixing problems in your code.

### 4. phosphor-react

- Collection of customizable icons for React.

## Usage

### 1. Submit Recipes

- Use the form to add new recipes to the platform.

### 2. View Recipes

- Browse through the recipes displayed on the main page.

### 3. Like Recipes

- Click the "Like" button on any recipe card to show appreciation.

## Deployment Notes

- All production dependencies pass `npm audit --omit=dev`.
- Remaining moderate vulnerabilities are dev-only and linked to Vite tooling, which does not affect the deployed app or its security.
- This project uses locked dependency versions for stability and consistent installs across environments.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
