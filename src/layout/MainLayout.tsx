import { NavLink, Outlet } from "react-router"

const getActiveClassnames = ({ isActive, isPending }: { isActive: boolean; isPending: boolean }) => {
    let baseClass = 'hover:text-red-500 transition-colors duration-300 ';
    baseClass += isActive ? 'text-red-600' : isPending ? 'text-gray-500' : '';
    return baseClass;
}

const MainLayout = () => {
  // const links = [
  //   { to: '/', label: 'Home' },
  //   { to: '/heroes', label: 'Heroes' },
  // ]
  return (
    <div>
        <nav>
            <ul className="flex justify-center gap-4">
                <li><NavLink to="/" className={getActiveClassnames}>Home</NavLink></li>
                <li><NavLink to="/heroes" className={getActiveClassnames}>Heroes</NavLink></li>
                {/* <li><NavLink to="/learning/lifecycle" className={getActiveClassnames}>Lifecycle</NavLink></li> */}
                {/* <li><NavLink to="/learning/counter" className={getActiveClassnames}>Counter</NavLink></li> */}
            </ul>
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default MainLayout