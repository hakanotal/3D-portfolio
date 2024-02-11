import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h1 className='text-xl font-bold blue-gradient_text drop-shadow'>
          Hakan Tugrul Otal
          </h1>
      </NavLink>
      <nav className='flex text-lg font-medium '>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white" }>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
