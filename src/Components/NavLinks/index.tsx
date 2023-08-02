import { Link } from 'react-router-dom';
const NavLinks = () => {
  return (
    <>
      <section className="flex space-x-6 items-center">
        <Link
          className="px-2.5 py-1 text-xl hover:text-blue-500 transition-all ease-out duration-75"
          to="/"
        >
          home
        </Link>
        <Link
          className="px-2.5 py-1 text-xl hover:text-blue-500 transition-all ease-out duration-75"
          to="/about"
        >
          about
        </Link>
      </section>
    </>
  );
};

export default NavLinks;
