import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold bg-primary-light dark:bg-primary-dark">
        Dark Mode is {theme}
      </h1>
      <button
        className="mt-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
