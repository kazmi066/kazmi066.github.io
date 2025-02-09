import SocialButton from "../../Elements/SocialButton";
import Contact from "./Contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialButtons = [
    {
      title: "Github",
      url: "https://www.github.com/kazmi066",
    },
    {
      title: "Stackoverflow",
      url: "https://stackoverflow.com/users/14061728/kazmi066",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/kazmi066",
    },
    {
      title: "Dev.to",
      url: "https://www.dev.to/kazmi066",
    },
  ];

  return (
    <footer className="flex flex-col justify-center gap-4">
      <Contact />
      <ul className="flex items-center gap-3 flex-wrap">
        {socialButtons.map((socialButton, index) => (
          <SocialButton
            url={socialButton.url}
            label={socialButton.title}
            key={index}
          >
            {socialButton.title}
          </SocialButton>
        ))}
      </ul>
      <p className="text-sm py-4">Awais Abbas © {currentYear}</p>
    </footer>
  );
}
