"use client"
import { createContext, useContext, useState } from "react";

// 1. Créer un contexte
const MenuContext = createContext({
  isSubMenuOpen: false,
  toggleSubMenu: () => {},
});

// 2. Créer un fournisseur (Provider) pour le contexte
export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ isSubMenuOpen, toggleSubMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

// 3. Créer un hook personnalisé pour utiliser le contexte
export const useMenu = () => useContext(MenuContext);
