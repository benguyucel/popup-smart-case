import { getItem, setItem } from "./localStorage"

export const setUserToStorage = (data) => {
    if (data.length > 0)
        setItem('username', data)
    else {
        return
    }
}
export const getUserFromStorage = () => {
    return getItem('username')
}
