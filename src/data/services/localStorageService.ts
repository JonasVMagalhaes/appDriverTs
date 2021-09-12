import ILocalStorage from "../../pages/api/interfaces/ILocalStorage";

export function saveInLocalStorage(item: ILocalStorage): boolean {
    localStorage.setItem(item.key, item.value);
    return true
}

export function getInLocalStorage(key: string): boolean {
    localStorage.getItem(key);
    return true
}