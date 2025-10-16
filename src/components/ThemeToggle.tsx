import { useEffect, useState } from "react";

const light= "light";
const dark= "dark";

const ThemeToggle = () => {

    function toggleTheme() {
        setTheme((prevTheme) => (prevTheme === light ? dark : light));
    }

    const [theme, setTheme] = useState(light);

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
