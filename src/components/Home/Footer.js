import SocialIcon from '../../Elements/SocialIcon'
import SvgIcon, { githubIcon, linkedinIcon, stackoverflowIcon, twitterIcon } from '../svg-icon'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className="flex flex-col justify-center items-center pt-12 pb-6">
            <ul className="flex items-center">
                <SocialIcon href="https://www.twitter.com/abbas_kazmi066" label="Twitter">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" d={twitterIcon} title="Twitter logo" viewBox="0 0 32 32" />
                </SocialIcon>
                <SocialIcon href="https://www.github.com/kazmi066" label="GitHub">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" d={githubIcon} title="GitHub logo" viewBox="0 0 32 32" />
                </SocialIcon>
                <SocialIcon href="https://stackoverflow.com/users/14061728/kazmi066" label="Stackoverflow">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" d={stackoverflowIcon} title="Stackoverflow logo" viewBox="0 0 32 32" />
                </SocialIcon>
                <SocialIcon href="https://www.linkedin.com/in/kazmi066" label="LinkedIn">
                    <SvgIcon className="w-8 h-8 hover:fill-white transition-colors" d={linkedinIcon} title="LinkedIn logo" viewBox="0 0 32 32" />
                </SocialIcon>
            </ul>
            <p className="text-center text-sm pt-2">Awais Abbas © {currentYear}</p>
        </footer>
    )
}
