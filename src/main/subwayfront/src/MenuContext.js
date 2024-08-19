import React, { createContext, useState } from 'react';

export const MenuContext = createContext([]);

export function MenuProvider({ children }) {
    const [menuItems, setMenuItems] = useState(false);

    const contextMenu = (paramMenu) => {
      setMenuItems(paramMenu);
    };

    return (
        <MenuContext.Provider value={{ menuItems, setMenuItems }}>
            {children}
        </MenuContext.Provider>
    );
}
