import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Writings from './pages/Writings/Writings';
import Header from './components/Header';
import FrontLoader from './components/FrontLoader';

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <FrontLoader>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/writings" element={<Writings />} />
                    <Route path="*" element={<div>Not found</div>} />
                </Routes>
            </FrontLoader>
        </BrowserRouter>
    )
}
