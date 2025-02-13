import React from 'react';

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
function useLocalStorage(itemName, initialValue) {

    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parsedItem;
    
                if (!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItems);
                    setItem(parsedItem);
                }
    
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }, 2000);

    }, []);

    const saveItem = (newItem) => {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
    };

    return {
        item, 
        saveItem, 
        loading, 
        error
    };
}

export { useLocalStorage };

// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//    {text: 'Cortar cebolla', completed: true},
//    {text: 'Tomar el curso de intro a React', completed: false},
//    {text: 'Llorar con la llorona', completed: false},
//    {text: 'LAAKAKAKAKAK', completed: true},

// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));