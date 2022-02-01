const links = [
  {
    href: "https://reactjs.org/docs/getting-started.html",
    label: "Gammel React-dokumentasjon",
  },
  { href: "https://beta.reactjs.org/", label: "Ny React-dokumentasjon" },
  {
    href: "https://tailwindcss.com/docs/installation",
    label: "Tailwind-dokumentasjon",
  },
];

const NavBar = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-800 dark:text-white">
        <ul className="flex items-center justify-between p-8">
          <ul className="flex items-center justify-between space-x-8">
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <a
                  href={href}
                  className="btn-blue p-4 no-underline hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
