export default function Timeline({ date, dateString, work, children }) {
    return (
        <li className="flex flex-col py-2">
            <div className="flex items-center py-2">
                <span className="border-2 rounded-full border-purple-500 dark:border-green-600 w-4 h-4"></span>
                <time className="text-lg px-4" dateTime={date}>
                    {dateString}
                </time>
            </div>
            <div className="flex flex-col pl-8 text-gray-600 dark:text-gray-400 relative before:bg-purple-500 dark:before:bg-green-400 before:h-full before:w-[3px] before:absolute before:left-[0.43em]">
                <h4 className="text-white font-bold dark:text-white">
                    {work}
                </h4>
                {children}
            </div>
        </li>
    )
}
