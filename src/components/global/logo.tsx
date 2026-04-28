interface LogoProps {
    lazyload?: boolean;
}

export const Logo = ({ lazyload = false }: LogoProps) => {
    return (
        <img
            src="/assets/images/logo.webp"
            alt="logo"
            width={50}
            height={50}
            className="h-[50px] w-[50px]"
            loading={lazyload ? "lazy" : "eager"}
        />
    );
};
