import { getHeroesByName } from "@/api/heroes";
import type { Hero } from "@/types/hero";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  heroName: string;
};

type SelectHeroProps = {
  label: string;
  onSelect: (hero: Hero) => void;
};

const SelectHero = ({ label, onSelect }: SelectHeroProps) => {
  const [heroes, setHeroes] = useState<Hero[] | null>(null);
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmitHandler = async (data: Inputs) => {
    const response = await getHeroesByName(data.heroName);
    if (response.length === 1) {
        onSelect(response[0]);
      return;
    }
    setHeroes(response);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Select Your {label}</h2>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset className="mb-4">
          <label
            htmlFor="hero"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Search by name
          </label>
          <input
            type="text"
            id={label}
            {...register("heroName")}
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </fieldset>
        <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Search
        </button>
      </form>
      {heroes && (
        <ul className="mt-4">
          {heroes.map((hero) => (
            <li
              key={hero.id}
              onClick={() => onSelect(hero)}
              className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md"
            >
              <span>#{hero.id}</span> -{hero.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectHero;
