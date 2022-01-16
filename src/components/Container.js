export default function Container({ children }) {
    return (
        <div className="max-w-screen-md mx-auto lg:px-2 px-4">
            {children}
        </div>
    )
}
