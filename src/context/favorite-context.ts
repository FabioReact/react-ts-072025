import type { Hero } from "@/types/hero";
import { createContext, useContext } from "react";

export type FavoriteContextType = {
    favorites: Hero[]
    addToFavorite: (hero: Hero) => void;
    removeFromFavorite: (heroId: number) => void;
};

const FavoriteContext = createContext<FavoriteContextType>(null!);

export const useFavoriteContext = () => useContext(FavoriteContext);
export default FavoriteContext;