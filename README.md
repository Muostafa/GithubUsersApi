# React + TypeScript + Vite - GitHub Users API

This project is a web application built with React, TypeScript, and Vite that allows users to search for GitHub users and view their profiles.

## Setup Instructions

1.  **Clone the repository:**

    ```bash
    git https://github.com/Muostafa/GithubUsersApi.git
    cd GithubUsersApi
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.

    ```bash
    npm install
    # or
    # yarn install
    ```

3.  **Environment Variables:**
    This project might require a GitHub Personal Access Token if you encounter API rate limits. If so, create a `.env` file in the root directory and add your token:

    ```
    VITE_GITHUB_TOKEN=your_github_personal_access_token
    ```

    You can generate a token from your GitHub settings. Ensure the token has the `public_repo` scope.

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    # yarn dev
    ```

    This will start the development server, typically at `http://localhost:5173`.

5.  **Build for production:**

    ```bash
    npm run build
    # or
    # yarn build
    ```

    This command bundles the application into static files for production in the `dist` directory.

6.  **Linting:**
    To check for linting errors:
    ```bash
    npm run lint
    # or
    # yarn lint
    ```

## Technical Design Rationale

### Core Technologies

- **React:** Chosen for its component-based architecture, making it easier to build and maintain complex UIs. Its virtual DOM ensures efficient updates and rendering.
- **TypeScript:** Adds static typing to JavaScript, which helps in catching errors early during development, improving code quality, and enhancing developer experience with better autocompletion and refactoring capabilities.
- **Vite:** Selected as the build tool and development server for its incredibly fast cold starts and Hot Module Replacement (HMR), significantly speeding up the development workflow.
- **Tailwind CSS:** A utility-first CSS framework used for rapid UI development. It allows for styling directly in the markup, reducing the need for custom CSS files and promoting consistency.
- **React Router:** For handling client-side routing, enabling navigation between different views (e.g., Home page, Favorites page) without full page reloads.

### State Management

- **React Context API:** Used for managing global state such as the theme (dark/light mode) and GitHub user data (search results, favorites). For a small to medium-sized application like this, Context API provides a simpler alternative to more complex state management libraries like Redux or Zustand, without adding extra dependencies.
  - `ThemeContext`: Manages the application's theme (light/dark) and provides a toggle function.
  - `GithubContext`: Manages GitHub user search results, loading states, error handling, and favorite users.

### API Interaction

- The application interacts with the official GitHub API (`https://api.github.com`) to fetch user data.
- Authenticated requests (using `VITE_GITHUB_TOKEN`) are preferred to avoid rate limiting issues associated with unauthenticated requests.
- Error handling is implemented to inform the user about issues during API calls (e.g., user not found, API errors).

### Component Structure

The application is structured into several reusable components:

- **Layout Components:** `Layout.tsx`, `Navbar.tsx` provide the overall structure and navigation.
- **UI Components:** `SearchBar.tsx`, `Pagination.tsx`, `UserCard.tsx`, `UsersList.tsx`, `ThemeToggle.tsx` are responsible for specific UI elements and functionalities.
- **Page Components:** `HomePage.tsx`, `FavoritesPage.tsx`, `NotFound.tsx` represent the different views of the application.

### Key Features Implemented

- **User Search:** Users can search for GitHub users by their username.
- **User Profile Display:** Displays basic information for each user found (avatar, username, link to profile).
- **Pagination:** For navigating through search results.
- **Favorites:** Users can add/remove users from a favorites list. Favorites are persisted in local storage.
- **Theme Toggling:** Users can switch between light and dark themes. The selected theme is persisted in local storage.
- **Responsive Design:** The application is designed to be responsive across different screen sizes.

### Linting and Formatting

- **ESLint:** Used for identifying and reporting on patterns in JavaScript/TypeScript code, helping to maintain code quality and consistency.
- **Prettier (via ESLint integration or editor settings):** While not explicitly configured in `package.json` scripts for formatting, it's a common practice to use Prettier for code formatting to ensure a consistent style across the codebase. The provided ESLint configuration (`eslint.config.js`) can be extended to include Prettier rules.

## Code Review Notes (Self-Review / Future Improvements)

### Potential Areas for Improvement

- **Testing:** Implement unit tests (e.g., with Vitest or Jest and React Testing Library) for components and utility functions. Consider adding end-to-end tests (e.g., with Playwright or Cypress).
- **Performance Optimization:**
  - Handle long lists of users if performance becomes an issue with a very large number of favorites or search results.
- **Code Splitting:** For larger applications, Vite's automatic code splitting is beneficial, but further manual optimization might be needed for specific routes or components.
- **Detailed User Page:** Currently, only basic user information is displayed. A dedicated user detail page could be added to show more information like repositories, followers, etc.
- **UI/UX Refinements:**
  - Improve transitions and animations for a smoother feel.
  - Refine the visual design for better aesthetics.
