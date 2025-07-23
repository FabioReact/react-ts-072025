import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { getHeroesByFilters } from "@/api/heroes";
import { useState } from "react";
import type { Hero } from "@/types/hero";
import HeroCard from "@/components/HeroCard";

const searchSchema = z.object({
  name: z.string(),
  intelligence: z.coerce.number().min(0),
  combat: z.coerce.number().min(0),
  durability: z.coerce.number().min(0),
  power: z.coerce.number().min(0),
  speed: z.coerce.number().min(0),
  strength: z.coerce.number().min(0),
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
    const response = await getHeroesByFilters(data as any);
    setHeroes(response);
  };

  return (
    <section>
      <h1>Search Heroes</h1>
      <form onSubmit={handleSubmit(handleSearch)}>
        <fieldset>
          <label htmlFor='hero-name'>Name:</label>
          <input type='text' id='hero-name' {...register('name')} />
          {errors.name && <p>{errors.name.message}</p>}
        </fieldset>
        {/* z.enum(['intelligence', 'combat', 'durability', 'power', 'speed', 'strength']) */}
        {stats.map((stat) => (
          <fieldset key={stat}>
            <label htmlFor={stat} className='capitalize'>
              {stat}:
            </label>
            <input type='range' id={stat} {...register(stat)} />
          </fieldset>
        ))}
        <fieldset>
          <label htmlFor="alignment-select">Alignment:</label>
          <select id="alignment-select" {...register("alignment")}>
            <option value="">--Select an alignment--</option>
            <option value="good">Good</option>
            <option value="bad">Bad</option>
            <option value="neutral">Neutral</option>
          </select>
          {errors.alignment && <p>{errors.alignment.message}</p>}
        </fieldset>
        <button type="submit">Search</button>
      </form>
      {heroes && (
        <div>
          <h2>Search Results</h2>
          <div className="flex flex-wrap gap-4">
            {heroes.map((hero) => (<HeroCard key={hero.id} hero={hero} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default SearchHero;
