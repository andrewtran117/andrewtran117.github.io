import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-xl sm:text-xl rounded font-semibold md:p-0 text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;