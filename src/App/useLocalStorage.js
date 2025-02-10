import React from 'react';

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
function useLocalStorage(itemName, initialValue) {

    const localStorageItems = localStorage.getItem(itemName);
    let parsedItem;
    if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
    } else {
        parsedItem = JSON.parse(localStorageItems);
    }

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) => {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
    };

    return [item, saveItem];
}

export { useLocalStorage };