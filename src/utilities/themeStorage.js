import { getItem, setItem } from "./localStorage";

export const getThemeFromStorage = () => {
    return getItem('theme');
}
export const setThemeToStorage = (theme) => {
    return setItem('theme', theme)
}