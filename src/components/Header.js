import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as BackIcon } from "../assets/backIcon.svg";
import Container from "./Container";

export default function Header() {
  const location = useLocation();
  const [backRoute, setBackRoute] = useState(false);

  useEffect(() => {
    switch (location.pathname) {
      case "/writings": {
        setBackRoute(true);
        break;
      }
      default: {
        setBackRoute(false);
      }
    }
  }, [location]);
  // let theme = localStorage.getItem('theme');
  // const [moon, setMoon] = useState(theme === 'light' ? false : true);

  // const toggleTheme = () => {
  //     const root = document.documentElement;
  //     root.classList.toggle('dark');
  //     localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  //     setMoon(!moon);
  // }

  // const [label, icon, iconLabel] = moon === false ? ['Light mode', sunIcon, 'Sun icon'] : ['Dark mode', moonIcon, 'Moon icon']

  return (
    <header className="py-6 mb-4">
      <Container>
        <div className="flex items-center justify-between">
          {backRoute ? (
            <Link to="/">
              <BackIcon className="w-8 h-8 animate-pulse" />
            </Link>
          ) : (
            <div></div>
          )}
          <div>
            <a
              href="#contact"
              className="text-light transition-colors font-medium mr-4 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
