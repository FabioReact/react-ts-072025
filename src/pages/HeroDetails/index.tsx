import HeroCard from "@/components/HeroCard/HeroCard";
import Loading from "@/components/Loading/Loading";
import { useGetHeroByIdQuery } from "@/redux/services/heroes";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

const HeroDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const {
    data: hero,
    isLoading,
    isError,
  } = useGetHeroByIdQuery(id!);

  useEffect(() => {
    if (isError) {
      toast.error("Error fetching hero details");
    }
  }, [isError]);

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
        {!hero && <p className="text-red-500">Hero not found</p>}
      </Loading>
    </div>
  );
};

export default HeroDetails;
