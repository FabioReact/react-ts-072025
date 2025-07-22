import { useAuthContext } from "@/context/auth-context"

const Profile = () => {
    const { accessToken, onLogout } = useAuthContext();
  return (
    <div>
        <h1>Profile - {accessToken}</h1>
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Profile