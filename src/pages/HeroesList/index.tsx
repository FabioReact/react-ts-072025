import { useState } from "react";
import { useSearchParams } from "react-router";
import HeroCard from "@/components/HeroCard/HeroCard";
import { alphabet } from "./utils";
import Loading from "@/components/Loading/Loading";
import { useGetHeroesByLetterQuery } from "@/redux/services/heroes";

const HeroesList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialLetter = searchParams.get("letter") ?? "A";
  const [selectedLetter, setSelectedLetter] = useState<string>(initialLetter);
  const { data: heroes ,isLoading, isError, refetch } = useGetHeroesByLetterQuery(initialLetter);

  const handleLetterChange = (letter: string) => {
    setSelectedLetter(letter);
    setSearchParams({ letter });
    refetch();
  };

  const getActiveClassnames = (letter: string) => {
    return selectedLetter === letter
      ? "text-red-600 cursor-pointer"
      : "cursor-pointer";
  };

  return (
    <section>
      <h1 className="text-center">List of heroes</h1>
      <div className="flex justify-center gap-2 font-bold">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={getActiveClassnames(letter)}
            onClick={() => handleLetterChange(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {isError && (
          <p className="text-red-500 text-center">
            Error fetching heroes for letter {selectedLetter}
          </p>
        )}
        <Loading isLoading={isLoading}>
          {heroes?.length === 0 && (
            <p className="text-center">
              No heroes found for letter {selectedLetter}
            </p>
          )}
          {heroes?.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </Loading>
      </div>
    </section>
  );
};

export default HeroesList;
