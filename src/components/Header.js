import { Link, useLocation } from 'react-router-dom';
import Container from './Container';
import { ReactComponent as BackIcon } from '../assets/backIcon.svg';
import { useEffect } from 'react';
import { useState } from 'react';
// import { useState } from 'react';

export default function Header() {
    const location = useLocation();
    const [backRoute, setBackRoute] = useState(false);

    useEffect(() => {
        switch(location.pathname) {
            case "/writings": {
                setBackRoute(true);
                break;
            }
            default: {
                setBackRoute(false);
            }
        }
    },[location]);
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
        <header className="py-4">
            <Container>
                <div className="flex items-center justify-between">
                    {
                        backRoute
                            ? <Link to="/">
                                <BackIcon className='w-10 h-10 animate-pulse' />
                            </Link>
                            : <div></div>
                    }
                    <div>
                        <Link
                            to="/writings"
                            className='font-semibold mr-6 border-b-[1px] border-b-white transition-all hover:border-b-transparent'>
                            Writings
                        </Link>
                        <a href="#contact" className="border border-white transition-colors text-white rounded-md px-4 py-1 hover:bg-black hover:text-white">Contact</a>
                    </div>
                    {/* <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleTheme} area-label={label}>
                        <SvgIcon className="w-5" d={icon} title={iconLabel} viewBox="0 0 512 512" />
                    </button> */}
                </div>
            </Container>
        </header>
    )
}
