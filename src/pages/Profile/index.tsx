import { useAuthContext } from "@/context/auth-context";
import { useFavoriteContext } from "@/context/favorite-context";

const Profile = () => {
  const { accessToken, onLogout } = useAuthContext();
  const { favorites, removeFromFavorite } = useFavoriteContext();
  return (
    <section>
      <h1>Profile - {accessToken}</h1>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h2>Favorites</h2>
        <ul>
          {favorites.map((hero) => (
            <li key={hero.id}>
              <p>{hero.id} - {hero.name}</p>
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
