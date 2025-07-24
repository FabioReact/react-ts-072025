import { saveFavorites } from "@/api/userPreferences";
import { onLogout } from "@/redux/features/auth";
import { removeFromFavorite } from "@/redux/features/favorites";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useMutation } from "@tanstack/react-query";
import { Bounce, toast } from "react-toastify";

const Profile = () => {
  const { id: userId, accessToken } = useAppSelector(state => state.auth);
  const favorites = useAppSelector(state => state.favorites.heroes);
  const dispatch = useAppDispatch();

  // (type, payload) -> Action

  const { isPending, mutate } = useMutation({
    mutationFn: () => saveFavorites(userId!, favorites.map(hero => hero.id)),
    onSuccess: () => {
      toast.success("Favorites saved successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      }); 
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      });
    },
  });

  const onClickSave = async () => {
    mutate();
  };
  return (
    <section>
      <h1>Profile - {accessToken}</h1>
      <button onClick={()=> dispatch(onLogout())}>Logout</button>
      <div>
        <h2>Favorites</h2>
        <button onClick={onClickSave} disabled={isPending}>
          Save to DB
        </button>
        <ul>
          {favorites.map((hero) => (
            <li key={hero.id}>
              <p>
                {hero.id} - {hero.name}
              </p>
              <button onClick={() => dispatch(removeFromFavorite(hero.id))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Profile;
