import Container from '../Container';

export default function Header() {
    return (
        <header className="py-2">
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl">Awais.</h1>
                    <button className="px-3 py-1 bg-blue-400 rounded-md flex text-lg">
                        contact
                    </button>
                </div>
            </Container>
        </header>
    )
}
