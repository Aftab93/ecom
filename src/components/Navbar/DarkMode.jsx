import React, { useEffect, useState } from 'react';
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const element = document.documentElement;

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add("dark");
            element.classList.remove("light");
        } else {
            element.classList.add("light");
            element.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <div className='relative'>
            <img
                src={theme === 'dark' ? DarkButton : LightButton}
                alt="Toggle Theme"
                onClick={toggleTheme}
                className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-200'
            />
        </div>
    );
};

export default DarkMode;
