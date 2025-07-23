import type { Hero } from "../types/hero";
import { FetchClient } from "./fetcher";

export const getHeroesByFirstLetter = async (
  letter: string,
  options: RequestInit = {},
) => {
  const response = await FetchClient.get<Hero[]>(
    `http://localhost:4000/heroes?name_like=^${letter}`,
    options,
  );
  return response;
};

export const getHeroesByName = async (
  name: string,
  options: RequestInit = {},
) => {
  const response = await FetchClient.get<Hero[]>(
    `http://localhost:4000/heroes?name_like=${name}`,
    options,
  );
  return response;
};

export const getHeroById = async (id: string, options: RequestInit = {}) => {
  const response = await FetchClient.get<Hero>(
    `http://localhost:4000/heroes/${id}`,
    options,
  );
  return response;
};

export const deleteHero = async (id: number) => {
  await fetch(`http://localhost:4000/heroes/${id}`, {
    method: "DELETE",
  });
};

export const updateHero = async (hero: Hero) => {
  await fetch(`http://localhost:4000/heroes/${hero.id}`, {
    method: "PATCH",
    body: JSON.stringify(hero),
  });
};

export const getHeroesByFilters = async (filters: {
  name: string;
  intelligence: string;
  combat: string;
  durability: string;
  power: string;
  speed: string;
  strength: string;
  alignment: string;
}): Promise<Hero[]> => {
  console.log({ filters });
  const { name, intelligence, combat, durability, power, speed, strength, alignment } = filters;
  const params = new URLSearchParams({
    name_like: name,
    'powerstats.intelligence_gte': intelligence,
    'powerstats.combat_gte': combat,
    'powerstats.durability_gte': durability,
    'powerstats.power_gte': power,
    'powerstats.speed_gte': speed,
    'powerstats.strength_gte': strength,
    'biography.alignment_like': alignment,
  });
  const response = await FetchClient.get<Hero[]>(`http://localhost:4000/heroes?${params}`);
  return response;
};