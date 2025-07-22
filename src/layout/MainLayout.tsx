import { useAuthContext } from "@/context/auth-context";
import { NavLink, Outlet } from "react-router";

enum LinkVisibility {
  PUBLIC = "PUBLIC",
  AUTHENTICATED = "AUTHENTICATED",
  NOT_AUTHENTICATED = "NOT_AUTHENTICATED",
}

const getActiveClassnames = ({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) => {
  let baseClass = "hover:text-red-500 transition-colors duration-300 ";
  baseClass += isActive ? "text-red-600" : isPending ? "text-gray-500" : "";
  return baseClass;
};

const MainLayout = () => {
  const { accessToken } = useAuthContext();

  const links: { to: string; label: string; visibility: LinkVisibility }[] = [
    { to: "/", label: "Home", visibility: LinkVisibility.PUBLIC },
    { to: "/heroes", label: "Heroes", visibility: LinkVisibility.PUBLIC },
    {
      to: "/profile",
      label: "Profile",
      visibility: LinkVisibility.AUTHENTICATED,
    },
    {
      to: "/register",
      label: "Register",
      visibility: LinkVisibility.NOT_AUTHENTICATED,
    },
    {
      to: "/login",
      label: "Login",
      visibility: LinkVisibility.NOT_AUTHENTICATED,
    },
    {
      to: "/logout",
      label: "Logout",
      visibility: LinkVisibility.AUTHENTICATED,
    },
  ];
  return (
    <div>
      <nav>
        <ul className="flex gap-4 justify-center">
          {links
            .filter((link) => {
              if (link.visibility === LinkVisibility.PUBLIC) return true;
              if (
                link.visibility === LinkVisibility.AUTHENTICATED &&
                accessToken
              )
                return true;
              if (
                link.visibility === LinkVisibility.NOT_AUTHENTICATED &&
                !accessToken
              )
                return true;
              return false;
            })
            .map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive, isPending }) =>
                    getActiveClassnames({ isActive, isPending })
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
