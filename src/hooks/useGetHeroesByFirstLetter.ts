import { useEffect, useState } from "react";
import type { Hero } from "../types/hero";
import { getHeroesByFirstLetter } from "../api/heroes";

export const useGetHeroesByFirstLetter = (initialLetter: string) => {
    const [heroes, setHeroes] = useState<Hero[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState(false);


    useEffect(()=> {
        const controller = new AbortController();
        getHeroesByFirstLetter(initialLetter, { signal: controller.signal}).then((data) => {
            setHeroes(data);
            setIsLoading(false);
        });
        return () => {
            controller.abort();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const refetch = async (letter: string) => {
        setIsError(false);
        setHeroes(null);
        setIsLoading(true);
        try {
            const data = await getHeroesByFirstLetter(letter);
            setHeroes(data);
        } catch (error) {
            console.error("Error fetching heroes:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }


    return {
        heroes,
        isLoading,
        isError,
        refetch,
    }
}