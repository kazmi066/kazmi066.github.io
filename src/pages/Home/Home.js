import { useEffect } from 'react';
import FrontLoader from '../../components/FrontLoader';
import Header from '../../components/Home/Header';
import { useApp } from '../../context';
import Front from '../Front/Front';

export default function Home() {
    const { loading, setLoading } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return (
        <main id="home" className="dark:bg-black dark:text-white">
            <FrontLoader>
                <Header />
                <Front />
            </FrontLoader>
        </main>
    )
}
