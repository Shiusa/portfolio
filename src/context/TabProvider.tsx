"use client"
import { TabAction, TabContextType, TabType } from '@/types/types';
import { useRouter } from 'next/navigation';
import React, { useCallback, useContext, useReducer } from 'react'

const TabContext = React.createContext<TabContextType | undefined>(undefined)

const tabReducer = (state: TabType[], action: TabAction):TabType[] => {
    switch(action.type) {
        case "add": {
            const tabExists = state.some(tab => tab.path === action.payload.path);
            if (tabExists) {
                return state; // Retourner l'état actuel si la tab existe déjà
            }

            const newId = state.length > 0 ? Math.max(...state.map(tab => tab.id)) + 1 : 1;
            const newTab: TabType = {
                id: newId,
                title: action.payload.title,
                path: action.payload.path
            };
            return [...state, newTab];
        }
        case 'remove': {
            return state.filter(tab => tab.id !== action.payload.id);
        }
        default:
            return state; 
    }
}

const loadInitialTabs = (): TabType[] => {
    const initialTab = [{ id: 1, title: 'Accueil', path: '/' }];
    return initialTab;
};


export const useTabContext = () => {
    const context = useContext(TabContext);
    if (!context) {
        throw new Error('useTabContext must be used within a TabProvider');
    }
    return context;
};

const TabProvider = ({ children }: { children: React.ReactNode }) => {

    const [tabs, dispatch] = useReducer(tabReducer, [], loadInitialTabs)
    const router = useRouter();

    const addTab = useCallback((title: string, path: string) => {
        dispatch({ type: 'add', payload: { title, path } });
    }, []);

    const removeTab = useCallback((id: number) => {
        dispatch({ type: 'remove', payload: { id } });
        addTab("Accueil", "/");
        router.push('/');
    }, [router, addTab]);

    return (
        <TabContext.Provider value={{ tabs, addTab, removeTab }}>
            {children}
        </TabContext.Provider>
    );
}

export default TabProvider