import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getHeroesByFilters } from "@/api/heroes";
import { useState } from "react";
import type { Hero } from "@/types/hero";
import HeroCard from "@/components/HeroCard";

const searchSchema = z.object({
  name: z.string(),
  intelligence: z.string().min(1),
  combat: z.string().min(1),
  durability: z.string().min(1),
  power: z.string().min(1),
  speed: z.string().min(1),
  strength: z.string().min(1),
  alignment: z.enum(["", "good", "bad", "neutral"]),
});

type SearchFormData = z.infer<typeof searchSchema>;

const stats = ['intelligence', 'combat', 'durability', 'power', 'speed', 'strength'] as const;

const SearchHero = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormData>({
    resolver: zodResolver(searchSchema) as any,
  });
  const [heroes, setHeroes] = useState<Hero[] | null>(null);

  const handleSearch = async (data: SearchFormData) => {
    // Implement search logic here based on data
    console.log(data);
    const response = await getHeroesByFilters(data);
    setHeroes(response);
  };

  return (
    <section className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Search Heroes</h1>
        <form onSubmit={handleSubmit(handleSearch)} className="space-y-6">
          <fieldset>
            <label htmlFor='hero-name' className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name:</label>
            <input type='text' id='hero-name' {...register('name')} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-white" />
            {errors.name && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>}
          </fieldset>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat) => (
              <fieldset key={stat}>
                <label htmlFor={stat} className='capitalize block text-sm font-medium text-gray-700 dark:text-gray-300'>
                  {stat}:
                </label>
                <input type='range' defaultValue={1} id={stat} {...register(stat)} className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer" />
              </fieldset>
            ))}
          </div>

          <fieldset>
            <label htmlFor="alignment-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alignment:</label>
            <select id="alignment-select" {...register("alignment")} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="">--Select an alignment--</option>
              <option value="good">Good</option>
              <option value="bad">Bad</option>
              <option value="neutral">Neutral</option>
            </select>
            {errors.alignment && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{errors.alignment.message}</p>}
          </fieldset>

          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
        </form>
      </div>

      {heroes && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {heroes.map((hero) => (<HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchHero;
