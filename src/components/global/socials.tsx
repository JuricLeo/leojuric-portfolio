import socialMedia from "@/data/socials.json";

interface SocialsProps {
    loading?: "eager" | "lazy";
}

export const Socials = ({ loading = "eager" }: SocialsProps) => {
    return socialMedia.map((social) => (
        <a key={social.url} rel="noopener noreferrer" href={social.url} target="_blank" aria-label={social.name} className="hover:-translate-y-0.5">
            <img className="size-6" src={social.src} alt={social.name} loading={loading} />
        </a>
    ));
};
