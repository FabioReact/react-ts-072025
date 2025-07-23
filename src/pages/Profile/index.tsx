import { saveFavorites } from "@/api/userPreferences";
import { useAuthContext } from "@/context/auth-context";
import { useFavoriteContext } from "@/context/favorite-context";
import { useMutation } from "@tanstack/react-query";
import { Bounce, toast } from "react-toastify";

const Profile = () => {
  const { id: userId, accessToken, onLogout } = useAuthContext();
  const { favorites, removeFromFavorite } = useFavoriteContext();

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
      <button onClick={onLogout}>Logout</button>
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
              <button onClick={() => removeFromFavorite(hero.id)}>
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
