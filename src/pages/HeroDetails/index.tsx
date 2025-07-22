import { getHeroById } from "@/api/heroes";
import HeroCard from "@/components/HeroCard";
import Loading from "@/components/Loading";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router";

const HeroDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: hero,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["hero", id],
    queryFn: () => getHeroById(id!),
  });

  return (
    <div className="text-center">
      <h1>Hero Details with ID: {id}</h1>
      <p>This is where the hero details will be displayed.</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer"
      >
        Go back
      </button>
      <Loading isLoading={isLoading}>
        {!isError && hero && <HeroCard hero={hero} />}
        {error && (
          <p className="text-red-500">
            Error fetching hero details: {error.message}
          </p>
        )}
        {!hero && <p className="text-red-500">Hero not found</p>}
      </Loading>
    </div>
  );
};

export default HeroDetails;
