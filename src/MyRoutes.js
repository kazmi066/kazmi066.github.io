import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Writings from './pages/Writings/Writings';
import Header from './components/Header';
import { Spinner } from './components/spinner';
import { useLayoutEffect, useState } from 'react';

export default function MyRoutes() {
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    
    if (loading) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Spinner />
            </div>
        )
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/writings" element={<Writings />} />
                <Route path="*" element={<div>Not found</div>} />
            </Routes>
        </BrowserRouter>
    )
}
