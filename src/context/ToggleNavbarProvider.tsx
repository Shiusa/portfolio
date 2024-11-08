"use client"
import { createContext, useContext, useEffect, useState } from "react";

// 1. Créer un contexte
const TabContext = createContext({
  isNavbarOpen: false,
  toggleNavbar: () => {},
});

// 2. Créer un fournisseur (Provider) pour le contexte
const ToggleNavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen((prev) => !prev);
  };

  // Effet pour écouter la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg correspond à 1024px et plus
        setIsNavbarOpen(true);
      } else {
        setIsNavbarOpen(false);
      }
    };

    // Appeler la fonction au montage pour vérifier la taille actuelle
    handleResize();

    // Ajouter l'écouteur de redimensionnement
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur lors du démontage
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TabContext.Provider value={{ isNavbarOpen, toggleNavbar }}>
      {children}
    </TabContext.Provider>
  );
};

// 3. Créer un hook personnalisé pour utiliser le contexte
export const useNavbarContext = () => useContext(TabContext);

export default ToggleNavbarProvider