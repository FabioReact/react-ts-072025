import { useState } from "react";
import SelectHero from "./SelectHero";
import type { Hero } from "@/types/hero";
import HeroCard from "@/components/HeroCard";
import Swords from "@/components/Icons/Swords";
import { fight } from "@/utils/fight";

const Battle = () => {
    const [hero, setHero] = useState<Hero | null>(null);
    const [challenger, setChallenger] = useState<Hero | null>(null);
    const [winner, setWinner] = useState<Hero | null>(null);

    const onSelectHero = (selectedHero: Hero) => {
        setHero(selectedHero);
    }

    const onSelectChallenger = (selectedChallenger: Hero) => {
        setChallenger(selectedChallenger);
    };

    const onFight = () => {
        const winner = fight(hero!, challenger!);
        setWinner(winner);
    };

    const onReset = () => {
        setHero(null);
        setChallenger(null);
        setWinner(null);
    };

  return (
    <section className="container mx-auto p-4 text-gray-900">
      <h1 className="text-4xl font-bold text-center mb-8">Battle</h1>
      <div className="flex justify-center gap-8">
        {!hero && <SelectHero label="Hero" onSelect={onSelectHero} />}
        {hero && <HeroCard hero={hero} />}
        {hero && challenger && <Swords onClick={onFight} /> }
        {!challenger && <SelectHero label="Challenger" onSelect={onSelectChallenger} />}
        {challenger && <HeroCard hero={challenger} />}
        {winner && (
          <div className="bg-green-100 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Winner</h2>
            <HeroCard hero={winner} />
            <button onClick={onReset}>Reset</button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Battle;
