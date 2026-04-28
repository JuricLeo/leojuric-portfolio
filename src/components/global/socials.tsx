import {
    GithubLogoIcon,
    LinkedinLogoIcon,
    YoutubeLogoIcon,
} from "@phosphor-icons/react";

const socialMedia = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/leopold-jurić/",
        icon: LinkedinLogoIcon,
    },
    {
        name: "Youtube",
        url: "https://www.youtube.com/@LeopoldJuric",
        icon: YoutubeLogoIcon,
    },
    {
        name: "GitHub",
        url: "https://github.com/JuricLeo",
        icon: GithubLogoIcon,
    },
];

export const Socials = () => {
    return socialMedia.map((social) => {
        const Icon = social.icon;

        return (
            <a
                rel="noopener noreferrer"
                href={social.url}
                target="_blank"
                aria-label={social.name}
                className="hover:-translate-y-0.5"
            >
                <Icon className="size-6" />
            </a>
        );
    });
};
