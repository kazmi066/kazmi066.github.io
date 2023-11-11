import SocialButton from '../../Elements/SocialButton';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const socialButtons = [
        {
            title: "Github",
            url: "https://www.github.com/kazmi066"
        },
        {
            title: "Stackoverflow",
            url: "https://stackoverflow.com/users/14061728/kazmi066"
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/kazmi066"
        },
        {
            title: "Dev.to",
            url: "https://www.dev.to/kazmi066"
        }
    ];

    // useEffect(() => {
    //     footerIcons.map((icon) => {
    //         const observer = new IntersectionObserver(fadeRightObserver, {
    //             delay: icon.delay
    //         });

    //         observer.observe(icon.ref.current);

    //         return () => { observer.disconnect() };
    //     });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <footer className="flex flex-col justify-center py-6">
            <ul className="flex items-center gap-3">
                {socialButtons.map((socialButton, index) => (
                    <SocialButton url={socialButton.url} label={socialButton.title} key={index}>
                        {socialButton.title}
                    </SocialButton>
                ))}
            </ul>
            <p className="text-sm pt-10">Awais Abbas © {currentYear}</p>
        </footer>
    )
}
