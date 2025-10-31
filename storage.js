const localStorageKey = 'appData';

export function saveData(data) {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
}

export function loadData() {
    const data = localStorage.getItem(localStorageKey);
    return data ? JSON.parse(data) : null;
};

