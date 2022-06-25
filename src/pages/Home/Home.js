import FrontLoader from '../../components/FrontLoader';
import Header from '../../components/Home/Header';
import Front from '../Front/Front';

export default function Home() {
    return (
        <main id="home" className="dark:bg-black dark:text-white">
            <FrontLoader>
                <Header />
                <Front />
            </FrontLoader>
        </main>
    )
}
