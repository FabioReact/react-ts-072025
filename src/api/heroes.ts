import type { Hero } from "../types/hero";
import { FetchClient } from "./fetcher";

export const getHeroesByFirstLetter = async (letter: string, options: RequestInit = {}) => {
    const response = await FetchClient.get<Hero[]>(`http://localhost:4000/heroes?name_like=^${letter}`, options);
    return response;
}

export const deleteHero = async (id: number) => {
    await fetch(`http://localhost:4000/heroes/${id}`, {
        method: 'DELETE'
    });
}

export const updateHero = async (hero: any) => {
    await fetch(`http://localhost:4000/heroes/${hero.id}`, {
        method: 'PATCH',
        body: JSON.stringify(hero)
    });
}