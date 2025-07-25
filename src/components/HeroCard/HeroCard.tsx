import { Link } from "react-router";
import type { Hero } from "@/types/hero";
import { useFavoriteContext } from "@/context/favorite-context";
import Star from "../Star";
import { useAuthContext } from "@/context/auth-context";


type Props = {
  hero: Hero;
};

const HeroCard = ({ hero }: Props) => {
  const { favorites, addToFavorite, removeFromFavorite } = useFavoriteContext();
  const { email } = useAuthContext();
  const isFavorite = favorites.some((favorite) => favorite.id === hero.id); // TODO: optimize this check
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="h-96 overflow-hidden relative">
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={hero.image.url}
          alt={`Illustration of ${hero.biography["full-name"] || hero.name}`}
        />
      </div>
      <div className="px-6 py-2">
        <div className="flex justify-between">
          <Link to={`/heroes/${hero.id}`} className="hover:underline">
            <p className="font-bold text-xl">
              {hero.name}{" "}
              <span className="text-gray-600 text-base">#{hero.id}</span>
            </p>
          </Link>
          {email && <Star onSelect={() => addToFavorite(hero)} filled={isFavorite} onUnSelect={() => removeFromFavorite(hero.id)} />}
        </div>
        <p className="text-lg mb-2">{hero.biography["full-name"]}</p>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
          voluptas iste laboriosam neque, similique qui.
        </p>
      </div>
      <div className="px-6 py-2">
        <span className="inline-block bg-blue-200 text-blue-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
          intelligence: {hero.powerstats.intelligence}
        </span>
        <span className="inline-block bg-red-200 text-red-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
          combat: {hero.powerstats.combat}
        </span>
        <span className="inline-block bg-green-200 text-green-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
          durability: {hero.powerstats.durability}
        </span>
        <span className="inline-block bg-purple-200 text-purple-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
          power: {hero.powerstats.power}
        </span>
        <span className="inline-block bg-amber-200 text-amber-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
          speed: {hero.powerstats.speed}
        </span>
        <span className="inline-block bg-teal-200 text-teal-700 px-3 py-1 text-xs my-1 mx-2 rounded-lg font-semibold">
          strength: {hero.powerstats.strength}
        </span>
      </div>
    </div>
  );
};

export default HeroCard;
