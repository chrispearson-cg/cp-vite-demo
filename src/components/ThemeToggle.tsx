import { useEffect, useState } from "react";

const light = "light";
const dark = "dark";
const themeKey = "theme"

const getStoredTheme = () => localStorage.getItem(themeKey)
const setStoredTheme = (theme: string) => localStorage.setItem(themeKey, theme)

const ThemeToggle = () => {
    const [theme, setTheme] = useState(light);

    function toggleTheme() {
        const newTheme = theme === light ? dark : light;
        setStoredTheme(newTheme);
        setTheme(newTheme);
    }

    useEffect(() => {
        const savedTheme = getStoredTheme();
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-bs-theme', theme);
    }, [theme]);

    return (
        <button onClick={toggleTheme} className="btn btn-secondary">
            {theme === light ? "☀" : "🌓"}
        </button>
    )
}

export default ThemeToggle
