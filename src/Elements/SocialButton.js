export default function SocialButton({ children, url, title }) {
    return (
        <a
            href={url}
            target="_blank"
			rel="noopener noreferrer"
            className="bg-[#1c1919] p-2 rounded-md border-[0.1px] border-[#565656]"
            label={title}>
            {children}
        </a>
    )
}
