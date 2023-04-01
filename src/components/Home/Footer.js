import SocialIcon from '../../Elements/SocialIcon';
import SvgIcon, { githubIcon, linkedinIcon, stackoverflowIcon, twitterIcon } from '../svg-icon';
import { useEffect, useRef } from 'react';
import { fadeRightObserver } from '../../utils/animations';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const footerIcons = [
        {
            icon: <SocialIcon href="https://www.twitter.com/abbas_kazmi066" label="Twitter">
                    <SvgIcon className="w-8 h-8 hover:opacity-70 fill-white transition-opacity" d={twitterIcon} title="Twitter logo" viewBox="0 0 32 32" />
                </SocialIcon>,
            delay: 200,
            ref: useRef(null)
        },
        {
            icon: <SocialIcon href="https://www.github.com/kazmi066" label="GitHub">
                    <SvgIcon className="w-8 h-8 hover:opacity-70 fill-white transition-opacity" d={githubIcon} title="GitHub logo" viewBox="0 0 32 32" />
                </SocialIcon>,
            delay: 300,
            ref: useRef(null)
        },
        {
            icon: <SocialIcon href="https://stackoverflow.com/users/14061728/kazmi066" label="Stackoverflow">
                    <SvgIcon className="w-8 h-8 hover:opacity-70 fill-white transition-opacity" d={stackoverflowIcon} title="Stackoverflow logo" viewBox="0 0 32 32" />
                </SocialIcon>,
            delay: 400,
            ref: useRef(null)
        },
        {
            icon: <SocialIcon href="https://www.linkedin.com/in/kazmi066" label="LinkedIn">
                    <SvgIcon className="w-8 h-8 hover:opacity-70 fill-white transition-opacity" d={linkedinIcon} title="LinkedIn logo" viewBox="0 0 32 32" />
                </SocialIcon>,
            delay: 500,
            ref: useRef(null)
        }
    ];

    useEffect(() => {
        footerIcons.map((icon) => {
            const observer = new IntersectionObserver(fadeRightObserver, {
                delay: icon.delay
            });

            observer.observe(icon.ref.current);

            return () => { observer.disconnect() };
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <footer className="flex flex-col justify-center items-center pt-12 pb-6">
            <ul className="flex items-center">
                {footerIcons.map((footerIcon, index) => (
                    <div key={index} ref={footerIcon.ref} className="opacity-0">
                        {footerIcon.icon}
                    </div>
                ))}
            </ul>
            <p className="text-center text-sm pt-2">Awais Abbas © {currentYear}</p>
        </footer>
    )
}
