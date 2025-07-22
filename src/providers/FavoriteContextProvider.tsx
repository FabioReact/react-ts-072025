import FavoriteContext from "@/context/favorite-context";
import type { Hero } from "@/types/hero";
import { useState } from "react";

const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Hero[]>([]);

  const addToFavorite = (hero: Hero) => {
    setFavorites((prevFavorites) => [...prevFavorites, hero]);
  };

  const removeFromFavorite = (heroId: number) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((hero) => hero.id !== heroId),
    );
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
