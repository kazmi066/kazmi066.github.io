export default function SocialIcon({ children, href, label }) {
    return (
        <li className="p-4">
            <a
                href={href}
                className="flex text-gray-800 focus-outline hover:text-neon-blue dark:text-gray-400 dark:hover:text-green"
                label={label}
            >
                {children}
            </a>
        </li>
    )
}
