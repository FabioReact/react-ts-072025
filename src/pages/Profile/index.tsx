import { onLogout } from "@/redux/features/auth";
import { removeFromFavorite } from "@/redux/features/favorites";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useSaveFavoritesMutation } from "@/redux/services/users";
import { useEffect, useMemo } from "react";
import { Bounce, toast } from "react-toastify";
import { useLocalStorage } from "usehooks-ts";
import { jwtDecode } from "jwt-decode";

const Profile = () => {
  // const { id: userId, accessToken } = useAppSelector(state => state.auth);
  const [accessToken] = useLocalStorage<string | null>('accessToken', null);

  const { sub: userId } = useMemo(() => jwtDecode<{ sub: number }>(accessToken!), [accessToken]);

  // const { id: userId } = jwtDecode<{ id: number }>(accessToken!);
  const favorites = useAppSelector(state => state.favorites.heroes);
  const dispatch = useAppDispatch();
  const [mutate, { isLoading, isError, isSuccess }] = useSaveFavoritesMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Favorites saved successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      }); 
    }
  }, [isSuccess])

  useEffect(() => {
    if (isError) {
      toast.error("Error saving favorites", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        pauseOnHover: true,
        theme: "light",
        transition: Bounce,
      });
    }
  }, [isError])
  
  


  const onClickSave = async () => {
    mutate({ userId: userId!, favorites: favorites.map(hero => hero.id) });
  };
  return (
    <section>
      <h1>Profile</h1>
      <p>User ID: {userId}</p>
      <p>Access Token: {accessToken}</p>
      <button onClick={()=> dispatch(onLogout())}>Logout</button>
      <div>
        <h2>Favorites</h2>
        <button onClick={onClickSave} disabled={isLoading}>
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
