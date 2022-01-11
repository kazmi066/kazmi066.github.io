import { useEffect } from 'react';
import FrontLoader from '../../components/FrontLoader';
import Header from '../../components/Home/Header';
import { useApp } from '../../context';

export default function Home() {
    const { loading, setLoading } = useApp();

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500)
    }, [])

    return (
        <main id="home">
            <FrontLoader>
                <Header />
            </FrontLoader>
        </main>
    )
}
