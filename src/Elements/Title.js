export default function Title({ title = "" }) {
    return (
        <h2 className="relative sm:text-2xl text-xl font-bold capitalize">
            <div className="absolute -bottom-2 left-0 w-8 bg-red-200 border-[3.5px] border-orange-500">
            </div>
            {title}
        </h2>
    )
}
