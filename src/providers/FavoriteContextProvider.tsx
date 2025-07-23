import { getHeroesById } from "@/api/heroes";
import { getUserFavorites } from "@/api/userPreferences";
import { useAuthContext } from "@/context/auth-context";
import FavoriteContext from "@/context/favorite-context";
import type { Hero } from "@/types/hero";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const FavoriteContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { id } = useAuthContext()

  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<Hero[]>([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["favorites", id],
    queryFn: () => getUserFavorites(id!),
    enabled: !!id,
  });

  const { data: favoriteHeroes } = useQuery({
    queryKey: ["getAllFavorites", favoriteIds],
    queryFn: () => getHeroesById(favoriteIds),
    enabled: !!favoriteIds.length,
  })

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setFavoriteIds(data);
    }
  }, [data]);

  useEffect(() => {
    if (!isLoading && !isError && favoriteHeroes) {
      setFavorites(favoriteHeroes);
    }
  }, [favoriteHeroes]);


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
