export default function Title({ title = "" }) {
    return (
        <h2 className="relative text-2xl font-bold capitalize">
            <div className="absolute -bottom-2 left-0 w-12 bg-red-200 border-4 border-black dark:border-white">
            </div>
            {title}
        </h2>
    )
}
